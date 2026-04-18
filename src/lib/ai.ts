import type { Persona, Problem, Service, Vertical } from '../data/taxonomy';
import { BRAND_NARRATIVE, NATIVE_OWNED_LIFT_VERTICALS, label } from '../data/taxonomy';

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
  nativeOwnedLift: boolean;
};

const toneFor = (personas: Persona[]): string => {
  if (personas.includes('vp-of-brand')) return 'Brand-led, narrative-first, visually literate';
  if (personas.includes('director-of-retail-experience')) return 'Guest-experience framing, detail-aware, calm confidence';
  if (personas.includes('franchise-operations-director')) return 'Operator-friendly, disruption-aware, playbook-oriented';
  if (personas.includes('procurement')) return 'Precise, numbers-first, risk-aware';
  if (personas.includes('national-accounts-director')) return 'Strategic, portfolio-scale, measured';
  if (personas.includes('regional-facilities-manager')) return 'Practical, operational, detail-ready';
  if (personas.includes('brand-manager')) return 'Brand-aware, consistency-focused, visual';
  if (personas.includes('general-contractor')) return 'Jobsite-literate, scope-clean, no-fluff';
  return 'Consultative, confident, sign-industry fluent';
};

const joinList = (xs: string[]) => {
  const arr = xs.map(label);
  if (arr.length <= 1) return arr.join('');
  if (arr.length === 2) return arr.join(' and ');
  return `${arr.slice(0, -1).join(', ')}, and ${arr[arr.length - 1]}`;
};

/**
 * Mock Claude pitch generator.
 *
 * Kept deliberately simple — what matters is the signature and output shape.
 * Swap seam: replace the body with a call to the Anthropic SDK
 * (grounded in Google Sheets content + Supabase installer/perf data per spec §4.1).
 */
export async function generatePitch(
  input: GeneratePitchInput,
  onToken?: (t: string) => void
): Promise<GeneratedPitch> {
  const verticals = input.verticals.length ? joinList(input.verticals) : 'your brand footprint';
  const problems = input.problems.length ? joinList(input.problems) : 'the usual rollout pain';
  const persona = input.personas[0] ? label(input.personas[0]) : 'your team';
  const services = input.services.length ? joinList(input.services) : 'design, print management, and sign installation';
  const client = input.clientName?.trim();
  const regionFrag = input.region ? ` across ${label(input.region)}` : '';
  const installerFrag =
    input.installerCountInRegion && input.region
      ? `We have ${input.installerCountInRegion} verified installers${regionFrag}, ready to dispatch.`
      : 'Our national installer network is already credentialed, rated, and dispatch-ready in all 50 states.';

  const nativeOwnedLift = input.verticals.some((v) =>
    NATIVE_OWNED_LIFT_VERTICALS.includes(v)
  );

  const headline = client
    ? `${BRAND_NARRATIVE} A sign program for ${client}, designed, printed, and installed by one team.`
    : `${BRAND_NARRATIVE} Design, print, and install${regionFrag} under one SOW.`;

  const talkingPoints = [
    `Design, print management, and sign installation handled by one accountable team — purpose-built for ${verticals}.`,
    `Directly addresses ${problems}, which we hear most often from ${persona}s in this category.`,
    installerFrag,
    `Scope can cover ${services} — one PM, one schedule, one invoice.`,
    'Every site closes with photo documentation and a QC signoff reviewed against your brand standard.',
  ];

  if (nativeOwnedLift) {
    talkingPoints.push(
      'Lakota Skye is a Native American-owned company — a fit for tribal, DBE, and enterprise supplier-diversity programs where applicable.'
    );
  }

  const objections = [
    {
      objection: "We already split this across a designer, a printer, and an installer.",
      response:
        `That is the default model. Our pitch is not that you have to fire anyone — give us one region, one brand, or one rollout to run end-to-end. "${BRAND_NARRATIVE}" is something reps demonstrate, not something we just say.`,
    },
    {
      objection: "Your price looks higher than the local sign shop.",
      response:
        'The line item is higher; the landed cost is usually lower once you include design validation, print management, QC inspection, and the cost of a missed grand opening.',
    },
    {
      objection: "Can you really cover our full footprint?",
      response:
        input.installerCountInRegion
          ? `We have ${input.installerCountInRegion} verified installers in the ${label(input.region ?? '')} region alone — I can show you the live Skyenet map right now.`
          : 'I can open the live Skyenet installer map and show you verified coverage by state in real time.',
    },
  ];

  const nextSteps = [
    client
      ? `Share the ${client}-specific one-pager with the ${persona} on their team.`
      : `Share the ${verticals} one-pager with the ${persona}.`,
    'Schedule a 20-minute walk-through of the Skyenet installer map and recent project gallery.',
    'Propose a bounded first engagement — one region, one brand, or one rollout — scoped to 30 days.',
  ];

  const result: GeneratedPitch = {
    input,
    headline,
    talkingPoints,
    objections,
    nextSteps,
    tone: toneFor(input.personas),
    nativeOwnedLift,
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
  return `For ${persona}: ${objection.replace(/[.?!]+$/, '')} — here is how I would answer. Acknowledge the concern directly, anchor to data we already have (installer coverage, print/color management, QC signoff, photo documentation), and offer a bounded first step (one region, one brand, 30 days) rather than a full commitment. "${BRAND_NARRATIVE}" is easier to prove on a pilot than to argue in a slide.`;
}
