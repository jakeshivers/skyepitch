import type { Persona, Problem, Service, Vertical } from '../data/taxonomy';
import { label } from '../data/taxonomy';

export type GeneratePitchInput = {
  verticals: Vertical[];
  problems: Problem[];
  personas: Persona[];
  services: Service[];
  clientName?: string;
  region?: string;
  installerCountInRegion?: number;
};

export type GeneratedPitch = {
  input: GeneratePitchInput;
  headline: string;
  talkingPoints: string[];
  objections: { objection: string; response: string }[];
  nextSteps: string[];
  tone: string;
};

const toneFor = (personas: Persona[]): string => {
  if (personas.includes('procurement')) return 'Precise, numbers-first, risk-aware';
  if (personas.includes('owner')) return 'Direct, outcome-led, decisive';
  if (personas.includes('national-accounts-director')) return 'Strategic, portfolio-scale, measured';
  if (personas.includes('regional-facilities-manager')) return 'Practical, operational, detail-ready';
  if (personas.includes('brand-manager')) return 'Brand-aware, consistency-focused, visual';
  if (personas.includes('general-contractor')) return 'Jobsite-literate, scope-clean, no-fluff';
  if (personas.includes('ops-director')) return 'Process-oriented, predictable, systems-level';
  return 'Consultative, confident, installer-industry fluent';
};

const joinList = (xs: string[]) => {
  const arr = xs.map(label);
  if (arr.length <= 1) return arr.join('');
  if (arr.length === 2) return arr.join(' and ');
  return `${arr.slice(0, -1).join(', ')}, and ${arr[arr.length - 1]}`;
};

export async function generatePitch(
  input: GeneratePitchInput,
  onToken?: (t: string) => void
): Promise<GeneratedPitch> {
  // simulated latency + streaming
  const verticals = input.verticals.length ? joinList(input.verticals) : 'your industry';
  const problems = input.problems.length ? joinList(input.problems) : 'the usual rollout pain';
  const persona = input.personas[0] ? label(input.personas[0]) : 'your team';
  const services = input.services.length ? joinList(input.services) : 'installation and project management';
  const client = input.clientName?.trim();
  const clientFrag = client ? ` for ${client}` : '';
  const regionFrag = input.region ? ` across ${label(input.region)}` : '';
  const installerFrag =
    input.installerCountInRegion && input.region
      ? `We have ${input.installerCountInRegion} verified installers${regionFrag}, ready to dispatch.`
      : 'Our national installer network is already credentialed, rated, and dispatch-ready.';

  const headline = client
    ? `A dispatch-ready installation plan for ${client}, built for ${persona}.`
    : `Dispatch-ready installations${regionFrag}, built for ${persona}.`;

  const talkingPoints = [
    `Purpose-built for ${verticals} — not a generic IT-channel pitch.`,
    `Directly addresses ${problems}, which we hear most often from ${persona}s.`,
    installerFrag,
    `Scope spans ${services} with one accountable PM per engagement.`,
    'Every site closes with photo documentation and a QC signoff — audit-ready from day one.',
  ];

  const objections = [
    {
      objection: "We already have a vendor.",
      response:
        'Keep them. Hand us one problem region or one brand as a test — the comparison makes itself inside a quarter.',
    },
    {
      objection: "Your price looks higher.",
      response:
        'The line item is higher; the landed cost is usually lower once you include QC inspection, documentation, and the cost of a missed open.',
    },
    {
      objection: "Can you really cover our full footprint?",
      response:
        input.installerCountInRegion
          ? `We have ${input.installerCountInRegion} verified installers in just the ${label(input.region ?? '')} region alone — I can show you the live map right now.`
          : 'I can open the live installer map and show you verified coverage by state in real time.',
    },
  ];

  const nextSteps = [
    client
      ? `Share the ${client}-specific one-pager with the ${persona} on their team.`
      : `Share the ${verticals} one-pager with the ${persona}.`,
    'Schedule a 20-minute walk-through of the Skyenet installer map.',
    'Propose a 1-region or 1-brand pilot scoped to 30 days.',
  ];

  const result: GeneratedPitch = {
    input,
    headline,
    talkingPoints,
    objections,
    nextSteps,
    tone: toneFor(input.personas),
  };

  if (onToken) {
    const text = [headline, ...talkingPoints, ...nextSteps].join(' ');
    for (const word of text.split(/(\s+)/)) {
      await new Promise((r) => setTimeout(r, 14));
      onToken(word);
    }
  } else {
    await new Promise((r) => setTimeout(r, 420));
  }

  return result;
}

export async function generateObjectionResponse(
  objection: string,
  personas: Persona[]
): Promise<string> {
  await new Promise((r) => setTimeout(r, 480));
  const persona = personas[0] ? label(personas[0]) : 'a decision-maker';
  return `For ${persona}: ${objection.replace(/[.?!]+$/, '')} — here is how I would answer. Acknowledge the concern directly, anchor to data we already have (installer coverage, QC signoff, photo documentation), and offer a bounded first step (one region, one brand, 30 days) rather than a full commitment. That reframes the conversation from price to risk, which is where we win.`;
}
