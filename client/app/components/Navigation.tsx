"use client";
import Link from "next/link"; // Next.js specific Link
import { usePathname } from "next/navigation"; // Correct hook for App Router
import { useAuth } from "@/app/hooks/use-auth";
import { 
  Shield, 
  LayoutDashboard, 
  FileSearch, 
  Database, 
  Settings, 
  LogOut,
  Menu,
  X,
  Plus
} from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {cn } from "@/app/lib/utils";

export function Sidebar() {
  const pathname = usePathname(); // Replaced useLocation
  const { user, logout } = useAuth();
  
  const navItems = [
    { href: "/", label: "Portal", icon: Shield },
    { href: "/Dashboard", label: "Command Center", icon: LayoutDashboard },
    { href: "/Forensics", label: "Forensics Hub", icon: FileSearch },
    { href: "/Vault", label: "Secure Vault", icon: Database },    
  ];

  return (
    <div className="hidden lg:flex h-screen w-64 flex-col fixed left-0 top-0 border-r border-slate-800 bg-slate-950/95 backdrop-blur-xl z-50">
      <div className="p-6 border-b border-slate-800 flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-indigo-600/20 flex items-center justify-center border border-indigo-500/50 shadow-[0_0_15px_rgba(79,70,229,0.3)]">
          <Shield className="w-6 h-6 text-indigo-400" />
        </div>
        <div>
          <h1 className="font-display font-bold text-lg text-white tracking-wide">DEEP TRUTH™</h1>
          <p className="text-[10px] text-slate-400 font-mono tracking-wider">DEFENSE SYSTEM v2.0</p>
        </div>
      </div>

      <nav className="flex-1 px-4 py-8 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href; // Use pathname here
          return (
            <Link key={item.href} href={item.href}>
              <div 
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer group",
                  isActive 
                    ? "bg-indigo-950/40 text-indigo-300 border border-indigo-500/20 shadow-lg shadow-indigo-900/10" 
                    : "text-slate-400 hover:text-white hover:bg-slate-900/50"
                )}
              >
                <item.icon className={cn("w-5 h-5", isActive ? "text-indigo-400" : "text-slate-500 group-hover:text-slate-300")} />
                {item.label}
                {isActive && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                )}
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-800 space-y-4">
        <div className="bg-slate-900/50 rounded-xl p-3 border border-slate-800">
          <div className="flex items-center gap-3">
            <Avatar className="w-8 h-8 border border-slate-700">
              <AvatarImage src={user?.profileImageUrl || undefined} />
              <AvatarFallback className="bg-slate-800 text-xs font-mono">
                {user?.firstName?.[0]}{user?.lastName?.[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">{user?.firstName} {user?.lastName}</p>
              <p className="text-xs text-slate-500 truncate font-mono">OP_ID: {user?.id?.substring(0,6)}</p>
            </div>
          </div>
        </div>
        
        <Button variant="ghost" 
          className="w-full justify-start text-slate-400 hover:text-red-400 hover:bg-red-950/10"
          onClick={() => logout()}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Terminate Session
        </Button>
      </div>
    </div>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const pathname = usePathname(); // Corrected hook

  if (!user) return null;

  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 z-50 flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <Shield className="w-6 h-6 text-indigo-500" />
        <span className="font-display font-bold text-white">DEEP TRUTH</span>
      </div>
      
      <Button variant="ghost" size="icon" onClick={() => setOpen(!open)}>
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {open && (
        <div className="absolute top-16 left-0 right-0 bg-slate-950 border-b border-slate-800 p-4 space-y-2 animate-in slide-in-from-top-2">
           <Link href="/" onClick={() => setOpen(false)}>
            <div className={cn("p-3 rounded-lg flex items-center gap-3 cursor-pointer", pathname === "/" ? "bg-indigo-900/20 text-indigo-400" : "text-slate-400")}>
              <Shield className="w-5 h-5" /> Home
            </div>
           </Link>
           <Link href="/dashboard" onClick={() => setOpen(false)}>
            <div className={cn("p-3 rounded-lg flex items-center gap-3 cursor-pointer", pathname === "/dashboard" ? "bg-indigo-900/20 text-indigo-400" : "text-slate-400")}>
              <LayoutDashboard className="w-5 h-5" /> Overview
            </div>
           </Link>
           <Link href="/forensics" onClick={() => setOpen(false)}>
            <div className={cn("p-3 rounded-lg flex items-center gap-3 cursor-pointer", pathname === "/forensics" ? "bg-indigo-900/20 text-indigo-400" : "text-slate-400")}>
              <FileSearch className="w-5 h-5" /> Forensics
            </div>
           </Link>
           <Link href="/vault" onClick={() => setOpen(false)}>
            <div className={cn("p-3 rounded-lg flex items-center gap-3 cursor-pointer", pathname === "/vault" ? "bg-indigo-900/20 text-indigo-400" : "text-slate-400")}>
              <Database className="w-5 h-5" /> Vault
            </div>
           </Link>
           <Button variant="destructive" className="w-full mt-4" onClick={() => logout()}>
             Logout
           </Button>
        </div>
      )}
    </div>
  );
}