import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow } from "@/components/ui/era";

type GenType = "text" | "image" | "video" | "audio";
const GEN_TYPES: GenType[] = ["text", "image", "video", "audio"];

interface CreateSearch {
  type: GenType;
  model: string;
  prompt: string;
}

export const Route = createFileRoute("/create")({
  validateSearch: (raw: Record<string, unknown>): CreateSearch => {
    const t = String(raw.type ?? "image");
    return {
      type: (GEN_TYPES.includes(t as GenType) ? t : "image") as GenType,
      model: typeof raw.model === "string" ? raw.model : "",
      prompt: typeof raw.prompt === "string" ? raw.prompt : "",
    };
  },
  head: () => ({
    meta: [
      { title: "Рабочая зона — ERA2" },
      { name: "description", content: "Рабочая зона генерации ERA2." },
    ],
  }),
  component: CreatePage,
});

function CreatePage() {
  const { type, model, prompt } = Route.useSearch();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <Eyebrow>● РАБОЧАЯ ЗОНА · {type.toUpperCase()}</Eyebrow>
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mt-4 mb-3 text-foreground">
        Рабочая зона
      </h1>
      <p className="text-muted-foreground mb-10">
        Здесь будет chat-лента генераций (промпт #3).
      </p>

      <div className="rounded-2xl border border-border bg-secondary p-6 space-y-3 font-mono text-sm">
        <div className="flex gap-3">
          <span className="text-muted-foreground w-20">type</span>
          <span className="text-primary">{type}</span>
        </div>
        <div className="flex gap-3">
          <span className="text-muted-foreground w-20">model</span>
          <span className="text-foreground">{model || <em className="text-muted-foreground/60">не выбрано</em>}</span>
        </div>
        <div className="flex gap-3">
          <span className="text-muted-foreground w-20">prompt</span>
          <span className="text-foreground break-words">{prompt || <em className="text-muted-foreground/60">пусто</em>}</span>
        </div>
      </div>
    </div>
  );
}
