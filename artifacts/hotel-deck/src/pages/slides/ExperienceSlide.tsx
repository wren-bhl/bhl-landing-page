const base = import.meta.env.BASE_URL;

export default function ExperienceSlide() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-primary">
      <div className="absolute top-0 left-0 w-full h-[0.5vh] bg-gradient-to-r from-accent via-accent/50 to-transparent" />

      <div className="absolute inset-0 flex px-[6vw] py-[5vh]">
        <div className="flex-1 flex flex-col pr-[4vw]">
          <div className="flex items-center gap-[1vw] mb-[2vh]">
            <div className="w-[3vw] h-[0.3vh] bg-accent" />
            <p className="font-body text-accent text-[1.2vw] font-semibold tracking-[0.2em] uppercase">
              The Guest Experience
            </p>
          </div>

          <h2 className="font-display text-white text-[3.2vw] font-bold tracking-tight leading-[1.1] mb-[5vh]">
            The Guest Journey
          </h2>

          <div className="bg-white/5 rounded-[1vw] p-[2.5vw] border border-white/10 mb-[3vh]">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-body text-accent text-[1.1vw] font-semibold tracking-[0.15em] uppercase mb-[1vh]">
                  Signature Session
                </p>
                <p className="font-display text-white text-[2vw] font-bold mb-[1vh]">
                  Recovery Pod Experience
                </p>
                <p className="font-body text-white/60 text-[1.3vw] leading-relaxed">
                  Red Light &#8594; PEMF &#8594; Cold Plunge &#8594; Infrared Sauna &#8594; Compression
                </p>
              </div>
              <div className="text-right shrink-0 ml-[2vw]">
                <p className="font-display text-accent text-[2.5vw] font-bold">
                  60 min
                </p>
                <p className="font-body text-white/60 text-[1.5vw]">
                  $60-$75
                </p>
              </div>
            </div>
          </div>

          <div className="bg-accent/10 rounded-[1vw] p-[2.5vw] border border-accent/20">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-body text-accent text-[1.1vw] font-semibold tracking-[0.15em] uppercase mb-[1vh]">
                  Premium Session
                </p>
                <p className="font-display text-white text-[2vw] font-bold mb-[1vh]">
                  Full Pod + IV Therapy
                </p>
                <p className="font-body text-white/60 text-[1.3vw] leading-relaxed">
                  Complete Signature + HBOT + optional IV Therapy
                </p>
              </div>
              <div className="text-right shrink-0 ml-[2vw]">
                <p className="font-display text-accent text-[2.5vw] font-bold">
                  90+ min
                </p>
                <p className="font-body text-white/60 text-[1.5vw]">
                  $120-$175
                </p>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-[3vh]">
            <p className="font-body text-white/30 text-[1.2vw] italic">
              900+ sessions per month demonstrated at our flagship South Florida location. 85 NPS. 8x value-to-price ratio.
            </p>
          </div>
        </div>

        <div className="w-[30vw] flex flex-col gap-[1.5vh]">
          <div className="flex-1 rounded-[1vw] overflow-hidden">
            <img
              src={`${base}compression-boots.jpg`}
              crossOrigin="anonymous"
              className="w-full h-full object-cover"
              alt="Compression therapy"
            />
          </div>
          <div className="h-[30vh] rounded-[1vw] overflow-hidden">
            <img
              src={`${base}pemf-device.jpg`}
              crossOrigin="anonymous"
              className="w-full h-full object-cover"
              alt="PEMF therapy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
