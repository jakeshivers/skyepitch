import type { Persona, Problem, Service, Vertical } from './taxonomy';

export type PitchCard = {
  id: string;
  headline: string;
  talkingPoints: string[];
  painPoints: string[];
  proofPoints: string[];
  verticals: Vertical[];
  problems: Problem[];
  personas: Persona[];
  services: Service[];
  assets: { label: string; kind: 'one-pager' | 'case-study' | 'photos' | 'spec-sheet'; url: string }[];
};

export const PITCH_CARDS: PitchCard[] = [
  {
    id: 'retail-rollout-speed',
    headline: 'Nationwide rollouts on a predictable timeline.',
    talkingPoints: [
      'Verified installer coverage in all 50 states',
      'Single point of accountability across every site',
      'Weekly milestone reporting, not monthly surprises',
    ],
    painPoints: ['project-delays', 'geographic-coverage'],
    proofPoints: [
      '47 verified installations across 12 states in the last 90 days',
      'Average site turnaround: 6.2 business days',
    ],
    verticals: ['retail', 'qsr'],
    problems: ['project-delays', 'geographic-coverage', 'speed-to-completion'],
    personas: ['national-accounts-director', 'ops-director'],
    services: ['installation', 'project-management'],
    assets: [
      { label: 'Retail rollout one-pager', kind: 'one-pager', url: '#' },
      { label: 'QSR case study — 112 locations', kind: 'case-study', url: '#' },
    ],
  },
  {
    id: 'healthcare-compliance',
    headline: 'Compliance-first installations for regulated environments.',
    talkingPoints: [
      'HIPAA-aware field procedures',
      'Credentialed installers only — no subcontractor surprises',
      'Documented chain of custody for every device',
    ],
    painPoints: ['compliance', 'quality-control'],
    proofPoints: [
      '100% compliance audit pass rate in 2025',
      'Every installer background-checked and badged',
    ],
    verticals: ['healthcare'],
    problems: ['compliance', 'quality-control'],
    personas: ['ops-director', 'procurement'],
    services: ['installation', 'inspection'],
    assets: [
      { label: 'Healthcare compliance spec sheet', kind: 'spec-sheet', url: '#' },
    ],
  },
  {
    id: 'hospitality-quality',
    headline: 'Guest-ready sites — quality you can see on day one.',
    talkingPoints: [
      'On-site QC inspection included, not extra',
      'Photo documentation of every install for your records',
      'Brand-standard adherence verified before signoff',
    ],
    painPoints: ['quality-control'],
    proofPoints: [
      '4.9/5 average installer rating across 2,300+ jobs',
      'Zero callback rate on last 60 hospitality projects',
    ],
    verticals: ['hospitality', 'retail'],
    problems: ['quality-control'],
    personas: ['brand-manager', 'regional-facilities-manager'],
    services: ['installation', 'inspection'],
    assets: [
      { label: 'Photo gallery — brand standard installs', kind: 'photos', url: '#' },
    ],
  },
  {
    id: 'availability-surge',
    headline: 'Surge capacity when your timeline moves up.',
    talkingPoints: [
      '3,400+ credentialed installers in the network',
      'Typical dispatch within 48 hours for priority jobs',
      'Regional bench depth prevents single-installer bottlenecks',
    ],
    painPoints: ['installer-availability', 'speed-to-completion'],
    proofPoints: [
      '98% fill rate on same-week dispatch requests',
      'Median time-to-first-site: 36 hours',
    ],
    verticals: ['retail', 'qsr', 'commercial-real-estate'],
    problems: ['installer-availability', 'speed-to-completion'],
    personas: ['national-accounts-director', 'general-contractor'],
    services: ['installation'],
    assets: [{ label: 'Dispatch SLA one-pager', kind: 'one-pager', url: '#' }],
  },
  {
    id: 'education-scale',
    headline: 'District-wide deployments on a school calendar.',
    talkingPoints: [
      'Summer-window capacity planning',
      'Building-by-building sequencing to avoid classroom disruption',
      'Coordinated IT + physical install teams',
    ],
    painPoints: ['project-delays', 'geographic-coverage'],
    proofPoints: ['Completed 240+ classroom refreshes in a 9-week window'],
    verticals: ['education'],
    problems: ['speed-to-completion', 'project-delays'],
    personas: ['ops-director', 'procurement'],
    services: ['installation', 'project-management', 'network-services'],
    assets: [{ label: 'Education district case study', kind: 'case-study', url: '#' }],
  },
  {
    id: 'government-coverage',
    headline: 'Federal, state, and municipal coverage with documentation.',
    talkingPoints: [
      'Installers cleared for sensitive facilities',
      'Full documentation packet per site',
      'E-Verify and W-9 on file for every tech',
    ],
    painPoints: ['compliance', 'geographic-coverage'],
    proofPoints: ['Active contracts across 14 state agencies'],
    verticals: ['government'],
    problems: ['compliance', 'geographic-coverage'],
    personas: ['procurement', 'ops-director'],
    services: ['installation', 'inspection'],
    assets: [{ label: 'Government compliance packet', kind: 'spec-sheet', url: '#' }],
  },
  {
    id: 'cre-multi-site',
    headline: 'Portfolio-wide visibility, property-by-property execution.',
    talkingPoints: [
      'One dashboard across every property',
      'Property manager ride-along scheduling',
      'Tenant-aware work windows',
    ],
    painPoints: ['project-delays', 'quality-control'],
    proofPoints: ['Portfolios up to 600 properties under active management'],
    verticals: ['commercial-real-estate'],
    problems: ['project-delays', 'quality-control'],
    personas: ['regional-facilities-manager', 'owner'],
    services: ['project-management', 'installation'],
    assets: [{ label: 'CRE portfolio one-pager', kind: 'one-pager', url: '#' }],
  },
  {
    id: 'construction-gc-partner',
    headline: 'The GC-friendly installation partner.',
    talkingPoints: [
      'Clean scope boundaries with your trades',
      'Bonded and insured per your jobsite requirements',
      'Punchlist closeout inside 5 business days',
    ],
    painPoints: ['quality-control', 'speed-to-completion'],
    proofPoints: ['Preferred vendor with 18 national GCs'],
    verticals: ['construction', 'commercial-real-estate'],
    problems: ['quality-control', 'speed-to-completion'],
    personas: ['general-contractor', 'ops-director'],
    services: ['installation', 'inspection'],
    assets: [{ label: 'GC partner one-pager', kind: 'one-pager', url: '#' }],
  },
];
