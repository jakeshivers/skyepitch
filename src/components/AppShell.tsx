import { NavLink } from 'react-router-dom';
import type { ReactNode } from 'react';

const NAV = [
  { to: '/', label: 'Library', icon: '▤' },
  { to: '/generate', label: 'Generate', icon: '✦' },
  { to: '/installers', label: 'Installers', icon: '◈' },
  { to: '/objections', label: 'Objections', icon: '⚑' },
  { to: '/builder', label: 'Builder', icon: '✎' },
  { to: '/credentials', label: 'Certs', icon: '✓' },
  { to: '/proof', label: 'Proof', icon: '★' },
  { to: '/dashboard', label: 'Insights', icon: '◑' },
];

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-full flex flex-col">
      <header className="sticky top-0 z-20 backdrop-blur bg-skye-bg/80 border-b border-skye-edge">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-7 rounded-lg bg-skye-accent/20 border border-skye-accent/40 grid place-items-center text-skye-accent">✦</div>
            <div className="leading-tight">
              <div className="font-semibold">Skyepitch</div>
              <div className="text-xs text-skye-mute -mt-0.5">SkyeHub · Lakota Skye</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === '/'}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-lg text-sm ${
                    isActive ? 'bg-skye-accent/15 text-skye-accent' : 'text-skye-mute hover:text-skye-ink'
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-5 pb-24 md:pb-10">{children}</main>

      <nav className="md:hidden fixed bottom-0 inset-x-0 z-20 bg-skye-panel/95 backdrop-blur border-t border-skye-edge">
        <ul className="grid grid-cols-8 text-center text-[10px]">
          {NAV.map((n) => (
            <li key={n.to}>
              <NavLink
                to={n.to}
                end={n.to === '/'}
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center py-2 gap-0.5 ${
                    isActive ? 'text-skye-accent' : 'text-skye-mute'
                  }`
                }
              >
                <span className="text-base leading-none">{n.icon}</span>
                <span>{n.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
