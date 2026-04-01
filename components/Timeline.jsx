export default function Timeline({ items = [] }) {
  return (
    <div className="mt-5 space-y-4">
      {items.map((t) => (
        <div key={`${t.time}-${t.text}`} className="flex gap-3">
          <div className="mt-1 h-3 w-3 rounded-full bg-slate-950" />
          <div>
            <div className="text-sm font-medium">{t.time}</div>
            <div className="text-sm text-slate-600">{t.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
