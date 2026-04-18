import type { PitchCard } from '../data/pitchCards';
import { label } from '../data/taxonomy';
import { copy } from '../lib/share';

export default function CardDetail({
  card,
  onClose,
}: {
  card: PitchCard;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-30 bg-black/60 p-4 overflow-auto" onClick={onClose}>
      <div
        className="max-w-2xl mx-auto card"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-xs text-skye-mute">{card.verticals.map(label).join(' · ')}</div>
            <h2 className="text-xl font-semibold mt-1">{card.headline}</h2>
          </div>
          <button className="btn" onClick={onClose}>Close</button>
        </div>

        <div className="divider" />

        <section>
          <div className="label mb-1">Talking points</div>
          <ul className="space-y-1 text-sm">
            {card.talkingPoints.map((t) => <li key={t}>• {t}</li>)}
          </ul>
        </section>

        <section className="mt-4">
          <div className="label mb-1">Pain points addressed</div>
          <div className="flex flex-wrap gap-1.5">
            {card.painPoints.map((p) => <span key={p} className="chip">{label(p)}</span>)}
          </div>
        </section>

        <section className="mt-4">
          <div className="label mb-1">Proof points</div>
          <ul className="space-y-1 text-sm">
            {card.proofPoints.map((p) => <li key={p}>• {p}</li>)}
          </ul>
        </section>

        <section className="mt-4">
          <div className="label mb-1">Linked assets</div>
          <ul className="space-y-1 text-sm">
            {card.assets.map((a) => (
              <li key={a.label}>
                <a href={a.url} className="text-skye-accent hover:underline">{a.label}</a>
                <span className="text-skye-mute"> — {a.kind}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="divider" />
        <div className="flex gap-2">
          <button className="btn" onClick={() => window.print()}>Print</button>
          <button
            className="btn"
            onClick={() => copy(`${card.headline}\n\n${card.talkingPoints.map((t) => '• ' + t).join('\n')}`)}
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}
