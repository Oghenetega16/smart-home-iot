import { SlidersHorizontal } from 'lucide-react';
import { locks } from '@/lib/data';
import LockCard from './LockCard';

export default function LocksPanel() {
  return (
    <section aria-labelledby="locks-heading" className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2
          id="locks-heading"
          className="text-sm font-semibold text-[var(--color-text-secondary)]"
        >
          Locks{' '}
          <span
            className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[var(--color-surface-3)] text-xs font-bold text-[var(--color-text-primary)] ml-1"
            aria-label={`${locks.length} locks`}
          >
            {locks.length}
          </span>
        </h2>
        <button
          aria-label="Locks filter/settings"
          className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-[var(--color-surface-3)] transition-colors"
        >
          <SlidersHorizontal size={14} className="text-[var(--color-text-muted)]" />
        </button>
      </div>

      <div className="flex flex-col gap-2">
        {locks.map((lock, i) => (
          <LockCard key={lock.id} lock={lock} index={i} />
        ))}
      </div>
    </section>
  );
}
