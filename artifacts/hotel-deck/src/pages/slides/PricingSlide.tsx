export default function PricingSlide() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-cream">
      <div className="absolute bottom-0 right-0 w-[35vw] h-[35vh] bg-gradient-to-tl from-primary/5 to-transparent rounded-tl-full" />

      <div className="absolute inset-0 flex flex-col px-[6vw] py-[5vh]">
        <div className="flex items-center gap-[1vw] mb-[2vh]">
          <div className="w-[3vw] h-[0.3vh] bg-accent" />
          <p className="font-body text-accent text-[1.2vw] font-semibold tracking-[0.2em] uppercase">
            Pricing
          </p>
        </div>

        <h2 className="font-display text-primary text-[3.2vw] font-bold tracking-tight leading-[1.1] mb-[4vh]">
          Pricing Options
        </h2>

        <div className="flex gap-[1.5vw] flex-1">
          <div className="flex-1 bg-white rounded-[1vw] p-[2vw] border border-primary/10 flex flex-col">
            <p className="font-body text-muted text-[1.1vw] font-semibold tracking-[0.15em] uppercase mb-[1vh]">
              Single Property
            </p>
            <p className="font-display text-primary text-[3vw] font-bold tracking-tight">
              $49,000
            </p>
            <p className="font-body text-muted text-[1.2vw] mt-[1vh] mb-[2vh]">
              Full turnkey Recovery Pod
            </p>
            <div className="space-y-[1.2vh] mt-auto">
              <p className="font-body text-text text-[1.2vw]">
                &#10003; Full modality suite
              </p>
              <p className="font-body text-text text-[1.2vw]">
                &#10003; Space assessment and design
              </p>
              <p className="font-body text-text text-[1.2vw]">
                &#10003; Equipment and installation
              </p>
              <p className="font-body text-text text-[1.2vw]">
                &#10003; Staff training
              </p>
              <p className="font-body text-text text-[1.2vw]">
                &#10003; Ongoing maintenance
              </p>
            </div>
            <p className="font-body text-muted text-[1.1vw] mt-[2vh] italic">
              Boutique hotels, independent properties
            </p>
          </div>

          <div className="flex-1 bg-primary rounded-[1vw] p-[2vw] flex flex-col relative">
            <div className="absolute top-[1.5vh] right-[1.5vw] bg-accent text-primary rounded-full px-[0.8vw] py-[0.3vh]">
              <p className="font-body text-[1vw] font-bold">Best Value</p>
            </div>
            <p className="font-body text-accent text-[1.1vw] font-semibold tracking-[0.15em] uppercase mb-[1vh]">
              Multi-Property (5+)
            </p>
            <p className="font-display text-white text-[3vw] font-bold tracking-tight">
              $39,000
            </p>
            <p className="font-body text-white/60 text-[1.2vw] mt-[1vh] mb-[2vh]">
              Per location, volume pricing
            </p>
            <div className="space-y-[1.2vh] mt-auto">
              <p className="font-body text-white text-[1.2vw]">
                &#10003; Everything in Single
              </p>
              <p className="font-body text-white text-[1.2vw]">
                &#10003; Dedicated account team
              </p>
              <p className="font-body text-white text-[1.2vw]">
                &#10003; Standardized Pod design
              </p>
              <p className="font-body text-white text-[1.2vw]">
                &#10003; Volume equipment pricing
              </p>
              <p className="font-body text-white text-[1.2vw]">
                &#10003; Coordinated rollout
              </p>
            </div>
            <p className="font-body text-white/40 text-[1.1vw] mt-[2vh] italic">
              Hotel groups, regional chains
            </p>
          </div>

          <div className="flex-1 bg-white rounded-[1vw] p-[2vw] border border-primary/10 flex flex-col">
            <p className="font-body text-muted text-[1.1vw] font-semibold tracking-[0.15em] uppercase mb-[1vh]">
              Enterprise (20+)
            </p>
            <p className="font-display text-primary text-[3vw] font-bold tracking-tight">
              Custom
            </p>
            <p className="font-body text-muted text-[1.2vw] mt-[1vh] mb-[2vh]">
              Tailored rollout program
            </p>
            <div className="space-y-[1.2vh] mt-auto">
              <p className="font-body text-text text-[1.2vw]">
                &#10003; Everything in Multi
              </p>
              <p className="font-body text-text text-[1.2vw]">
                &#10003; Custom implementation plan
              </p>
              <p className="font-body text-text text-[1.2vw]">
                &#10003; Brand co-marketing
              </p>
              <p className="font-body text-text text-[1.2vw]">
                &#10003; Priority support SLA
              </p>
              <p className="font-body text-text text-[1.2vw]">
                &#10003; Enterprise analytics
              </p>
            </div>
            <p className="font-body text-muted text-[1.1vw] mt-[2vh] italic">
              National chains, resort groups
            </p>
          </div>

          <div className="flex-1 bg-white rounded-[1vw] p-[2vw] border border-accent/30 flex flex-col">
            <p className="font-body text-accent text-[1.1vw] font-semibold tracking-[0.15em] uppercase mb-[1vh]">
              IV Therapy Add-On
            </p>
            <p className="font-display text-primary text-[3vw] font-bold tracking-tight">
              Rev Share
            </p>
            <p className="font-body text-muted text-[1.2vw] mt-[1vh] mb-[2vh]">
              BHL-managed, premium upsell
            </p>
            <div className="space-y-[1.2vh] mt-auto">
              <p className="font-body text-text text-[1.2vw]">
                &#10003; Medical Director oversight
              </p>
              <p className="font-body text-text text-[1.2vw]">
                &#10003; Licensed nurses
              </p>
              <p className="font-body text-text text-[1.2vw]">
                &#10003; Equipment and supplies
              </p>
              <p className="font-body text-text text-[1.2vw]">
                &#10003; Compliance and protocols
              </p>
              <p className="font-body text-text text-[1.2vw]">
                &#10003; Revenue share model
              </p>
            </div>
            <p className="font-body text-muted text-[1.1vw] mt-[2vh] italic">
              Available at any tier
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
