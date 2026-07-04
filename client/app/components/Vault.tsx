import { Sidebar, MobileNav } from "@/app/components/Navigation";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Lock, Shield, Key, History } from "lucide-react";

export default function Vault() {
  return (
    <div className="min-h-screen bg-slate-950 grid-bg">
      <Sidebar />
      <MobileNav />
      
      <main className="lg:ml-64 p-4 lg:p-8 pt-20 lg:pt-8 space-y-8">
        <header>
          <h1 className="text-3xl font-display font-bold text-white mb-2">Secure Vault</h1>
          <p className="text-slate-400">Cryptographic storage and immunization protocols.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        <Card className="bg-slate-900/50 border-slate-800 p-6">
          <div className="flex items-center gap-2 mb-6">
            <History className="w-5 h-5 text-slate-500" />
            <h3 className="font-bold text-white">Audit Log</h3>
          </div>
          <div className="space-y-4">
            {[1,2,3].map(i => (
              <div key={i} className="flex items-center justify-between p-4 rounded bg-slate-950 border border-slate-800">
                <div className="flex items-center gap-3">
                  <Lock className="w-4 h-4 text-slate-500" />
                  <div>
                    <p className="text-sm font-medium text-white">Key Rotation: OPERATOR_01</p>
                    <p className="text-xs text-slate-500 font-mono">HASH: 8f92...a31d</p>
                  </div>
                </div>
                <span className="text-xs text-slate-500 font-mono">2h ago</span>
              </div>
            ))}
          </div>
        </Card>
      </main>
    </div>
  );
}
