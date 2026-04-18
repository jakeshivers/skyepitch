// Grid-based US map (tile grid) — inspired by NPR / FiveThirtyEight layouts.
// Keeps the prototype dependency-free while still communicating coverage visually.

const GRID: (string | null)[][] = [
  [null, null, null, null, null, null, null, null, null, null, 'ME'],
  [null, null, null, null, null, null, null, null, null, 'VT', 'NH'],
  ['WA', null, 'MT', 'ND', 'MN', null, 'WI', null, 'MI', 'NY', 'MA'],
  ['OR', 'ID', 'WY', 'SD', 'IA', 'IL', 'IN', 'OH', 'PA', 'NJ', 'CT'],
  ['CA', 'NV', 'UT', 'CO', 'NE', 'MO', 'KY', 'WV', 'VA', 'MD', 'RI'],
  [null, 'AZ', 'NM', 'KS', 'AR', 'TN', 'NC', 'SC', 'DC', 'DE', null],
  [null, null, null, 'OK', 'LA', 'MS', 'AL', 'GA', null, null, null],
  ['AK', null, null, 'TX', null, null, null, null, 'FL', null, 'HI'],
];

export default function UsMap({
  coverage,
  selected,
  onSelect,
}: {
  coverage: Record<string, number>;
  selected?: string;
  onSelect?: (state: string | undefined) => void;
}) {
  const max = Math.max(1, ...Object.values(coverage));
  return (
    <div className="inline-block">
      <div className="grid grid-cols-[repeat(11,minmax(0,1fr))] gap-1">
        {GRID.flatMap((row, ri) =>
          row.map((st, ci) => {
            const key = `${ri}-${ci}`;
            if (!st) return <div key={key} className="aspect-square" />;
            const n = coverage[st] ?? 0;
            const pct = n / max;
            const bg =
              n === 0
                ? 'bg-skye-edge/40 text-skye-mute'
                : pct > 0.66
                ? 'bg-skye-accent/80 text-skye-bg'
                : pct > 0.33
                ? 'bg-skye-accent/50 text-skye-ink'
                : 'bg-skye-accent/25 text-skye-ink';
            const isSel = selected === st;
            return (
              <button
                key={key}
                onClick={() => onSelect?.(isSel ? undefined : st)}
                className={`aspect-square rounded-md text-[10px] font-semibold grid place-items-center transition ${bg} ${
                  isSel ? 'ring-2 ring-skye-accent' : 'hover:ring-1 hover:ring-skye-accent/40'
                }`}
                title={`${st} — ${n} installers`}
              >
                <div className="leading-none">
                  <div>{st}</div>
                  <div className="opacity-70 text-[9px]">{n || ''}</div>
                </div>
              </button>
            );
          })
        )}
      </div>
      <div className="mt-2 flex items-center gap-2 text-xs text-skye-mute">
        <span>Coverage</span>
        <span className="size-3 rounded bg-skye-edge/40 inline-block" />
        <span className="size-3 rounded bg-skye-accent/25 inline-block" />
        <span className="size-3 rounded bg-skye-accent/50 inline-block" />
        <span className="size-3 rounded bg-skye-accent/80 inline-block" />
        <span>More installers →</span>
      </div>
    </div>
  );
}
