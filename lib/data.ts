import type { Camera, Lock, ActivityEvent, Member } from '@/types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── Mock Data ────────────────────────────────────────────────────────────────

export const cameras: Camera[] = [
  {
    id: 'cam-1',
    name: 'Camera 3',
    location: 'Backyard',
    isOnline: true,
    hours: '12 pm - 6 pm',
  },
  {
    id: 'cam-2',
    name: 'Camera 4',
    location: 'Front Door',
    isOnline: true,
    hours: '12 pm - 6 pm',
  },
  {
    id: 'cam-3',
    name: 'Camera 1',
    location: 'Garage',
    isOnline: false,
    hours: '6 am - 12 pm',
  },
  {
    id: 'cam-4',
    name: 'Camera 2',
    location: 'Living Room',
    isOnline: true,
    hours: '12 pm - 6 pm',
  },
];

export const locks: Lock[] = [
  {
    id: 'lock-1',
    name: 'Front Door Lock',
    status: 'locked',
    battery: 60,
    location: 'Main Entrance',
  },
  {
    id: 'lock-2',
    name: 'Backyard',
    status: 'unlocked',
    battery: 45,
    location: 'Back Door',
  },
];

export const activityEvents: ActivityEvent[] = [
  {
    id: 'act-1',
    time: '07:00 am',
    location: 'Home',
    description: 'Back Door was Closed',
    type: 'closed',
  },
  {
    id: 'act-2',
    time: '08:00 am',
    location: 'Home',
    description: 'Back Door was Opened',
    type: 'open',
  },
  {
    id: 'act-3',
    time: '09:15 am',
    location: 'Home',
    description: 'Motion Detected – Backyard',
    type: 'motion',
  },
  {
    id: 'act-4',
    time: '10:30 am',
    location: 'Home',
    description: 'Front Door Locked',
    type: 'closed',
  },
];

export const members: Member[] = [
  { id: 'm-1', name: 'Shopia W.', color: '#f97316', initials: 'SW' },
  { id: 'm-2', name: 'Alex K.', color: '#8b5cf6', initials: 'AK' },
  { id: 'm-3', name: 'Chris B.', color: '#3b82f6', initials: 'CB' },
  { id: 'm-4', name: 'Dana L.', color: '#ec4899', initials: 'DL' },
  { id: 'm-5', name: 'Evan M.', color: '#14b8a6', initials: 'EM' },
];

export const weekDays = [
  { day: '11', label: 'Mon' },
  { day: '12', label: 'Tue' },
  { day: '13', label: 'Wed' },
  { day: '14', label: 'Thu' },
  { day: '15', label: 'Fri' },
  { day: '16', label: 'Sat' },
  { day: '17', label: 'Sun' },
];
