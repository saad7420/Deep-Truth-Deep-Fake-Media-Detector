"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainSidebar() {
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Forensics Hub", path: "/forensics" },
    { name: "Vault", path: "/vault" },
  ];

  return (
    <aside className="w-64 min-h-screen bg-slate-950 text-white p-6">
      <h1 className="text-xl font-bold mb-8 text-indigo-400">
        Deep Truth™
      </h1>

      <nav className="space-y-4">
        {menu.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`block px-4 py-2 rounded-lg transition ${
              pathname === item.path
                ? "bg-indigo-600 text-white"
                : "hover:bg-slate-800 text-slate-300"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="mt-10">
        <a
          href="/api/logout"
          className="block px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700"
        >
          Logout
        </a>
      </div>
    </aside>
  );
}
