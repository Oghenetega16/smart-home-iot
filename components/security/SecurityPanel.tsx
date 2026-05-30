'use client';

import { useState } from 'react';
import Image from 'next/image';
import { members, activityEvents, weekDays } from '@/lib/data';
import { Moon, Sun, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/data';
import type { ActivityEvent } from '@/types';

// ─── Members ─────────────────────────────────────────────────────────────────
function MembersRow() {
  return (
    <div>
      <h3 className="text-sm font-medium text-[var(--color-text-primary)] mb-3">
        Members
      </h3>
      <div className="flex items-center gap-1" role="list" aria-label="Household members">
        {members.slice(0, 4).map((member, i) => (
          <div
            key={member.id}
            role="listitem"
            title={member.name}
            className="relative"
            style={{ marginLeft: i > 0 ? '-8px' : '0' }}
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white overflow-hidden"
              style={{ backgroundColor: member.color }}
              aria-label={member.name}
            >
              <span className="sr-only">{member.initials}</span>
              <Image 
                src={`/member-${i + 1}.jpg`} 
                alt={member.name} 
                width={32} 
                height={32} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
        <div
          className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center text-xs font-semibold border-2 border-white"
          style={{ marginLeft: '-8px' }}
          aria-label={`${members.length - 4} more members`}
        >
          +{members.length - 4}
        </div>
      </div>
    </div>
  );
}

// ─── Calendar Week ────────────────────────────────────────────────────────────
function CalendarWeek({ activeDay, onSelect }: { activeDay: string; onSelect: (d: string) => void }) {
  return (
    <div>
      <p className="text-xs text-gray-400 font-light mb-4">December 03, 2023</p>
      <div
        role="tablist"
        aria-label="Select day"
        className="flex items-center justify-between gap-1"
      >
        {weekDays.map(({ day, label }) => {
          const isActive = day === activeDay;
          return (
            <button
              key={day}
              role="tab"
              aria-label="Select day"
              aria-selected={isActive}
              onClick={() => onSelect(day)}
              className={cn(
                'flex flex-col items-center gap-1.5 py-1.5 transition-all text-center w-9 relative',
                isActive ? 'text-gray-900 font-medium' : 'text-gray-400'
              )}
            >
              <span className="text-[11px] font-normal tracking-wide">{day}</span>
              <span className="text-[11px] font-light opacity-80">{label}</span>
              {isActive && (
                <span className="absolute -bottom-2 w-1 h-1 rounded-full bg-emerald-400" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Activity Event ──────────────────────────────────────────────────────────
function ActivityEventItem({ event, isActive, isLast }: { event: ActivityEvent; isActive: boolean; isLast: boolean }) {
  return (
    <div className="flex gap-4 items-stretch relative min-h-[76px]">
      <div className="w-12 pt-1 flex-shrink-0 text-right">
        <span className="text-xs font-semibold text-gray-900 block">{event.time.split(' ')[0]}</span>
        <span className="text-[10px] text-gray-400 uppercase tracking-tight block">{event.time.split(' ')[1]}</span>
      </div>

      <div className="flex flex-col items-center relative w-3 flex-shrink-0">
        <div
          className={cn(
            'w-2 h-2 rounded-full z-10 transition-all mt-2.5',
            isActive ? 'bg-gray-900 scale-125' : 'bg-gray-300'
          )}
          aria-hidden="true"
        />
        {!isLast && (
          <div className="absolute top-3 bottom-0 w-[1.5px] bg-gray-200" aria-hidden="true" />
        )}
      </div>

      <div className="flex-1 pb-4">
        <div
          className={cn(
            'rounded-2xl p-4 transition-all w-full text-left',
            isActive
              ? 'bg-indigo-50/60 border border-indigo-100/40 relative overflow-hidden before:absolute before:inset-0 before:bg-[linear-gradient(45deg,rgba(165,180,252,0.1)_25%,transparent_25%,transparent_50%,rgba(165,180,252,0.1)_50%,rgba(165,180,252,0.1)_75%,transparent_75%,transparent)] before:bg-[size:16px_16px]'
              : 'bg-gray-50/80'
          )}
        >
          <div className="relative z-10">
            <h4 className="text-xs font-semibold text-gray-900">{event.location}</h4>
            <p className="text-[11px] text-gray-500 font-light mt-0.5">{event.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Panel ───────────────────────────────────────────────────────────────
export default function SecurityPanel() {
  const [activeDay, setActiveDay] = useState('14');
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <aside
      aria-label="Smart home security system"
      className="flex flex-col h-full overflow-y-auto px-4"
    >
      {/* Header Control Container layout matches top nav baseline spacing parameters */}
      <div className="pt-2 pb-6 flex items-center justify-between w-full">
        {/* Toggle Mode Control Switch Container */}
        <div className="bg-gray-100 p-1 rounded-full flex items-center relative w-[72px] h-9 select-none">
          {/* Active indicator sliding pill layer */}
          <div 
            className={cn(
              "absolute top-1 bottom-1 w-7 h-7 rounded-full bg-white shadow-sm transition-transform duration-200 ease-out",
              isDarkMode ? "translate-x-[2px]" : "translate-x-[34px]"
            )}
          />
          
          <button
            onClick={() => setIsDarkMode(true)}
            aria-label="Switch to dark mode"
            className="w-7 h-7 flex items-center justify-center rounded-full relative z-10 transition-colors ml-0.5"
          >
            <Moon size={14} className={isDarkMode ? "text-gray-900" : "text-gray-400"} />
          </button>
          
          <button
            onClick={() => setIsDarkMode(false)}
            aria-label="Switch to light mode"
            className="w-7 h-7 flex items-center justify-center rounded-full relative z-10 transition-colors ml-auto mr-0.5"
          >
            <Sun size={14} className={!isDarkMode ? "text-gray-900" : "text-gray-400"} />
          </button>
        </div>

        {/* User avatar profile navigation menu */}
        <button
          aria-label="User menu for Shopia W."
          className="flex items-center gap-2 pl-2 pr-1 py-1 rounded-full hover:bg-gray-50 transition-colors"
        >
          <div className="w-6 h-6 rounded-full overflow-hidden relative bg-gray-200">
            <Image 
              src="/avatar.jpg" 
              alt="Shopia W." 
              fill
              sizes="24px"
              className="object-cover"
            />
          </div>
          <span className="text-xs font-medium text-gray-900">Shopia W.</span>
          <ChevronDown size={14} className="text-gray-400 stroke-[1.5]" />
        </button>
      </div>

      {/* Main Panel Content Body */}
      <div className="flex flex-col gap-6 flex-1">
        {/* Title */}
        <div className="space-y-1">
          <h2 className="text-[22px] font-medium tracking-tight text-gray-900 leading-tight">
            Smart Home <br />
            <span className="font-bold">Security Systems</span>
          </h2>
        </div>

        {/* Household Profile Row */}
        <div>
          <MembersRow />
        </div>

        {/* Activity Timeline List Layout */}
        <section aria-labelledby="activity-heading" className="flex-1 flex flex-col min-h-0 mt-2">
          <h3
            id="activity-heading"
            className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4"
          >
            Activity
          </h3>

          {/* Calendar Week view control panel */}
          <CalendarWeek activeDay={activeDay} onSelect={setActiveDay} />

          {/* Events Activity Continuous Stream feed */}
          <div
            className="mt-6 flex flex-col flex-1"
            role="feed"
            aria-label="Security activity feed"
          >
            {activityEvents.map((event, i) => (
              <ActivityEventItem
                key={event.id}
                event={event}
                isActive={i === 0}
                isLast={i === activityEvents.length - 1}
              />
            ))}
          </div>
        </section>
      </div>
    </aside>
  );
}