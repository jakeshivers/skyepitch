import { PERSONAS, PROBLEMS, REGIONS, SERVICES, VERTICALS, label } from '../data/taxonomy';
import { useFilters } from '../store/filters';

function Group<T extends string>({
  title,
  values,
  selected,
  onToggle,
}: {
  title: string;
  values: readonly T[];
  selected: readonly T[];
  onToggle: (v: T) => void;
}) {
  return (
    <div>
      <div className="label mb-1.5">{title}</div>
      <div className="flex flex-wrap gap-1.5">
        {values.map((v) => {
          const active = selected.includes(v);
          return (
            <button
              key={v}
              onClick={() => onToggle(v)}
              className={`chip ${active ? 'chip-active' : ''}`}
            >
              {label(v)}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function FilterBar({ compact = false }: { compact?: boolean }) {
  const f = useFilters();
  return (
    <div className={`card space-y-4 ${compact ? 'p-3' : ''}`}>
      <div className="flex items-center justify-between">
        <div className="font-semibold">Filters</div>
        <button className="text-xs text-skye-mute hover:text-skye-ink" onClick={f.clear}>
          Clear all
        </button>
      </div>
      <Group title="Vertical" values={VERTICALS} selected={f.verticals} onToggle={(v) => f.toggle('verticals', v)} />
      <Group title="Problem" values={PROBLEMS} selected={f.problems} onToggle={(v) => f.toggle('problems', v)} />
      <Group title="Persona" values={PERSONAS} selected={f.personas} onToggle={(v) => f.toggle('personas', v)} />
      <Group title="Service" values={SERVICES} selected={f.services} onToggle={(v) => f.toggle('services', v)} />
      <div>
        <div className="label mb-1.5">Region</div>
        <div className="flex flex-wrap gap-1.5">
          {REGIONS.map((r) => (
            <button
              key={r}
              onClick={() => f.setRegion(f.region === r ? undefined : r)}
              className={`chip ${f.region === r ? 'chip-active' : ''}`}
            >
              {label(r)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
