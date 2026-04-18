import type { Vertical } from './taxonomy';

export type Project = {
  id: string;
  client: string;
  vertical: Vertical;
  sitesCompleted: number;
  states: string[];
  completedOn: string; // ISO date
  satisfaction: number; // 0-5
  testimonial?: string;
  photoCount: number;
};

export const PROJECTS: Project[] = [
  {
    id: 'p-001',
    client: 'National QSR Brand — 112-store rebrand',
    vertical: 'qsr',
    sitesCompleted: 112,
    states: ['TX', 'CA', 'FL', 'GA', 'NC'],
    completedOn: '2026-03-12',
    satisfaction: 4.9,
    testimonial: 'Skye delivered every location on calendar. That has never happened for us before.',
    photoCount: 448,
  },
  {
    id: 'p-002',
    client: 'Regional Hospital System — ADA wayfinding refresh',
    vertical: 'healthcare',
    sitesCompleted: 18,
    states: ['OH', 'MI', 'IN'],
    completedOn: '2026-02-28',
    satisfaction: 5.0,
    testimonial: 'Compliance-ready documentation on day one. Audit was a non-event.',
    photoCount: 312,
  },
  {
    id: 'p-003',
    client: 'Fashion Retailer — mall-based brand rollout',
    vertical: 'retail',
    sitesCompleted: 63,
    states: ['NY', 'NJ', 'MA', 'PA'],
    completedOn: '2026-03-30',
    satisfaction: 4.8,
    photoCount: 201,
  },
  {
    id: 'p-004',
    client: 'K-12 District — environmental graphics & wayfinding',
    vertical: 'education',
    sitesCompleted: 240,
    states: ['TX'],
    completedOn: '2026-01-15',
    satisfaction: 4.9,
    testimonial: 'Entire district done in the summer window. Teachers came back to finished buildings.',
    photoCount: 980,
  },
  {
    id: 'p-005',
    client: 'Federal Facility Program — interior signage',
    vertical: 'government',
    sitesCompleted: 9,
    states: ['VA', 'MD', 'DC'],
    completedOn: '2026-03-02',
    satisfaction: 4.7,
    photoCount: 76,
  },
  {
    id: 'p-006',
    client: 'Hotel Chain — brand refresh across 34 properties',
    vertical: 'hospitality',
    sitesCompleted: 34,
    states: ['FL', 'GA', 'TN', 'SC'],
    completedOn: '2026-03-20',
    satisfaction: 4.9,
    testimonial: 'Guest-ready finish on every property.',
    photoCount: 289,
  },
  {
    id: 'p-007',
    client: 'National Franchise Network — exterior signage rollout',
    vertical: 'franchise-networks',
    sitesCompleted: 184,
    states: ['TX', 'FL', 'GA', 'NC', 'VA', 'OH', 'PA', 'AZ'],
    completedOn: '2026-04-05',
    satisfaction: 4.8,
    testimonial: 'Operators actually liked working with the install teams. Rare.',
    photoCount: 612,
  },
  {
    id: 'p-008',
    client: 'Beverage Brand — tradeshow activation program',
    vertical: 'event-and-tradeshow',
    sitesCompleted: 22,
    states: ['NV', 'IL', 'NY', 'CA', 'FL'],
    completedOn: '2026-03-24',
    satisfaction: 4.9,
    photoCount: 188,
  },
];

export const projectStats = () => {
  const total = PROJECTS.reduce((s, p) => s + p.sitesCompleted, 0);
  const states = new Set(PROJECTS.flatMap((p) => p.states));
  const photos = PROJECTS.reduce((s, p) => s + p.photoCount, 0);
  const satisfaction =
    PROJECTS.reduce((s, p) => s + p.satisfaction, 0) / PROJECTS.length;
  return { total, states: states.size, photos, satisfaction };
};
