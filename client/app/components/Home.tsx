"use client";
import { Card } from "@/app/components/ui/card";
import  Link  from "next/link";
import { Button } from "@/app/components/ui/button";
import { 
  Shield, 
  ArrowRight, 
  Target, 
  Zap, 
  Lock, 
  Search, 
  Database,
  Users,
  CheckCircle2,
  AlertTriangle,
  FileSearch,
  Cpu
} from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Home(){
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500/30 overflow-x-hidden">
      {/* 1. Hero Section: Web App Intro */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950 pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            DEFENSE PROTOCOLS ACTIVE
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-display font-bold tracking-tight mb-6"
          >
            Deep-Truth <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 neon-text">
              Defense Portal
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto text-xl text-slate-400 mb-10 leading-relaxed"
          >
            Welcome to the front lines of digital integrity. Deep-Truth is a next-generation forensic 
            platform designed to identify, analyze, and neutralize synthetic media threats in real-time.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/Dashboard">
              <Button size="lg" className="h-14 px-8 text-lg bg-indigo-600 hover:bg-indigo-500 shadow-[0_0_30px_rgba(79,70,229,0.4)] transition-all hover:scale-105">
                Access Console <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/Forensics">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-slate-700 text-slate-300 hover:bg-slate-800 transition-all hover:scale-105">
                New Scan
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Mission Guidance Section */}
      <section id="mission" className="py-24 relative border-t border-slate-900 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <div className="w-12 h-12 rounded-lg bg-indigo-600/20 flex items-center justify-center mb-6 border border-indigo-500/30">
                <Target className="w-6 h-6 text-indigo-400" />
              </div>
              <h2 className="text-4xl font-display font-bold mb-6 text-white">The Mission Protocol</h2>
              <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                <p>
                  In an era where synthetic reality is becoming indistinguishable from truth, our mission is to 
                  rebuild the foundation of digital trust. We provide the tools necessary for 
                  organizations to verify the authenticity of their most critical communication channels.
                </p>
                <p>
                  Deep-Truth leverages neural network synchronization to provide high-fidelity 
                  verifications, ensuring that truth remains an absolute, not a variable.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                  <div className="text-2xl font-bold text-white mb-1">99.8%</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-mono">Precision Rate</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                  <div className="text-2xl font-bold text-white mb-1">&lt;2s</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-mono">Latency Score</div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              {...fadeIn}
              className="relative aspect-square rounded-3xl overflow-hidden border border-slate-800 shadow-2xl group"
            >
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80" 
                alt="Mission Control"
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/5">
                <p className="text-sm font-mono text-indigo-400">GUIDANCE_OPERATIONS_ACTIVE</p>
                <p className="text-white font-bold mt-1">Verifying the digital horizon for 500+ global entities.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Operational Capabilities (Core Description) */}
      <section className="py-24 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Core Capabilities</h2>
            <p className="text-slate-400">Advanced multi-modal detection engine optimized for forensic accuracy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Neural Sync", desc: "Proprietary AudioFakeNet models synchronized for millisecond-fast processing." },
              { icon: FileSearch, title: "Forensic Audit", desc: "Detailed breakdown of spectral anomalies and temporal inconsistencies." },
              { icon: Lock, title: "Vault Security", desc: "All forensic results are cryptographically signed and stored in secure vaults." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-slate-900/30 border border-slate-800 hover:border-indigo-500/50 transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Strategic Alignment (Why it matters) */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/5 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
             <motion.div {...fadeIn} className="lg:w-1/2 order-2 lg:order-1">
               <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-4">
                   <div className="aspect-square rounded-2xl bg-slate-900 border border-slate-800 p-6 flex flex-col justify-between">
                     <Search className="w-8 h-8 text-indigo-500" />
                     <p className="text-sm font-medium">Automatic Scanning</p>
                   </div>
                   <div className="aspect-[4/5] rounded-2xl bg-indigo-600 p-6 flex flex-col justify-between text-white">
                     <Cpu className="w-8 h-8" />
                     <p className="text-lg font-bold">AI Processing</p>
                   </div>
                 </div>
                 <div className="space-y-4 pt-8">
                   <div className="aspect-[4/5] rounded-2xl bg-slate-800 p-6 flex flex-col justify-between">
                     <Database className="w-8 h-8 text-purple-500" />
                     <p className="text-lg font-bold">Vault Storage</p>
                   </div>
                   <div className="aspect-square rounded-2xl bg-slate-900 border border-slate-800 p-6 flex flex-col justify-between">
                     <Users className="w-8 h-8 text-emerald-500" />
                     <p className="text-sm font-medium">Team Access</p>
                   </div>
                 </div>
               </div>
             </motion.div>
             <motion.div {...fadeIn} className="lg:w-1/2 order-1 lg:order-2 space-y-6">
               <h2 className="text-4xl font-display font-bold">Strategic Defense</h2>
               <p className="text-slate-400 text-lg leading-relaxed">
                 Traditional detection methods are no longer sufficient. Our system provides a 
                 proactive defensive layer that integrates directly with your media pipeline.
               </p>
               <ul className="space-y-4">
                 {[
                   "Instant classification of deepfake variants",
                   "Cross-platform media authenticity verification",
                   "Enterprise-grade reporting and data exports",
                   "High-performance API for custom integrations"
                 ].map((text, i) => (
                   <li key={i} className="flex items-center gap-3 text-slate-300">
                     <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                     {text}
                   </li>
                 ))}
               </ul>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Threat Landscape Analysis */}
      <section className="py-24 border-y border-slate-900 bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-display font-bold mb-6">Threat Intelligence</h2>
            <p className="text-slate-400 mb-12 text-lg">
              Understanding the evolving landscape of synthetic manipulation is crucial. 
              Our researchers track 100+ deepfake generation frameworks daily to update our 
              detection nodes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-red-950/10 border-red-900/30 p-6">
                <AlertTriangle className="w-8 h-8 text-red-500 mb-4" />
                <h4 className="font-bold text-white mb-2">High-Risk Detection</h4>
                <p className="text-sm text-red-300/70">Identifying sophisticated GAN-based voice and face swaps with extreme precision.</p>
              </Card>
              <Card className="bg-amber-950/10 border-amber-900/30 p-6">
                <Zap className="w-8 h-8 text-amber-500 mb-4" />
                <h4 className="font-bold text-white mb-2">Evolving Artifacts</h4>
                <p className="text-sm text-amber-300/70">Continuous learning system adapts to new manipulation artifacts as they emerge.</p>
              </Card>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-2/3 opacity-10 pointer-events-none">
          <div className="scan-line" />
        </div>
      </section>

      {/* 6. Forensic Process Documentation (Guidance) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Operational Workflow</h2>
            <p className="text-slate-400">A simplified overview of our forensic analysis pipeline.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Ingestion", desc: "Upload high-resolution media evidence." },
              { step: "02", title: "Isolation", desc: "Extracting temporal and spectral artifacts." },
              { step: "03", title: "Analysis", desc: "Neural processing via AudioFakeNet nodes." },
              { step: "04", title: "Verdict", desc: "Final risk assessment and audit summary." }
            ].map((item, i) => (
              <div key={i} className="relative p-6 rounded-2xl bg-slate-900/30 border border-slate-800">
                <div className="text-4xl font-display font-bold text-indigo-600/20 mb-4">{item.step}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
                {i < 3 && <ArrowRight className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 text-slate-800 w-6 h-6" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Call to Action & Ecosystem */}
      <section className="py-24 border-t border-slate-900 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="max-w-4xl mx-auto p-12 rounded-3xl bg-gradient-to-br from-indigo-950/40 to-slate-900 border border-indigo-500/20">
            <h2 className="text-4xl font-display font-bold mb-6">Ready to Secure Your Truth?</h2>
            <p className="text-slate-400 text-lg mb-10">
              Join the elite circle of organizations leveraging active deepfake defense. 
              Create your account today and initiate your first forensic scan.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/Dashboard">
                <Button size="lg" className="h-14 px-10 text-lg bg-indigo-600 hover:bg-indigo-500 shadow-xl shadow-indigo-500/30">
                  Access Portal
                </Button>
              </Link>
              <Link href="/Forensics">
                <Button size="lg" variant="outline" className="h-14 px-10 text-lg border-slate-700 hover:bg-slate-800">
                  New Investigation
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <div className="mt-20 pt-12 border-t border-slate-900">
             <div className="flex flex-col items-center gap-6">
                <div className="flex items-center gap-2">
                  <Shield className="w-8 h-8 text-indigo-500" />
                  <span className="font-display font-bold text-2xl tracking-tighter">DEEP TRUTH™</span>
                </div>
                <div className="flex flex-wrap justify-center gap-8 text-sm font-mono text-slate-500 uppercase tracking-widest">
                  <span>COMSATS University</span>
                  <span>Saad & Ramish</span>
                  <span>Defense Protocol v2.0</span>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
