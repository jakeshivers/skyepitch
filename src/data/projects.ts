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
    client: 'National QSR Brand (112 stores)',
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
    client: 'Regional Hospital System',
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
    client: 'Fashion Retailer (Mall Rollout)',
    vertical: 'retail',
    sitesCompleted: 63,
    states: ['NY', 'NJ', 'MA', 'PA'],
    completedOn: '2026-03-30',
    satisfaction: 4.8,
    photoCount: 201,
  },
  {
    id: 'p-004',
    client: 'K-12 District Classroom Refresh',
    vertical: 'education',
    sitesCompleted: 240,
    states: ['TX'],
    completedOn: '2026-01-15',
    satisfaction: 4.9,
    testimonial: 'Entire district done in the summer window. Teachers came back to working rooms.',
    photoCount: 980,
  },
  {
    id: 'p-005',
    client: 'Federal Facility Upgrades',
    vertical: 'government',
    sitesCompleted: 9,
    states: ['VA', 'MD', 'DC'],
    completedOn: '2026-03-02',
    satisfaction: 4.7,
    photoCount: 76,
  },
  {
    id: 'p-006',
    client: 'Hotel Chain Brand Refresh',
    vertical: 'hospitality',
    sitesCompleted: 34,
    states: ['FL', 'GA', 'TN', 'SC'],
    completedOn: '2026-03-20',
    satisfaction: 4.9,
    testimonial: 'Guest-ready finish on every property.',
    photoCount: 289,
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
