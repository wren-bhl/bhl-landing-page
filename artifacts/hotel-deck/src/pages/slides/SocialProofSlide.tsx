export default function SocialProofSlide() {
  const metrics = [
    { value: "900+", label: "Sessions / Month", detail: "Flagship South Florida location" },
    { value: "20", label: "Avg Sessions / Member", detail: "Per month — deep habit formation" },
    { value: "85", label: "Net Promoter Score", detail: "World-class satisfaction (luxury hotel avg: 55)" },
    { value: "8×", label: "Value-to-Price Ratio", detail: "Members perceive 8× more value than cost" },
  ];

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-cream">
      <div className="absolute top-0 left-0 w-full h-[0.5vh] bg-gradient-to-r from-accent via-primary to-accent" />
      <div className="absolute bottom-0 right-0 w-[30vw] h-[30vh] bg-gradient-to-tl from-primary/5 to-transparent rounded-tl-full" />

      <div className="absolute inset-0 flex flex-col px-[6vw] py-[5vh]">
        <div className="flex items-center gap-[1vw] mb-[2vh]">
          <div className="w-[3vw] h-[0.3vh] bg-accent" />
          <p className="font-body text-accent text-[1.2vw] font-semibold tracking-[0.2em] uppercase">
            Proof of Concept
          </p>
        </div>

        <h2 className="font-display text-primary text-[3.2vw] font-bold tracking-tight leading-[1.1] mb-[1vh]">
          Equinox Coral Gables
        </h2>
        <p className="font-body text-muted text-[1.4vw] mb-[4vh]">
          Live case study — BH Labs flagship location inside Equinox
        </p>

        <div className="flex gap-[2vw] mb-[4vh]">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="flex-1 bg-white rounded-[1vw] p-[2vw] border border-primary/10 flex flex-col"
            >
              <p className="font-display text-primary text-[3.5vw] font-bold tracking-tight leading-none">
                {m.value}
              </p>
              <p className="font-body text-text text-[1.3vw] font-semibold mt-[1.5vh]">
                {m.label}
              </p>
              <p className="font-body text-muted text-[1.1vw] mt-[0.5vh]">
                {m.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-primary rounded-[1vw] p-[2.5vw]">
          <p className="font-body text-accent text-[1.1vw] font-semibold tracking-[0.15em] uppercase mb-[1.5vh]">
            The Monetization Reframe
          </p>
          <p className="font-display text-white text-[2.2vw] font-bold leading-[1.3]">
            Those 900 sessions become{" "}
            <span className="text-accent">$45K–$67.5K / month</span>{" "}
            at hotel pricing.
          </p>
          <p className="font-body text-white/60 text-[1.2vw] mt-[1.5vh]">
            At $50–$75 blended per session, a single Recovery Pod generates more monthly revenue
            than many hotel F&B outlets — in 500 sqft.
          </p>
        </div>
      </div>
    </div>
  );
}
