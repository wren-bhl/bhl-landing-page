import { useEffect, useState } from "react";

const base = import.meta.env.BASE_URL;

export default function TheAskSlide() {
  const [show, setShow] = useState(false);
  const [visibleItems, setVisibleItems] = useState(0);

  useEffect(() => {
    setTimeout(() => setShow(true), 200);
    const interval = setInterval(() => {
      setVisibleItems((prev) => {
        if (prev >= 4) { clearInterval(interval); return 4; }
        return prev + 1;
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const asks = [
    {
      num: "1",
      title: "Approve the subscription model",
      desc: "As the primary go-to-market. Retain $49K purchase option for buyers who prefer it.",
    },
    {
      num: "2",
      title: "Allocate $270K–$360K for Phase 1",
      desc: "Self-funded pilot. 10 pods. Prove the model with real recurring revenue.",
    },
    {
      num: "3",
      title: "Authorize financing negotiations",
      desc: "Target $1.5M–$2M equipment facility at 50-pod scale. Conversations start now.",
    },
    {
      num: "4",
      title: "Set 6-month review milestone",
      desc: "10 pods deployed. $50K+/mo MRR. <8-month payback validated. Gate to Phase 2.",
    },
  ];

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-primary">
      <img
        src={`${base}luxury-resort.png`}
        crossOrigin="anonymous"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
        alt=""
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/95 to-primary/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,169,81,0.06),transparent_60%)]" />

      <div className="absolute inset-0 flex flex-col px-[6vw] py-[5vh]">
        <div className={`flex items-center gap-[1vw] mb-[1.5vh] transition-all duration-700 ${show ? "opacity-100" : "opacity-0"}`}>
          <div className="w-[3vw] h-[0.3vh] bg-accent" />
          <p className="font-body text-accent text-[1.1vw] font-semibold tracking-[0.25em] uppercase">The Ask</p>
        </div>

        <h2 className={`font-display text-white text-[3.5vw] font-bold tracking-tight leading-[1.1] mb-[1.5vh] transition-all duration-700 delay-200 ${show ? "opacity-100" : "opacity-0"}`}>
          Board Approval to
        </h2>
        <h2 className={`font-display text-[3.5vw] font-bold tracking-tight leading-[1.1] mb-[5vh] transition-all duration-700 delay-400 ${show ? "opacity-100" : "opacity-0"}`}>
          <span className="bg-gradient-to-r from-accent via-yellow-400 to-accent bg-clip-text text-transparent">
            Pivot the Model
          </span>
        </h2>

        {/* Decision items */}
        <div className="flex-1 flex flex-col gap-[2vh]">
          {asks.map((ask, i) => {
            const isVisible = i < visibleItems;
            return (
              <div
                key={ask.num}
                className={`flex items-start gap-[2vw] transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-3vw]"
                }`}
              >
                <div className={`w-[3.5vw] h-[3.5vw] rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ${
                  isVisible ? "bg-accent shadow-[0_0_20px_rgba(200,169,81,0.3)]" : "bg-white/10"
                }`}>
                  <span className="font-display text-primary text-[1.5vw] font-bold">{ask.num}</span>
                </div>
                <div className="pt-[0.3vh]">
                  <p className="font-display text-white text-[1.8vw] font-bold mb-[0.5vh]">{ask.title}</p>
                  <p className="font-body text-white/40 text-[1.2vw]">{ask.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom callout */}
        <div className={`mt-auto transition-all duration-1000 delay-[3000ms] ${visibleItems >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[2vh]"}`}>
          <div className="h-[0.15vh] bg-gradient-to-r from-transparent via-accent/50 to-transparent mb-[3vh]" />
          <p className="font-display text-[2vw] font-bold text-center">
            <span className="text-white/60">The risk is </span>
            <span className="text-accent">$270K and 6 months</span>
            <span className="text-white/60">. The upside is a platform worth </span>
            <span className="text-accent">$100M+</span>
            <span className="text-white/60">.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
