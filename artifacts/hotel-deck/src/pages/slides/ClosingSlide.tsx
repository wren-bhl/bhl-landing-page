const base = import.meta.env.BASE_URL;

export default function ClosingSlide() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-primary">
      <img
        src={`${base}luxury-resort.png`}
        crossOrigin="anonymous"
        className="absolute inset-0 w-full h-full object-cover opacity-25"
        alt="Luxury resort aerial view"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/60" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-[6vw]">
        <img
          src={`${base}logo-light.png`}
          crossOrigin="anonymous"
          className="h-[14vh] w-auto mb-[4vh]"
          alt="BH Labs logo"
        />

        <h2 className="font-display text-white text-[4vw] font-bold tracking-tight text-center mb-[2vh]">
          You Provide the Space.
        </h2>
        <h2 className="font-display text-accent text-[4vw] font-bold italic tracking-tight text-center mb-[5vh]">
          We Provide Everything Else.
        </h2>

        <div className="flex gap-[4vw] mb-[5vh]">
          <div className="text-center">
            <p className="font-body text-accent text-[1.2vw] font-semibold tracking-[0.15em] uppercase mb-[1vh]">
              Step 1
            </p>
            <p className="font-body text-white text-[1.5vw] font-medium">
              Complimentary Space Assessment
            </p>
          </div>
          <div className="w-[0.15vw] bg-white/20" />
          <div className="text-center">
            <p className="font-body text-accent text-[1.2vw] font-semibold tracking-[0.15em] uppercase mb-[1vh]">
              Step 2
            </p>
            <p className="font-body text-white text-[1.5vw] font-medium">
              Custom Pod Design
            </p>
          </div>
          <div className="w-[0.15vw] bg-white/20" />
          <div className="text-center">
            <p className="font-body text-accent text-[1.2vw] font-semibold tracking-[0.15em] uppercase mb-[1vh]">
              Step 3
            </p>
            <p className="font-body text-white text-[1.5vw] font-medium">
              90-Day Deployment
            </p>
          </div>
        </div>

        <div className="w-[40vw] h-[0.15vh] bg-accent/30 mb-[4vh]" />

        <p className="font-body text-white/70 text-[1.5vw]">
          sales@thebiohacklab.com
        </p>
        <p className="font-body text-white/50 text-[1.3vw] mt-[1vh]">
          thebiohacklab.com
        </p>
      </div>
    </div>
  );
}
