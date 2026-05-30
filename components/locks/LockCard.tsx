'use client';

import { useState } from 'react';
import { Lock, LockOpen } from 'lucide-react';
import type { Lock as LockType } from '@/types';
import { cn } from '@/lib/data';

interface LockCardProps {
  lock: LockType;
  index: number;
}

// Door lock SVG illustrations
const LockIllustration = ({ status }: { status: 'locked' | 'unlocked' }) => (
  <div
    className={cn(
      'w-14 h-16 rounded-xl flex items-center justify-center flex-shrink-0 relative overflow-hidden',
      status === 'locked'
        ? 'bg-gradient-to-br from-slate-100 to-slate-200'
        : 'bg-gradient-to-br from-mint-light to-emerald-100'
    )}
    style={{
      background: status === 'locked'
        ? 'linear-gradient(135deg, #f1f5f9, #e2e8f0)'
        : 'linear-gradient(135deg, #d1fae5, #a7f3d0)',
    }}
    aria-hidden="true"
  >
    <svg viewBox="0 0 56 64" fill="none" className="w-12 h-14">
      {/* Door body */}
      <rect x="4" y="8" width="48" height="52" rx="4" fill={status === 'locked' ? '#94a3b8' : '#6ee7b7'} opacity="0.3"/>
      <rect x="6" y="10" width="44" height="48" rx="3" fill={status === 'locked' ? '#cbd5e1' : '#a7f3d0'}/>
      {/* Keypad */}
      <rect x="18" y="22" width="20" height="24" rx="3" fill={status === 'locked' ? '#64748b' : '#10b981'}/>
      {/* Keypad dots */}
      {[0,1,2,3,4,5].map(i => (
        <circle key={i} cx={22 + (i % 2) * 12} cy={27 + Math.floor(i / 2) * 7} r="2" fill="white" opacity="0.8"/>
      ))}
      {/* Handle */}
      <circle cx="38" cy="37" r="4" fill={status === 'locked' ? '#475569' : '#059669'}/>
    </svg>
  </div>
);

export default function LockCard({ lock, index }: LockCardProps) {
  const [status, setStatus] = useState(lock.status);

  const toggleLock = () => {
    setStatus(prev => prev === 'locked' ? 'unlocked' : 'locked');
  };

  return (
    <article
      className={cn(
        'card p-3 animate-fade-in-up',
        `stagger-${index + 3}`
      )}
      aria-label={`${lock.name}: ${status}`}
    >
      <div className="flex items-center gap-3">
        <LockIllustration status={status} />

        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-[var(--color-text-primary)] truncate">{lock.name}</p>
          <p
            className={cn(
              'text-xs font-medium capitalize mt-0.5',
              status === 'locked' ? 'text-[var(--color-locked)]' : 'text-[var(--color-unlocked)]'
            )}
          >
            {status}
          </p>

          {/* Battery */}
          <div className="mt-2">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-[var(--color-text-muted)]">Battery</span>
              <span className="text-xs font-medium text-[var(--color-text-secondary)]">{lock.battery}%</span>
            </div>
            <div className="battery-bar w-full">
              <div
                className="battery-bar-fill"
                style={{ width: `${lock.battery}%` }}
                role="progressbar"
                aria-valuenow={lock.battery}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`Battery at ${lock.battery}%`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2 mt-3">
        <button
          onClick={toggleLock}
          aria-label={status === 'locked' ? 'Unlock' : 'Lock'}
          className={cn(
            'flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold transition-all',
            status === 'locked'
              ? 'bg-[var(--color-accent-soft)] text-[var(--color-accent)] hover:bg-emerald-100'
              : 'bg-red-50 text-red-500 hover:bg-red-100'
          )}
        >
          {status === 'locked'
            ? <><LockOpen size={12} aria-hidden="true" /> Unlock</>
            : <><Lock size={12} aria-hidden="true" /> Lock</>
          }
        </button>
        <button
          aria-label={`${lock.name} settings`}
          className="w-9 flex items-center justify-center rounded-xl bg-[var(--color-surface-3)] hover:bg-[var(--color-border)] transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <circle cx="7" cy="3" r="1.2" fill="currentColor" className="text-[var(--color-text-muted)]"/>
            <circle cx="7" cy="7" r="1.2" fill="currentColor" className="text-[var(--color-text-muted)]"/>
            <circle cx="7" cy="11" r="1.2" fill="currentColor" className="text-[var(--color-text-muted)]"/>
          </svg>
        </button>
      </div>
    </article>
  );
}
