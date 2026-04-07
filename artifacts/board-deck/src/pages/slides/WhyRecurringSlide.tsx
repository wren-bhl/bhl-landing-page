import { useEffect, useState, useRef } from "react";

function AnimatedNumber({ target, prefix = "", suffix = "", duration = 2000, delay = 0 }: { target: number; prefix?: string; suffix?: string; duration?: number; delay?: number }) {
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      started.current = true;
      const startTime = Date.now();
      const tick = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(target * eased));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
    return () => clearTimeout(timeout);
  }, [target, duration, delay]);

  return <>{prefix}{value.toLocaleString()}{suffix}</>;
}

export default function WhyRecurringSlide() {
  const [show, setShow] = useState(false);
  const [activeCard, setActiveCard] = useState(-1);

  useEffect(() => {
    setTimeout(() => setShow(true), 200);
    setTimeout(() => setActiveCard(0), 800);
    setTimeout(() => setActiveCard(1), 1400);
    setTimeout(() => setActiveCard(2), 2000);
  }, []);

  const cards = [
    { label: "Equipment Reseller", mult: "1–3×", value: "$3M–$9M", desc: "One-time sales.\nNo recurring. No stickiness.\nLinear growth only.", bg: "bg-white/5", border: "border-white/10", glow: false },
    { label: "Managed Services", mult: "4–7×", value: "$12M–$21M", desc: "Service contracts.\nSome recurring. Better.\nStill commoditized.", bg: "bg-white/8", border: "border-white/15", glow: false },
    { label: "SaaS / Platform", mult: "8–15×", value: "$24M–$45M", desc: "Subscriptions + data.\nHigh margins. Compounding.\nThis is where we're going.", bg: "bg-accent/10", border: "border-accent/40", glow: true },
  ];

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,169,81,0.08),transparent_60%)]" />

      <div className="absolute inset-0 flex flex-col px-[6vw] py-[5vh]">
        <div className={`flex items-center gap-[1vw] mb-[1.5vh] transition-all duration-700 ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[2vw]"}`}>
          <div className="w-[3vw] h-[0.3vh] bg-accent" />
          <p className="font-body text-accent text-[1.1vw] font-semibold tracking-[0.25em] uppercase">
            Why Pivot
          </p>
        </div>

        <h2 className={`font-display text-white text-[3.5vw] font-bold tracking-tight leading-[1.1] mb-[1vh] transition-all duration-700 delay-200 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[2vh]"}`}>
          Same Revenue.
        </h2>
        <h2 className={`font-display text-white/40 text-[3.5vw] font-bold tracking-tight leading-[1.1] mb-[4vh] transition-all duration-700 delay-400 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[2vh]"}`}>
          Wildly Different Valuation.
        </h2>

        {/* Three cards with staggered reveal */}
        <div className="flex gap-[2vw] flex-1 items-stretch">
          {cards.map((card, i) => {
            const isActive = i <= activeCard;
            const isHighlight = i === 2;
            return (
              <div
                key={card.label}
                className={`flex-1 rounded-[1.2vw] border p-[2.5vw] flex flex-col relative overflow-hidden transition-all duration-700 ${
                  isActive ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-[3vh] scale-95"
                } ${card.bg} ${card.border} ${isHighlight && isActive ? "shadow-[0_0_60px_rgba(200,169,81,0.15)]" : ""}`}
              >
                {isHighlight && (
                  <div className="absolute top-0 left-0 right-0 h-[0.4vh] bg-gradient-to-r from-transparent via-accent to-transparent" />
                )}

                <p className="font-body text-white/50 text-[1.1vw] font-semibold tracking-[0.2em] uppercase mb-[2vh]">
                  {card.label}
                </p>

                <p className={`font-display text-[4vw] font-bold tracking-tight mb-[1vh] ${isHighlight ? "text-accent" : "text-white/70"}`}>
                  {card.mult}
                </p>
                <p className="font-body text-white/40 text-[1vw] mb-[3vh]">
                  revenue multiple
                </p>

                <p className={`font-display text-[2.2vw] font-bold tracking-tight mb-[1.5vh] ${isHighlight ? "text-white" : "text-white/60"}`}>
                  {card.value}
                </p>
                <p className="font-body text-white/30 text-[0.9vw] mb-auto whitespace-pre-line">
                  on $3M revenue
                </p>

                <div className="mt-auto pt-[2vh] border-t border-white/5">
                  <p className="font-body text-white/30 text-[1vw] whitespace-pre-line leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Animated arrows between cards */}
        <div className={`flex items-center justify-center gap-[1vw] mt-[2.5vh] transition-all duration-700 delay-[2500ms] ${activeCard >= 2 ? "opacity-100" : "opacity-0"}`}>
          <div className="h-[0.15vh] flex-1 bg-gradient-to-r from-transparent via-white/20 to-accent/40" />
          <p className="font-body text-accent text-[1.2vw] font-semibold tracking-wider">
            We are here → We're going here
          </p>
          <div className="h-[0.15vh] flex-1 bg-gradient-to-l from-transparent via-white/20 to-accent/40" />
        </div>
      </div>
    </div>
  );
}
