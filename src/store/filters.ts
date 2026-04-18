import { create } from 'zustand';
import type {
  Persona,
  Problem,
  Region,
  Service,
  Vertical,
} from '../data/taxonomy';

export type FilterState = {
  verticals: Vertical[];
  problems: Problem[];
  personas: Persona[];
  services: Service[];
  region?: Region;
  toggle: <K extends 'verticals' | 'problems' | 'personas' | 'services'>(
    key: K,
    value: FilterState[K][number]
  ) => void;
  setRegion: (r?: Region) => void;
  clear: () => void;
};

export const useFilters = create<FilterState>((set) => ({
  verticals: [],
  problems: [],
  personas: [],
  services: [],
  region: undefined,
  toggle: (key, value) =>
    set((s) => {
      const arr = s[key] as readonly string[];
      const next = arr.includes(value as string)
        ? arr.filter((v) => v !== (value as string))
        : [...arr, value as string];
      return { [key]: next } as unknown as Partial<FilterState>;
    }),
  setRegion: (region) => set({ region }),
  clear: () =>
    set({ verticals: [], problems: [], personas: [], services: [], region: undefined }),
}));
