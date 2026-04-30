export type GenType = "text" | "image" | "video" | "audio";

export interface Generation {
  id: string;
  type: GenType;
  providerId: string;
  modelName: string;
  credits: number;
  prompt: string;
  createdAt: string; // human-readable relative time
  text?: string;
  gradient?: string;
  aspect?: "1:1" | "16:9" | "9:16" | "4:3";
  duration?: string;
}

const GRADIENTS = {
  hero: "radial-gradient(120% 90% at 25% 20%, rgba(255,122,61,0.55) 0%, rgba(232,84,32,0.35) 35%, rgba(40,22,18,0.85) 75%, #1a0f0c 100%)",
  ember: "linear-gradient(135deg, rgba(232,84,32,0.65) 0%, rgba(255,122,61,0.35) 50%, #2a1410 100%)",
  smoke: "radial-gradient(80% 60% at 70% 30%, rgba(255,122,61,0.4) 0%, rgba(120,40,20,0.5) 45%, #14080a 100%)",
  amber: "linear-gradient(160deg, #2a1410 0%, rgba(232,84,32,0.5) 50%, rgba(255,180,90,0.4) 100%)",
  dusk: "radial-gradient(100% 70% at 50% 100%, rgba(255,122,61,0.5) 0%, rgba(80,30,20,0.7) 50%, #0f0807 100%)",
  flare: "linear-gradient(45deg, rgba(232,84,32,0.7) 0%, rgba(255,160,80,0.4) 60%, #1a0a08 100%)",
};

export const MOCK_GENERATIONS: Generation[] = [
  // ─── TEXT ───
  {
    id: "t-1",
    type: "text",
    providerId: "chatgpt",
    modelName: "GPT-4o",
    credits: 5,
    prompt: "Напиши короткое стихотворение про закат над морем",
    createdAt: "2 мин назад",
    text: "Закат расплавил горизонт,\nВ воде дрожит янтарный мост.\nИ чайки чертят над волной\nПоследний вальс перед звездой.",
  },
  {
    id: "t-2",
    type: "text",
    providerId: "claude",
    modelName: "Claude Sonnet 4.5",
    credits: 8,
    prompt: "Объясни простыми словами, что такое квантовая запутанность",
    createdAt: "12 мин назад",
    text: "Представь две монетки, которые всегда падают одной и той же стороной — даже если их разнести на километры. Квантовая запутанность похожа на это: две частицы остаются «связанными», и измерение одной мгновенно говорит о состоянии другой.",
  },
  {
    id: "t-3",
    type: "text",
    providerId: "gemini",
    modelName: "Gemini 2.5 Pro",
    credits: 6,
    prompt: "Слоган для кофейни в стиле минимализма",
    createdAt: "час назад",
    text: "Меньше слов. Больше кофе.",
  },

  // ─── IMAGE ───
  {
    id: "i-1",
    type: "image",
    providerId: "nano-banana",
    modelName: "Nano Banana",
    credits: 30,
    prompt: "Кинематографичный портрет: воин на закате, песчаная буря, золотой свет",
    createdAt: "5 мин назад",
    gradient: GRADIENTS.hero,
    aspect: "1:1",
  },
  {
    id: "i-2",
    type: "image",
    providerId: "midjourney",
    modelName: "Midjourney v7",
    credits: 45,
    prompt: "Архитектура будущего: башня из стекла и меди в пустыне",
    createdAt: "20 мин назад",
    gradient: GRADIENTS.amber,
    aspect: "16:9",
  },
  {
    id: "i-3",
    type: "image",
    providerId: "flux",
    modelName: "Flux 1.1 Pro",
    credits: 25,
    prompt: "Минималистичный плакат: оранжевый круг на тёмном фоне",
    createdAt: "вчера",
    gradient: GRADIENTS.ember,
    aspect: "4:3",
  },

  // ─── VIDEO ───
  {
    id: "v-1",
    type: "video",
    providerId: "kling",
    modelName: "Kling 2.5 Turbo",
    credits: 75,
    prompt: "Дрон-облёт горящего костра в горах, закат, медленное движение",
    createdAt: "8 мин назад",
    gradient: GRADIENTS.dusk,
    aspect: "16:9",
    duration: "5s",
  },
  {
    id: "v-2",
    type: "video",
    providerId: "veo",
    modelName: "Veo 3",
    credits: 120,
    prompt: "Капля чернил растворяется в воде, макросъёмка",
    createdAt: "30 мин назад",
    gradient: GRADIENTS.smoke,
    aspect: "9:16",
    duration: "8s",
  },
  {
    id: "v-3",
    type: "video",
    providerId: "sora",
    modelName: "Sora 2",
    credits: 150,
    prompt: "Город ночью с высоты птичьего полёта, неоновые огни",
    createdAt: "2 часа назад",
    gradient: GRADIENTS.flare,
    aspect: "16:9",
    duration: "10s",
  },

  // ─── AUDIO ───
  {
    id: "a-1",
    type: "audio",
    providerId: "suno",
    modelName: "Suno v4",
    credits: 60,
    prompt: "Эмбиент-трек с тёплыми синтезаторами, медленный темп",
    createdAt: "15 мин назад",
    duration: "2:34",
  },
  {
    id: "a-2",
    type: "audio",
    providerId: "elevenlabs",
    modelName: "ElevenLabs v3",
    credits: 40,
    prompt: "Голос рассказчика читает короткое вступление к подкасту",
    createdAt: "час назад",
    duration: "0:48",
  },
  {
    id: "a-3",
    type: "audio",
    providerId: "suno",
    modelName: "Suno v4",
    credits: 60,
    prompt: "Lo-Fi бит для учёбы, мягкие клавиши, винил-шум",
    createdAt: "вчера",
    duration: "3:12",
  },
];

export function gradientForType(type: GenType): string {
  const pool = MOCK_GENERATIONS.filter((g) => g.type === type && g.gradient);
  if (pool.length === 0) return GRADIENTS.hero;
  return pool[Math.floor(Math.random() * pool.length)].gradient!;
}

export function defaultModelFor(type: GenType): { providerId: string; modelName: string; credits: number } {
  const first = MOCK_GENERATIONS.find((g) => g.type === type);
  if (!first) return { providerId: "chatgpt", modelName: "GPT-4o", credits: 5 };
  return { providerId: first.providerId, modelName: first.modelName, credits: first.credits };
}
