import type { Persona, Problem, Service, Vertical } from './taxonomy';

export type PitchCard = {
  id: string;
  headline: string;
  talkingPoints: string[];
  painPoints: Problem[];
  proofPoints: string[];
  verticals: Vertical[];
  problems: Problem[];
  personas: Persona[];
  services: Service[];
  assets: { label: string; kind: 'one-pager' | 'case-study' | 'photos' | 'spec-sheet'; url: string }[];
};

export const PITCH_CARDS: PitchCard[] = [
  {
    id: 'one-partner-brand-rollout',
    headline: 'One partner. Total alignment. Design through install, under one roof.',
    talkingPoints: [
      'Design, print management, and installation handled by one accountable team',
      'No vendor hand-offs, no finger-pointing when a site is not guest-ready',
      'One PM, one schedule, one invoice per rollout',
    ],
    painPoints: ['single-source-accountability', 'brand-consistency'],
    proofPoints: [
      'Brand rollouts completed across 112 QSR locations on a single schedule',
      'Zero design-to-install handoff defects on our last 40 brand refreshes',
    ],
    verticals: ['retail', 'qsr', 'hospitality', 'multi-location-brands', 'franchise-networks'],
    problems: ['single-source-accountability', 'brand-consistency', 'project-delays'],
    personas: ['vp-of-brand', 'director-of-retail-experience', 'national-accounts-director'],
    services: ['design-services', 'print-management', 'sign-installation', 'brand-rollouts'],
    assets: [
      { label: 'One-partner rollout one-pager', kind: 'one-pager', url: '#' },
      { label: 'QSR brand rollout case study', kind: 'case-study', url: '#' },
    ],
  },
  {
    id: 'retail-rollout-speed',
    headline: 'Nationwide signage rollouts on a predictable calendar.',
    talkingPoints: [
      'Verified sign installer coverage in all 50 states',
      'Single point of accountability across every location',
      'Weekly milestone reporting, not monthly surprises',
    ],
    painPoints: ['project-delays', 'geographic-coverage'],
    proofPoints: [
      '47 verified sign installations across 12 states in the last 90 days',
      'Average site turnaround: 6.2 business days',
    ],
    verticals: ['retail', 'qsr', 'multi-location-brands'],
    problems: ['project-delays', 'geographic-coverage', 'speed-to-completion'],
    personas: ['national-accounts-director', 'director-of-retail-experience'],
    services: ['sign-installation', 'brand-rollouts'],
    assets: [
      { label: 'Retail rollout one-pager', kind: 'one-pager', url: '#' },
      { label: 'National retailer case study', kind: 'case-study', url: '#' },
    ],
  },
  {
    id: 'brand-consistency',
    headline: 'Every site on brand — same photons, same feeling, every market.',
    talkingPoints: [
      'Design files produced or validated by our in-house team before any install',
      'Print management keeps color and substrate consistent across vendors',
      'Photo documentation of every finished site, reviewed against brand standard',
    ],
    painPoints: ['brand-consistency', 'quality-control'],
    proofPoints: [
      '4.9 / 5 average brand-standard review score across 2,300+ installs',
      'Zero brand-deviation callbacks on last 60 hospitality projects',
    ],
    verticals: ['hospitality', 'retail', 'franchise-networks', 'multi-location-brands'],
    problems: ['brand-consistency', 'quality-control'],
    personas: ['vp-of-brand', 'brand-manager', 'director-of-retail-experience'],
    services: ['design-services', 'print-management', 'sign-installation'],
    assets: [
      { label: 'Brand standard install gallery', kind: 'photos', url: '#' },
    ],
  },
  {
    id: 'ada-wayfinding',
    headline: 'ADA and wayfinding that reads right — and passes inspection.',
    talkingPoints: [
      'ADA-literate design team — tactile, Braille, contrast, and mounting height handled correctly',
      'Site-surveyed wayfinding plans produced before a single sign ships',
      'Installed to spec and documented for your compliance file',
    ],
    painPoints: ['compliance', 'quality-control'],
    proofPoints: [
      '100% ADA inspection pass rate across 2024–2025',
      'Wayfinding programs delivered for healthcare systems and higher-ed campuses',
    ],
    verticals: ['healthcare', 'education', 'government', 'commercial-real-estate'],
    problems: ['compliance', 'quality-control'],
    personas: ['regional-facilities-manager', 'procurement'],
    services: ['design-services', 'ada-wayfinding', 'survey-and-auditing', 'sign-installation'],
    assets: [
      { label: 'ADA/wayfinding spec sheet', kind: 'spec-sheet', url: '#' },
    ],
  },
  {
    id: 'fleet-graphics',
    headline: 'Fleet graphics that hit the road the week they roll in.',
    talkingPoints: [
      'Design, print, and wrap managed by one team — no vendor handoff',
      'Regional install bays so your vehicles are not out of service for a week',
      'Color-matched to your brand standards, not the wrap shop down the street',
    ],
    painPoints: ['brand-consistency', 'speed-to-completion'],
    proofPoints: [
      'Fleet wraps delivered for national logistics and hospitality fleets',
      'Typical per-vehicle turnaround under 36 hours on scheduled bays',
    ],
    verticals: ['multi-location-brands', 'franchise-networks', 'commercial-real-estate'],
    problems: ['brand-consistency', 'speed-to-completion'],
    personas: ['brand-manager', 'regional-facilities-manager', 'procurement'],
    services: ['design-services', 'print-management', 'fleet-graphics'],
    assets: [
      { label: 'Fleet graphics one-pager', kind: 'one-pager', url: '#' },
    ],
  },
  {
    id: 'event-tradeshow',
    headline: 'Booth-ready by showtime — no matter the city.',
    talkingPoints: [
      'Tradeshow install crews pre-credentialed at the major convention centers',
      'Fast freight coordination plus on-site installation under one SOW',
      'Dismantle and storage managed too — not a leave-it-to-the-rep problem',
    ],
    painPoints: ['speed-to-completion', 'geographic-coverage'],
    proofPoints: [
      'Over 180 tradeshow activations installed in 2025',
      'Every McCormick, Javits, Moscone, and Mandalay Bay show covered',
    ],
    verticals: ['event-and-tradeshow', 'multi-location-brands'],
    problems: ['speed-to-completion', 'geographic-coverage'],
    personas: ['brand-manager', 'vp-of-brand'],
    services: ['event-and-tradeshow-installation', 'print-management', 'design-services'],
    assets: [
      { label: 'Tradeshow install case study', kind: 'case-study', url: '#' },
    ],
  },
  {
    id: 'art-mural',
    headline: 'Murals and environmental graphics that earn the space.',
    talkingPoints: [
      'Artist-coordinated production for large-format mural programs',
      'Environmental graphics sized and installed to architect-grade tolerance',
      'Content, print, and install managed by a single PM',
    ],
    painPoints: ['quality-control', 'brand-consistency'],
    proofPoints: [
      'Mural programs for hospitality groups and corporate campuses',
      'Environmental graphics delivered for retail flagships nationwide',
    ],
    verticals: ['hospitality', 'retail', 'commercial-real-estate', 'education'],
    problems: ['brand-consistency', 'quality-control'],
    personas: ['vp-of-brand', 'director-of-retail-experience', 'brand-manager'],
    services: ['design-services', 'art-and-mural-installation', 'environmental-graphics'],
    assets: [{ label: 'Mural & environmental gallery', kind: 'photos', url: '#' }],
  },
  {
    id: 'healthcare-compliance',
    headline: 'Compliance-first sign programs for regulated facilities.',
    talkingPoints: [
      'HIPAA-aware field procedures and ADA-literate wayfinding',
      'Credentialed installers only — no subcontractor surprises',
      'Documented chain of custody and install record for every sign',
    ],
    painPoints: ['compliance', 'quality-control'],
    proofPoints: [
      '100% compliance audit pass rate in 2025',
      'Every installer background-checked and badged',
    ],
    verticals: ['healthcare'],
    problems: ['compliance', 'quality-control'],
    personas: ['regional-facilities-manager', 'procurement'],
    services: ['sign-installation', 'ada-wayfinding', 'survey-and-auditing'],
    assets: [{ label: 'Healthcare compliance spec sheet', kind: 'spec-sheet', url: '#' }],
  },
  {
    id: 'franchise-rollout',
    headline: 'A franchise rollout your operators will not complain about.',
    talkingPoints: [
      'One SOW, one schedule, one invoice per franchise location',
      'Operator-friendly scheduling — we work around their open hours',
      'Photo-documented completion your franchisor team can audit',
    ],
    painPoints: ['single-source-accountability', 'brand-consistency'],
    proofPoints: [
      'Active rollouts across 800+ franchise locations',
      '98% operator satisfaction on last 120 installs',
    ],
    verticals: ['franchise-networks', 'qsr'],
    problems: ['single-source-accountability', 'brand-consistency', 'project-delays'],
    personas: ['franchise-operations-director', 'national-accounts-director'],
    services: ['brand-rollouts', 'sign-installation', 'print-management', 'design-services'],
    assets: [{ label: 'Franchise rollout playbook', kind: 'one-pager', url: '#' }],
  },
  {
    id: 'government-coverage',
    headline: 'Federal, state, and municipal programs — documented to the inch.',
    talkingPoints: [
      'Native American-owned — qualifies for tribal and DBE set-asides where applicable',
      'Installers cleared for sensitive facilities; full documentation per site',
      'ADA, wayfinding, and environmental graphics under one contract',
    ],
    painPoints: ['compliance', 'geographic-coverage'],
    proofPoints: ['Active contracts across 14 state agencies'],
    verticals: ['government'],
    problems: ['compliance', 'geographic-coverage'],
    personas: ['procurement', 'regional-facilities-manager'],
    services: ['sign-installation', 'ada-wayfinding', 'survey-and-auditing', 'design-services'],
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
    personas: ['regional-facilities-manager', 'national-accounts-director'],
    services: ['sign-installation', 'environmental-graphics', 'survey-and-auditing'],
    assets: [{ label: 'CRE portfolio one-pager', kind: 'one-pager', url: '#' }],
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
    verticals: ['retail', 'qsr', 'commercial-real-estate', 'multi-location-brands'],
    problems: ['installer-availability', 'speed-to-completion'],
    personas: ['national-accounts-director', 'general-contractor'],
    services: ['sign-installation'],
    assets: [{ label: 'Dispatch SLA one-pager', kind: 'one-pager', url: '#' }],
  },
];
