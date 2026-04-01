export default function ROISlide() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-cream">
      <div className="absolute top-0 right-0 w-[25vw] h-[25vh] bg-gradient-to-bl from-accent/10 to-transparent" />

      <div className="absolute inset-0 flex flex-col px-[6vw] py-[4vh]">
        <div className="flex items-center gap-[1vw] mb-[1.5vh]">
          <div className="w-[3vw] h-[0.3vh] bg-accent" />
          <p className="font-body text-accent text-[1.1vw] font-semibold tracking-[0.2em] uppercase">
            ROI Projections
          </p>
        </div>

        <h2 className="font-display text-primary text-[2.8vw] font-bold tracking-tight leading-[1.1] mb-[1.5vh]">
          Portfolio Economics
        </h2>

        <p className="font-body text-muted text-[1.2vw] mb-[1.5vh]">
          Per-Property Model (200-room hotel)
        </p>

        <div className="bg-white rounded-[0.6vw] border border-primary/10 overflow-hidden mb-[2vh]">
          <div className="grid grid-cols-4">
            <div className="px-[1.2vw] py-[0.8vh] bg-primary/5 border-b border-primary/10">
              <p className="font-body text-muted text-[1vw] font-medium" />
            </div>
            <div className="px-[1.2vw] py-[0.8vh] bg-primary/5 border-b border-primary/10 text-center">
              <p className="font-body text-primary text-[1.1vw] font-semibold">Conservative</p>
            </div>
            <div className="px-[1.2vw] py-[0.8vh] bg-primary/5 border-b border-primary/10 text-center">
              <p className="font-body text-primary text-[1.1vw] font-semibold">Moderate</p>
            </div>
            <div className="px-[1.2vw] py-[0.8vh] bg-accent/10 border-b border-accent/20 text-center">
              <p className="font-body text-accent text-[1.1vw] font-bold">Demonstrated</p>
            </div>

            <div className="px-[1.2vw] py-[0.7vh] border-b border-primary/5">
              <p className="font-body text-text text-[1vw]">Sessions/month</p>
            </div>
            <div className="px-[1.2vw] py-[0.7vh] border-b border-primary/5 text-center">
              <p className="font-body text-text text-[1.1vw] font-medium">150</p>
            </div>
            <div className="px-[1.2vw] py-[0.7vh] border-b border-primary/5 text-center">
              <p className="font-body text-text text-[1.1vw] font-medium">250</p>
            </div>
            <div className="px-[1.2vw] py-[0.7vh] border-b border-primary/5 text-center bg-accent/5">
              <p className="font-body text-text text-[1.1vw] font-semibold">400</p>
            </div>

            <div className="px-[1.2vw] py-[0.7vh] border-b border-primary/5">
              <p className="font-body text-text text-[1vw]">Blended price</p>
            </div>
            <div className="px-[1.2vw] py-[0.7vh] border-b border-primary/5 text-center">
              <p className="font-body text-text text-[1.1vw] font-medium">$60</p>
            </div>
            <div className="px-[1.2vw] py-[0.7vh] border-b border-primary/5 text-center">
              <p className="font-body text-text text-[1.1vw] font-medium">$65</p>
            </div>
            <div className="px-[1.2vw] py-[0.7vh] border-b border-primary/5 text-center bg-accent/5">
              <p className="font-body text-text text-[1.1vw] font-semibold">$65</p>
            </div>

            <div className="px-[1.2vw] py-[0.7vh] border-b border-primary/5">
              <p className="font-body text-text text-[1vw] font-semibold">Annual revenue</p>
            </div>
            <div className="px-[1.2vw] py-[0.7vh] border-b border-primary/5 text-center">
              <p className="font-display text-primary text-[1.2vw] font-bold">$108,000</p>
            </div>
            <div className="px-[1.2vw] py-[0.7vh] border-b border-primary/5 text-center">
              <p className="font-display text-primary text-[1.2vw] font-bold">$195,000</p>
            </div>
            <div className="px-[1.2vw] py-[0.7vh] border-b border-primary/5 text-center bg-accent/5">
              <p className="font-display text-accent text-[1.2vw] font-bold">$312,000</p>
            </div>

            <div className="px-[1.2vw] py-[0.7vh] border-b border-primary/5">
              <p className="font-body text-text text-[1vw]">Investment</p>
            </div>
            <div className="px-[1.2vw] py-[0.7vh] border-b border-primary/5 text-center">
              <p className="font-body text-text text-[1.1vw] font-medium">$49,000</p>
            </div>
            <div className="px-[1.2vw] py-[0.7vh] border-b border-primary/5 text-center">
              <p className="font-body text-text text-[1.1vw] font-medium">$49,000</p>
            </div>
            <div className="px-[1.2vw] py-[0.7vh] border-b border-primary/5 text-center bg-accent/5">
              <p className="font-body text-text text-[1.1vw] font-medium">$49,000</p>
            </div>

            <div className="px-[1.2vw] py-[0.7vh]">
              <p className="font-body text-text text-[1vw] font-semibold">Payback</p>
            </div>
            <div className="px-[1.2vw] py-[0.7vh] text-center">
              <p className="font-display text-primary text-[1.2vw] font-bold">&lt;6 months</p>
            </div>
            <div className="px-[1.2vw] py-[0.7vh] text-center">
              <p className="font-display text-primary text-[1.2vw] font-bold">&lt;4 months</p>
            </div>
            <div className="px-[1.2vw] py-[0.7vh] text-center bg-accent/5">
              <p className="font-display text-accent text-[1.2vw] font-bold">&lt;2 months</p>
            </div>
          </div>
        </div>

        <p className="font-body text-muted text-[1.2vw] mb-[1.5vh]">
          Portfolio Scale (Multi-Property at $39,000/unit)
        </p>

        <div className="bg-white rounded-[0.6vw] border border-primary/10 overflow-hidden">
          <div className="grid grid-cols-4">
            <div className="px-[1.2vw] py-[0.7vh] bg-primary/5 border-b border-primary/10">
              <p className="font-body text-muted text-[1vw] font-medium">Scenario</p>
            </div>
            <div className="px-[1.2vw] py-[0.7vh] bg-primary/5 border-b border-primary/10 text-center">
              <p className="font-body text-primary text-[1vw] font-medium">Properties</p>
            </div>
            <div className="px-[1.2vw] py-[0.7vh] bg-primary/5 border-b border-primary/10 text-center">
              <p className="font-body text-primary text-[1vw] font-medium">Investment</p>
            </div>
            <div className="px-[1.2vw] py-[0.7vh] bg-primary/5 border-b border-primary/10 text-center">
              <p className="font-body text-primary text-[1vw] font-medium">Annual Rev (Moderate)</p>
            </div>

            <div className="px-[1.2vw] py-[0.7vh] border-b border-primary/5">
              <p className="font-body text-text text-[1vw]">Pilot</p>
            </div>
            <div className="px-[1.2vw] py-[0.7vh] border-b border-primary/5 text-center">
              <p className="font-body text-text text-[1vw]">5</p>
            </div>
            <div className="px-[1.2vw] py-[0.7vh] border-b border-primary/5 text-center">
              <p className="font-body text-text text-[1vw]">$195,000</p>
            </div>
            <div className="px-[1.2vw] py-[0.7vh] border-b border-primary/5 text-center">
              <p className="font-body text-primary text-[1vw] font-semibold">$975,000</p>
            </div>

            <div className="px-[1.2vw] py-[0.7vh] border-b border-primary/5">
              <p className="font-body text-text text-[1vw]">Phase 1</p>
            </div>
            <div className="px-[1.2vw] py-[0.7vh] border-b border-primary/5 text-center">
              <p className="font-body text-text text-[1vw]">20</p>
            </div>
            <div className="px-[1.2vw] py-[0.7vh] border-b border-primary/5 text-center">
              <p className="font-body text-text text-[1vw]">$780,000</p>
            </div>
            <div className="px-[1.2vw] py-[0.7vh] border-b border-primary/5 text-center">
              <p className="font-body text-primary text-[1vw] font-semibold">$3,900,000</p>
            </div>

            <div className="px-[1.2vw] py-[0.7vh]">
              <p className="font-body text-text text-[1vw]">Full Rollout</p>
            </div>
            <div className="px-[1.2vw] py-[0.7vh] text-center">
              <p className="font-body text-text text-[1vw]">50+</p>
            </div>
            <div className="px-[1.2vw] py-[0.7vh] text-center">
              <p className="font-body text-text text-[1vw]">$1,950,000</p>
            </div>
            <div className="px-[1.2vw] py-[0.7vh] text-center">
              <p className="font-display text-accent text-[1.1vw] font-bold">$9,750,000+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
