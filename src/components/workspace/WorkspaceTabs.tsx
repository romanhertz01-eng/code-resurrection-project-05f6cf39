import { Link, useLocation } from "@tanstack/react-router";
import { Video, Image as ImageIcon, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { path: "/video", Icon: Video, label: "ИИ Видео" },
  { path: "/design", Icon: ImageIcon, label: "ИИ Изображение" },
  { path: "/agents", Icon: Bot, label: "Видеоагент", badge: "beta" },
];

export function WorkspaceTabs() {
  const { pathname } = useLocation();

  return (
    <div className="flex items-center gap-2 mx-4 lg:mx-8 mt-4">
      {tabs.map((t) => (
        <Link
          key={t.path}
          to={t.path}
          className={cn(
            "flex items-center gap-2 px-5 py-2.5 text-[14px] font-semibold rounded-full transition-all border",
            pathname === t.path
              ? "text-white border-transparent gradient-accent shadow-[0_10px_30px_-10px_rgba(232,84,32,0.55)]"
              : "text-[#888] border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.05)]"
          )}
        >
          <t.Icon className="h-4 w-4" />
          {t.label}
          {t.badge && (
            <span className="text-[9px] bg-white/20 text-white px-1.5 py-0.5 rounded-full font-bold uppercase">
              {t.badge}
            </span>
          )}
        </Link>
      ))}
    </div>
  );
}
