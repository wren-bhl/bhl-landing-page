export default function ProblemSlide() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-primary">
      <div className="absolute top-0 right-0 w-[50vw] h-full bg-gradient-to-l from-emerald-light/30 to-transparent" />

      <div className="absolute inset-0 flex flex-col px-[6vw] py-[6vh]">
        <div className="flex items-center gap-[1vw] mb-[2vh]">
          <div className="w-[3vw] h-[0.3vh] bg-accent" />
          <p className="font-body text-accent text-[1.2vw] font-semibold tracking-[0.2em] uppercase">
            The Problem
          </p>
        </div>

        <h2 className="font-display text-white text-[3.5vw] font-bold tracking-tight leading-[1.1] mb-[5vh]">
          Traditional Hotel Wellness
          <span className="block mt-[1vh]">
            Doesn't Scale
          </span>
        </h2>

        <div className="flex gap-[2.5vw] mt-[1vh]">
          <div className="flex-1 border-l-[0.3vw] border-accent/60 pl-[2vw]">
            <p className="font-display text-accent text-[3vw] font-bold tracking-tight">
              $500K-$1.5M
            </p>
            <p className="font-body text-white text-[1.5vw] font-medium mt-[1vh]">
              Buildout cost per property
            </p>
            <p className="font-body text-white/50 text-[1.3vw] mt-[1vh] leading-relaxed">
              2,000-5,000 sqft at $150-$300/sqft/yr -- among the lowest returns in any property
            </p>
          </div>

          <div className="flex-1 border-l-[0.3vw] border-accent/60 pl-[2vw]">
            <p className="font-display text-accent text-[3vw] font-bold tracking-tight">
              -0.5%
            </p>
            <p className="font-body text-white text-[1.5vw] font-medium mt-[1vh]">
              Spa profit decline in 2024
            </p>
            <p className="font-body text-white/50 text-[1.3vw] mt-[1vh] leading-relaxed">
              Despite 1.4% revenue growth. The model is structurally broken (CBRE Trends)
            </p>
          </div>

          <div className="flex-1 border-l-[0.3vw] border-accent/60 pl-[2vw]">
            <p className="font-display text-accent text-[3vw] font-bold tracking-tight">
              60-70%
            </p>
            <p className="font-body text-white text-[1.5vw] font-medium mt-[1vh]">
              Infrastructure sits idle
            </p>
            <p className="font-body text-white/50 text-[1.3vw] mt-[1vh] leading-relaxed">
              High staffing, low utilization. The math doesn't work at scale
            </p>
          </div>
        </div>

        <div className="mt-auto">
          <p className="font-body text-white/40 text-[1.3vw] italic">
            Major chains have spent hundreds of millions on wellness acquisitions and in-room fitness programs. You don't need to outspend them -- you can outmaneuver them.
          </p>
        </div>
      </div>
    </div>
  );
}
