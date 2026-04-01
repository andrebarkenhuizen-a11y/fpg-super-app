import Link from "next/link";

export default function TopBar() {
  return (
    <header className="border-b border-slate-200 bg-white px-6 py-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="text-sm font-medium text-slate-500">Current prototype direction</div>
          <h2 className="mt-1 text-3xl font-semibold tracking-tight">Operations Command Center</h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-600">
            First live prototype focuses on exception capture, ownership, follow-up, trend visibility,
            and forecast-linked action planning.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 lg:w-[340px]">
          <Link href="/exceptions/new" className="rounded-2xl bg-slate-950 px-4 py-3 text-center text-sm font-medium text-white shadow">
            New Exception
          </Link>
          <Link href="/reports/daily" className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-center text-sm font-medium text-slate-800">
            Import Daily Report
          </Link>
        </div>
      </div>
    </header>
  );
}
