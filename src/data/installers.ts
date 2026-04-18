export type InstallerTier = 'platinum' | 'gold' | 'silver' | 'certified';

export type Installer = {
  id: string;
  name: string;
  state: string; // 2-letter
  city: string;
  tier: InstallerTier;
  rating: number; // 0-5
  jobs: number;
  certifications: string[];
  available: boolean;
};

const CERT_POOL = [
  'OSHA-30',
  'BICSI Installer 2',
  'Low-Voltage License',
  'EPA 608',
  'Forklift Certified',
  'CPR/First Aid',
  'BackgroundCheck-Plus',
  'HIPAA Awareness',
];

const rand = (seed: number) => {
  let s = seed;
  return () => ((s = (s * 9301 + 49297) % 233280) / 233280);
};

const CITIES: Record<string, string[]> = {
  CA: ['Los Angeles', 'San Francisco', 'San Diego', 'Sacramento'],
  TX: ['Houston', 'Dallas', 'Austin', 'San Antonio'],
  NY: ['New York', 'Buffalo', 'Albany'],
  FL: ['Miami', 'Orlando', 'Tampa', 'Jacksonville'],
  IL: ['Chicago', 'Springfield'],
  GA: ['Atlanta', 'Savannah'],
  WA: ['Seattle', 'Spokane'],
  OR: ['Portland'],
  NC: ['Charlotte', 'Raleigh'],
  CO: ['Denver'],
  AZ: ['Phoenix', 'Tucson'],
  NV: ['Las Vegas', 'Reno'],
  MA: ['Boston'],
  PA: ['Philadelphia', 'Pittsburgh'],
  OH: ['Columbus', 'Cleveland'],
  MI: ['Detroit'],
  MN: ['Minneapolis'],
  TN: ['Nashville', 'Memphis'],
  VA: ['Richmond', 'Arlington'],
  MD: ['Baltimore'],
  UT: ['Salt Lake City'],
  MO: ['St. Louis', 'Kansas City'],
  IN: ['Indianapolis'],
  WI: ['Milwaukee'],
  LA: ['New Orleans'],
};

const TIERS: InstallerTier[] = ['platinum', 'gold', 'silver', 'certified'];

export const INSTALLERS: Installer[] = (() => {
  const r = rand(42);
  const list: Installer[] = [];
  let id = 1;
  for (const [state, cities] of Object.entries(CITIES)) {
    const count = Math.floor(r() * 6) + 2;
    for (let i = 0; i < count; i++) {
      const city = cities[Math.floor(r() * cities.length)];
      const tier = TIERS[Math.floor(r() * TIERS.length)];
      const certCount = 2 + Math.floor(r() * 4);
      const certs = [...CERT_POOL].sort(() => r() - 0.5).slice(0, certCount);
      list.push({
        id: `INS-${String(id++).padStart(4, '0')}`,
        name: `${['North', 'Summit', 'Anchor', 'Vanguard', 'Delta', 'Bright', 'Ironwood', 'Keystone'][Math.floor(r() * 8)]} ${['Installations', 'Fieldworks', 'Networks', 'Systems', 'Services', 'Build Co.'][Math.floor(r() * 6)]}`,
        state,
        city,
        tier,
        rating: Math.round((3.5 + r() * 1.5) * 10) / 10,
        jobs: Math.floor(r() * 240) + 12,
        certifications: certs,
        available: r() > 0.25,
      });
    }
  }
  return list;
})();

export const coverageByState = (): Record<string, number> => {
  const out: Record<string, number> = {};
  for (const i of INSTALLERS) out[i.state] = (out[i.state] ?? 0) + 1;
  return out;
};
