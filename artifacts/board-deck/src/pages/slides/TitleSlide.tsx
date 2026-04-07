import { useEffect, useState } from "react";

const base = import.meta.env.BASE_URL;

export default function TitleSlide() {
  const [show, setShow] = useState(false);
  useEffect(() => { setTimeout(() => setShow(true), 200); }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-primary">
      <img
        src={`${base}hero-wellness.png`}
        crossOrigin="anonymous"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        alt=""
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/70" />

      {/* Subtle animated accent line */}
      <div
        className="absolute top-0 left-0 h-[0.4vh] bg-gradient-to-r from-accent via-accent/80 to-transparent transition-all duration-[2000ms] ease-out"
        style={{ width: show ? "60%" : "0%" }}
      />

      <div className="absolute top-[6vh] left-[6vw]">
        <img
          src={`${base}logo-light.png`}
          crossOrigin="anonymous"
          className={`h-[8vh] w-auto transition-all duration-1000 ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-[2vh]"}`}
          alt="BH Labs"
        />
      </div>

      <div className="absolute top-[6vh] right-[6vw]">
        <p className={`font-body text-white/40 text-[1.1vw] tracking-[0.3em] uppercase transition-all duration-1000 delay-500 ${show ? "opacity-100" : "opacity-0"}`}>
          Board Presentation · April 2026
        </p>
      </div>

      <div className="absolute inset-0 flex flex-col justify-center px-[6vw]">
        <p className={`font-body text-accent text-[1.4vw] font-semibold tracking-[0.3em] uppercase mb-[3vh] transition-all duration-700 delay-300 ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[2vw]"}`}>
          Strategic Initiative
        </p>
        <h1 className={`font-display text-white text-[5.5vw] font-bold leading-[1.05] tracking-tight transition-all duration-700 delay-500 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[2vh]"}`}>
          The Pivot to
        </h1>
        <h1 className={`font-display text-[5.5vw] font-bold leading-[1.05] tracking-tight mb-[4vh] transition-all duration-700 delay-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[2vh]"}`}>
          <span className="bg-gradient-to-r from-accent via-yellow-400 to-accent bg-clip-text text-transparent">
            Recurring Revenue
          </span>
        </h1>
        <p className={`font-body text-white/50 text-[1.6vw] max-w-[50vw] leading-relaxed transition-all duration-700 delay-1000 ${show ? "opacity-100" : "opacity-0"}`}>
          From equipment sales to a subscription platform.
          <br />
          Same revenue. 5–15× the enterprise value.
        </p>
      </div>

      {/* Bottom accent bar with glow */}
      <div className={`absolute bottom-0 left-0 right-0 h-[0.3vh] bg-accent transition-all duration-[1500ms] delay-1200 ${show ? "opacity-60" : "opacity-0"}`}>
        <div className="absolute inset-0 bg-accent blur-[8px] opacity-50" />
      </div>

      <p className={`absolute bottom-[3vh] right-[6vw] font-body text-white/25 text-[1vw] transition-all duration-700 delay-1500 ${show ? "opacity-100" : "opacity-0"}`}>
        Confidential
      </p>
    </div>
  );
}
