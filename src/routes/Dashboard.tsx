import { useMemo } from 'react';
import { useEvents } from '../store/events';
import { label } from '../data/taxonomy';

export default function Dashboard() {
  const events = useEvents((s) => s.events);
  const clear = useEvents((s) => s.clear);

  const { total, byKind, topCombos, wonCount } = useMemo(() => {
    const byKind: Record<string, number> = {};
    const combos: Record<string, number> = {};
    let wonCount = 0;
    for (const e of events) {
      byKind[e.kind] = (byKind[e.kind] ?? 0) + 1;
      if (e.kind === 'pitch_won') wonCount++;
      if (e.kind === 'pitch_generated') {
        const key = [e.tags.vertical, e.tags.problem, e.tags.persona].filter(Boolean).join(' · ') || '—';
        combos[key] = (combos[key] ?? 0) + 1;
      }
    }
    const topCombos = Object.entries(combos).sort((a, b) => b[1] - a[1]).slice(0, 6);
    return { total: events.length, byKind, topCombos, wonCount };
  }, [events]);

  return (
    <div className="space-y-4">
      <div className="flex items-baseline justify-between">
        <h1 className="font-semibold">Performance intelligence</h1>
        <button className="btn" onClick={clear}>Clear events</button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Stat label="Total events" value={total.toString()} />
        <Stat label="Pitches generated" value={(byKind.pitch_generated ?? 0).toString()} />
        <Stat label="Pitches used" value={(byKind.pitch_used ?? 0).toString()} />
        <Stat label="Pitches won" value={wonCount.toString()} />
      </div>

      <div className="card">
        <div className="label mb-2">Top-performing combos</div>
        {topCombos.length === 0 ? (
          <div className="text-sm text-skye-mute">Generate some pitches from the Generate tab to populate this view.</div>
        ) : (
          <ul className="space-y-2">
            {topCombos.map(([k, n]) => (
              <li key={k} className="flex items-center justify-between text-sm">
                <span>{k.split(' · ').map((s) => s).join(' · ') ? k.split(' · ').map((s) => label(s)).join(' · ') : k}</span>
                <span className="chip chip-active">{n}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="card">
        <div className="label mb-2">Recent events</div>
        <ul className="text-sm divide-y divide-skye-edge">
          {events.slice(0, 20).map((e) => (
            <li key={e.id} className="py-2 flex items-center justify-between gap-2">
              <span className="font-medium">{e.kind}</span>
              <span className="text-skye-mute">{new Date(e.at).toLocaleString()}</span>
            </li>
          ))}
          {events.length === 0 && <li className="py-2 text-skye-mute">No events yet.</li>}
        </ul>
      </div>
    </div>
  );
}

function Stat({ label: l, value }: { label: string; value: string }) {
  return (
    <div className="card">
      <div className="label">{l}</div>
      <div className="text-2xl font-semibold mt-1">{value}</div>
    </div>
  );
}
