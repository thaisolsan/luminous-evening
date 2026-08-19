const SPARKS = [
  { top: "8%", left: "12%", size: 3, delay: 0 },
  { top: "18%", left: "78%", size: 2, delay: 1.2 },
  { top: "28%", left: "34%", size: 2, delay: 2.4 },
  { top: "38%", left: "88%", size: 3, delay: 0.8 },
  { top: "48%", left: "8%", size: 2, delay: 3.1 },
  { top: "56%", left: "62%", size: 3, delay: 1.7 },
  { top: "66%", left: "22%", size: 2, delay: 2.9 },
  { top: "74%", left: "82%", size: 2, delay: 0.4 },
  { top: "84%", left: "46%", size: 3, delay: 2.1 },
  { top: "92%", left: "70%", size: 2, delay: 1.1 },
  { top: "14%", left: "52%", size: 2, delay: 3.6 },
  { top: "62%", left: "92%", size: 2, delay: 4.2 },
];

/** Fundo premium: gradiente, brilho radial dourado e pontos animados. */
export function Sparkles() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_-10%,rgba(212,175,55,0.16),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_110%,rgba(212,175,55,0.1),transparent_65%)]" />
      <div className="absolute inset-y-0 left-0 w-24 bg-[linear-gradient(90deg,rgba(212,175,55,0.08),transparent)]" />
      <div className="absolute inset-y-0 right-0 w-24 bg-[linear-gradient(270deg,rgba(212,175,55,0.08),transparent)]" />
      {SPARKS.map((s, i) => (
        <span
          key={i}
          className="animate-luxe-sparkle absolute rounded-full bg-gold-light"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            boxShadow: "0 0 8px 2px rgba(241,215,122,0.5)",
          }}
        />
      ))}
    </div>
  );
}
