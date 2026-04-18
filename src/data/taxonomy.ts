export const VERTICALS = [
  'retail',
  'qsr',
  'hospitality',
  'healthcare',
  'education',
  'government',
  'commercial-real-estate',
  'construction',
] as const;

export const PROBLEMS = [
  'installer-availability',
  'geographic-coverage',
  'quality-control',
  'compliance',
  'speed-to-completion',
  'project-delays',
] as const;

export const PERSONAS = [
  'owner',
  'regional-facilities-manager',
  'national-accounts-director',
  'ops-director',
  'procurement',
  'general-contractor',
  'brand-manager',
] as const;

export const SERVICES = [
  'installation',
  'inspection',
  'project-management',
  'network-services',
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

export const label = (s: string) =>
  s.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
