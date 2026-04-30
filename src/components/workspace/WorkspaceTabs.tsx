import { Link, useLocation } from "@tanstack/react-router";
import { MessageSquare, Image as ImageIcon, Video, AudioLines } from "lucide-react";
import { cn } from "@/lib/utils";

type TabId = "text" | "image" | "video" | "audio";

const TABS: {
  id: TabId;
  label: string;
  to: string;
  Icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
}[] = [
  { id: "text", label: "Текст", to: "/text", Icon: MessageSquare },
  { id: "image", label: "Изображения", to: "/design", Icon: ImageIcon },
  { id: "video", label: "Видео", to: "/video", Icon: Video },
  { id: "audio", label: "Аудио", to: "/audio", Icon: AudioLines },
];

const PATH_TO_ID: Record<string, TabId> = {
  "/text": "text",
  "/design": "image",
  "/video": "video",
  "/audio": "audio",
};

interface WorkspaceTabsProps {
  variant?: "attached" | "standalone";
}

export function WorkspaceTabs({ variant = "standalone" }: WorkspaceTabsProps) {
  const { pathname } = useLocation();
  const activeId = PATH_TO_ID[pathname];

  // Same border logic as PromptWindow.tsx
  const cardBorder = "var(--c-line-2)";
  const activeCardBorder = "color-mix(in oklab, var(--c-accent) 40%, transparent)";

  const containerStyle: React.CSSProperties =
    variant === "attached"
      ? { marginBottom: -1, position: "relative", zIndex: 2 }
      : { marginBottom: 0 };

  return (
    <div className="w-full max-w-[880px] mx-auto px-1">
      <div
        className="flex items-end gap-1 overflow-x-auto scrollbar-hide flex-nowrap justify-start"
        style={containerStyle}
      >
        {TABS.map((t) => {
          const isActive = t.id === activeId;
          const { Icon } = t;
          const activeBottomBorder =
            variant === "attached"
              ? "1px solid var(--c-bg-1)"
              : "1px solid var(--c-line)";
          return (
            <Link
              key={t.id}
              to={t.to}
              className={cn(
                "shrink-0 inline-flex items-center gap-2 px-5 text-sm font-medium transition-colors duration-200",
                "rounded-t-xl rounded-b-none",
              )}
              style={
                isActive
                  ? {
                      height: 40,
                      background: "var(--c-bg-1)",
                      borderTop: `1px solid ${activeCardBorder}`,
                      borderLeft: `1px solid ${activeCardBorder}`,
                      borderRight: `1px solid ${activeCardBorder}`,
                      borderBottom: activeBottomBorder,
                      color: "var(--c-accent-2)",
                    }
                  : {
                      height: 40,
                      background: "color-mix(in oklab, var(--c-bg-1) 92%, #000)",
                      borderTop: "1px solid var(--c-line)",
                      borderLeft: "1px solid var(--c-line)",
                      borderRight: "1px solid var(--c-line)",
                      borderBottom: `1px solid ${cardBorder}`,
                      color: "color-mix(in oklab, var(--c-fg-dim) 70%, transparent)",
                    }
              }
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.color = "var(--c-fg)";
              }}
              onMouseLeave={(e) => {
                if (!isActive)
                  e.currentTarget.style.color =
                    "color-mix(in oklab, var(--c-fg-dim) 70%, transparent)";
              }}
            >
              <Icon size={16} strokeWidth={1.8} />
              <span>{t.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
