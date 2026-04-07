import { useEffect, useState } from "react";

function AnimNum({ target, delay = 0, prefix = "", suffix = "" }: { target: string; delay?: number; prefix?: string; suffix?: string }) {
  const [show, setShow] = useState(false);
  useEffect(() => { setTimeout(() => setShow(true), delay); }, [delay]);
  return (
    <span className={`transition-all duration-500 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[1vh]"} inline-block`}>
      {prefix}{target}{suffix}
    </span>
  );
}

export default function ProjectionSlide() {
  const [show, setShow] = useState(false);
  const [highlightRow, setHighlightRow] = useState(-1);

  useEffect(() => {
    setTimeout(() => setShow(true), 200);
    setTimeout(() => setHighlightRow(7), 2500); // highlight enterprise value row
  }, []);

  const headers = ["", "Year 1", "Year 2", "Year 3"];
  const rows = [
    { label: "Active Pods", y1: "25", y2: "75", y3: "200", highlight: false },
    { label: "New Pods Deployed", y1: "25", y2: "50", y3: "125", highlight: false },
    { label: "Monthly Recurring Revenue", y1: "$133K", y2: "$398K", y3: "$1.06M", highlight: false },
    { label: "Annual Recurring Revenue", y1: "$1.0M", y2: "$3.4M", y3: "$10.2M", highlight: false },
    { label: "Equipment Capex Required", y1: "$750K", y2: "$1.5M", y3: "$3.75M", highlight: false },
    { label: "Gross Profit (75% margin)", y1: "$750K", y2: "$2.55M", y3: "$7.65M", highlight: false },
    { label: "Cumulative Cash Flow", y1: "$(125K)", y2: "$800K", y3: "$4.1M", highlight: false },
    { label: "Enterprise Value (10× ARR)", y1: "$10M", y2: "$34M", y3: "$102M", highlight: true },
  ];

  // Visual bar chart for ARR
  const arrBars = [
    { year: "Y1", value: 1.0, max: 10.2, label: "$1.0M" },
    { year: "Y2", value: 3.4, max: 10.2, label: "$3.4M" },
    { year: "Y3", value: 10.2, max: 10.2, label: "$10.2M" },
  ];

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_bottom,rgba(200,169,81,0.06),transparent_60%)]" />

      <div className="absolute inset-0 flex flex-col px-[6vw] py-[4vh]">
        <div className={`flex items-center gap-[1vw] mb-[1vh] transition-all duration-700 ${show ? "opacity-100" : "opacity-0"}`}>
          <div className="w-[3vw] h-[0.3vh] bg-accent" />
          <p className="font-body text-accent text-[1.1vw] font-semibold tracking-[0.25em] uppercase">3-Year Projection</p>
        </div>

        <h2 className={`font-display text-white text-[2.8vw] font-bold tracking-tight leading-[1.1] mb-[3vh] transition-all duration-700 delay-200 ${show ? "opacity-100" : "opacity-0"}`}>
          Growth Model
        </h2>

        <div className="flex gap-[3vw] flex-1">
          {/* Table */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex mb-[0.5vh]">
              <div className="w-[40%] p-[0.8vw]" />
              {headers.slice(1).map((h) => (
                <div key={h} className="flex-1 p-[0.8vw] text-center">
                  <p className="font-body text-accent text-[1vw] font-semibold tracking-wider">{h}</p>
                </div>
              ))}
            </div>

            {/* Rows */}
            {rows.map((row, i) => {
              const isEV = row.highlight;
              const isHighlighted = highlightRow === i;
              return (
                <div
                  key={row.label}
                  className={`flex items-center rounded-[0.4vw] transition-all duration-700 ${
                    show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[2vw]"
                  } ${isEV ? "bg-accent/10 border border-accent/30" : i % 2 === 0 ? "bg-white/3" : ""} ${
                    isHighlighted ? "shadow-[0_0_30px_rgba(200,169,81,0.15)]" : ""
                  }`}
                  style={{ transitionDelay: `${400 + i * 100}ms` }}
                >
                  <div className="w-[40%] p-[0.8vw]">
                    <p className={`font-body text-[1.05vw] ${isEV ? "text-accent font-bold" : "text-white/60"}`}>
                      {row.label}
                    </p>
                  </div>
                  {[row.y1, row.y2, row.y3].map((val, ci) => (
                    <div key={ci} className="flex-1 p-[0.8vw] text-center">
                      <p className={`font-display text-[1.2vw] font-bold ${
                        isEV ? "text-accent" : val.startsWith("$(") ? "text-red-400/60" : "text-white/80"
                      }`}>
                        <AnimNum target={val} delay={800 + i * 100 + ci * 200} />
                      </p>
                    </div>
                  ))}
                </div>
              );
            })}

            <p className={`font-body text-white/20 text-[0.85vw] mt-[1.5vh] transition-all duration-700 delay-[2000ms] ${show ? "opacity-100" : "opacity-0"}`}>
              Assumptions: $30K avg equipment cost (freight buyer-paid), $5,300 MRR/pod, 75% gross margin, 3-year contracts, 10× ARR multiple
            </p>
          </div>

          {/* Visual ARR chart */}
          <div className={`w-[25vw] flex flex-col justify-end transition-all duration-700 delay-[1500ms] ${show ? "opacity-100" : "opacity-0"}`}>
            <p className="font-body text-white/40 text-[1vw] font-semibold tracking-[0.15em] uppercase mb-[2vh] text-center">
              ARR Growth
            </p>
            <div className="flex items-end justify-center gap-[2vw] h-[55%]">
              {arrBars.map((bar, i) => (
                <div key={bar.year} className="flex flex-col items-center gap-[1vh]">
                  <p className={`font-display text-[1.3vw] font-bold transition-all duration-700 ${
                    show ? "opacity-100" : "opacity-0"
                  } ${i === 2 ? "text-accent" : "text-white/70"}`}
                    style={{ transitionDelay: `${2000 + i * 300}ms` }}
                  >
                    {bar.label}
                  </p>
                  <div
                    className={`w-[4vw] rounded-t-[0.4vw] transition-all duration-1000 ease-out ${
                      i === 2 ? "bg-gradient-to-t from-accent/80 to-accent shadow-[0_0_20px_rgba(200,169,81,0.3)]" : "bg-white/15"
                    }`}
                    style={{
                      height: show ? `${(bar.value / bar.max) * 100}%` : "0%",
                      transitionDelay: `${1800 + i * 300}ms`,
                    }}
                  />
                  <p className="font-body text-white/40 text-[1vw]">{bar.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
