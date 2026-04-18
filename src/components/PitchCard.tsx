import type { PitchCard as P } from '../data/pitchCards';
import { label } from '../data/taxonomy';

export default function PitchCardView({
  card,
  onOpen,
}: {
  card: P;
  onOpen: () => void;
}) {
  return (
    <button
      onClick={onOpen}
      className="card text-left hover:border-skye-accent/40 transition group"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-xs text-skye-mute">{card.verticals.map(label).join(' · ')}</div>
          <h3 className="font-semibold mt-1 leading-snug">{card.headline}</h3>
        </div>
        <span className="text-skye-mute group-hover:text-skye-accent">→</span>
      </div>
      <ul className="mt-3 space-y-1 text-sm text-skye-ink/90">
        {card.talkingPoints.slice(0, 2).map((t) => (
          <li key={t}>• {t}</li>
        ))}
      </ul>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {card.problems.slice(0, 3).map((p) => (
          <span key={p} className="chip">{label(p)}</span>
        ))}
      </div>
    </button>
  );
}
