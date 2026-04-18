import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FilterBar from '../components/FilterBar';
import StreamingText from '../components/StreamingText';
import { generatePitch, type GeneratedPitch } from '../lib/ai';
import { useFilters } from '../store/filters';
import { useEvents } from '../store/events';
import { usePitches } from '../store/pitches';
import { INSTALLERS } from '../data/installers';
import { label } from '../data/taxonomy';

const REGION_STATES: Record<string, string[]> = {
  northeast: ['NY', 'MA', 'PA', 'NJ', 'CT', 'RI', 'NH', 'VT', 'ME', 'MD', 'DE'],
  southeast: ['FL', 'GA', 'NC', 'SC', 'TN', 'AL', 'MS', 'LA', 'VA', 'WV', 'KY', 'AR'],
  midwest: ['IL', 'IN', 'OH', 'MI', 'WI', 'MN', 'IA', 'MO', 'ND', 'SD', 'NE', 'KS'],
  southwest: ['TX', 'OK', 'NM', 'AZ'],
  west: ['CA', 'NV', 'UT', 'CO', 'WY', 'MT', 'ID'],
  'pacific-northwest': ['WA', 'OR'],
};

export default function Generate() {
  const f = useFilters();
  const logEvent = useEvents((s) => s.log);
  const savePitch = usePitches((s) => s.save);
  const nav = useNavigate();

  const [clientName, setClientName] = useState('');
  const [streamed, setStreamed] = useState('');
  const [generating, setGenerating] = useState(false);
  const [result, setResult] = useState<GeneratedPitch | null>(null);

  const regionInstallers =
    f.region
      ? INSTALLERS.filter((i) => REGION_STATES[f.region!]?.includes(i.state)).length
      : undefined;

  const run = async () => {
    setGenerating(true);
    setStreamed('');
    setResult(null);
    const out = await generatePitch(
      {
        verticals: f.verticals,
        problems: f.problems,
        personas: f.personas,
        services: f.services,
        clientName: clientName || undefined,
        region: f.region,
        installerCountInRegion: regionInstallers,
      },
      (tok) => setStreamed((s) => s + tok)
    );
    setResult(out);
    setGenerating(false);
    logEvent('pitch_generated', {
      vertical: f.verticals[0],
      problem: f.problems[0],
      persona: f.personas[0],
      region: f.region,
    });
  };

  const sendToBuilder = () => {
    if (!result) return;
    const id = crypto.randomUUID();
    savePitch({
      ...result,
      id,
      title: clientName ? `Pitch — ${clientName}` : `Pitch — ${label(f.verticals[0] ?? 'custom')}`,
    });
    nav('/builder');
  };

  return (
    <div className="grid md:grid-cols-[320px_1fr] gap-4">
      <aside className="md:sticky md:top-20 self-start space-y-3">
        <FilterBar />
        <div className="card">
          <div className="label mb-1">Client (optional)</div>
          <input
            className="input"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            placeholder="e.g. Globex Coffee"
          />
          <button
            className="btn btn-primary w-full mt-3 disabled:opacity-60"
            disabled={generating}
            onClick={run}
          >
            {generating ? 'Generating…' : 'Generate pitch'}
          </button>
        </div>
      </aside>

      <section className="space-y-4">
        <div className="card">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h1 className="font-semibold">AI pitch — live</h1>
              <div className="text-xs text-skye-mute mt-0.5">
                Powered by Claude (mocked in prototype). Output changes with your filters.
              </div>
            </div>
            {result && <span className="chip chip-active">Tone · {result.tone}</span>}
          </div>

          <div className="mt-3 flex flex-wrap gap-2 text-sm">
            {regionInstallers !== undefined && (
              <span className="chip">
                Live Skyenet · {regionInstallers} verified installers in {label(f.region!)}
              </span>
            )}
            {result?.nativeOwnedLift && (
              <span className="chip chip-active">Native American-owned differentiator surfaced</span>
            )}
          </div>

          <div className="divider" />

          {!result && !generating && (
            <div className="text-sm text-skye-mute">
              Pick filters on the left (vertical, problem, persona are most useful), optionally add a client name, and hit Generate.
            </div>
          )}

          {generating && <StreamingText text={streamed} done={false} />}

          {result && (
            <div className="space-y-4">
              <div>
                <div className="label mb-1">Headline</div>
                <div className="text-base font-semibold">{result.headline}</div>
              </div>
              <div>
                <div className="label mb-1">Talking points</div>
                <ul className="space-y-1 text-sm">
                  {result.talkingPoints.map((t) => <li key={t}>• {t}</li>)}
                </ul>
              </div>
              <div>
                <div className="label mb-1">Objection handlers</div>
                <ul className="space-y-2 text-sm">
                  {result.objections.map((o) => (
                    <li key={o.objection}>
                      <div className="font-medium">Q: {o.objection}</div>
                      <div className="text-skye-ink/90">A: {o.response}</div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="label mb-1">Next steps</div>
                <ul className="space-y-1 text-sm">
                  {result.nextSteps.map((n) => <li key={n}>• {n}</li>)}
                </ul>
              </div>
              <div className="flex gap-2">
                <button className="btn btn-primary" onClick={sendToBuilder}>
                  Open in Builder
                </button>
                <button className="btn" onClick={run}>Regenerate</button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
