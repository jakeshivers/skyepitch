import { useMemo, useState } from 'react';
import { CERTIFICATIONS } from '../data/certifications';

export default function Credentials() {
  const [q, setQ] = useState('');
  const list = useMemo(() => {
    if (!q) return CERTIFICATIONS;
    const n = q.toLowerCase();
    return CERTIFICATIONS.filter((c) =>
      `${c.name} ${c.abbr} ${c.issuer} ${c.summary}`.toLowerCase().includes(n)
    );
  }, [q]);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      <div className="flex items-baseline justify-between">
        <h1 className="font-semibold">Installer certifications</h1>
        <div className="text-sm text-skye-mute">{list.length} of {CERTIFICATIONS.length}</div>
      </div>
      <input
        className="input"
        placeholder="Search certifications…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <ul className="space-y-3">
        {list.map((c) => (
          <li key={c.id} className="card">
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="font-semibold">{c.name}</div>
                <div className="text-xs text-skye-mute">{c.issuer}</div>
              </div>
              <span className="chip">{c.abbr}</span>
            </div>
            <p className="text-sm mt-2">{c.summary}</p>
            <div className="divider" />
            <div className="text-sm">
              <div className="label mb-1">How to pitch it</div>
              <div>"{c.talkingPoint}"</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
