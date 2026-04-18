import { useMemo, useState } from 'react';
import FilterBar from '../components/FilterBar';
import PitchCardView from '../components/PitchCard';
import CardDetail from '../components/CardDetail';
import { PITCH_CARDS, type PitchCard } from '../data/pitchCards';
import { useFilters } from '../store/filters';

export default function Library() {
  const f = useFilters();
  const [open, setOpen] = useState<PitchCard | null>(null);

  const filtered = useMemo(() => {
    return PITCH_CARDS.filter((c) => {
      const matches = (sel: string[], cardVals: string[]) =>
        sel.length === 0 || sel.some((s) => cardVals.includes(s));
      return (
        matches(f.verticals, c.verticals) &&
        matches(f.problems, c.problems) &&
        matches(f.personas, c.personas) &&
        matches(f.services, c.services)
      );
    });
  }, [f.verticals, f.problems, f.personas, f.services]);

  return (
    <div className="grid md:grid-cols-[320px_1fr] gap-4">
      <aside className="md:sticky md:top-20 self-start">
        <FilterBar />
      </aside>
      <section>
        <div className="flex items-baseline justify-between mb-3">
          <h1 className="text-lg font-semibold">Pitch library</h1>
          <div className="text-sm text-skye-mute">
            {filtered.length} of {PITCH_CARDS.length} cards
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {filtered.map((c) => (
            <PitchCardView key={c.id} card={c} onOpen={() => setOpen(c)} />
          ))}
          {filtered.length === 0 && (
            <div className="card text-skye-mute text-sm col-span-full">
              No cards match those filters. Try clearing one — or head to the Generate tab and create a custom pitch.
            </div>
          )}
        </div>
      </section>
      {open && <CardDetail card={open} onClose={() => setOpen(null)} />}
    </div>
  );
}
