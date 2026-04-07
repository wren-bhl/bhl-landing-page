import { useEffect, useState } from "react";

export default function CurrentVsNewSlide() {
  const [show, setShow] = useState(false);
  const [phase, setPhase] = useState(0); // 0=hidden, 1=current, 2=new, 3=both

  useEffect(() => {
    setTimeout(() => setShow(true), 200);
    setTimeout(() => setPhase(1), 600);
    setTimeout(() => setPhase(2), 1800);
    setTimeout(() => setPhase(3), 2800);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(200,169,81,0.05),transparent_60%)]" />

      <div className="absolute inset-0 flex flex-col px-[6vw] py-[5vh]">
        <div className={`flex items-center gap-[1vw] mb-[1.5vh] transition-all duration-700 ${show ? "opacity-100" : "opacity-0"}`}>
          <div className="w-[3vw] h-[0.3vh] bg-accent" />
          <p className="font-body text-accent text-[1.1vw] font-semibold tracking-[0.25em] uppercase">The Pivot</p>
        </div>

        <h2 className={`font-display text-white text-[3.2vw] font-bold tracking-tight leading-[1.1] mb-[4vh] transition-all duration-700 delay-200 ${show ? "opacity-100" : "opacity-0"}`}>
          One Stops. The Other Compounds.
        </h2>

        <div className="flex gap-[3vw] flex-1">
          {/* CURRENT MODEL — fades/shrinks when new model appears */}
          <div className={`flex-1 rounded-[1.2vw] border border-white/10 p-[3vw] flex flex-col transition-all duration-1000 ${
            phase >= 1 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[3vw]"
          } ${phase >= 2 ? "opacity-50 scale-[0.97]" : ""}`}>

            <div className="flex items-center gap-[0.8vw] mb-[3vh]">
              <div className="w-[1vw] h-[1vw] rounded-full bg-red-400/60" />
              <p className="font-body text-red-400/80 text-[1.2vw] font-semibold tracking-[0.15em] uppercase">
                Current Model
              </p>
            </div>

            <p className="font-display text-white/60 text-[2.5vw] font-bold mb-[1.5vh]">One-Time Sales</p>

            <div className="space-y-[1.5vh] mb-auto">
              {[
                "$49,000 per pod — revenue recognized at delivery",
                "No ongoing relationship required",
                "Customer can switch to competitor equipment",
                "Every year starts from zero",
                "Valuation: 1–3× revenue",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-[0.8vw]">
                  <span className="text-red-400/50 text-[1.2vw] mt-[0.1vh]">—</span>
                  <p className="font-body text-white/40 text-[1.2vw] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-[2vh] border-t border-white/5">
              <p className="font-body text-white/30 text-[1.1vw]">100 pods = $4.9M total revenue</p>
              <p className="font-body text-red-400/50 text-[1vw] mt-[0.5vh] italic">
                Then you need 100 more to do it again.
              </p>
            </div>
          </div>

          {/* Arrow / transition */}
          <div className={`flex items-center transition-all duration-700 delay-[2000ms] ${phase >= 3 ? "opacity-100" : "opacity-0"}`}>
            <div className="flex flex-col items-center gap-[1vh]">
              <div className="w-[0.15vw] h-[8vh] bg-gradient-to-b from-transparent via-accent to-transparent" />
              <p className="font-body text-accent text-[1.5vw] font-bold rotate-0">→</p>
              <div className="w-[0.15vw] h-[8vh] bg-gradient-to-b from-transparent via-accent to-transparent" />
            </div>
          </div>

          {/* NEW MODEL — enters with energy */}
          <div className={`flex-1 rounded-[1.2vw] border p-[3vw] flex flex-col transition-all duration-1000 ${
            phase >= 2
              ? "opacity-100 translate-x-0 border-accent/30 shadow-[0_0_80px_rgba(200,169,81,0.1)]"
              : "opacity-0 translate-x-[3vw] border-white/10"
          }`}>

            <div className="flex items-center gap-[0.8vw] mb-[3vh]">
              <div className="w-[1vw] h-[1vw] rounded-full bg-accent shadow-[0_0_10px_rgba(200,169,81,0.5)]" />
              <p className="font-body text-accent text-[1.2vw] font-semibold tracking-[0.15em] uppercase">
                New Model
              </p>
            </div>

            <p className="font-display text-white text-[2.5vw] font-bold mb-[1.5vh]">Subscription Platform</p>

            <div className="space-y-[1.5vh] mb-auto">
              {[
                "$3,500–$5,500/month per pod — recurring",
                "$42K–$66K/yr recognized over contract life",
                "Protocol lock-in + certified staff = switching cost",
                "Revenue compounds as you add pods",
                "Valuation: 8–15× revenue",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-[0.8vw]">
                  <span className="text-accent text-[1.2vw] mt-[0.1vh]">✓</span>
                  <p className="font-body text-white text-[1.2vw] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-[2vh] border-t border-accent/20">
              <p className="font-body text-white text-[1.1vw] font-semibold">100 pods = $4.2M ARR (every year)</p>
              <p className="font-body text-accent text-[1vw] mt-[0.5vh] italic">
                And it compounds as you add pods.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
