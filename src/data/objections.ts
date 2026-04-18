import type { Persona, Vertical } from './taxonomy';

export type Objection = {
  id: string;
  objection: string;
  response: string;
  verticals: Vertical[];
  personas: Persona[];
  userContributed?: boolean;
};

export const OBJECTIONS: Objection[] = [
  {
    id: 'obj-price',
    objection: "Your price is higher than the local installer we've been using.",
    response:
      "A local installer shows a lower rate until a missed window costs you a re-open day. Our price includes QC inspection, photo documentation, and a single accountable PM — that is typically where the hidden cost of cheap installs lives.",
    verticals: ['retail', 'qsr', 'hospitality'],
    personas: ['procurement', 'ops-director'],
  },
  {
    id: 'obj-coverage',
    objection: "Can you actually cover all of our locations?",
    response:
      "We have verified installer coverage in every state in your footprint. I can show you the live map right now with installer counts by region — it is real data from our Skyenet network, not hypothetical.",
    verticals: ['retail', 'qsr', 'commercial-real-estate', 'government'],
    personas: ['national-accounts-director', 'ops-director'],
  },
  {
    id: 'obj-quality',
    objection: "How do I know the installer who shows up is any good?",
    response:
      "Every installer has a tier, a rating, and a job history visible before dispatch. You can request a minimum tier for your projects, and every job closes with photo documentation signed off by QC.",
    verticals: ['hospitality', 'retail', 'healthcare'],
    personas: ['brand-manager', 'regional-facilities-manager'],
  },
  {
    id: 'obj-timeline',
    objection: "We've been burned before by missed deadlines.",
    response:
      "We commit to weekly milestones in writing, and our median time-to-first-site is 36 hours. If we slip a milestone, you see it in the dashboard before your boss does — that is a different relationship than you have with most vendors.",
    verticals: ['retail', 'qsr', 'education', 'construction'],
    personas: ['national-accounts-director', 'general-contractor'],
  },
  {
    id: 'obj-incumbent',
    objection: "We already have a vendor. Why change?",
    response:
      "You do not have to change vendors today. Start by giving us a region or a single brand test. Most clients keep the incumbent for the stable markets and use us to absorb their problem regions — the comparison makes itself.",
    verticals: ['retail', 'qsr', 'commercial-real-estate'],
    personas: ['ops-director', 'procurement'],
  },
  {
    id: 'obj-compliance',
    objection: "Our facilities have strict compliance requirements.",
    response:
      "Healthcare, government, and regulated environments are a core part of our network. We can filter dispatch to installers holding the specific certifications you need — HIPAA, background-plus, state low-voltage, OSHA — and surface the documentation before they show up.",
    verticals: ['healthcare', 'government'],
    personas: ['procurement', 'ops-director'],
  },
];
