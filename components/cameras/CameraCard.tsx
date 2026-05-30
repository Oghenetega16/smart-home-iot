'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { Camera } from '@/types';
import { cn } from '@/lib/data';

interface CameraCardProps {
  camera: Camera;
  index: number;
}

const cameraThumbnails = [
  '/camera-3.jpg', // Pool / Backyard asset view index matching screenshot
  '/camera-4.jpg', // Secondary view asset layout matching screenshot
  '/camera-1.jpg',
  '/camera-2.jpg',
];

export default function CameraCard({ camera, index }: CameraCardProps) {
  const [isEnabled, setIsEnabled] = useState(camera.isOnline);

  return (
    <article
      className={cn(
        'flex items-center gap-3 py-2 bg-transparent select-none transition-opacity duration-200',
        !isEnabled && 'opacity-60'
      )}
      aria-label={`${camera.name} – ${camera.location}`}
    >
      {/* Real photographic thumbnail frame block */}
      <div className="w-16 h-12 rounded-xl overflow-hidden flex-shrink-0 relative bg-gray-100 shadow-sm">
        <Image
          src={cameraThumbnails[index % cameraThumbnails.length]}
          alt={`${camera.name} preview snapshot`}
          fill
          sizes="64px"
          className="object-cover"
        />
      </div>

      {/* Info labels core text wrapper */}
      <div className="flex-1 min-w-0">
        <h3 className="text-xs font-semibold text-gray-900 truncate">
          {camera.name || `Camera ${index + 3}`}
        </h3>
        <p className="text-[11px] font-light text-gray-400 mt-0.5">
          {camera.hours || '12 pm - 6 pm'}
        </p>
      </div>

      {/* Functional inline switch element layout containing switch parameters */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <span className="text-[10px] font-light text-gray-400 select-none tracking-tight">
          {isEnabled ? 'on' : 'off'}
        </span>
        
        <button
          role="switch"
          aria-checked={isEnabled}
          aria-label={`${camera.name || `Camera ${index + 3}`} power toggle`}
          onClick={() => setIsEnabled(!isEnabled)}
          className={cn(
            'w-7 h-4 rounded-full p-[2px] transition-colors duration-200 ease-out relative flex items-center outline-none',
            isEnabled ? 'bg-gray-900' : 'bg-gray-200'
          )}
        >
          <span
            className={cn(
              'w-2.5 h-2.5 rounded-full bg-white shadow-sm transition-transform duration-200 ease-out',
              isEnabled ? 'translate-x-[12px]' : 'translate-x-0'
            )}
          />
        </button>
      </div>
    </article>
  );
}