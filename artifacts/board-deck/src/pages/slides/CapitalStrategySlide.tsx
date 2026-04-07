import { useEffect, useState } from "react";

export default function CapitalStrategySlide() {
  const [show, setShow] = useState(false);
  const [activePhase, setActivePhase] = useState(-1);

  useEffect(() => {
    setTimeout(() => setShow(true), 200);
    setTimeout(() => setActivePhase(0), 800);
    setTimeout(() => setActivePhase(1), 1600);
    setTimeout(() => setActivePhase(2), 2400);
  }, []);

  const phases = [
    {
      num: "01",
      title: "Self-Funded Pilot",
      timeline: "Months 0–6",
      pods: "10 pods",
      capital: "$270K–$360K",
      items: [
        "Fund from existing revenue + cash reserves",
        "Prove the recurring model works",
        "Build 10-pod track record for lenders",
        "Generate $53K/mo MRR by month 6",
      ],
      accent: "from-accent/30 to-accent/10",
      border: "border-accent/40",
      glow: true,
    },
    {
      num: "02",
      title: "Equipment Financing",
      timeline: "Months 6–18",
      pods: "50 pods",
      capital: "$1.5M–$2M",
      items: [
        "Equipment leasing facility (CIT, LEAF, Navitas)",
        "10-pod track record unlocks financing",
        "BHL guarantees lease, passes cost to hotel",
        "Spread capex over 36–60 months",
      ],
      accent: "from-white/10 to-white/5",
      border: "border-white/15",
      glow: false,
    },
    {
      num: "03",
      title: "Revenue-Backed Scale",
      timeline: "Months 18–36",
      pods: "200+ pods",
      capital: "Facility-funded",
      items: [
        "$2.5M+ ARR makes us bankable",
        "Revenue-based financing or credit facility",
        "Recurring contracts are collateralizable",
        "Or: strategic raise at platform multiples",
      ],
      accent: "from-white/10 to-white/5",
      border: "border-white/15",
      glow: false,
    },
  ];

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,169,81,0.05),transparent_60%)]" />

      <div className="absolute inset-0 flex flex-col px-[6vw] py-[5vh]">
        <div className={`flex items-center gap-[1vw] mb-[1.5vh] transition-all duration-700 ${show ? "opacity-100" : "opacity-0"}`}>
          <div className="w-[3vw] h-[0.3vh] bg-accent" />
          <p className="font-body text-accent text-[1.1vw] font-semibold tracking-[0.25em] uppercase">Capital Strategy</p>
        </div>

        <h2 className={`font-display text-white text-[3.2vw] font-bold tracking-tight leading-[1.1] mb-[1.5vh] transition-all duration-700 delay-200 ${show ? "opacity-100" : "opacity-0"}`}>
          Funding the Pivot
        </h2>
        <p className={`font-body text-white/40 text-[1.4vw] mb-[4vh] transition-all duration-700 delay-400 ${show ? "opacity-100" : "opacity-0"}`}>
          Equipment purchased upfront, leased to hotels. Here's how we fund it in three phases.
        </p>

        {/* Timeline connector */}
        <div className="relative flex-1 flex gap-[2vw]">
          {/* Horizontal line connecting phases */}
          <div className="absolute top-[4vh] left-[2vw] right-[2vw] h-[0.15vh] bg-white/10 z-0">
            <div
              className="h-full bg-gradient-to-r from-accent to-accent/30 transition-all duration-[2000ms] ease-out"
              style={{ width: activePhase >= 2 ? "100%" : activePhase >= 1 ? "50%" : activePhase >= 0 ? "15%" : "0%" }}
            />
          </div>

          {phases.map((p, i) => {
            const isActive = i <= activePhase;
            return (
              <div
                key={p.num}
                className={`flex-1 flex flex-col transition-all duration-700 ${
                  isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[3vh]"
                }`}
              >
                {/* Phase dot */}
                <div className="flex items-center gap-[0.8vw] mb-[3vh] relative z-10">
                  <div className={`w-[3vw] h-[3vw] rounded-full flex items-center justify-center transition-all duration-500 ${
                    isActive && i === 0
                      ? "bg-accent shadow-[0_0_20px_rgba(200,169,81,0.4)]"
                      : isActive
                        ? "bg-white/15 border border-white/30"
                        : "bg-white/5 border border-white/10"
                  }`}>
                    <span className={`font-display text-[1.2vw] font-bold ${i === 0 && isActive ? "text-primary" : "text-white/60"}`}>
                      {p.num}
                    </span>
                  </div>
                  <div>
                    <p className="font-body text-white/50 text-[0.9vw]">{p.timeline}</p>
                  </div>
                </div>

                {/* Card */}
                <div className={`flex-1 rounded-[1vw] border bg-gradient-to-b ${p.accent} ${p.border} p-[2vw] flex flex-col ${
                  p.glow ? "shadow-[0_0_40px_rgba(200,169,81,0.08)]" : ""
                }`}>
                  <p className="font-display text-white text-[1.8vw] font-bold mb-[0.5vh]">{p.title}</p>
                  <div className="flex gap-[1vw] mb-[2vh]">
                    <span className="font-body text-accent text-[1.1vw] font-semibold">{p.pods}</span>
                    <span className="text-white/20">·</span>
                    <span className="font-body text-white/50 text-[1.1vw]">{p.capital}</span>
                  </div>

                  <div className="space-y-[1.2vh] flex-1">
                    {p.items.map((item, j) => (
                      <div key={j} className="flex items-start gap-[0.6vw]">
                        <span className="text-accent/60 text-[1vw] mt-[0.2vh]">›</span>
                        <p className="font-body text-white/60 text-[1.05vw] leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
