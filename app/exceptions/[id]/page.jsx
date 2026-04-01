export default async function ExceptionDetailPage({ params }) {
  const awaitedParams = await params;
  return (
    <main className="min-h-screen bg-slate-100 p-8 text-slate-900">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <h1 className="text-3xl font-semibold">Exception Detail</h1>
        <p className="mt-3 text-sm text-slate-600">Selected exception ID: {awaitedParams.id}</p>
      </div>
    </main>
  );
}
