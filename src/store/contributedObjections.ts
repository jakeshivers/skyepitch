import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Objection } from '../data/objections';

type State = {
  items: Objection[];
  add: (o: Objection) => void;
};

export const useContributedObjections = create<State>()(
  persist(
    (set) => ({
      items: [],
      add: (o) => set((s) => ({ items: [{ ...o, userContributed: true }, ...s.items] })),
    }),
    { name: 'skyepitch:objections' }
  )
);
