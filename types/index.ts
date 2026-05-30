// ─── Camera ──────────────────────────────────────────────────────────────────
export interface Camera {
  id: string;
  name: string;
  location: string;
  isOnline: boolean;
  hours: string;
  thumbnailUrl?: string;
}

// ─── Lock ────────────────────────────────────────────────────────────────────
export type LockStatus = 'locked' | 'unlocked';

export interface Lock {
  id: string;
  name: string;
  status: LockStatus;
  battery: number;
  location: string;
}

// ─── Activity ────────────────────────────────────────────────────────────────
export interface ActivityEvent {
  id: string;
  time: string;
  location: string;
  description: string;
  type: 'open' | 'closed' | 'motion' | 'alert';
}

// ─── Member ──────────────────────────────────────────────────────────────────
export interface Member {
  id: string;
  name: string;
  avatarUrl?: string;
  color: string;
  initials: string;
}

// ─── Floor ───────────────────────────────────────────────────────────────────
export type FloorView = '1 Flow' | '2 Flow' | 'Garage';

// ─── Navigation ──────────────────────────────────────────────────────────────
export interface NavItem {
  id: string;
  label: string;
  href: string;
}
