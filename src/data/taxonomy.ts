export const VERTICALS = [
  'retail',
  'qsr',
  'hospitality',
  'healthcare',
  'education',
  'government',
  'commercial-real-estate',
  'event-and-tradeshow',
  'franchise-networks',
  'multi-location-brands',
] as const;

export const PROBLEMS = [
  'project-delays',
  'installer-availability',
  'geographic-coverage',
  'quality-control',
  'compliance',
  'brand-consistency',
  'speed-to-completion',
  'single-source-accountability',
] as const;

export const PERSONAS = [
  'vp-of-brand',
  'director-of-retail-experience',
  'franchise-operations-director',
  'regional-facilities-manager',
  'national-accounts-director',
  'general-contractor',
  'brand-manager',
  'procurement',
] as const;

export const SERVICES = [
  'sign-installation',
  'fleet-graphics',
  'brand-rollouts',
  'art-and-mural-installation',
  'ada-wayfinding',
  'environmental-graphics',
  'event-and-tradeshow-installation',
  'survey-and-auditing',
  'design-services',
  'print-management',
] as const;

export const REGIONS = [
  'northeast',
  'southeast',
  'midwest',
  'southwest',
  'west',
  'pacific-northwest',
] as const;

export type Vertical = (typeof VERTICALS)[number];
export type Problem = (typeof PROBLEMS)[number];
export type Persona = (typeof PERSONAS)[number];
export type Service = (typeof SERVICES)[number];
export type Region = (typeof REGIONS)[number];

const OVERRIDES: Record<string, string> = {
  qsr: 'QSR',
  'ada-wayfinding': 'ADA / Wayfinding',
  'vp-of-brand': 'VP of Brand',
};

export const label = (s: string) => {
  if (OVERRIDES[s]) return OVERRIDES[s];
  return s.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
};

/** Lakota Skye's core narrative — threaded through generated pitches. */
export const BRAND_NARRATIVE = 'One partner. Total alignment.';

/** Verticals where Native American-owned status is surfaced automatically. */
export const NATIVE_OWNED_LIFT_VERTICALS: Vertical[] = [
  'government',
  'franchise-networks',
  'multi-location-brands',
];
