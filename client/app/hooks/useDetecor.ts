"use client";

import { useState, useCallback, useRef, useEffect } from "react";

const API = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api";

export type MediaType = "video" | "image" | "audio";
export type CaseStatus = "processing" | "authentic" | "manipulated" | "inconclusive";

export interface AnalysisResult {
  id: string;
  case_id: string;
  model_name: string;
  confidence: number;
  label: "AUTHENTIC" | "SYNTHETIC" | string;
  details?: Record<string, unknown>;
}

export interface DetectionCase {
  id: string;
  caseId: string;
  title: string;
  mediaType: MediaType;
  status: CaseStatus;
  riskScore: number;
  syntheticLikelihood: number;
  fileName?: string;
  fileUrl?: string;
  fileSize?: number;
  createdAt?: string;
  analysisResults: AnalysisResult[];
}

export type UploadState =
  | { phase: "idle" }
  | { phase: "uploading"; progress: number }
  | { phase: "analysing"; caseId: string; dots: number }
  | { phase: "done"; result: DetectionCase }
  | { phase: "error"; message: string };

async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API}${path}`, init);
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body?.detail ?? `API ${res.status}`);
  }
  return res.json();
}

function guessMediaType(file: File): MediaType {
  if (file.type.startsWith("video/")) return "video";
  if (file.type.startsWith("audio/")) return "audio";
  return "image";
}

export function useDetector() {
  const [state, setState] = useState<UploadState>({ phase: "idle" });
  const [cases, setCases] = useState<DetectionCase[]>([]);
  const pollRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const fetchCases = useCallback(async () => {
    try {
      const data = await apiFetch<{ cases: DetectionCase[] }>("/cases?page_size=50");
      setCases(data.cases ?? []);
    } catch {
      /* silently ignore */
    }
  }, []);

  useEffect(() => {
    fetchCases();
  }, [fetchCases]);

  const stopPoll = useCallback(() => {
    if (pollRef.current) {
      clearTimeout(pollRef.current);
      pollRef.current = null;
    }
  }, []);

  const pollCase = useCallback(
    (id: string) => {
      pollRef.current = setTimeout(async () => {
        try {
          const c = await apiFetch<DetectionCase>(`/cases/${id}`);
          if (c.status === "processing") {
            setState((prev) =>
              prev.phase === "analysing"
                ? { ...prev, dots: (prev.dots + 1) % 4 }
                : prev
            );
            pollCase(id);
          } else {
            stopPoll();
            setState({ phase: "done", result: c });
            fetchCases();
          }
        } catch (err: unknown) {
          stopPoll();
          setState({
            phase: "error",
            message: err instanceof Error ? err.message : "Poll failed",
          });
        }
      }, 2000);
    },
    [stopPoll, fetchCases]
  );

  const analyse = useCallback(
    async (file: File) => {
      stopPoll();
      setState({ phase: "uploading", progress: 0 });

      const formData = new FormData();
      formData.append("title", file.name.replace(/\.[^.]+$/, ""));
      formData.append("media_type", guessMediaType(file));
      formData.append("file", file);

      try {
        setState({ phase: "uploading", progress: 40 });
        const c = await apiFetch<DetectionCase>("/cases", {
          method: "POST",
          body: formData,
        });
        setState({ phase: "uploading", progress: 100 });
        await new Promise((r) => setTimeout(r, 300));
        setState({ phase: "analysing", caseId: c.caseId, dots: 0 });
        pollCase(c.id);
      } catch (err: unknown) {
        setState({
          phase: "error",
          message: err instanceof Error ? err.message : "Upload failed",
        });
      }
    },
    [stopPoll, pollCase]
  );

  const reset = useCallback(() => {
    stopPoll();
    setState({ phase: "idle" });
  }, [stopPoll]);

  return { state, cases, analyse, reset, fetchCases };
}