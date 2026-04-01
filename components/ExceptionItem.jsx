import Link from "next/link";

export default function ExceptionItem({ item }) {
  return (
    <Link href={`/exceptions/${item.id}`} className="block rounded-2xl border border-slate-200 p-4 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="text-xs uppercase tracking-wide text-slate-400">{item.store}</div>
          <div className="mt-1 text-base font-semibold">{item.issue}</div>
          <div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-600">
            <span className="rounded-full bg-slate-100 px-2 py-1">Severity: {item.severity}</span>
            <span className="rounded-full bg-slate-100 px-2 py-1">Owner: {item.owner}</span>
            <span className="rounded-full bg-slate-100 px-2 py-1">Due: {item.due}</span>
          </div>
        </div>
        <div className="rounded-full bg-slate-950 px-3 py-2 text-sm font-medium text-white">{item.status}</div>
      </div>
    </Link>
  );
}
