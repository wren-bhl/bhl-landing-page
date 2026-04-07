import { useEffect, useState, useRef } from "react";

function Counter({ target, prefix = "", suffix = "", decimals = 0, delay = 0 }: { target: number; prefix?: string; suffix?: string; decimals?: number; delay?: number }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      const start = Date.now();
      const tick = () => {
        const progress = Math.min((Date.now() - start) / 1500, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(target * eased);
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
    return () => clearTimeout(timeout);
  }, [target, delay]);
  
  const formatted = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString();
  return <>{prefix}{formatted}{suffix}</>;
}

export default function UnitEconomicsSlide() {
  const [show, setShow] = useState(false);
  useEffect(() => { setTimeout(() => setShow(true), 200); }, []);

  const costs = [
    { label: "Equipment (6 modalities)", value: "$22,000–$28,000" },
    { label: "Installation & setup", value: "$3,000–$5,000" },
    { label: "Initial training", value: "$2,000–$3,000" },
    { label: "Logistics & freight", value: "Buyer-paid" },
  ];

  const revenues = [
    { label: "Equipment lease", value: "$3,000/mo" },
    { label: "Protocol license", value: "$750/mo" },
    { label: "Data platform", value: "$750/mo" },
    { label: "Consumables", value: "$450/mo" },
    { label: "Certification", value: "$350/mo" },
  ];

  const metrics = [
    { label: "Payback", value: "6–8", suffix: " mo", color: "text-accent" },
    { label: "Annual/Pod", prefix: "$", value: "63.6", suffix: "K", color: "text-white" },
    { label: "Gross Margin", value: "~75", suffix: "%", color: "text-accent" },
    { label: "LTV (3yr)", prefix: "$", value: "190.8", suffix: "K", color: "text-white" },
    { label: "LTV:CAC", value: "5–7", suffix: "×", color: "text-accent" },
  ];

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(200,169,81,0.06),transparent_60%)]" />

      <div className="absolute inset-0 flex flex-col px-[6vw] py-[5vh]">
        <div className={`flex items-center gap-[1vw] mb-[1.5vh] transition-all duration-700 ${show ? "opacity-100" : "opacity-0"}`}>
          <div className="w-[3vw] h-[0.3vh] bg-accent" />
          <p className="font-body text-accent text-[1.1vw] font-semibold tracking-[0.25em] uppercase">Unit Economics</p>
        </div>

        <h2 className={`font-display text-white text-[3.2vw] font-bold tracking-tight leading-[1.1] mb-[4vh] transition-all duration-700 delay-200 ${show ? "opacity-100" : "opacity-0"}`}>
          The Math on Every Pod
        </h2>

        <div className="flex gap-[3vw] flex-1">
          {/* Cost side */}
          <div className={`flex-1 transition-all duration-700 delay-400 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[2vh]"}`}>
            <div className="rounded-[1vw] border border-red-400/20 bg-red-400/5 p-[2.5vw] h-full flex flex-col">
              <p className="font-body text-red-400/70 text-[1.1vw] font-semibold tracking-[0.2em] uppercase mb-[3vh]">
                Cost to Deploy
              </p>
              <div className="space-y-[2vh] flex-1">
                {costs.map((c) => (
                  <div key={c.label} className="flex justify-between items-baseline">
                    <p className="font-body text-white/60 text-[1.3vw]">{c.label}</p>
                    <p className="font-body text-white/80 text-[1.3vw] font-semibold">{c.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-auto pt-[2vh] border-t border-red-400/20">
                <div className="flex justify-between items-baseline">
                  <p className="font-body text-white text-[1.4vw] font-bold">Total to BHL</p>
                  <p className="font-display text-red-400/80 text-[2vw] font-bold">$27K–$36K</p>
                </div>
              </div>
            </div>
          </div>

          {/* Animated arrow */}
          <div className={`flex items-center transition-all duration-700 delay-[1200ms] ${show ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}>
            <div className="w-[3vw] h-[0.15vh] bg-gradient-to-r from-red-400/30 to-accent/50" />
            <div className="w-0 h-0 border-t-[0.8vh] border-b-[0.8vh] border-l-[1vw] border-t-transparent border-b-transparent border-l-accent/50" />
          </div>

          {/* Revenue side */}
          <div className={`flex-1 transition-all duration-700 delay-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[2vh]"}`}>
            <div className="rounded-[1vw] border border-accent/30 bg-accent/5 p-[2.5vw] h-full flex flex-col shadow-[0_0_60px_rgba(200,169,81,0.08)]">
              <p className="font-body text-accent text-[1.1vw] font-semibold tracking-[0.2em] uppercase mb-[3vh]">
                Monthly Recurring Revenue
              </p>
              <div className="space-y-[2vh] flex-1">
                {revenues.map((r) => (
                  <div key={r.label} className="flex justify-between items-baseline">
                    <p className="font-body text-white/60 text-[1.3vw]">{r.label}</p>
                    <p className="font-body text-white text-[1.3vw] font-semibold">{r.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-auto pt-[2vh] border-t border-accent/30">
                <div className="flex justify-between items-baseline">
                  <p className="font-body text-white text-[1.4vw] font-bold">Total MRR</p>
                  <p className="font-display text-accent text-[2vw] font-bold">$5,300/mo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom metrics strip */}
        <div className={`mt-[3vh] flex gap-[1vw] transition-all duration-700 delay-[1500ms] ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[2vh]"}`}>
          {metrics.map((m) => (
            <div key={m.label} className="flex-1 rounded-[0.6vw] bg-white/5 border border-white/5 p-[1.2vw] text-center">
              <p className={`font-display text-[2vw] font-bold ${m.color}`}>{m.value}{m.suffix}</p>
              <p className="font-body text-white/30 text-[0.9vw] mt-[0.3vh]">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
