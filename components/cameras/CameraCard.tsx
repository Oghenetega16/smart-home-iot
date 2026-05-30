'use client';

import { useState } from 'react';
import { Clock, MoreHorizontal } from 'lucide-react';
import type { Camera } from '@/types';
import { cn } from '@/lib/data';

interface CameraCardProps {
  camera: Camera;
  index: number;
}

const cameraColors = ['#10b981', '#3b82f6', '#f59e0b', '#8b5cf6'];
const cameraScenes = [
  // Backyard - pool view
  <svg key="0" viewBox="0 0 80 50" fill="none" className="w-full h-full">
    <rect width="80" height="50" fill="#c7e4d6"/>
    <rect y="30" width="80" height="20" fill="#93c5fd" opacity="0.5"/>
    <rect x="10" y="10" width="25" height="25" rx="2" fill="#e2e8f0"/>
    <rect x="45" y="8" width="20" height="22" rx="2" fill="#e2e8f0"/>
    <ellipse cx="55" cy="38" rx="15" ry="6" fill="#60a5fa" opacity="0.6"/>
  </svg>,
  // Front door
  <svg key="1" viewBox="0 0 80 50" fill="none" className="w-full h-full">
    <rect width="80" height="50" fill="#e5e7eb"/>
    <rect x="25" y="5" width="30" height="40" rx="2" fill="#d1d5db"/>
    <rect x="30" y="10" width="20" height="30" rx="1" fill="#9ca3af"/>
    <circle cx="48" cy="25" r="2" fill="#f3f4f6"/>
  </svg>,
  // Garage
  <svg key="2" viewBox="0 0 80 50" fill="none" className="w-full h-full">
    <rect width="80" height="50" fill="#f3f4f6"/>
    <rect x="5" y="15" width="70" height="30" rx="2" fill="#d1d5db"/>
    <line x1="5" y1="25" x2="75" y2="25" stroke="#9ca3af" strokeWidth="1"/>
    <line x1="5" y1="35" x2="75" y2="35" stroke="#9ca3af" strokeWidth="1"/>
  </svg>,
  // Living room
  <svg key="3" viewBox="0 0 80 50" fill="none" className="w-full h-full">
    <rect width="80" height="50" fill="#fef3c7"/>
    <rect x="5" y="25" width="35" height="20" rx="3" fill="#fbbf24" opacity="0.4"/>
    <rect x="45" y="28" width="30" height="17" rx="3" fill="#fbbf24" opacity="0.4"/>
    <rect x="20" y="8" width="40" height="25" rx="2" fill="#fde68a"/>
  </svg>,
];

export default function CameraCard({ camera, index }: CameraCardProps) {
  const [isEnabled, setIsEnabled] = useState(camera.isOnline);

  return (
    <article
      className={cn(
        'card flex items-center gap-3 p-3 animate-fade-in-up cursor-pointer',
        'hover:shadow-[var(--shadow-float)] transition-shadow duration-200',
        `stagger-${index + 1}`
      )}
      aria-label={`${camera.name} – ${camera.location}`}
    >
      {/* Thumbnail */}
      <div className="w-16 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-[var(--color-surface-3)]">
        {cameraScenes[index % cameraScenes.length]}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-[var(--color-text-primary)] truncate">{camera.name}</p>
        <p className="text-xs text-[var(--color-text-muted)] flex items-center gap-1 mt-0.5">
          <Clock size={10} aria-hidden="true" />
          {camera.hours}
        </p>
      </div>

      {/* Toggle */}
      <button
        role="switch"
        aria-checked={isEnabled}
        aria-label={`${camera.name} ${isEnabled ? 'on' : 'off'}`}
        className="toggle flex-shrink-0"
        data-checked={String(isEnabled)}
        onClick={() => setIsEnabled(!isEnabled)}
      >
        <span className="toggle-thumb" />
      </button>
    </article>
  );
}
