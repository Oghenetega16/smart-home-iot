'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { FloorView } from '@/types';
import { cn } from '@/lib/data';
import { Camera, Lock, Move, Plus } from 'lucide-react';

const floorViews: FloorView[] = ['1 Flow', '2 Flow', 'Garage'];

// Dictionary map connecting tab selection values to image asset file strings
const floorImages: Record<FloorView, string> = {
  '1 Flow': '/download.jpg',
  '2 Flow': '/download-2.jpg',
  'Garage': '/download-3.jpg',                        
};

export default function MainHouseView() {
  const [activeFloor, setActiveFloor] = useState<FloorView>('1 Flow');
  
  return (
    <section
      className="flex flex-col h-full w-full"
      aria-label="Home floor plan view"
    >
      {/* Header Row: Title on Left, Controls on Right */}
      <div className="flex items-start justify-between mb-6 px-2">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900 tracking-tight">Home</h1>
          <p className="text-xs font-light text-gray-400 mt-0.5">Backyard</p>
        </div>

        {/* Floor Selector Buttons */}
        <div
          role="tablist"
          aria-label="Floor view selector"
          className="flex items-center gap-1 bg-gray-100/80 p-1 rounded-full"
        >
          {floorViews.map(floor => (
            <button
              key={floor}
              role="tab"
              aria-label="floor"
              onClick={() => setActiveFloor(floor)}
              className={cn(
                'px-5 py-1.5 rounded-full text-xs font-medium transition-all duration-200',
                activeFloor === floor
                  ? 'bg-emerald-100 text-emerald-600 shadow-none'
                  : 'text-gray-400 hover:text-gray-600'
              )}
            >
              {floor}
            </button>
          ))}
        </div>
      </div>

      {/* Main Rendering Container */}
      {/* Set the base wrapper background color to match the image's #F6FCFF */}
      <div 
        className="flex-1 relative w-full h-full overflow-hidden select-none"
        style={{ backgroundColor: '#F6FCFF' }}
      >
        {/* The House Image Render changes dynamically based on selection map lookup */}
        <Image
          src={floorImages[activeFloor]} 
          alt={`House view: ${activeFloor}`}
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 100vw"
          className="w-full h-full object-contain p-4 transition-all duration-300"
        />

        {/* Radial Vignette Mask:
          This overlay uses a soft radial gradient that is completely transparent in the center
          where the house sits, but softly transitions out to pure #F6FCFF at the outer edges.
          This erases any visible image borders completely and blends everything perfectly.
        */}
        <div 
          className="absolute inset-0 pointer-events-none mix-blend-normal"
          style={{
            background: 'radial-gradient(circle at 50% 50%, transparent 40%, #F6FCFF 75%)'
          }}
        />

        {/* ─── Floating IoT Hotspots (Coordinates customized for this specific model) ─── */}
        
        {/* Upper Balcony Camera Control Hotspot */}
        <div className="absolute top-[44%] left-[64%] -translate-x-1/2 -translate-y-1/2">
          <div className="w-10 h-10 rounded-full bg-emerald-100/90 backdrop-blur-sm flex items-center justify-center relative shadow-sm">
            <Camera size={16} className="text-emerald-600" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-gray-300 border border-white flex items-center justify-center">
              <Plus size={10} className="text-white stroke-[3px]" />
            </div>
          </div>
        </div>

        {/* Main Entryway Lower Level Security Lock Hotspot */}
        <div className="absolute top-[66%] left-[45%] -translate-x-1/2 -translate-y-1/2">
          <div className="w-10 h-10 rounded-full bg-purple-100/90 backdrop-blur-sm flex items-center justify-center relative shadow-sm">
            <Lock size={15} className="text-purple-600" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-gray-300 border border-white flex items-center justify-center">
              <Plus size={10} className="text-white stroke-[3px]" />
            </div>
          </div>
        </div>

        {/* Porch / Pathway Orientation Pan/Tilt Hotspot */}
        <div className="absolute top-[72%] left-[68%] -translate-x-1/2 -translate-y-1/2">
          <div className="w-10 h-10 rounded-full bg-emerald-400/90 backdrop-blur-sm flex items-center justify-center relative shadow-sm">
            <Move size={16} className="text-white" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-gray-300 border border-white flex items-center justify-center">
              <Plus size={10} className="text-white stroke-[3px]" />
            </div>
          </div>
        </div>

        {/* 3D Orbit Perspective Rotation Tool Anchor (Centered Bottom Edge) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <button 
            aria-label="Rotate view perspective"
            className="w-8 h-8 rounded-full bg-white/90 shadow-sm border border-gray-100/60 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}