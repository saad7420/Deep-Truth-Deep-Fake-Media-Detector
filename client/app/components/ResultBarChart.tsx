"use client";

import { useEffect, useState } from "react";
import { cn } from "@/app/lib/utils";

/* ── Single animated bar ─────────────────────────────────────────────────── */
interface BarProps {
  label: string;
  value: number;
  barClass?: string;
  delay?: number;
  showPercent?: boolean;
  size?: "sm" | "md";
}

export function ConfidenceBar({
  label,
  value,
  barClass = "bg-indigo-500",
  delay = 0,
  showPercent = true,
  size = "md",
}: BarProps) {
  const [width, setWidth] = useState(0);
  const clamped = Math.max(0, Math.min(100, value));

  useEffect(() => {
    const t = setTimeout(() => setWidth(clamped), delay + 60);
    return () => clearTimeout(t);
  }, [clamped, delay]);

  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className={cn(
          "font-mono text-slate-400 truncate",
          size === "sm" ? "text-[10px]" : "text-xs"
        )}>
          {label}
        </span>
        {showPercent && (
          <span className={cn(
            "font-mono font-bold text-white tabular-nums ml-3 shrink-0",
            size === "sm" ? "text-[10px]" : "text-xs"
          )}>
            {clamped.toFixed(1)}%
          </span>
        )}
      </div>
      <div className={cn(
        "w-full bg-slate-800/80 rounded-full overflow-hidden",
        size === "sm" ? "h-1" : "h-1.5"
      )}>
        <div
          className={cn("h-full rounded-full transition-all duration-700 ease-out", barClass)}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

/* ── Main chart ──────────────────────────────────────────────────────────── */
interface ResultBarChartProps {
  riskScore: number;
  syntheticLikelihood: number;
  analysisResults: Array<{
    model_name: string;
    confidence: number;
    label: string;
  }>;
}

export function ResultBarChart({ riskScore, syntheticLikelihood, analysisResults }: ResultBarChartProps) {
  const clamped = Math.max(0, Math.min(100, riskScore));

  const verdict =
    clamped >= 70 ? "DEEPFAKE DETECTED" :
    clamped <= 35 ? "AUTHENTIC" :
    "INCONCLUSIVE";

  const verdictColor =
    clamped >= 70 ? "text-red-400" :
    clamped <= 35 ? "text-emerald-400" :
    "text-amber-400";

  const mainBarClass =
    clamped >= 70 ? "bg-gradient-to-r from-red-600 to-red-400" :
    clamped <= 35 ? "bg-gradient-to-r from-emerald-600 to-emerald-400" :
    "bg-gradient-to-r from-amber-600 to-amber-400";

  return (
    <div className="space-y-6">

      {/* Verdict header */}
      <div className="flex items-baseline justify-between border-b border-slate-800 pb-4">
        <div>
          <p className="text-slate-500 text-[10px] font-mono uppercase tracking-widest mb-1">Verdict</p>
          <p className={cn("text-xl font-black font-display tracking-tight", verdictColor)}>
            {verdict}
          </p>
        </div>
        <div className="text-right">
          <p className="text-slate-500 text-[10px] font-mono uppercase tracking-widest mb-1">Risk Score</p>
          <p className={cn("text-3xl font-black font-mono tabular-nums", verdictColor)}>
            {clamped.toFixed(0)}<span className="text-lg">%</span>
          </p>
        </div>
      </div>

      {/* Primary metrics */}
      <div className="space-y-3">
        <ConfidenceBar
          label="Overall Risk Score"
          value={riskScore}
          barClass={mainBarClass}
          delay={0}
        />
        <ConfidenceBar
          label="Synthetic Likelihood"
          value={syntheticLikelihood}
          barClass="bg-gradient-to-r from-purple-600 to-purple-400"
          delay={120}
        />
      </div>

      {/* Model breakdown */}
      {analysisResults.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <p className="text-[10px] text-slate-600 font-mono uppercase tracking-widest">Model Breakdown</p>
            <div className="flex-1 h-px bg-slate-800" />
            <div className="flex items-center gap-3 text-[9px] font-mono text-slate-600">
              <span className="flex items-center gap-1">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500/70" /> Authentic
              </span>
              <span className="flex items-center gap-1">
                <span className="inline-block w-2 h-2 rounded-full bg-red-500/70" /> Synthetic
              </span>
            </div>
          </div>
          <div className="space-y-2.5">
            {analysisResults.map((r, i) => (
              <ConfidenceBar
                key={r.model_name}
                label={r.model_name}
                value={r.confidence}
                barClass={
                  r.label === "SYNTHETIC"
                    ? "bg-gradient-to-r from-red-700 to-red-500"
                    : "bg-gradient-to-r from-emerald-700 to-emerald-500"
                }
                delay={250 + i * 100}
                size="sm"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
