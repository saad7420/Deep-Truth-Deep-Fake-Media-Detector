"use client";

import Link from "next/link";
import { StatusBadge } from "@/app/components/StatusBadge";
import { Button } from "@/app/components/ui/button";
import { Skeleton } from "@/app/components/ui/skeleton";
import { Shield, Lock, Activity, ArrowRight, Fingerprint} from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { useCases } from "@/app/hooks/use-cases";
import { cn } from "@/app/lib/utils";
import { FileAudio, FileVideo, Image as ImageIcon} from "lucide-react";
import { Key } from "lucide-react";

const types = [
    { id: "image", icon: ImageIcon, label: "Image Forensics", desc: "Pixel-level analysis & metadata extraction" },
    { id: "video", icon: FileVideo, label: "Video Deepfake", desc: "Frame-by-frame temporal consistency check" },
    { id: "audio", icon: FileAudio, label: "Voice Clone", desc: "Spectral trace & frequency anomaly detection" },
  ];

export default function Landing() {

const { data: cases, isLoading } = useCases();

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500/30">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-indigo-600 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <a href="/"><span className="font-display font-bold text-xl tracking-tight">DEEP TRUTH™</span></a>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
              <a href="#features" className="hover:text-white transition-colors ">Capabilities</a>
              <a href="#technology" className="hover:text-white transition-colors">Technology</a>
              <a href="#casestudies" className="hover:text-white transition-colors">Case Studies</a>
                 
            </div>
            <div className="flex items-center gap-4">
               {/* <a href="/api/login"> */}
               <a href="/Forensics">
                <Button variant="ghost" className="text-slate-300 hover:text-white">Sign In</Button>
               </a>

               <a href="/api/login">
                <Button className="bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_20px_rgba(79,70,229,0.3)]">
                  Access Console
                </Button>
               </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Tech Background */}
        <div className="absolute inset-0 bg-[url('https://pixabay.com/get/g1b6431e67d67a81ffe01e4b2ad2a5a08de49fe7a040d78837bead69861f1dc4adf7dd4670ac4c2f2d6cd8d6a57e6c509d328eef0cbfa65dc63de0fee0e175514_1280.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950 pointer-events-none" />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            SYSTEM ONLINE: DEFENSE PROTOCOLS ACTIVE
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            Deep-Truth: Active <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 neon-text">
              Deepfake Defense System
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Professional forensic verification for the modern age. Detect synthetic manipulation in audio and video with cutting-edge AI analysis.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
             <a href="/api/login">
              <Button size="lg" className="h-14 px-8 text-lg bg-indigo-600 hover:bg-indigo-500 shadow-[0_0_30px_rgba(79,70,229,0.4)] transition-all hover:scale-105">
                Start Scanning <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">
              View Documentation
            </Button>
          </div>
        </div>
      </section>
   

      {/* Features Grid */}
      <section id="features" className="py-24 bg-slate-900/50 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

           {/* Modality Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {types.map((type) => (
              <Card key={type.id} className="bg-slate-900/50 border-slate-800 p-6 group hover:border-indigo-500/50 transition-all cursor-default">
                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-4 group-hover:bg-indigo-900/20 group-hover:text-indigo-400 transition-colors">
                  <type.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1 font-display">{type.label}</h3>
                <p className="text-sm text-slate-400">{type.desc}</p>
              </Card>
            ))}
          </div>
          <br></br>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-indigo-500/50 transition-colors group">
              <div className="w-14 h-14 rounded-xl bg-slate-900 flex items-center justify-center mb-6 group-hover:bg-indigo-900/20 transition-colors">
                <Activity className="w-8 h-8 text-indigo-500" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">Real-time Analysis</h3>
              <p className="text-slate-400 leading-relaxed">
                Instantaneous processing of audio, video, and image streams using our proprietary AudioFakeNet and EfficientNet-V2 models.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-purple-500/50 transition-colors group">
              <div className="w-14 h-14 rounded-xl bg-slate-900 flex items-center justify-center mb-6 group-hover:bg-purple-900/20 transition-colors">
                <Lock className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">Cryptographic Proof</h3>
              <p className="text-slate-400 leading-relaxed">
                Immutable blockchain-backed signing ensures chain of custody and prevents tampering from capture to courtroom.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-emerald-500/50 transition-colors group">
              <div className="w-14 h-14 rounded-xl bg-slate-900 flex items-center justify-center mb-6 group-hover:bg-emerald-900/20 transition-colors">
                <Fingerprint className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">Identity Protection</h3>
              <p className="text-slate-400 leading-relaxed">
                Proactive monitoring of executive likenesses across the open web to detect unauthorized synthetic media generation.
              </p>
            </div>
            
          </div>        
          
        </div>
      </section>
      
    <section id="technology" className="py-24 bg-slate-900/50 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-display font-bold text-white mb-2">Secure Vault</h1>
          <p className="text-slate-400">Cryptographic storage and immunization protocols.</p>
        </div>
        <br></br>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-slate-900/50 border-slate-800 p-8 flex flex-col items-center text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-indigo-900/20 flex items-center justify-center mb-2">
              <Key className="w-10 h-10 text-indigo-400" />
            </div>
            <h2 className="text-2xl font-display font-bold text-white">Generate Signing Keys</h2>
            <p className="text-slate-400 max-w-sm">
              Create a new pair of cryptographic keys to sign media at the source.
            </p>
            <Button className="mt-4 bg-indigo-600 hover:bg-indigo-500">Generate Keypair</Button>
          </Card>

          <Card className="bg-slate-900/50 border-slate-800 p-8 flex flex-col items-center text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-emerald-900/20 flex items-center justify-center mb-2">
              <Shield className="w-10 h-10 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-display font-bold text-white">Media Immunization</h2>
            <p className="text-slate-400 max-w-sm">
              Apply invisible adversarial noise to protect images from AI manipulation.
            </p>
            <Button variant="outline" className="mt-4 border-slate-700 text-slate-300">Upload to Immunize</Button>
          </Card>
        </div>
      </section>

      <section id="casestudies" className="py-24 bg-slate-900/50 border-t border-slate-800">
      
        {/* Recent Cases */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-display font-bold text-white">Recent Investigations</h2>
            <Link href="/forensics">
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                View All <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          <br></br>
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
      </section>
   
      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-indigo-500" />
                <a href="./"><span className="font-display font-bold text-white">DEEP TRUTH™</span></a>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Active Deepfake Defense System developed for advanced forensic verification and digital integrity.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-display font-bold text-white text-sm uppercase tracking-widest">Technology Stack</h4>
              <ul className="text-slate-500 text-sm space-y-2 font-mono">
                <li>Next.js 14+ (App Router)</li>
                <li>Tailwind CSS & Framer Motion</li>
                <li>FastAPI (Python) Backend</li>
                <li>AudioFakeNet / YOLO / ResNet</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-display font-bold text-white text-sm uppercase tracking-widest">Project Team</h4>
              <p className="text-slate-500 text-sm font-mono">
                Saad & Ramish<br />
                COMSATS University Islamabad
              </p>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-600 text-xs font-mono uppercase tracking-tighter">
              © 2024 Deep-Truth. Defense protocols active.
            </p>
            <div className="flex gap-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] text-slate-700 font-mono">CLEARANCE: CLASS-A REQUIRED</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
