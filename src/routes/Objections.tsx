import { useMemo, useState } from 'react';
import { OBJECTIONS, type Objection } from '../data/objections';
import { PERSONAS, VERTICALS, label } from '../data/taxonomy';
import { generateObjectionResponse } from '../lib/ai';
import { useContributedObjections } from '../store/contributedObjections';
import { useEvents } from '../store/events';

export default function Objections() {
  const contributed = useContributedObjections((s) => s.items);
  const add = useContributedObjections((s) => s.add);
  const log = useEvents((s) => s.log);

  const [vertical, setVertical] = useState<string>('');
  const [persona, setPersona] = useState<string>('');
  const [q, setQ] = useState('');
  const [aiFor, setAiFor] = useState<Record<string, string>>({});
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const [newObjection, setNewObjection] = useState('');
  const [newResponse, setNewResponse] = useState('');

  const list: Objection[] = useMemo(() => {
    const all = [...contributed, ...OBJECTIONS];
    return all.filter((o) => {
      if (vertical && !o.verticals.includes(vertical as any)) return false;
      if (persona && !o.personas.includes(persona as any)) return false;
      if (q && !(`${o.objection} ${o.response}`.toLowerCase().includes(q.toLowerCase()))) return false;
      return true;
    });
  }, [contributed, vertical, persona, q]);

  const runAi = async (o: Objection) => {
    setLoadingId(o.id);
    const resp = await generateObjectionResponse(o.objection, o.personas);
    setAiFor((s) => ({ ...s, [o.id]: resp }));
    setLoadingId(null);
    log('objection_used', { id: o.id });
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newObjection.trim() || !newResponse.trim()) return;
    add({
      id: `user-${crypto.randomUUID().slice(0, 8)}`,
      objection: newObjection.trim(),
      response: newResponse.trim(),
      verticals: vertical ? [vertical as any] : [],
      personas: persona ? [persona as any] : [],
    });
    setNewObjection('');
    setNewResponse('');
  };

  return (
    <div className="grid md:grid-cols-[320px_1fr] gap-4">
      <aside className="md:sticky md:top-20 self-start space-y-3">
        <div className="card space-y-3">
          <div>
            <div className="label mb-1">Search</div>
            <input className="input" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search objections…" />
          </div>
          <div>
            <div className="label mb-1">Vertical</div>
            <select className="input" value={vertical} onChange={(e) => setVertical(e.target.value)}>
              <option value="">Any</option>
              {VERTICALS.map((v) => <option key={v} value={v}>{label(v)}</option>)}
            </select>
          </div>
          <div>
            <div className="label mb-1">Persona</div>
            <select className="input" value={persona} onChange={(e) => setPersona(e.target.value)}>
              <option value="">Any</option>
              {PERSONAS.map((p) => <option key={p} value={p}>{label(p)}</option>)}
            </select>
          </div>
        </div>

        <form onSubmit={submit} className="card space-y-2">
          <div className="font-semibold">Contribute from the field</div>
          <textarea className="input min-h-[72px]" placeholder="The objection you heard…" value={newObjection} onChange={(e) => setNewObjection(e.target.value)} />
          <textarea className="input min-h-[72px]" placeholder="How you answered it…" value={newResponse} onChange={(e) => setNewResponse(e.target.value)} />
          <button className="btn btn-primary w-full" type="submit">Add to library</button>
        </form>
      </aside>

      <section>
        <div className="flex items-baseline justify-between mb-3">
          <h1 className="font-semibold">Objection handling library</h1>
          <div className="text-sm text-skye-mute">{list.length} objections</div>
        </div>
        <ul className="space-y-3">
          {list.map((o) => (
            <li key={o.id} className="card">
              <div className="flex items-start justify-between gap-2">
                <div className="font-medium">{o.objection}</div>
                {o.userContributed && <span className="chip chip-active">Field</span>}
              </div>
              <div className="text-sm text-skye-ink/90 mt-2">{o.response}</div>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {o.verticals.map((v) => <span key={v} className="chip">{label(v)}</span>)}
                {o.personas.map((p) => <span key={p} className="chip">{label(p)}</span>)}
              </div>
              <div className="mt-3 flex items-center gap-2">
                <button className="btn" onClick={() => runAi(o)} disabled={loadingId === o.id}>
                  {loadingId === o.id ? 'Generating…' : 'Generate AI response'}
                </button>
              </div>
              {aiFor[o.id] && (
                <div className="mt-3 p-3 bg-skye-edge/40 rounded-lg text-sm">
                  <div className="label mb-1">Claude (mock)</div>
                  {aiFor[o.id]}
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
