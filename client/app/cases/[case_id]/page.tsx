"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Sidebar, SidebarProvider } from "@/app/components/ui/sidebar";
import { MobileNav } from "@/app/components/Navigation";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { ResultBarChart } from "@/app/components/ResultBarChart";
import { Skeleton } from "@/app/components/ui/skeleton";
import {
  ArrowLeft,
  FileVideo,
  FileAudio,
  Image as ImageIcon,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  Loader2,
} from "lucide-react";
import { cn } from "@/app/lib/utils";
import type { DetectionCase, CaseStatus } from "@/app/hooks/useDetecor";

const API = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api";

async function fetchCase(id: string): Promise<DetectionCase> {
  const res = await fetch(`${API}/cases/${id}`);
  if (!res.ok) throw new Error(`Case not found (${res.status})`);
  return res.json();
}

function VerdictBadge({ status, riskScore }: { status: CaseStatus; riskScore: number }) {
  if (status === "processing") {
    return (
      <div className="flex items-center gap-2 text-blue-400 font-mono text-sm">
        <Loader2 className="w-4 h-4 animate-spin" /> ANALYSING…
      </div>
    );
  }
  if (status === "authentic") {
    return (
      <div className="flex items-center gap-2 text-emerald-400">
        <CheckCircle2 className="w-5 h-5" />
        <span className="font-mono font-bold">AUTHENTIC — {riskScore.toFixed(0)}% risk</span>
      </div>
    );
  }
  if (status === "manipulated") {
    return (
      <div className="flex items-center gap-2 text-red-400">
        <AlertTriangle className="w-5 h-5" />
        <span className="font-mono font-bold">DEEPFAKE DETECTED — {riskScore.toFixed(0)}% risk</span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-2 text-amber-400">
      <HelpCircle className="w-5 h-5" />
      <span className="font-mono font-bold">INCONCLUSIVE — {riskScore.toFixed(0)}% risk</span>
    </div>
  );
}

export default function CaseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const caseId = params?.caseId as string;

  const [data, setData] = useState<DetectionCase | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [polling, setPolling] = useState(false);

  useEffect(() => {
    if (!caseId) return;
    let timer: ReturnType<typeof setTimeout>;

    const load = async () => {
      try {
        const c = await fetchCase(caseId);
        setData(c);
        if (c.status === "processing") {
          setPolling(true);
          timer = setTimeout(load, 2000);
        } else {
          setPolling(false);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load case");
      }
    };

    load();
    return () => clearTimeout(timer);
  }, [caseId]);

  const MediaIcon =
    data?.mediaType === "audio" ? FileAudio :
    data?.mediaType === "video" ? FileVideo : ImageIcon;

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-slate-950 grid-bg">
        <Sidebar />
        <MobileNav />

        <main className="lg:ml-64 p-4 lg:p-8 pt-20 lg:pt-8 space-y-8">

          {/* Back */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.back()}
            className="text-slate-400 hover:text-white -ml-2"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Back
          </Button>

          {/* Error */}
          {error && (
            <div className="flex items-center gap-3 text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl p-4 font-mono text-sm">
              <AlertTriangle className="w-5 h-5 shrink-0" />
              {error}
            </div>
          )}

          {/* Loading skeleton */}
          {!data && !error && (
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="xl:col-span-1 space-y-4">
                <Skeleton className="h-48 bg-slate-900 rounded-2xl" />
                <Skeleton className="h-24 bg-slate-900 rounded-2xl" />
              </div>
              <div className="xl:col-span-2">
                <Skeleton className="h-72 bg-slate-900 rounded-2xl" />
              </div>
            </div>
          )}

          {data && (
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

              {/* LEFT — Case metadata */}
              <div className="xl:col-span-1 space-y-4">

                {/* Identity card */}
                <Card className="bg-slate-900/50 border-slate-800 p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                      <MediaIcon className="w-5 h-5 text-slate-400" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-indigo-400">{data.caseId}</p>
                      <h1 className="text-white font-bold font-display leading-tight">{data.title}</h1>
                    </div>
                  </div>

                  <VerdictBadge status={data.status} riskScore={data.riskScore} />

                  <div className="space-y-2 text-xs font-mono text-slate-500 border-t border-slate-800 pt-4">
                    <div className="flex justify-between">
                      <span>Modality</span>
                      <span className="text-slate-300 uppercase">{data.mediaType}</span>
                    </div>
                    {data.fileSize && (
                      <div className="flex justify-between">
                        <span>File Size</span>
                        <span className="text-slate-300">{(data.fileSize / 1e6).toFixed(1)} MB</span>
                      </div>
                    )}
                    {data.createdAt && (
                      <div className="flex justify-between">
                        <span>Submitted</span>
                        <span className="text-slate-300">
                          {new Date(data.createdAt).toLocaleString()}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Models run</span>
                      <span className="text-slate-300">{data.analysisResults.length}</span>
                    </div>
                  </div>
                </Card>

                {/* Polling indicator */}
                {polling && (
                  <div className="flex items-center gap-2 text-blue-400 text-xs font-mono bg-blue-500/10 border border-blue-500/20 rounded-xl px-4 py-3">
                    <Loader2 className="w-3 h-3 animate-spin" />
                    Polling for results…
                  </div>
                )}
              </div>

              {/* RIGHT — Results / Bar Chart */}
              <div className="xl:col-span-2">
                <Card className="bg-slate-900/50 border-slate-800 p-6">
                  <h2 className="text-sm font-mono text-slate-400 uppercase tracking-widest mb-6">
                    Analysis Report
                  </h2>

                  {data.status === "processing" ? (
                    /* Skeleton bars while analysing */
                    <div className="space-y-4">
                      {[80, 60, 55, 70, 45].map((w, i) => (
                        <div key={i} className="space-y-1.5">
                          <div className="flex justify-between">
                            <div className="h-3 bg-slate-800 rounded animate-pulse" style={{ width: `${w}%` }} />
                            <div className="h-3 w-10 bg-slate-800 rounded animate-pulse" />
                          </div>
                          <div className="h-2 bg-slate-800 rounded-full animate-pulse" />
                        </div>
                      ))}
                      <p className="text-center text-slate-600 font-mono text-xs pt-4 animate-pulse">
                        Running models…
                      </p>
                    </div>
                  ) : (
                    <ResultBarChart
                      riskScore={data.riskScore}
                      syntheticLikelihood={data.syntheticLikelihood}
                      analysisResults={data.analysisResults}
                    />
                  )}
                </Card>
              </div>
            </div>
          )}
        </main>
      </div>
    </SidebarProvider>
  );
}
