import { useEffect, useState } from "react";

export default function RevenueStackSlide() {
  const [show, setShow] = useState(false);
  const [visibleRows, setVisibleRows] = useState(0);

  useEffect(() => {
    setTimeout(() => setShow(true), 200);
    const interval = setInterval(() => {
      setVisibleRows((prev) => {
        if (prev >= 5) { clearInterval(interval); return 5; }
        return prev + 1;
      });
    }, 400);
    return () => clearInterval(interval);
  }, []);

  const streams = [
    { name: "Equipment Lease", monthly: "$2,500–$3,500", annual: "$30K–$42K", margin: "65%", width: "70%", desc: "Core hardware. Hotel prefers OpEx." },
    { name: "Protocol License", monthly: "$500–$1,000", annual: "$6K–$12K", margin: "95%", width: "25%", desc: "Proprietary sequencing IP." },
    { name: "Data Platform", monthly: "$500–$1,000", annual: "$6K–$12K", margin: "90%", width: "25%", desc: "Utilization + guest outcomes." },
    { name: "Consumables", monthly: "$300–$600", annual: "$3.6K–$7.2K", margin: "80%", width: "15%", desc: "Filters, hygiene, auto-ship." },
    { name: "Certification", monthly: "$350", annual: "$4K–$5K", margin: "95%", width: "12%", desc: "Annual staff recertification." },
  ];

  const totalShown = visibleRows >= 5;

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,169,81,0.04),transparent_70%)]" />

      <div className="absolute inset-0 flex flex-col px-[6vw] py-[5vh]">
        <div className={`flex items-center gap-[1vw] mb-[1.5vh] transition-all duration-700 ${show ? "opacity-100" : "opacity-0"}`}>
          <div className="w-[3vw] h-[0.3vh] bg-accent" />
          <p className="font-body text-accent text-[1.1vw] font-semibold tracking-[0.25em] uppercase">Revenue Architecture</p>
        </div>

        <h2 className={`font-display text-white text-[3.2vw] font-bold tracking-tight leading-[1.1] mb-[4vh] transition-all duration-700 delay-200 ${show ? "opacity-100" : "opacity-0"}`}>
          Five Recurring Streams Per Pod
        </h2>

        {/* Stacking bars */}
        <div className="flex-1 flex flex-col gap-[1.8vh]">
          {streams.map((s, i) => {
            const isVisible = i < visibleRows;
            return (
              <div
                key={s.name}
                className={`flex items-center gap-[2vw] transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-3vw]"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Label */}
                <div className="w-[14vw] shrink-0">
                  <p className="font-body text-white text-[1.3vw] font-semibold">{s.name}</p>
                  <p className="font-body text-white/30 text-[0.9vw]">{s.desc}</p>
                </div>

                {/* Animated bar */}
                <div className="flex-1 relative h-[5vh] rounded-[0.4vw] bg-white/5 overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 rounded-[0.4vw] bg-gradient-to-r from-accent/80 to-accent/40 transition-all duration-1000 ease-out"
                    style={{ width: isVisible ? s.width : "0%" }}
                  />
                  <div className="absolute inset-0 flex items-center px-[1.5vw] justify-between">
                    <p className="font-display text-white text-[1.4vw] font-bold z-10">{s.monthly}/mo</p>
                    <p className="font-body text-white/50 text-[1.1vw] z-10">{s.annual}/yr</p>
                  </div>
                </div>

                {/* Margin badge */}
                <div className="w-[5vw] shrink-0 text-right">
                  <p className="font-display text-accent text-[1.3vw] font-bold">{s.margin}</p>
                  <p className="font-body text-white/30 text-[0.8vw]">margin</p>
                </div>
              </div>
            );
          })}

          {/* Total */}
          <div className={`mt-auto transition-all duration-700 ${totalShown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[2vh]"}`}>
            <div className="h-[0.15vh] bg-gradient-to-r from-accent/50 via-accent to-accent/50 mb-[2vh]" />
            <div className="flex items-end justify-between">
              <div>
                <p className="font-body text-white/50 text-[1vw] font-semibold tracking-[0.2em] uppercase mb-[0.5vh]">
                  Total Per Pod
                </p>
                <div className="flex items-baseline gap-[1vw]">
                  <p className="font-display text-white text-[3.5vw] font-bold tracking-tight">
                    $4,150–$6,100
                  </p>
                  <p className="font-body text-white/40 text-[1.5vw]">/month</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-body text-white/50 text-[1vw] mb-[0.5vh]">Annual per pod</p>
                <p className="font-display text-accent text-[2.5vw] font-bold">$49K–$73K/yr</p>
              </div>
              <div className="text-right">
                <p className="font-body text-white/50 text-[1vw] mb-[0.5vh]">Blended margin</p>
                <p className="font-display text-accent text-[2.5vw] font-bold">~75%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
