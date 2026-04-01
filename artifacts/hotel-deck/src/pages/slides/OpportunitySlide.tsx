export default function OpportunitySlide() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-cream">
      <div className="absolute top-0 right-0 w-[40vw] h-[100vh] bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vh] bg-gradient-to-tr from-accent/10 to-transparent rounded-tr-full" />

      <div className="absolute inset-0 flex flex-col px-[6vw] py-[6vh]">
        <div className="flex items-center gap-[1vw] mb-[2vh]">
          <div className="w-[3vw] h-[0.3vh] bg-accent" />
          <p className="font-body text-accent text-[1.2vw] font-semibold tracking-[0.2em] uppercase">
            The Opportunity
          </p>
        </div>

        <h2 className="font-display text-primary text-[3.8vw] font-bold tracking-tight leading-[1.1] mb-[1.5vh]">
          Your Guests Are Already
        </h2>
        <h2 className="font-display text-primary text-[3.8vw] font-bold tracking-tight leading-[1.1] mb-[5vh]">
          Spending on Wellness
        </h2>

        <p className="font-body text-muted text-[1.5vw] max-w-[55vw] mb-[6vh] leading-relaxed">
          The question is whether it happens at your property -- or somewhere else.
        </p>

        <div className="flex gap-[2vw]">
          <div className="flex-1 bg-white rounded-[1vw] p-[2.5vw] border border-primary/10">
            <p className="font-display text-primary text-[4vw] font-bold tracking-tight">
              $6.8T
            </p>
            <p className="font-body text-text text-[1.4vw] font-medium mt-[0.5vh]">
              Global Wellness Economy
            </p>
            <p className="font-body text-muted text-[1.2vw] mt-[0.5vh]">
              GWI, 2025
            </p>
          </div>

          <div className="flex-1 bg-white rounded-[1vw] p-[2.5vw] border border-primary/10">
            <p className="font-display text-primary text-[4vw] font-bold tracking-tight">
              23.3%
            </p>
            <p className="font-body text-text text-[1.4vw] font-medium mt-[0.5vh]">
              Wellness Tourism Spend on Lodging
            </p>
            <p className="font-body text-muted text-[1.2vw] mt-[0.5vh]">
              Grand View Research
            </p>
          </div>

          <div className="flex-1 bg-white rounded-[1vw] p-[2.5vw] border border-primary/10">
            <p className="font-display text-primary text-[4vw] font-bold tracking-tight">
              89%
            </p>
            <p className="font-body text-text text-[1.4vw] font-medium mt-[0.5vh]">
              Wellness Trips Are Secondary
            </p>
            <p className="font-body text-muted text-[1.2vw] mt-[0.5vh]">
              GWI
            </p>
          </div>

          <div className="flex-1 bg-white rounded-[1vw] p-[2.5vw] border border-primary/10">
            <p className="font-display text-primary text-[4vw] font-bold tracking-tight">
              40%
            </p>
            <p className="font-body text-text text-[1.4vw] font-medium mt-[0.5vh]">
              Rank Wellness Top Priority
            </p>
            <p className="font-body text-muted text-[1.2vw] mt-[0.5vh]">
              McKinsey, 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
