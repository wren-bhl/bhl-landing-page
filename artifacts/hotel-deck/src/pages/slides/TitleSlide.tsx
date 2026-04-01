const base = import.meta.env.BASE_URL;

export default function TitleSlide() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-primary">
      <img
        src={`${base}hero-wellness.png`}
        crossOrigin="anonymous"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        alt="Luxury hotel wellness recovery room"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/50" />

      <div className="absolute top-[6vh] left-[6vw]">
        <img
          src={`${base}logo-light.png`}
          crossOrigin="anonymous"
          className="h-[10vh] w-auto"
          alt="BH Labs logo"
        />
      </div>

      <div className="absolute bottom-[8vh] left-[6vw] right-[6vw]">
        <div className="flex items-center gap-[1vw] mb-[3vh]">
          <div className="w-[4vw] h-[0.3vh] bg-accent" />
          <p className="font-body text-accent text-[1.4vw] font-semibold tracking-[0.2em] uppercase">
            For Hotels and Resorts
          </p>
        </div>

        <h1 className="font-display text-white text-[5.5vw] font-bold leading-[1.05] tracking-tight mb-[3vh]">
          Turn Idle Space Into
        </h1>
        <h1 className="font-display text-accent text-[5.5vw] font-bold italic leading-[1.05] tracking-tight mb-[4vh]">
          Wellness Revenue
        </h1>

        <p className="font-body text-white/70 text-[1.6vw] max-w-[50vw] leading-relaxed">
          Turnkey Recovery Pod infrastructure. $49K investment.
          $25K+ monthly revenue. Zero additional staff.
        </p>
      </div>

      <div className="absolute bottom-[8vh] right-[6vw]">
        <p className="font-body text-white/40 text-[1.2vw]">
          thebiohacklab.com
        </p>
      </div>
    </div>
  );
}
