const models = [
  { name: "ChatGPT", icon: "🤖" },
  { name: "Claude", icon: "💜" },
  { name: "Gemini", icon: "💎" },
  { name: "MidJourney", icon: "⛵" },
  { name: "Nano Banana", icon: "🍌" },
  { name: "Sora", icon: "🎬" },
  { name: "Kling", icon: "🎥" },
  { name: "Seedance", icon: "💃" },
  { name: "Veo", icon: "🌊" },
  { name: "Flux", icon: "✨" },
  { name: "ElevenLabs", icon: "🎙" },
  { name: "Suno", icon: "🎵" },
  { name: "DeepSeek", icon: "🔍" },
  { name: "Grok", icon: "⚡" },
  { name: "Perplexity", icon: "🔮" },
];

export function ModelsMarquee() {
  return (
    <div style={{ padding: "20px 0", borderBottom: "1px solid rgba(255,255,255,0.06)", overflow: "hidden" }}>
      <div className="marquee-track">
        {[0, 1].map((dup) => (
          <div key={dup} className="inline-flex items-center" style={{ gap: 32 }}>
            {models.map((m) => (
              <div key={m.name + dup} className="flex items-center" style={{ gap: 8 }}>
                <div className="flex items-center justify-center" style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(255,255,255,0.06)", fontSize: 14 }}>
                  {m.icon}
                </div>
                <span style={{ fontSize: 14, fontWeight: 500, color: "var(--seo-text-muted)", whiteSpace: "nowrap" }}>{m.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <style>{`
        .marquee-track {
          display: inline-flex;
          gap: 32px;
          animation: marquee-scroll 30s linear infinite;
          white-space: nowrap;
        }
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
