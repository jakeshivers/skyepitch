import { useMemo, useState } from 'react';
import UsMap from '../components/UsMap';
import { INSTALLERS, coverageByState, type Installer, type InstallerTier } from '../data/installers';

const TIERS: InstallerTier[] = ['platinum', 'gold', 'silver', 'certified'];

export default function Installers() {
  const [state, setState] = useState<string | undefined>();
  const [tier, setTier] = useState<InstallerTier | undefined>();
  const [cert, setCert] = useState<string>('');
  const [minRating, setMinRating] = useState(0);
  const [availOnly, setAvailOnly] = useState(false);
  const [selected, setSelected] = useState<Installer | null>(null);

  const coverage = useMemo(coverageByState, []);

  const certOptions = useMemo(() => {
    const s = new Set<string>();
    INSTALLERS.forEach((i) => i.certifications.forEach((c) => s.add(c)));
    return ['', ...Array.from(s).sort()];
  }, []);

  const filtered = useMemo(() => {
    return INSTALLERS.filter((i) => {
      if (state && i.state !== state) return false;
      if (tier && i.tier !== tier) return false;
      if (cert && !i.certifications.includes(cert)) return false;
      if (i.rating < minRating) return false;
      if (availOnly && !i.available) return false;
      return true;
    });
  }, [state, tier, cert, minRating, availOnly]);

  return (
    <div className="grid lg:grid-cols-[minmax(0,1fr)_360px] gap-4">
      <section>
        <div className="card">
          <div className="flex items-baseline justify-between">
            <h1 className="font-semibold">Skyenet installer network</h1>
            <div className="text-xs text-skye-mute">
              {INSTALLERS.length} installers · {Object.keys(coverage).length} states
            </div>
          </div>
          <div className="mt-3 overflow-x-auto">
            <UsMap coverage={coverage} selected={state} onSelect={setState} />
          </div>
        </div>

        <div className="card mt-4">
          <div className="flex items-baseline justify-between">
            <div className="font-semibold">{filtered.length} matching installers</div>
            {state && <button className="text-xs text-skye-mute hover:text-skye-ink" onClick={() => setState(undefined)}>Clear state</button>}
          </div>
          <ul className="mt-3 divide-y divide-skye-edge">
            {filtered.slice(0, 40).map((i) => (
              <li key={i.id}>
                <button
                  onClick={() => setSelected(i)}
                  className="w-full py-2.5 text-left flex items-center justify-between gap-3 hover:bg-skye-edge/40 rounded-lg px-2"
                >
                  <div>
                    <div className="font-medium">{i.name}</div>
                    <div className="text-xs text-skye-mute">
                      {i.city}, {i.state} · {i.jobs} jobs · ★ {i.rating.toFixed(1)}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`chip ${i.available ? 'chip-active' : ''}`}>{i.available ? 'Available' : 'Booked'}</span>
                    <span className="chip">{i.tier}</span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <aside className="card h-max space-y-3">
        <div>
          <div className="label mb-1">Tier</div>
          <div className="flex flex-wrap gap-1.5">
            {TIERS.map((t) => (
              <button
                key={t}
                onClick={() => setTier(tier === t ? undefined : t)}
                className={`chip ${tier === t ? 'chip-active' : ''}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <div>
          <div className="label mb-1">Certification</div>
          <select className="input" value={cert} onChange={(e) => setCert(e.target.value)}>
            {certOptions.map((c) => <option key={c} value={c}>{c || 'Any'}</option>)}
          </select>
        </div>
        <div>
          <div className="label mb-1">Minimum rating: {minRating.toFixed(1)}</div>
          <input
            type="range"
            min={0}
            max={5}
            step={0.1}
            value={minRating}
            onChange={(e) => setMinRating(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={availOnly} onChange={(e) => setAvailOnly(e.target.checked)} />
          Available only
        </label>
      </aside>

      {selected && (
        <div className="fixed inset-0 z-30 bg-black/60 p-4 overflow-auto" onClick={() => setSelected(null)}>
          <div className="max-w-lg mx-auto card" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between">
              <div>
                <h2 className="font-semibold text-lg">{selected.name}</h2>
                <div className="text-sm text-skye-mute">{selected.city}, {selected.state}</div>
              </div>
              <button className="btn" onClick={() => setSelected(null)}>Close</button>
            </div>
            <div className="divider" />
            <div className="grid grid-cols-3 gap-3 text-sm">
              <div><div className="label">Tier</div><div>{selected.tier}</div></div>
              <div><div className="label">Rating</div><div>★ {selected.rating.toFixed(1)}</div></div>
              <div><div className="label">Jobs</div><div>{selected.jobs}</div></div>
            </div>
            <div className="mt-3">
              <div className="label mb-1">Certifications</div>
              <div className="flex flex-wrap gap-1.5">
                {selected.certifications.map((c) => <span key={c} className="chip">{c}</span>)}
              </div>
            </div>
            <div className="mt-3">
              <span className={`chip ${selected.available ? 'chip-active' : ''}`}>
                {selected.available ? 'Available for dispatch' : 'Currently booked'}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
