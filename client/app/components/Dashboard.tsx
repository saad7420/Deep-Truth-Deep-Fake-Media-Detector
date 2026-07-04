"use client";
import { useCases } from "@/app/hooks/use-cases";
import Link from "next/link";
import { Sidebar, MobileNav } from "@/app/components/Navigation";
import { StatusBadge } from "@/app/components/StatusBadge";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { cn } from "@/app/lib/utils";
import { ShieldCheck, ShieldAlert, Activity, ArrowRight, Upload, Plus, Database as DatabaseIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Skeleton } from "@/app/components/ui/skeleton";

function StatCard({ label, value, icon: Icon, color
  
 }: { label: string, value: string, icon: any, color: string }) {
  return (
    <Card className="bg-slate-900/50 border-slate-800 p-6 relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-300">
      <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity ${color}`}>
        <Icon className="w-24 h-24" />
      </div>
      <div className="relative z-10">
        <div className={`w-12 h-12 rounded-lg ${color} bg-opacity-10 flex items-center justify-center mb-4 border border-opacity-20 border-white`}>
          <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
        </div>
        <h3 className="text-3xl font-display font-bold text-white mb-1">{value}</h3>
        <p className="text-sm text-slate-400 font-medium uppercase tracking-wide">{label}</p>
      </div>
    </Card>
  );
}

export default function Dashboard() {
  const { data: cases, isLoading } = useCases();

  // Calculate stats
  const totalCases = cases?.length || 0;
  const authenticCount = cases?.filter(c => c.status === 'authentic').length || 0;
  const manipulatedCount = cases?.filter(c => c.status === 'manipulated').length || 0;
  const processingCount = cases?.filter(c => c.status === 'processing').length || 0;

  return (
    <div className="min-h-screen bg-slate-950 grid-bg">
      <Sidebar />
      <MobileNav />
      
      <main className="lg:ml-64 p-4 lg:p-8 pt-20 lg:pt-8 space-y-8">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-display font-bold text-white mb-2">Command Center</h1>
            <p className="text-slate-400 flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              System Status: ONLINE | Node: US-EAST-1
            </p>
          </div>
          <Link href="/forensics">
            <Button className="bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20 transition-all hover:scale-105">
              <Plus className="w-4 h-4 mr-2" /> New Forensic Scan
            </Button>
          </Link>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard 
            label="Active Scans" 
            value={processingCount.toString()} 
            icon={Activity} 
            color="text-blue-400" 
          />
          <StatCard 
            label="Verified Authentic" 
            value={authenticCount.toString()} 
            icon={ShieldCheck} 
            color="text-emerald-400" 
          />
          <StatCard 
            label="Threats Detected" 
            value={manipulatedCount.toString()} 
            icon={ShieldAlert} 
            color="text-red-400" 
          />
          <StatCard 
            label="Total Analyzed" 
            value={totalCases.toString()} 
            icon={DatabaseIcon} 
            color="text-purple-400" 
          />
        </div>

        {/* Recent Cases */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-display font-bold text-white">Recent Investigations</h2>
            <Link href="/forensics">
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                View All <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider font-mono text-xs">
                    <th className="p-4 font-medium">Case ID</th>
                    <th className="p-4 font-medium">Subject</th>
                    <th className="p-4 font-medium">Type</th>
                    <th className="p-4 font-medium">Date</th>
                    <th className="p-4 font-medium">Status</th>
                    <th className="p-4 font-medium text-right">Risk Score</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {isLoading ? (
                    Array(5).fill(0).map((_, i) => (
                      <tr key={i}>
                        <td className="p-4"><Skeleton className="h-4 w-24 bg-slate-800" /></td>
                        <td className="p-4"><Skeleton className="h-4 w-32 bg-slate-800" /></td>
                        <td className="p-4"><Skeleton className="h-4 w-16 bg-slate-800" /></td>
                        <td className="p-4"><Skeleton className="h-4 w-24 bg-slate-800" /></td>
                        <td className="p-4"><Skeleton className="h-6 w-24 rounded-full bg-slate-800" /></td>
                        <td className="p-4"><Skeleton className="h-4 w-12 ml-auto bg-slate-800" /></td>
                      </tr>
                    ))
                  ) : cases?.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="p-8 text-center text-slate-500">
                        No investigations found. Start a new scan.
                      </td>
                    </tr>
                  ) : (
                    cases?.slice(0, 5).map((c) => (
                      <tr key={c.id} className="group hover:bg-slate-800/30 transition-colors">
                        <td className="p-4 font-mono text-indigo-400 font-medium">
                          <Link href={`/case/${c.id}`}>
                            <span className="cursor-pointer hover:underline">{c.caseId}</span>
                          </Link>
                        </td>
                        <td className="p-4 font-medium text-white">{c.title}</td>
                        <td className="p-4 text-slate-400 capitalize">{c.mediaType}</td>
                        <td className="p-4 text-slate-400 font-mono text-xs">
                          {c.createdAt ? new Date(c.createdAt).toLocaleDateString() : 'N/A'}
                        </td>
                        <td className="p-4">
                          <StatusBadge status={c.status} />
                        </td>
                        <td className="p-4 text-right">
                          <span className={cn(
                            "font-mono font-bold",
                            c.riskScore > 70 ? "text-red-400" : c.riskScore > 30 ? "text-yellow-400" : "text-emerald-400"
                          )}>
                            {c.riskScore}%
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
