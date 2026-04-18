import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type EventKind = 'pitch_generated' | 'pitch_used' | 'pitch_won' | 'objection_used';

export type Event = {
  id: string;
  kind: EventKind;
  at: string;
  tags: Record<string, string | undefined>;
};

type State = {
  events: Event[];
  log: (kind: EventKind, tags: Event['tags']) => void;
  clear: () => void;
};

export const useEvents = create<State>()(
  persist(
    (set) => ({
      events: [],
      log: (kind, tags) =>
        set((s) => ({
          events: [
            { id: crypto.randomUUID(), kind, at: new Date().toISOString(), tags },
            ...s.events,
          ].slice(0, 500),
        })),
      clear: () => set({ events: [] }),
    }),
    { name: 'skyepitch:events' }
  )
);
