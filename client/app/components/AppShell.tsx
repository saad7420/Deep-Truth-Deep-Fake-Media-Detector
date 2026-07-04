"use client";

import { Sidebar } from "./Navigation";

Sidebar

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 min-h-screen bg-slate-950 text-white p-10">
        {children}
      </main>
    </div>
  );
}
