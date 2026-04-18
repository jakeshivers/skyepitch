export type Certification = {
  id: string;
  name: string;
  abbr: string;
  issuer: string;
  summary: string;
  talkingPoint: string;
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'osha-30',
    name: 'OSHA 30-Hour Construction',
    abbr: 'OSHA-30',
    issuer: 'U.S. Department of Labor',
    summary: '30-hour training on jobsite safety, hazard recognition, and OSHA standards for construction.',
    talkingPoint: 'Every lead installer we dispatch carries OSHA-30 — it is table stakes on our network.',
  },
  {
    id: 'bicsi-inst-2',
    name: 'BICSI Installer 2 — Copper / Optical Fiber',
    abbr: 'BICSI Installer 2',
    issuer: 'BICSI',
    summary: 'Industry-standard certification for structured cabling installation technicians.',
    talkingPoint: 'Low-voltage pulls meet BICSI standards — your spec gets executed the way it was drawn.',
  },
  {
    id: 'lv-license',
    name: 'State Low-Voltage License',
    abbr: 'Low-Voltage License',
    issuer: 'State Contractor Boards',
    summary: 'State-issued license authorizing low-voltage electrical work.',
    talkingPoint: 'State-licensed where required — we never send an unlicensed tech onto a regulated job.',
  },
  {
    id: 'epa-608',
    name: 'EPA Section 608 Technician Certification',
    abbr: 'EPA 608',
    issuer: 'U.S. EPA',
    summary: 'Required federal certification for technicians who service equipment containing regulated refrigerants.',
    talkingPoint: 'HVAC-adjacent work is handled by 608-certified techs — compliant with federal refrigerant law.',
  },
  {
    id: 'hipaa',
    name: 'HIPAA Awareness for Field Technicians',
    abbr: 'HIPAA Awareness',
    issuer: 'Lakota Skye Training',
    summary: 'Field-tech training covering PHI handling, clinical environment conduct, and access controls.',
    talkingPoint: 'Healthcare installs are staffed exclusively by HIPAA-trained installers.',
  },
  {
    id: 'bg-plus',
    name: 'BackgroundCheck-Plus',
    abbr: 'BackgroundCheck-Plus',
    issuer: 'Lakota Skye Trust Program',
    summary: 'Enhanced background screening, identity verification, and continuous monitoring.',
    talkingPoint: 'Every installer on site has passed enhanced background screening — not just a one-time check.',
  },
  {
    id: 'forklift',
    name: 'Forklift Operator Certification',
    abbr: 'Forklift Certified',
    issuer: 'OSHA 1910.178 compliant training',
    summary: 'OSHA-compliant forklift operator certification required for powered industrial trucks.',
    talkingPoint: 'Forklift-certified operators on jobs that need them — no downtime waiting for warehouse staff.',
  },
  {
    id: 'cpr',
    name: 'CPR / First Aid',
    abbr: 'CPR/First Aid',
    issuer: 'American Red Cross / AHA',
    summary: 'Current CPR and first aid certification for field technicians.',
    talkingPoint: 'Current CPR/First Aid certification on every team lead.',
  },
];
