'use client';

import { SlidersHorizontal } from 'lucide-react';
import { locks } from '@/lib/data';
import LockCard from './LockCard';

export default function LocksPanel() {
  return (
    <section aria-labelledby="locks-heading" className="flex flex-col gap-4">
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <h2
          id="locks-heading"
          className="text-sm font-semibold text-gray-900 flex items-center gap-1.5"
        >
          Locks{' '}
          <span
            className="text-xs font-normal text-gray-400"
            aria-label={`${locks.length} locks total`}
          >
            {locks.length}
          </span>
        </h2>
        <button
          aria-label="Locks filter/settings"
          className="text-gray-400 hover:text-gray-600 transition-colors p-1"
        >
          <SlidersHorizontal size={14} className="stroke-[2.5]" />
        </button>
      </div>

      {/* Lock Cards Stack Container */}
      <div className="flex flex-col gap-4">
        {locks.slice(0, 2).map((lock, i) => (
          <LockCard key={lock.id} lock={lock} index={i} />
        ))}
      </div>
    </section>
  );
}