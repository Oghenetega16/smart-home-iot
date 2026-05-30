'use client';

import { SlidersHorizontal } from 'lucide-react';
import { cameras } from '@/lib/data';
import CameraCard from './CameraCard';

export default function CamerasPanel() {
  return (
    <section aria-labelledby="cameras-heading" className="flex flex-col gap-4">
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <h2
          id="cameras-heading"
          className="text-sm font-semibold text-gray-900 flex items-center gap-1.5"
        >
          Cameras{' '}
          <span
            className="text-xs font-normal text-gray-400"
            aria-label={`${cameras.length} cameras total`}
          >
            {cameras.length}
          </span>
        </h2>
        <button
          aria-label="Camera filter/settings"
          className="text-gray-400 hover:text-gray-600 transition-colors p-1"
        >
          <SlidersHorizontal size={14} className="stroke-[2.5]" />
        </button>
      </div>

      {/* Camera dynamic vertical list render */}
      <div className="flex flex-col gap-1.5">
        {cameras.slice(0, 2).map((camera, i) => (
          <CameraCard key={camera.id} camera={camera} index={i} />
        ))}
      </div>
    </section>
  );
}