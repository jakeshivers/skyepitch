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
    objection: "Your price is higher than the local sign shop we've been using.",
    response:
      "A local shop shows a lower rate until their print color drifts, or a missed install window costs you a grand-opening day. Our price includes design validation, print management, QC inspection, and photo documentation — that is typically where the hidden cost of cheap sign work lives.",
    verticals: ['retail', 'qsr', 'hospitality', 'franchise-networks'],
    personas: ['procurement', 'regional-facilities-manager'],
  },
  {
    id: 'obj-coverage',
    objection: "Can you actually cover all of our locations nationwide?",
    response:
      "We have verified installer coverage in all 50 states. I can pull up the live Skyenet map right now with installer counts by region — that is real data from our network, not hypothetical.",
    verticals: ['retail', 'qsr', 'multi-location-brands', 'government', 'franchise-networks'],
    personas: ['national-accounts-director', 'franchise-operations-director'],
  },
  {
    id: 'obj-quality',
    objection: "How do I know the installer who shows up is any good?",
    response:
      "Every installer has a tier, a rating, and a job history visible before dispatch. You can require a minimum tier for your program, and every job closes with photo documentation signed off by QC.",
    verticals: ['hospitality', 'retail', 'healthcare', 'multi-location-brands'],
    personas: ['brand-manager', 'regional-facilities-manager'],
  },
  {
    id: 'obj-brand',
    objection: "Our brand standards are strict — we've been burned by inconsistency before.",
    response:
      "That is exactly why we run design, print management, and installation under one roof. The design files get validated by our team before production, color is managed across vendors, and every install gets photo-reviewed against your brand book. One partner. Total alignment.",
    verticals: ['retail', 'hospitality', 'qsr', 'franchise-networks', 'multi-location-brands'],
    personas: ['vp-of-brand', 'brand-manager', 'director-of-retail-experience'],
  },
  {
    id: 'obj-vendors',
    objection: "We already split this across a designer, a printer, and an installer.",
    response:
      "That is the default model, and it works — right up until a deadline slips or a print run lands off-brand. Our pitch is not that you have to fire anyone today. Give us one brand, one region, one rollout to run end-to-end. The single-SOW experience is usually what wins the next conversation.",
    verticals: ['retail', 'qsr', 'multi-location-brands', 'franchise-networks'],
    personas: ['vp-of-brand', 'procurement', 'director-of-retail-experience'],
  },
  {
    id: 'obj-timeline',
    objection: "We've been burned before by missed deadlines on rollouts.",
    response:
      "We commit to weekly milestones in writing, and our median time-to-first-site is 36 hours once artwork is approved. If we slip a milestone, you see it in the dashboard before your boss does — that is a different relationship than you have with most vendors.",
    verticals: ['retail', 'qsr', 'education', 'franchise-networks', 'multi-location-brands'],
    personas: ['national-accounts-director', 'franchise-operations-director', 'general-contractor'],
  },
  {
    id: 'obj-compliance',
    objection: "Our sites have strict ADA and compliance requirements.",
    response:
      "ADA-literate design and compliance-aware installation are core to how we operate. We survey, design, and install against the spec — HIPAA awareness for healthcare, background-plus for government, documented chain of custody on every sign.",
    verticals: ['healthcare', 'government', 'education'],
    personas: ['procurement', 'regional-facilities-manager'],
  },
  {
    id: 'obj-franchise-ops',
    objection: "Our franchisees will push back on disruption during business hours.",
    response:
      "Operator-friendly scheduling is part of how we run rollouts — we work around their open hours and coordinate with local management on site access. Franchisees see completion photos the same day, which is a very different experience than they are used to.",
    verticals: ['franchise-networks', 'qsr'],
    personas: ['franchise-operations-director', 'brand-manager'],
  },
  {
    id: 'obj-native-owned',
    objection: "Does Native American-owned status actually matter for our program?",
    response:
      "In federal, state, and tribal procurement, yes — we can qualify for tribal and DBE set-asides where applicable. For enterprise brands with supplier diversity goals, it is also a legitimate fit. It is never the lead reason to hire us; it is a meaningful tie-breaker when everything else is equal.",
    verticals: ['government', 'multi-location-brands', 'franchise-networks'],
    personas: ['procurement', 'vp-of-brand'],
  },
];
