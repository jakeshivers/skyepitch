import { PROJECTS, projectStats } from '../data/projects';
import { label } from '../data/taxonomy';

export default function ProofPoints() {
  const stats = projectStats();

  return (
    <div className="space-y-4">
      <h1 className="font-semibold">Real project proof — live from Skyeops + Skyefield</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Stat label="Sites completed" value={stats.total.toString()} sub="last 90 days" />
        <Stat label="States active" value={stats.states.toString()} sub="verified coverage" />
        <Stat label="Photos documented" value={stats.photos.toLocaleString()} sub="auditable record" />
        <Stat label="Client satisfaction" value={stats.satisfaction.toFixed(2)} sub="avg / 5.0" />
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        {PROJECTS.map((p) => (
          <div key={p.id} className="card">
            <div className="flex items-baseline justify-between gap-2">
              <div className="font-semibold">{p.client}</div>
              <span className="chip">{label(p.vertical)}</span>
            </div>
            <div className="text-xs text-skye-mute mt-1">
              Completed {new Date(p.completedOn).toLocaleDateString()} · {p.sitesCompleted} sites · {p.states.join(', ')}
            </div>
            {p.testimonial && (
              <blockquote className="mt-3 text-sm italic border-l-2 border-skye-accent pl-3 text-skye-ink/90">
                "{p.testimonial}"
              </blockquote>
            )}
            <div className="mt-3 flex flex-wrap gap-1.5">
              <span className="chip">★ {p.satisfaction.toFixed(1)} / 5</span>
              <span className="chip">{p.photoCount} photos</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Stat({ label: l, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="card">
      <div className="label">{l}</div>
      <div className="text-2xl font-semibold mt-1">{value}</div>
      <div className="text-xs text-skye-mute">{sub}</div>
    </div>
  );
}
