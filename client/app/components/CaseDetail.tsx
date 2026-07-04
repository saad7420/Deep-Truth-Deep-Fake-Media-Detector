"use client";

import { useEffect } from "react";
import { useCase, useProcessCase } from "@/app/hooks/use-cases";
import { Sidebar, SidebarProvider } from "@/app/components/ui/sidebar";
import { MobileNav } from "@/app/components/Navigation";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import {
  ArrowLeft,
  Share2,
  Download,
  ShieldCheck,
  ShieldAlert,
  AlertTriangle,
  FileText,
  Activity,
  Maximize2,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import { cn } from "@/app/lib/utils";

export default function CaseDetail() {
  const router = useRouter();
  const params = useParams();

  const id = Number(params?.id);

  const { data: c, isLoading, error } = useCase(id);
  const processCase = useProcessCase();

  // Trigger processing automatically
  useEffect(() => {
    if (c?.status === "processing" && c.riskScore === 0 && !processCase.isPending) {
      processCase.mutate(id);
    }
  }, [c?.status, c?.riskScore, id]);

  if (isLoading)
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-indigo-500">
        <Activity className="animate-spin w-8 h-8" />
      </div>
    );

  if (error || !c)
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-red-500">
        Case not found
      </div>
    );

  const isProcessing = c.status === "processing";
  const isManipulated = c.status === "manipulated";
  const isAuthentic = c.status === "authentic";

  // Chart Data
  const chartData =
    (c.spectralTraceData as any[])?.map((p) => ({
      freq: p.frequency,
      mag: p.magnitude,
      anomaly: p.anomaly ? p.magnitude : 0,
    })) || [];

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-slate-950 grid-bg">
        <Sidebar />
        <MobileNav />

        <main className="lg:ml-64 pb-12">
          {/* Status Banner */}
          <div
            className={cn(
              "w-full px-4 lg:px-8 py-3 flex items-center justify-center gap-2 text-sm font-bold tracking-widest uppercase sticky top-16 lg:top-0 z-40 backdrop-blur-md border-b",
              isProcessing
                ? "bg-blue-900/20 text-blue-400 border-blue-900/50"
                : isAuthentic
                ? "bg-emerald-900/20 text-emerald-400 border-emerald-900/50"
                : "bg-red-900/20 text-red-400 border-red-900/50"
            )}
          >
            {isProcessing ? (
              <Activity className="w-4 h-4 animate-spin" />
            ) : isAuthentic ? (
              <ShieldCheck className="w-4 h-4" />
            ) : (
              <ShieldAlert className="w-4 h-4" />
            )}
            VERDICT: {isProcessing ? "ANALYSIS IN PROGRESS..." : c.status.toUpperCase()}
          </div>

          <div className="p-4 lg:p-8 space-y-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div>
                <Button
                  variant="link"
                  className="p-0 h-auto text-slate-500 hover:text-white mb-2"
                  onClick={() => router.push("/forensics")}
                >
                  <ArrowLeft className="w-4 h-4 mr-1" /> Back to Forensics
                </Button>

                <h1 className="text-2xl lg:text-3xl font-bold text-white flex gap-3">
                  {c.title}
                  <span className="text-sm px-2 py-1 rounded bg-slate-800 text-slate-400 font-mono border border-slate-700">
                    {c.caseId}
                  </span>
                </h1>

                <p className="text-slate-400 font-mono text-xs">
                  Submitted by {c.userId} •{" "}
                  {c.createdAt ? new Date(c.createdAt).toLocaleString() : "N/A"}
                </p>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" /> Share Report
                </Button>

                <Button size="sm" className="bg-indigo-600 hover:bg-indigo-500">
                  <Download className="w-4 h-4 mr-2" /> Export Evidence
                </Button>
              </div>
            </div>

            {/* Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main */}
              <div className="lg:col-span-2 space-y-6">
                {/* Media Preview */}
                <div className="aspect-video bg-black rounded-xl border border-slate-800 relative flex items-center justify-center">
                  <p className="text-slate-500 font-mono text-sm">
                    [ MEDIA PREVIEW UNAVAILABLE IN SECURE MODE ]
                  </p>
                  <button className="absolute bottom-4 right-4 p-2 bg-indigo-600 text-white rounded">
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Spectral Chart */}
                <Card className="bg-slate-900/50 border-slate-800 p-6">
                  <h3 className="text-white font-bold mb-4 flex gap-2">
                    <Activity className="w-5 h-5 text-indigo-400" /> Spectral Trace Analysis
                  </h3>

                  <div className="h-[300px] w-full">
                    {isProcessing ? (
                      <p className="text-slate-500 font-mono animate-pulse">
                        Generating spectrogram...
                      </p>
                    ) : (
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="freq" />
                          <YAxis />
                          <Tooltip />
                          <Area type="monotone" dataKey="mag" stroke="#6366f1" fillOpacity={0.2} fill="#6366f1" />
                          <Area type="monotone" dataKey="anomaly" stroke="#ef4444" fillOpacity={0.3} fill="#ef4444" />
                        </AreaChart>
                      </ResponsiveContainer>
                    )}
                  </div>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Risk Score */}
                <Card className="bg-slate-900/50 border-slate-800 p-6">
                  <h3 className="text-slate-400 uppercase text-sm mb-4">Risk Probability</h3>
                  <span className="text-4xl font-bold text-white">{c.riskScore}%</span>
                  <div className="h-2 bg-slate-800 rounded-full mt-4 overflow-hidden">
                    <motion.div
                      className="h-full bg-indigo-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${c.riskScore}%` }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </Card>

                {/* AI Summary */}
                <Card className="bg-slate-900/50 border-slate-800 p-6">
                  <h3 className="text-white font-bold flex gap-2 mb-3">
                    <FileText className="w-5 h-5 text-indigo-400" /> AI Assessment
                  </h3>
                  <p className="text-slate-300 text-sm font-mono">
                    {c.summary || "No anomalies detected. Metadata checks passed."}
                  </p>
                </Card>

                {/* Warning */}
                {isManipulated && (
                  <Card className="bg-red-950/20 border-red-900 p-4 flex gap-3">
                    <AlertTriangle className="text-red-500 w-5 h-5" />
                    <p className="text-red-300 text-sm">
                      High probability of manipulation detected. Manual review recommended.
                    </p>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
