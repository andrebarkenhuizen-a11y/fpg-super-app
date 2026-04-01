"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { label: "Operational Overview", href: "/overview" },
  { label: "New Exception", href: "/exceptions/new" },
  { label: "My Exceptions", href: "/exceptions" },
  { label: "Store Heat Map", href: "/heat-map" },
  { label: "Forecast Hub", href: "/forecast" },
  { label: "Training Tracker", href: "/training" },
  { label: "Visit Reports", href: "/reports/visit" },
  { label: "Daily Reports Intake", href: "/reports/daily" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="col-span-12 md:col-span-3 lg:col-span-2 border-b border-slate-200 bg-slate-950 text-white md:border-b-0 md:border-r">
      <div className="p-5">
        <div className="mb-6">
          <div className="text-xs uppercase tracking-[0.25em] text-slate-400">FPG</div>
          <h1 className="mt-2 text-2xl font-semibold">Super App</h1>
          <p className="mt-2 text-sm text-slate-400">Operational Intelligence Platform</p>
        </div>

        <nav aria-label="Primary" className="space-y-2">
          {items.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-2xl px-4 py-3 text-sm transition focus:outline-none focus:ring-2 focus:ring-white ${
                  active ? "bg-white text-slate-950 shadow" : "bg-slate-900 text-slate-300 hover:bg-slate-800"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
