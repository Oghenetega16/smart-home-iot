import { SlidersHorizontal } from 'lucide-react';
import { cameras } from '@/lib/data';
import CameraCard from './CameraCard';

export default function CamerasPanel() {
  return (
    <section aria-labelledby="cameras-heading" className="flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2
          id="cameras-heading"
          className="text-sm font-semibold text-[var(--color-text-secondary)]"
        >
          Cameras{' '}
          <span
            className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[var(--color-surface-3)] text-xs font-bold text-[var(--color-text-primary)] ml-1"
            aria-label={`${cameras.length} cameras`}
          >
            {cameras.length}
          </span>
        </h2>
        <button
          aria-label="Camera filter/settings"
          className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-[var(--color-surface-3)] transition-colors"
        >
          <SlidersHorizontal size={14} className="text-[var(--color-text-muted)]" />
        </button>
      </div>

      {/* Camera list - show first 2 in sidebar */}
      <div className="flex flex-col gap-2">
        {cameras.slice(0, 2).map((camera, i) => (
          <CameraCard key={camera.id} camera={camera} index={i} />
        ))}
      </div>
    </section>
  );
}
