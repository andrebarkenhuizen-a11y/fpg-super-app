import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import KpiCard from "@/components/KpiCard";
import ExceptionList from "@/components/ExceptionList";
import Timeline from "@/components/Timeline";
import ForecastHubPreview from "@/components/ForecastHubPreview";
import HeatMap from "@/components/HeatMap";
import { getDashboardSummary, getExceptions, getTimeline, getForecastSnapshot, getHeatMap } from "@/lib/dashboardService";

export default async function OverviewPage() {
  const [kpis, exceptions, timeline, forecast, heat] = await Promise.all([
    getDashboardSummary(),
    getExceptions(),
    getTimeline(),
    getForecastSnapshot(),
    getHeatMap(),
  ]);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="grid min-h-screen grid-cols-12">
        <Sidebar />
        <main className="col-span-12 md:col-span-9 lg:col-span-10">
          <TopBar />
          <div className="space-y-6 p-6">
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {kpis.map((item) => <KpiCard key={item.label} {...item} />)}
            </section>

            <section className="grid gap-6 xl:grid-cols-12">
              <div className="xl:col-span-7 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">My Exceptions</h3>
                    <p className="mt-1 text-sm text-slate-500">Focused on action, deadlines, and accountability</p>
                  </div>
                  <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">Live workflow mockup</div>
                </div>
                <ExceptionList exceptions={exceptions} />
              </div>

              <div className="xl:col-span-5 space-y-6">
                <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <h3 className="text-xl font-semibold">Exception Detail Timeline</h3>
                  <p className="mt-1 text-sm text-slate-500">Chronological evidence and follow-up trail</p>
                  <Timeline items={timeline} />
                </div>

                <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <h3 className="text-xl font-semibold">Forecast Hub Preview</h3>
                  <p className="mt-1 text-sm text-slate-500">Forecasts translated into operational decisions</p>
                  <ForecastHubPreview items={forecast} />
                </div>
              </div>
            </section>

            <section className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h3 className="text-xl font-semibold">Store Heat Map</h3>
                  <p className="mt-1 text-sm text-slate-500">Early concept for risk visibility across your stores</p>
                </div>
                <div className="text-sm text-slate-500">Heat is driven by repeats, severity, due dates, and forecast risk</div>
              </div>
              <HeatMap items={heat} />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
