export default function HeatMap({ items = [] }) {
  return (
    <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
      {items.map((store) => (
        <article key={store.name} className="rounded-2xl border border-slate-200 p-4">
          <div className="text-lg font-semibold">{store.name}</div>
          <div className="mt-2 text-sm text-slate-500">Status: {store.score}</div>
          <div className="mt-3 text-sm text-slate-700">{store.note}</div>
        </article>
      ))}
    </div>
  );
}
