export default function RevenuePerSqftSlide() {
  const spaces = [
    { name: "Lobby Bar", range: "$800–$1,200", low: 800, high: 1200, highlight: false },
    { name: "Restaurant", range: "$500–$900", low: 500, high: 900, highlight: false },
    { name: "Recovery Pod", range: "$400–$600+", low: 400, high: 600, highlight: true },
    { name: "Meeting Space", range: "$300–$600", low: 300, high: 600, highlight: false },
    { name: "Traditional Spa", range: "$150–$300", low: 150, high: 300, highlight: false },
    { name: "Fitness Center", range: "$50–$120", low: 50, high: 120, highlight: false },
  ];

  const maxVal = 1200;

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-cream">
      <div className="absolute top-0 left-0 w-full h-[0.5vh] bg-gradient-to-r from-accent via-primary to-accent" />

      <div className="absolute inset-0 flex flex-col px-[6vw] py-[5vh]">
        <div className="flex items-center gap-[1vw] mb-[2vh]">
          <div className="w-[3vw] h-[0.3vh] bg-accent" />
          <p className="font-body text-accent text-[1.2vw] font-semibold tracking-[0.2em] uppercase">
            Revenue Benchmarking
          </p>
        </div>

        <h2 className="font-display text-primary text-[3.2vw] font-bold tracking-tight leading-[1.1] mb-[4vh]">
          Revenue Per Square Foot
        </h2>

        <div className="flex-1 flex flex-col justify-center gap-[2.2vh]">
          {spaces.map((s) => (
            <div key={s.name} className="flex items-center gap-[1.5vw]">
              <p
                className={`font-body text-[1.3vw] w-[12vw] text-right shrink-0 ${
                  s.highlight ? "text-accent font-bold" : "text-text font-medium"
                }`}
              >
                {s.name}
              </p>
              <div className="flex-1 relative h-[4vh]">
                <div className="absolute inset-y-0 left-0 bg-primary/5 rounded-r-[0.4vw] w-full" />
                <div
                  className={`absolute inset-y-0 left-0 rounded-r-[0.4vw] flex items-center transition-all ${
                    s.highlight
                      ? "bg-gradient-to-r from-accent to-accent/80"
                      : "bg-gradient-to-r from-primary/70 to-primary/50"
                  }`}
                  style={{ width: `${(s.high / maxVal) * 100}%` }}
                >
                  <div
                    className={`absolute inset-y-0 left-0 rounded-r-[0.4vw] ${
                      s.highlight ? "bg-accent" : "bg-primary/80"
                    }`}
                    style={{ width: `${(s.low / s.high) * 100}%` }}
                  />
                </div>
                <div className="absolute inset-y-0 flex items-center" style={{ left: `${(s.high / maxVal) * 100 + 1}%` }}>
                  <p
                    className={`font-body text-[1.2vw] whitespace-nowrap ${
                      s.highlight ? "text-accent font-bold" : "text-muted font-medium"
                    }`}
                  >
                    {s.range} / sqft / yr
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[3vh] bg-primary rounded-[1vw] p-[2vw]">
          <p className="font-display text-white text-[1.8vw] font-bold leading-[1.3]">
            Restaurant-level revenue per sqft{" "}
            <span className="text-accent">
              in spaces currently generating zero.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
