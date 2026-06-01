'use client';

import Image from 'next/image';
import { ChevronLeft, Grid2X2, Bell, Mic } from 'lucide-react';

export default function TopNav() {
  return (
    <header
      role="banner"
      className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 sm:p-6 bg-[var(--color-surface)] w-full border-b border-[var(--color-border)] lg:border-b-0"
      style={{ minHeight: '60px' }}
    >
      {/* Left Column: Back Action Trigger + Real Estate Structural Title Metadata */}
      <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
        <button
          aria-label="Go back"
          className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full hover:bg-[var(--color-surface-3)] transition-colors"
        >
          <ChevronLeft size={18} strokeWidth={2} className="text-[var(--color-text-secondary)]" />
        </button>
        
        <div className="flex items-center gap-2 min-w-0">
          {/* Household Profile Structural Thumbnail Frame */}
          <div
            className="w-9 h-9 rounded-xl overflow-hidden bg-[var(--color-surface-3)] flex-shrink-0 flex items-center justify-center relative"
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
          
          <div className="min-w-0">
            <p className="text-base sm:text-lg font-medium text-[var(--color-text-primary)] leading-tight mb-0.5 truncate">
              Home
            </p>
            <p className="text-[11px] sm:text-xs text-[var(--color-text-muted)] leading-tight flex items-center gap-1 truncate">
              {/* Target Location Micro Vector Pin Wrapper */}
              <span className="w-4 h-4 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <circle cx="5" cy="4" r="2" stroke="#10b981" strokeWidth="1.2"/>
                  <path d="M5 9C5 9 2 6.5 2 4a3 3 0 016 0C8 6.5 5 9 5 9z" stroke="#10b981" strokeWidth="1.2"/>
                </svg>
              </span>
              <span className="truncate">401 Magnetic Drive Unit 2</span>
            </p>
          </div>
        </div>
      </div>

      {/* Right Column Controls: Functional Dashboard Interface Sliders */}
      {/* flex-wrap allows the controls to flow naturally if the container gets too narrow */}
      <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-end flex-wrap sm:flex-nowrap">
        {/* Live Audio & Streaming Status Tracker Pill */}
        <button
          aria-label="Live camera feed"
          className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white shadow-sm flex-shrink-0"
        >
          <span className="flex items-center gap-0.5" aria-hidden="true">
            {Array.from({ length: 6 }).map((_, i) => (
              <span
                key={i}
                className="inline-block w-0.5 rounded-full bg-[var(--color-text-muted)] opacity-60 animate-pulse-soft"
                style={{
                  height: `${Math.random() * 10 + 5}px`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </span>
          <span className="text-[11px] sm:text-xs font-medium text-[var(--color-text-secondary)]">Camera 8...</span>
          <div className="w-3.5 h-3.5 rounded-full border border-[var(--color-text-muted)] flex items-center justify-center opacity-70 flex-shrink-0">
            <Mic size={7} className="text-[var(--color-text-secondary)]" />
          </div>
        </button>

        {/* Dynamic Canvas Presentation Grid Mode Selector Toggle */}
        <button 
          aria-label="Grid view" 
          className="w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 flex items-center justify-center rounded-full bg-white shadow-sm"
        >
          <Grid2X2 size={15} className="text-[var(--color-text-secondary)]" />
        </button>

        {/* System Diagnostics Broadcast Alerts Trigger */}
        <button 
          aria-label="Notifications" 
          className="w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 flex items-center justify-center rounded-full bg-white shadow-sm"
        >
          <Bell size={15} className="text-[var(--color-text-secondary)]" />
        </button>
      </div>
    </header>
  );
}