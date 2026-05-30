'use client';

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import type { Lock as LockType } from '@/types';
import { cn } from '@/lib/data';

interface LockCardProps {
  lock: LockType;
  index: number;
}

// Minimal stylized vector representation of the physical smart handle hardware
const SmartHandleIllustration = ({ status }: { status: 'locked' | 'unlocked' }) => (
  <div className="w-8 h-14 bg-black rounded-xl p-1.5 flex flex-col items-center justify-between shadow-md relative group-hover:scale-105 transition-transform duration-200">
    {/* Keypad Interface Region */}
    <div className="grid grid-cols-2 gap-0.5 w-full justify-items-center opacity-80 mt-0.5">
      {[...Array(6)].map((_, i) => (
        <span key={i} className="w-[3px] h-[3px] rounded-full bg-white/90" />
      ))}
    </div>
    {/* Biometric Scanner / Status Light Anchor */}
    <div className={cn(
      "w-3 h-3 rounded-full border border-black/40 transition-colors duration-300 shadow-inner mb-2",
      status === 'locked' ? 'bg-red-500 shadow-red-400/50' : 'bg-emerald-400 shadow-emerald-300/50'
    )} />
  </div>
);

export default function LockCard({ lock }: LockCardProps) {
  const [status, setStatus] = useState(lock.status);

  const toggleLock = () => {
    setStatus(prev => (prev === 'locked' ? 'unlocked' : 'locked'));
  };

  // Determine battery level styling values for the vertical pill gauge meter
  const isBatteryLow = lock.battery <= 20;
  const fillGradient = isBatteryLow 
    ? 'from-red-400 to-orange-400' 
    : status === 'locked' 
      ? 'from-emerald-400 to-teal-400' 
      : 'from-indigo-400 to-purple-400';

  return (
    <article
      className="flex items-center justify-between bg-transparent select-none"
      aria-label={`${lock.name}: ${status}`}
    >
      {/* LEFT COLUMN: Main Integrated Switch Controller Interface Panel */}
      <button
        onClick={toggleLock}
        className="flex-1 max-w-[180px] rounded-[24px] p-3 bg-gray-100 hover:bg-gray-200/80 active:scale-[0.98] transition-all duration-200 flex items-center gap-3 text-left relative overflow-hidden shadow-sm group group-items"
      >
        {/* Hardware Visual Component */}
        <SmartHandleIllustration status={status} />

        {/* Text descriptions labels */}
        <div className="flex-1 min-w-0 flex flex-col justify-center">
          <h3 className="text-xs font-semibold text-gray-900 truncate leading-tight">
            {lock.name}
          </h3>
          <p className="text-[10px] text-gray-400 font-light mt-0.5 tracking-wide">
            {status === 'locked' ? 'Locked' : 'Unlocked'}
          </p>

          {/* Symmetrical sliding directional indicator row */}
          <div className="flex items-center gap-0.5 mt-2 text-gray-400 group-hover:text-gray-700 transition-colors">
            <ChevronRight size={10} className="stroke-[3px] opacity-40 animate-pulse" />
            <ChevronRight size={10} className="stroke-[3px] opacity-70" />
            <ChevronRight size={10} className="stroke-[3px]" />
          </div>
        </div>
      </button>

      {/* RIGHT COLUMN: Isolated Vertical Progress Gauge Pill */}
      <div className="flex flex-col items-center gap-2 w-12 flex-shrink-0">
        {/* Percentage Label Header */}
        <span className="text-[11px] font-semibold text-gray-900 tracking-tight">
          {lock.battery}%
        </span>

        {/* Outer tracking vertical structural channel */}
        <div 
          className="w-8 h-16 rounded-full bg-gray-100 p-1 flex flex-col justify-end relative shadow-inner overflow-hidden"
          role="progressbar"
          aria-valuenow={lock.battery}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${lock.name} battery meter`}
        >
          {/* Internal level fill cylinder layer */}
          <div
            className={cn(
              "w-full rounded-full bg-gradient-to-t transition-all duration-500 ease-out",
              fillGradient
            )}
            style={{ height: `${lock.battery}%` }}
          />
        </div>
        
        <span className="text-[9px] font-light text-gray-400 tracking-tight select-none">
          Battery
        </span>
      </div>
    </article>
  );
}