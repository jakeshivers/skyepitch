import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { GeneratedPitch } from '../lib/ai';

export type SavedPitch = GeneratedPitch & {
  id: string;
  title: string;
  savedAt: string;
  notes?: string;
};

type State = {
  pitches: SavedPitch[];
  save: (p: Omit<SavedPitch, 'savedAt'>) => void;
  update: (id: string, patch: Partial<SavedPitch>) => void;
  remove: (id: string) => void;
};

export const usePitches = create<State>()(
  persist(
    (set) => ({
      pitches: [],
      save: (p) =>
        set((s) => ({
          pitches: [
            { ...p, savedAt: new Date().toISOString() },
            ...s.pitches.filter((x) => x.id !== p.id),
          ],
        })),
      update: (id, patch) =>
        set((s) => ({
          pitches: s.pitches.map((p) => (p.id === id ? { ...p, ...patch } : p)),
        })),
      remove: (id) => set((s) => ({ pitches: s.pitches.filter((p) => p.id !== id) })),
    }),
    { name: 'skyepitch:pitches' }
  )
);
