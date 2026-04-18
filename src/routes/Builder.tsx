import { useEffect, useMemo, useState } from 'react';
import { usePitches, type SavedPitch } from '../store/pitches';
import { exportPitchPdf } from '../lib/pdf';
import { copy, decodeSharedPitch, encodePitchToHash } from '../lib/share';
import { useEvents } from '../store/events';

export default function Builder() {
  const pitches = usePitches((s) => s.pitches);
  const update = usePitches((s) => s.update);
  const save = usePitches((s) => s.save);
  const remove = usePitches((s) => s.remove);
  const log = useEvents((s) => s.log);

  const [activeId, setActiveId] = useState<string | null>(pitches[0]?.id ?? null);
  const [linkCopied, setLinkCopied] = useState(false);

  useEffect(() => {
    const shared = decodeSharedPitch(location.hash);
    if (shared) {
      const id = crypto.randomUUID();
      save({ ...shared.p, id, title: `${shared.title} (shared)` });
      setActiveId(id);
      history.replaceState(null, '', location.pathname);
    }
  }, [save]);

  const active = useMemo(() => pitches.find((p) => p.id === activeId) ?? null, [pitches, activeId]);

  if (pitches.length === 0) {
    return (
      <div className="card max-w-lg mx-auto text-center">
        <h1 className="font-semibold text-lg">Pitch Builder</h1>
        <p className="text-sm text-skye-mute mt-2">
          No saved pitches yet. Head to the Generate tab, create a pitch, and open it here to customize, save, and share.
        </p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-[280px_1fr] gap-4">
      <aside className="space-y-2">
        <div className="label">Saved pitches</div>
        <ul className="space-y-1.5">
          {pitches.map((p) => (
            <li key={p.id}>
              <button
                onClick={() => setActiveId(p.id)}
                className={`w-full text-left card py-3 ${activeId === p.id ? 'border-skye-accent/50' : ''}`}
              >
                <div className="font-medium">{p.title}</div>
                <div className="text-xs text-skye-mute">
                  {new Date(p.savedAt).toLocaleString()}
                </div>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {active && <BuilderEditor
        key={active.id}
        pitch={active}
        onChange={(patch) => update(active.id, patch)}
        onDelete={() => { remove(active.id); setActiveId(pitches.find((p) => p.id !== active.id)?.id ?? null); }}
        onExport={() => { exportPitchPdf(active, active.title); log('pitch_used', { id: active.id }); }}
        onShare={async () => {
          const url = encodePitchToHash(active, active.title);
          const ok = await copy(url);
          if (ok) { setLinkCopied(true); setTimeout(() => setLinkCopied(false), 1600); }
        }}
        linkCopied={linkCopied}
        onMarkWon={() => log('pitch_won', { id: active.id })}
      />}
    </div>
  );
}

function BuilderEditor({
  pitch, onChange, onDelete, onExport, onShare, linkCopied, onMarkWon,
}: {
  pitch: SavedPitch;
  onChange: (patch: Partial<SavedPitch>) => void;
  onDelete: () => void;
  onExport: () => void;
  onShare: () => void;
  linkCopied: boolean;
  onMarkWon: () => void;
}) {
  const setAt = (key: 'talkingPoints' | 'nextSteps', i: number, v: string) => {
    const arr = [...pitch[key]];
    arr[i] = v;
    onChange({ [key]: arr } as any);
  };
  const addAt = (key: 'talkingPoints' | 'nextSteps') => {
    onChange({ [key]: [...pitch[key], ''] } as any);
  };
  const removeAt = (key: 'talkingPoints' | 'nextSteps', i: number) => {
    const arr = pitch[key].filter((_, idx) => idx !== i);
    onChange({ [key]: arr } as any);
  };

  return (
    <section className="space-y-4">
      <div className="card space-y-3">
        <div>
          <div className="label mb-1">Title</div>
          <input className="input" value={pitch.title} onChange={(e) => onChange({ title: e.target.value })} />
        </div>
        <div>
          <div className="label mb-1">Headline</div>
          <textarea
            className="input min-h-[60px]"
            value={pitch.headline}
            onChange={(e) => onChange({ headline: e.target.value })}
          />
        </div>
        <div>
          <div className="label mb-1">Notes (internal)</div>
          <textarea
            className="input min-h-[60px]"
            placeholder="Context for the call, reminders, prospect details…"
            value={pitch.notes ?? ''}
            onChange={(e) => onChange({ notes: e.target.value })}
          />
        </div>
      </div>

      <EditableList
        title="Talking points"
        values={pitch.talkingPoints}
        onChange={(i, v) => setAt('talkingPoints', i, v)}
        onAdd={() => addAt('talkingPoints')}
        onRemove={(i) => removeAt('talkingPoints', i)}
      />

      <div className="card">
        <div className="label mb-2">Objection handlers</div>
        <ul className="space-y-3">
          {pitch.objections.map((o, i) => (
            <li key={i} className="space-y-1.5">
              <input
                className="input font-medium"
                value={o.objection}
                onChange={(e) => {
                  const next = [...pitch.objections];
                  next[i] = { ...next[i], objection: e.target.value };
                  onChange({ objections: next });
                }}
              />
              <textarea
                className="input min-h-[70px]"
                value={o.response}
                onChange={(e) => {
                  const next = [...pitch.objections];
                  next[i] = { ...next[i], response: e.target.value };
                  onChange({ objections: next });
                }}
              />
            </li>
          ))}
        </ul>
      </div>

      <EditableList
        title="Next steps"
        values={pitch.nextSteps}
        onChange={(i, v) => setAt('nextSteps', i, v)}
        onAdd={() => addAt('nextSteps')}
        onRemove={(i) => removeAt('nextSteps', i)}
      />

      <div className="card flex flex-wrap items-center gap-2">
        <button className="btn btn-primary" onClick={onExport}>Export PDF</button>
        <button className="btn" onClick={onShare}>{linkCopied ? 'Link copied!' : 'Copy share link'}</button>
        <button className="btn" onClick={onMarkWon}>Mark as won</button>
        <div className="flex-1" />
        <button className="btn" onClick={onDelete}>Delete</button>
      </div>
    </section>
  );
}

function EditableList({
  title, values, onChange, onAdd, onRemove,
}: {
  title: string;
  values: string[];
  onChange: (i: number, v: string) => void;
  onAdd: () => void;
  onRemove: (i: number) => void;
}) {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-2">
        <div className="label">{title}</div>
        <button className="text-xs text-skye-accent" onClick={onAdd}>+ Add</button>
      </div>
      <ul className="space-y-2">
        {values.map((v, i) => (
          <li key={i} className="flex gap-2">
            <textarea className="input min-h-[44px]" value={v} onChange={(e) => onChange(i, e.target.value)} />
            <button className="btn" onClick={() => onRemove(i)}>×</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
