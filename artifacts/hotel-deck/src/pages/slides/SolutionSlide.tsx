const base = import.meta.env.BASE_URL;

export default function SolutionSlide() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-cream">
      <div className="absolute top-0 left-0 w-full h-[0.5vh] bg-gradient-to-r from-accent via-primary to-accent" />

      <div className="absolute inset-0 flex px-[6vw] py-[5vh]">
        <div className="flex-1 flex flex-col pr-[3vw]">
          <div className="flex items-center gap-[1vw] mb-[2vh]">
            <div className="w-[3vw] h-[0.3vh] bg-accent" />
            <p className="font-body text-accent text-[1.2vw] font-semibold tracking-[0.2em] uppercase">
              The Solution
            </p>
          </div>

          <h2 className="font-display text-primary text-[3.2vw] font-bold tracking-tight leading-[1.1] mb-[4vh]">
            The Recovery Pod
          </h2>

          <div className="space-y-[2.5vh]">
            <div className="flex items-start gap-[1.5vw]">
              <div className="w-[0.6vw] h-[0.6vw] rounded-full bg-accent mt-[0.8vh] shrink-0" />
              <div>
                <p className="font-body text-text text-[1.5vw] font-semibold">
                  500-750 sqft footprint
                </p>
                <p className="font-body text-muted text-[1.3vw]">
                  Fits spaces you're not monetizing today
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[1.5vw]">
              <div className="w-[0.6vw] h-[0.6vw] rounded-full bg-accent mt-[0.8vh] shrink-0" />
              <div>
                <p className="font-body text-text text-[1.5vw] font-semibold">
                  $49,000 turnkey investment
                </p>
                <p className="font-body text-muted text-[1.3vw]">
                  Everything included -- equipment, install, training
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[1.5vw]">
              <div className="w-[0.6vw] h-[0.6vw] rounded-full bg-accent mt-[0.8vh] shrink-0" />
              <div>
                <p className="font-body text-text text-[1.5vw] font-semibold">
                  Under 90 days to launch
                </p>
                <p className="font-body text-muted text-[1.3vw]">
                  From agreement to first paying guest
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[1.5vw]">
              <div className="w-[0.6vw] h-[0.6vw] rounded-full bg-accent mt-[0.8vh] shrink-0" />
              <div>
                <p className="font-body text-text text-[1.5vw] font-semibold">
                  $400+/sqft/yr revenue
                </p>
                <p className="font-body text-muted text-[1.3vw]">
                  Comparable to restaurant and bar spaces
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[1.5vw]">
              <div className="w-[0.6vw] h-[0.6vw] rounded-full bg-accent mt-[0.8vh] shrink-0" />
              <div>
                <p className="font-body text-text text-[1.5vw] font-semibold">
                  Zero additional staff
                </p>
                <p className="font-body text-muted text-[1.3vw]">
                  3-4 existing staff certified by BH Labs
                </p>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-[2vh]">
            <p className="font-body text-muted text-[1.2vw] font-medium mb-[1.5vh]">
              7 Evidence-Based Modalities
            </p>
            <div className="flex gap-[0.8vw]">
              <div className="bg-primary/10 rounded-[0.4vw] px-[0.8vw] py-[0.5vh]">
                <p className="font-body text-primary text-[1.1vw] font-medium">HBOT</p>
              </div>
              <div className="bg-primary/10 rounded-[0.4vw] px-[0.8vw] py-[0.5vh]">
                <p className="font-body text-primary text-[1.1vw] font-medium">Red Light</p>
              </div>
              <div className="bg-primary/10 rounded-[0.4vw] px-[0.8vw] py-[0.5vh]">
                <p className="font-body text-primary text-[1.1vw] font-medium">PEMF</p>
              </div>
              <div className="bg-primary/10 rounded-[0.4vw] px-[0.8vw] py-[0.5vh]">
                <p className="font-body text-primary text-[1.1vw] font-medium">Cold Plunge</p>
              </div>
              <div className="bg-primary/10 rounded-[0.4vw] px-[0.8vw] py-[0.5vh]">
                <p className="font-body text-primary text-[1.1vw] font-medium">IR Sauna</p>
              </div>
              <div className="bg-primary/10 rounded-[0.4vw] px-[0.8vw] py-[0.5vh]">
                <p className="font-body text-primary text-[1.1vw] font-medium">Compression</p>
              </div>
              <div className="bg-primary/10 rounded-[0.4vw] px-[0.8vw] py-[0.5vh]">
                <p className="font-body text-primary text-[1.1vw] font-medium">Lymphatic</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[38vw] flex flex-col gap-[1.5vh]">
          <div className="flex-1 rounded-[1vw] overflow-hidden">
            <img
              src={`${base}hbot-chamber.jpg`}
              crossOrigin="anonymous"
              className="w-full h-full object-cover"
              alt="HBOT Chamber"
            />
          </div>
          <div className="flex gap-[1.5vh] h-[22vh]">
            <div className="flex-1 rounded-[1vw] overflow-hidden">
              <img
                src={`${base}redlight-therapy.jpg`}
                crossOrigin="anonymous"
                className="w-full h-full object-cover"
                alt="Red Light Therapy"
              />
            </div>
            <div className="flex-1 rounded-[1vw] overflow-hidden">
              <img
                src={`${base}infrared-sauna.jpg`}
                crossOrigin="anonymous"
                className="w-full h-full object-cover"
                alt="Infrared Sauna"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
