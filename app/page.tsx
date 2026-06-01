import TopNav from '@/components/layout/TopNav';
import CamerasPanel from '@/components/cameras/CamerasPanel';
import LocksPanel from '@/components/locks/LocksPanel';
import MainHouseView from '@/components/dashboard/MainHouseView';
import SecurityPanel from '@/components/security/SecurityPanel';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[var(--color-surface)] flex flex-col xl:flex-row w-full overflow-x-hidden">
      
      {/* ── MAIN FLOW CONTAINER (Left Sidebar + Center Canvas View) ── */}
      <div className="flex-1 flex flex-col w-full">
        {/* Top Header Navigation */}
        <TopNav />

        {/* Flexible Layout Matrix:
          - Mobile/Tablet: Stacks vertical scroll elements dynamically (`flex-col`, `h-auto`)
          - Large Screens (xl): Locks fluid heights to standard layout constraints (`xl:h-[calc(100vh-76px)]`, `overflow-hidden`)
        */}
        <main className="flex flex-col md:flex-row flex-1 gap-6 p-4 md:p-6 h-auto xl:h-[calc(100vh-76px)] xl:overflow-hidden">
          
          {/* ── LEFT SIDEBAR (Cameras & Locks Panel) ── */}
          <aside
            aria-label="Cameras and locks controls"
            className="w-full md:w-72 xl:w-64 shrink-0 flex flex-col gap-6 p-5 rounded-3xl bg-white xl:bg-transparent shadow-sm xl:shadow-none overflow-y-auto max-h-[400px] md:max-h-none"
          >
            <CamerasPanel />
            <LocksPanel />
          </aside>

          {/* ── CENTER INTERACTIVE CANVAS (House Visualization) ── */}
          <div className="flex-1 min-w-0 h-[350px] sm:h-[450px] md:h-full overflow-hidden p-4 sm:p-6 shadow-sm xl:shadow-none">
            <div className="h-full w-full animate-fade-in-up">
              <MainHouseView />
            </div>
          </div>
          
        </main>
      </div>

      {/* ── RIGHT SIDEBAR (Security Events Timeline Feed) ── */}
      {/* Responsive Adjustments:
        - Mobile/Tablet: Rendered on a clean full-width card section underneath the core canvas
        - Large Screens: Becomes a distinct right border partition container layout
      */}
      <div className="w-full xl:w-80 shrink-0 p-5 overflow-y-auto border-t xl:border-t-0 xl:border-l border-[var(--color-border)] bg-white h-auto xl:h-screen">
        <SecurityPanel />
      </div>

    </div>
  );
}