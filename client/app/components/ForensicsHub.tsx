"use client";

import { useState, useCallback } from "react";
import { useCases } from "@/app/hooks/use-cases";
import { useDetector } from "@/app/hooks/useDetecor";
import { ResultBarChart } from "@/app/components/ResultBarChart";
import { Sidebar, SidebarProvider } from "@/app/components/ui/sidebar";
import { MobileNav } from "@/app/components/Navigation";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Skeleton } from "@/app/components/ui/skeleton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  UploadCloud, FileAudio, FileVideo, Image as ImageIcon,
  Loader2, CheckCircle2, AlertTriangle, ChevronRight,
  Lock, Activity, Fingerprint, ArrowRight, Shield,
  Cpu,
} from "lucide-react";
import { cn } from "@/app/lib/utils";

/* ─────────────────────────────────────────────────────────────────────────────
   Helpers
───────────────────────────────────────────────────────────────────────────── */
const CASE_LIMIT = 6;

function statusMeta(status: string, risk: number) {
  if (status === "processing") return { label: "ANALYZING", cls: "text-sky-400 bg-sky-500/10 border-sky-500/20" };
  if (status === "authentic")  return { label: `${risk.toFixed(0)}% RISK · AUTHENTIC`, cls: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" };
  if (status === "manipulated") return { label: `${risk.toFixed(0)}% RISK · DEEPFAKE`, cls: "text-red-400 bg-red-500/10 border-red-500/20" };
  return { label: `${risk.toFixed(0)}% RISK · INCONCLUSIVE`, cls: "text-amber-400 bg-amber-500/10 border-amber-500/20" };
}

/* ─────────────────────────────────────────────────────────────────────────────
   Stat strip
───────────────────────────────────────────────────────────────────────────── */
function StatPill({ value, label, accent }: { value: number | string; label: string; accent: string }) {
  return (
    <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
      <span className={cn("text-xl font-black font-mono tabular-nums", accent)}>{value}</span>
      <span className="text-xs text-slate-500 leading-tight max-w-[60px]">{label}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Modality pill selector
───────────────────────────────────────────────────────────────────────────── */
const TYPES = [
  { id: "image", icon: ImageIcon, label: "Image" },
  { id: "video", icon: FileVideo, label: "Video" },
  { id: "audio", icon: FileAudio, label: "Audio" },
] as const;

/* ─────────────────────────────────────────────────────────────────────────────
   Main page
───────────────────────────────────────────────────────────────────────────── */
export default function ForensicsHub() {
  const router = useRouter();
  const { data: casesData, isLoading } = useCases();
  const { state, cases: liveCases, analyse, reset } = useDetector();

  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const allCases = liveCases.length > 0 ? liveCases : (casesData ?? []);
  const visibleCases = allCases.slice(0, CASE_LIMIT);
  const hasMore = allCases.length > CASE_LIMIT;

  const isActive = state.phase !== "idle";

  /* drag */
  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else setDragActive(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file && !isActive) { setSelectedFile(file); analyse(file); }
  }, [analyse, isActive]);

  const handleFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) { setSelectedFile(file); analyse(file); }
  }, [analyse]);

  const handleReset = () => { reset(); setSelectedFile(null); };

  /* stats */
  const authentic  = allCases.filter(c => c.status === "authentic").length;
  const deepfakes  = allCases.filter(c => c.status === "manipulated").length;
  const processing = allCases.filter(c => c.status === "processing").length;

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-slate-950" style={{ backgroundImage: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99,102,241,0.12), transparent)" }}>
        <Sidebar />
        <MobileNav />

        <main className="lg:ml-64 px-4 lg:px-8 pt-20 lg:pt-10 pb-16 space-y-10">

          {/* ── Page header ────────────────────────────────────────────────── */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-2">
            <div>
              {/* eyebrow */}
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-medium tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                  SYSTEM ACTIVE
                </span>
              </div>
              <h1 className="text-4xl font-display font-black text-white tracking-tight mb-2">
                Forensics Hub
              </h1>
              <p className="text-slate-400 max-w-lg text-sm leading-relaxed">
                Multi-modal deepfake detection powered by ViViT ensemble · AudioFakeNet · EfficientNet-V2
              </p>
            </div>

            {/* stat pills */}
            <div className="flex flex-wrap gap-2">
              <StatPill value={allCases.length} label="Total Cases" accent="text-white" />
              <StatPill value={authentic}  label="Authentic" accent="text-emerald-400" />
              <StatPill value={deepfakes}  label="Deepfakes" accent="text-red-400" />
              {processing > 0 && <StatPill value={processing} label="Processing" accent="text-sky-400" />}
            </div>
          </div>

          {/* ── Upload + Results row ────────────────────────────────────────── */}
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-5">

            {/* DROP ZONE — 2 cols */}
            <div className="xl:col-span-2 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-slate-500 tracking-widest uppercase">01 · Upload Evidence</span>
                <div className="flex-1 h-px bg-slate-800" />
              </div>

              {/* Zone */}
              <div
                onClick={!isActive ? () => document.getElementById("hub-file-input")?.click() : undefined}
                onDragEnter={handleDrag} onDragLeave={handleDrag}
                onDragOver={handleDrag}  onDrop={!isActive ? handleDrop : undefined}
                className={cn(
                  "relative flex-1 min-h-[240px] rounded-2xl border-2 border-dashed flex flex-col items-center justify-center text-center p-8 transition-all duration-300",
                  dragActive
                    ? "border-indigo-400 bg-indigo-500/10 scale-[1.02] shadow-[0_0_40px_rgba(99,102,241,0.15)]"
                    : isActive
                    ? "border-slate-700 bg-slate-900/20 cursor-default"
                    : "border-slate-700 bg-slate-900/30 hover:border-slate-500 hover:bg-slate-900/50 cursor-pointer"
                )}
              >
                <input id="hub-file-input" type="file" accept="video/*,image/*,audio/*"
                  className="hidden" onChange={handleFile} disabled={isActive} />

                {/* IDLE */}
                {state.phase === "idle" && (
                  <div className="space-y-3">
                    <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mx-auto mb-2">
                      <UploadCloud className="w-7 h-7 text-slate-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm mb-1">Drop evidence file here</p>
                      <p className="text-slate-500 text-xs">video · image · audio</p>
                    </div>
                    <div className="flex gap-2 justify-center pt-1">
                      {TYPES.map(({ id, icon: Icon, label }) => (
                        <span key={id} className="flex items-center gap-1 px-2 py-1 rounded-md bg-slate-800 text-slate-500 text-xs font-mono">
                          <Icon className="w-3 h-3" />{label}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* UPLOADING */}
                {state.phase === "uploading" && (
                  <div className="w-full space-y-5 px-2">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center mx-auto">
                      <Loader2 className="w-6 h-6 text-indigo-400 animate-spin" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-mono truncate">{selectedFile?.name}</p>
                      <p className="text-slate-500 text-xs mt-0.5">Uploading & encrypting…</p>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-1 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-full transition-all duration-700"
                        style={{ width: `${state.progress}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* ANALYSING */}
                {state.phase === "analysing" && (
                  <div className="space-y-4">
                    <div className="relative w-14 h-14 mx-auto">
                      <div className="absolute inset-0 rounded-xl bg-indigo-500/10 border border-indigo-500/30" />
                      <div className="absolute inset-0 rounded-xl border border-indigo-400/30 animate-ping" />
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Cpu className="w-6 h-6 text-indigo-400" />
                      </div>
                    </div>
                    <div>
                      <p className="text-white font-mono text-xs">{state.caseId}</p>
                      <p className="text-indigo-400 text-xs mt-1 animate-pulse">
                        Running inference{".".repeat(state.dots + 1)}
                      </p>
                    </div>
                    <div className="flex gap-1 justify-center">
                      {[0,1,2].map(i => (
                        <div key={i} className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce"
                          style={{ animationDelay: `${i * 150}ms` }} />
                      ))}
                    </div>
                  </div>
                )}

                {/* DONE */}
                {state.phase === "done" && (
                  <div className="space-y-3">
                    <div className={cn(
                      "w-14 h-14 rounded-xl flex items-center justify-center mx-auto",
                      state.result.riskScore >= 70 ? "bg-red-500/10 border border-red-500/30" :
                      state.result.riskScore <= 35 ? "bg-emerald-500/10 border border-emerald-500/30" :
                      "bg-amber-500/10 border border-amber-500/30"
                    )}>
                      <CheckCircle2 className={cn("w-6 h-6",
                        state.result.riskScore >= 70 ? "text-red-400" :
                        state.result.riskScore <= 35 ? "text-emerald-400" : "text-amber-400"
                      )} />
                    </div>
                    <p className="text-white text-xs font-mono">{state.result.fileName}</p>
                    <p className="text-slate-500 text-xs">{state.result.caseId}</p>
                  </div>
                )}

                {/* ERROR */}
                {state.phase === "error" && (
                  <div className="space-y-3">
                    <div className="w-14 h-14 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center mx-auto">
                      <AlertTriangle className="w-6 h-6 text-red-400" />
                    </div>
                    <p className="text-red-400 font-mono text-xs">{state.message}</p>
                  </div>
                )}
              </div>

              {/* Action buttons */}
              {state.phase === "done" && (
                <div className="flex gap-2">
                  <Button onClick={handleReset} variant="outline"
                    className="flex-1 border-slate-700 text-slate-300 hover:bg-slate-800 text-xs h-9">
                    <UploadCloud className="w-3.5 h-3.5 mr-1.5" /> New Analysis
                  </Button>
                  <Link href={`/cases/${state.result.caseId}`} className="flex-1">
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-500 text-xs h-9">
                      Full Report <ChevronRight className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  </Link>
                </div>
              )}
              {state.phase === "error" && (
                <Button onClick={handleReset} variant="outline"
                  className="border-slate-700 text-slate-300 hover:bg-slate-800 text-xs h-9">
                  Try Again
                </Button>
              )}
            </div>

            {/* RESULTS PANEL — 3 cols */}
            <div className="xl:col-span-3 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-slate-500 tracking-widest uppercase">02 · Analysis Results</span>
                <div className="flex-1 h-px bg-slate-800" />
                {state.phase === "done" && (
                  <span className={cn("text-xs font-mono px-2 py-0.5 rounded-full border",
                    statusMeta(state.result.status, state.result.riskScore).cls
                  )}>
                    {state.result.status.toUpperCase()}
                  </span>
                )}
              </div>

              <div className={cn(
                "flex-1 rounded-2xl border p-6 min-h-[240px] flex flex-col justify-center transition-all",
                state.phase === "done" && state.result.riskScore >= 70
                  ? "bg-red-950/20 border-red-900/40"
                  : state.phase === "done" && state.result.riskScore <= 35
                  ? "bg-emerald-950/20 border-emerald-900/40"
                  : "bg-slate-900/40 border-slate-800"
              )}>
                {state.phase === "idle" && (
                  <div className="text-center space-y-3">
                    <Shield className="w-10 h-10 text-slate-700 mx-auto" />
                    <p className="text-slate-600 font-mono text-xs tracking-wider">
                      AWAITING EVIDENCE UPLOAD
                    </p>
                  </div>
                )}

                {(state.phase === "uploading" || state.phase === "analysing") && (
                  <div className="space-y-5">
                    {/* skeleton bars */}
                    {[
                      { w: "75%", label: "Risk Score" },
                      { w: "60%", label: "Synthetic Likelihood" },
                      { w: "55%", label: "Model 1" },
                      { w: "70%", label: "Model 2" },
                      { w: "48%", label: "Model 3" },
                    ].map((bar, i) => (
                      <div key={i} className="space-y-1.5">
                        <div className="flex justify-between text-xs font-mono text-slate-700">
                          <span>{bar.label}</span>
                          <span>—</span>
                        </div>
                        <div className="h-2 bg-slate-800/80 rounded-full overflow-hidden">
                          <div className="h-full bg-slate-700 rounded-full animate-pulse" style={{ width: bar.w }} />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {state.phase === "done" && (
                  <ResultBarChart
                    riskScore={state.result.riskScore}
                    syntheticLikelihood={state.result.syntheticLikelihood}
                    analysisResults={state.result.analysisResults}
                  />
                )}

                {state.phase === "error" && (
                  <div className="text-center space-y-2">
                    <AlertTriangle className="w-8 h-8 text-red-400/60 mx-auto" />
                    <p className="text-slate-600 font-mono text-xs">Analysis failed</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ── Capability cards ────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: Activity, color: "indigo",
                title: "Real-time Analysis",
                desc: "ViViT ensemble + AudioFakeNet process frames, audio, and pixel data simultaneously.",
                border: "hover:border-indigo-500/40",
              },
              {
                icon: Lock, color: "purple",
                title: "Cryptographic Proof",
                desc: "Immutable blockchain-backed signing ensures chain of custody from capture to courtroom.",
                border: "hover:border-purple-500/40",
              },
              {
                icon: Fingerprint, color: "emerald",
                title: "Identity Protection",
                desc: "Proactive monitoring of executive likenesses to detect unauthorized synthetic media.",
                border: "hover:border-emerald-500/40",
              },
            ].map(({ icon: Icon, color, title, desc, border }) => (
              <div key={title}
                className={cn(
                  "p-6 rounded-2xl bg-slate-900/40 border border-slate-800 transition-colors group",
                  border
                )}
              >
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center mb-4 border transition-colors",
                  `bg-${color}-500/10 border-${color}-500/20 group-hover:bg-${color}-500/20`
                )}>
                  <Icon className={cn("w-5 h-5", `text-${color}-400`)} />
                </div>
                <h3 className="text-white font-bold text-sm mb-2 font-display">{title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* ── Case History ─────────────────────────────────────────────────── */}
          <div className="space-y-4">
            {/* header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <h2 className="text-lg font-display font-bold text-white">Case History</h2>
                {allCases.length > 0 && (
                  <span className="text-xs font-mono text-slate-500 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded-full">
                    {allCases.length} total
                  </span>
                )}
              </div>
              {hasMore && (
                <Link href="/cases">
                  <Button variant="ghost" size="sm"
                    className="text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10 text-xs font-mono gap-1">
                    View all {allCases.length} cases <ArrowRight className="w-3 h-3" />
                  </Button>
                </Link>
              )}
            </div>

            {/* grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
              {isLoading && liveCases.length === 0
                ? [1,2,3].map(i => <Skeleton key={i} className="h-36 bg-slate-900/60 rounded-2xl" />)
                : visibleCases.map((c, idx) => {
                    const { label, cls } = statusMeta(c.status, c.riskScore ?? 0);
                    const MediaIcon = c.mediaType === "audio" ? FileAudio : c.mediaType === "video" ? FileVideo : ImageIcon;
                    return (
                      <Link key={c.id} href={`/cases/${c.caseId}`}>
                        <div className={cn(
                          "group relative p-5 rounded-2xl bg-slate-900/40 border border-slate-800",
                          "hover:bg-slate-900/70 hover:border-slate-700 transition-all duration-200",
                          "hover:shadow-[0_0_20px_rgba(0,0,0,0.4)]",
                        )}>
                          {/* top row */}
                          <div className="flex items-start justify-between mb-3">
                            <div className="min-w-0">
                              <p className="text-indigo-400 font-mono text-[10px] tracking-wider mb-0.5">{c.caseId}</p>
                              <p className="text-white font-semibold text-sm truncate group-hover:text-indigo-200 transition-colors">
                                {c.title}
                              </p>
                            </div>
                            <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 ml-3 group-hover:bg-slate-700 transition-colors">
                              <MediaIcon className="w-4 h-4 text-slate-400" />
                            </div>
                          </div>

                          {/* mini bar — only when done */}
                          {c.status !== "processing" && typeof c.riskScore === "number" && (
                            <div className="mb-3">
                              <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                                <div
                                  className={cn("h-full rounded-full",
                                    c.riskScore >= 70 ? "bg-red-500" :
                                    c.riskScore <= 35 ? "bg-emerald-500" : "bg-amber-500"
                                  )}
                                  style={{ width: `${c.riskScore}%` }}
                                />
                              </div>
                            </div>
                          )}

                          {/* processing bar */}
                          {c.status === "processing" && (
                            <div className="mb-3">
                              <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full w-1/2 bg-sky-500 rounded-full animate-pulse" />
                              </div>
                            </div>
                          )}

                          {/* footer */}
                          <div className="flex items-center justify-between">
                            <p className="text-slate-600 font-mono text-[10px]">
                              {c.createdAt ? new Date(c.createdAt).toLocaleDateString("en-GB", {
                                day: "2-digit", month: "short", year: "numeric"
                              }) : "—"}
                            </p>
                            <span className={cn("text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border", cls)}>
                              {label}
                            </span>
                          </div>
                        </div>
                      </Link>
                    );
                  })
              }
            </div>

            {/* View all footer link */}
            {hasMore && (
              <Link href="/cases" className="block">
                <div className="flex items-center justify-center gap-2 py-4 rounded-2xl border border-dashed border-slate-800 hover:border-slate-700 hover:bg-slate-900/30 transition-all text-slate-500 hover:text-slate-400 text-xs font-mono group">
                  View all {allCases.length} cases
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            )}
          </div>

        </main>
      </div>
    </SidebarProvider>
  );
}
