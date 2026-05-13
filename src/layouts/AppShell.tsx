import { HeartPulse, Home, MessageCircleHeart, School, UsersRound, MapPinned, ClipboardCheck } from "lucide-react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/school", label: "学校后台", icon: School },
  { to: "/student", label: "学生端", icon: MessageCircleHeart },
  { to: "/parent", label: "家长端", icon: UsersRound },
  { to: "/community", label: "社区站", icon: MapPinned },
  { to: "/counselor", label: "咨询师", icon: ClipboardCheck }
];

export default function AppShell() {
  const location = useLocation();
  const immersiveMobile = location.pathname === "/student/chat";

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-white/70 bg-cream/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-6">
          <NavLink to="/school" className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-2xl bg-sprout-500 text-white shadow-panel">
              <HeartPulse size={23} />
            </span>
            <span>
              <span className="block text-lg font-black text-ink">心芽客 XinYaKe</span>
              <span className="hidden text-xs text-slate-600 sm:block">家校社医协同守护平台</span>
            </span>
          </NavLink>

          <nav className="hidden items-center rounded-2xl bg-white/76 p-1 shadow-panel lg:flex">
            {nav.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-slate-600 transition",
                      isActive && "bg-sprout-500 text-white shadow-panel"
                    )
                  }
                >
                  <Icon size={17} />
                  {item.label}
                </NavLink>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 lg:px-6">
        <Outlet />
      </main>

      <nav className={cn("fixed inset-x-3 bottom-3 z-40 grid grid-cols-5 rounded-3xl border border-white/80 bg-white/92 p-2 shadow-soft backdrop-blur lg:hidden", immersiveMobile && "hidden")}>
        {nav.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn("flex flex-col items-center gap-1 rounded-2xl px-1 py-2 text-[11px] font-semibold text-slate-500", isActive && "bg-sprout-100 text-sprout-800")
              }
            >
              <Icon size={18} />
              {item.label}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}
