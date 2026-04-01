import Link from "next/link";

export default function ForecastHubPreview({ items = [] }) {
  return (
    <div className="mt-5 grid grid-cols-2 gap-3">
      {items.map(([label, state]) => (
        <Link key={label} href="/forecast" className="rounded-2xl border border-slate-200 p-3 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400">
          <div className="text-sm font-medium">{label}</div>
          <div className="mt-1 text-xs text-slate-500">{state}</div>
        </Link>
      ))}
    </div>
  );
}
