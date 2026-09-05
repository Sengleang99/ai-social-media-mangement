import { createClient } from "@/lib/supabase/server";

export default async function InstrumentsPage() {
  const supabase = await createClient();
  const { data: instruments, error } = await supabase.from("instruments").select();

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <header className="border-b border-neutral-800 pb-4">
          <h1 className="text-3xl font-bold tracking-tight text-white">Supabase Instruments</h1>
          <p className="text-sm text-neutral-400 mt-1">
            Testing Server Component connection to Supabase database.
          </p>
        </header>

        {error ? (
          <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-300">
            <p className="font-semibold text-red-200">Error querying instruments:</p>
            <p className="text-sm mt-1">{error.message}</p>
            <p className="text-xs text-neutral-400 mt-2">
              Note: Make sure you ran the SQL query in Supabase SQL editor to create the
              `instruments` table and enable RLS policies.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                Connection Successful
              </span>
              <span className="text-xs text-neutral-500">
                {instruments?.length ?? 0} {instruments?.length === 1 ? "item" : "items"} found
              </span>
            </div>

            <div className="grid gap-3">
              {instruments && instruments.length > 0 ? (
                instruments.map((instrument: { id: number | string; name: string }) => (
                  <div
                    key={instrument.id}
                    className="flex items-center justify-between p-4 rounded-xl bg-neutral-900 border border-neutral-800/80 hover:border-neutral-700 transition"
                  >
                    <span className="font-medium text-white">{instrument.name}</span>
                    <span className="text-xs font-mono text-neutral-500">ID: {instrument.id}</span>
                  </div>
                ))
              ) : (
                <div className="p-6 rounded-xl bg-neutral-900/50 border border-neutral-800 text-center text-neutral-400">
                  <p>No instruments found in the table.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
