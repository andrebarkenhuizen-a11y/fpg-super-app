import ExceptionItem from "./ExceptionItem";

export default function ExceptionList({ exceptions = [] }) {
  if (!exceptions.length) {
    return <div className="rounded-2xl border border-dashed border-slate-300 p-6 text-sm text-slate-500">No exceptions found.</div>;
  }

  return (
    <div className="mt-5 space-y-3">
      {exceptions.map((row) => (
        <ExceptionItem key={row.id} item={row} />
      ))}
    </div>
  );
}
