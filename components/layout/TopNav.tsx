'use client';

import Image from 'next/image';
import { ChevronLeft, Grid2X2, Bell, Mic } from 'lucide-react';

export default function TopNav() {
  return (
    <header
      role="banner"
      className="flex items-center justify-between p-6 bg-[var(--color-surface)]"
      style={{ minHeight: '60px' }}
    >
      {/* Left: Back + Home Info */}
      <div className="flex items-center gap-3">
        <button
          aria-label="Go back"
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[var(--color-surface-3)] transition-colors"
        >
          <ChevronLeft size={18} strokeWidth={2} className="text-[var(--color-text-secondary)]" />
        </button>
        <div className="flex items-center gap-2">
          {/* Replaced House SVG with Next.js Image component */}
          <div
            className="w-9 h-9 rounded-xl overflow-hidden bg-[var(--color-surface-3)] flex items-center justify-center relative"
            aria-hidden="true"
          >
            <Image 
              src="/front.jpg" 
              alt="Home" 
              fill
              sizes="36px"
              priority
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-lg font-medium text-[var(--color-text-primary)] leading-tight mb-0.5">Home</p>
            <p className="text-xs text-[var(--color-text-muted)] leading-tight flex items-center gap-1">
              {/* Circular div wrapper around the location icon */}
              <span className="w-4 h-4 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <circle cx="5" cy="4" r="2" stroke="#10b981" strokeWidth="1.2"/>
                  <path d="M5 9C5 9 2 6.5 2 4a3 3 0 016 0C8 6.5 5 9 5 9z" stroke="#10b981" strokeWidth="1.2"/>
                </svg>
              </span>
              401 Magnetic Drive Unit 2
            </p>
          </div>
        </div>
      </div>

      {/* Right side controls (No hover effects, explicit white background layouts) */}
      <div className="flex items-center gap-3">
        {/* Center/Right Pill: Camera feed + Audio Indicator */}
        <button
          aria-label="Live camera feed"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm"
        >
          <span className="flex items-center gap-0.5" aria-hidden="true">
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className="inline-block w-0.5 rounded-full bg-[var(--color-text-muted)] opacity-60 animate-pulse-soft"
                style={{
                  height: `${Math.random() * 12 + 6}px`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </span>
          <span className="text-xs font-medium text-[var(--color-text-secondary)]">Camera 8...</span>
          {/* Integrated Lock/Mic visual toggle indicator from screenshot */}
          <div className="w-4 h-4 rounded-full border border-[var(--color-text-muted)] flex items-center justify-center opacity-70">
            <Mic size={8} className="text-[var(--color-text-secondary)]" />
          </div>
        </button>

        {/* Grid Menu Icon matching screenshot */}
        <button 
          aria-label="Grid view" 
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-sm"
        >
          <Grid2X2 size={16} className="text-[var(--color-text-secondary)]" />
        </button>

        {/* Notification Bell Icon matching screenshot */}
        <button 
          aria-label="Notifications" 
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-sm"
        >
          <Bell size={16} className="text-[var(--color-text-secondary)]" />
        </button>
      </div>
    </header>
  );
}