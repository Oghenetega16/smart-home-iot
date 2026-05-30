import TopNav from '@/components/layout/TopNav';
import CamerasPanel from '@/components/cameras/CamerasPanel';
import LocksPanel from '@/components/locks/LocksPanel';
import MainHouseView from '@/components/dashboard/MainHouseView';
import SecurityPanel from '@/components/security/SecurityPanel';

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-[var(--color-surface)] flex flex-col lg:flex-row">
            <div className='w-full'>
                <TopNav />

                {/* 3-column layout */}
                <main className="flex flex-1 gap-0 overflow-hidden" style={{ height: 'calc(100vh - 60px)' }}>
                    {/* ── LEFT SIDEBAR ─────────────────────────────────────── */}
                    <aside
                        aria-label="Cameras and locks"
                        className="w-64 shrink-0 flex flex-col gap-5 p-5 overflow-y-auto bg-[var(--color-surface)]"
                    >
                        <CamerasPanel />
                        
                        <LocksPanel />
                    </aside>

                    {/* ── CENTER: House view ───────────────────────────────── */}
                    <div className="flex-1 p-6 overflow-hidden">
                        <div className="h-full animate-fade-in-up">
                            <MainHouseView />
                        </div>
                    </div>
                </main>
            </div>

            {/* ── RIGHT SIDEBAR ────────────────────────────────────── */}
            <div className="w-72 shrink-0 p-5 overflow-y-auto border-l border-[var(--color-border)] bg-white">
                <SecurityPanel />
            </div>
        </div>
    );
}
