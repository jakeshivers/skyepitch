/**
 * Supabase seam (spec §4.1 hybrid data architecture).
 *
 * In the prototype, installer profiles and performance events live in local
 * fixtures / Zustand stores. In production, this module will wrap a Supabase
 * client and expose the same shapes used by:
 *
 *   - src/data/installers.ts   (installer profiles, certifications, coverage)
 *   - src/store/events.ts      (pitch_generated / pitch_used / pitch_won)
 *
 * Google Sheets remains the source of truth for pitch content, taxonomy, and
 * objection libraries — Supabase covers everything relational, queryable, and
 * performance-sensitive.
 */

export type SupabaseConfig = {
  url: string;
  anonKey: string;
};

// Swap target: `import { createClient } from '@supabase/supabase-js'`
// export const supabase = createClient(config.url, config.anonKey);

export const SUPABASE_TABLES = {
  installers: 'installers',
  installerCerts: 'installer_certifications',
  pitchEvents: 'pitch_events',
  projectRollups: 'project_rollups',
} as const;
