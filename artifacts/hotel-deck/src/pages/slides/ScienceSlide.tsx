export default function ScienceSlide() {
  const modalities = [
    {
      step: "01",
      name: "Hyperbaric Oxygen (HBOT)",
      evidence: "800% stem cell increase at 40 sessions",
      citation: "Thom, 2006",
      color: "bg-primary",
    },
    {
      step: "02",
      name: "Red Light Therapy",
      evidence: "Enhanced mitochondrial ATP production & tissue repair",
      citation: "Hamblin, 2017",
      color: "bg-primary/90",
    },
    {
      step: "03",
      name: "PEMF",
      evidence: "Accelerated bone and soft-tissue recovery",
      citation: "NASA, 2003",
      color: "bg-primary/80",
    },
    {
      step: "04",
      name: "Cold Plunge",
      evidence: "2–3× norepinephrine increase, systemic inflammation reduction",
      citation: "Šrámek, 2000",
      color: "bg-primary/70",
    },
    {
      step: "05",
      name: "Infrared Sauna",
      evidence: "Cardiovascular conditioning equivalent to moderate exercise",
      citation: "Laukkanen, 2015",
      color: "bg-primary/60",
    },
    {
      step: "06",
      name: "Compression + Lymphatic",
      evidence: "60% faster lactate clearance and lymphatic drainage",
      citation: "Hanson, 2013",
      color: "bg-primary/50",
    },
  ];

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-cream">
      <div className="absolute top-0 left-0 w-full h-[0.5vh] bg-gradient-to-r from-primary via-accent to-primary" />

      <div className="absolute inset-0 flex flex-col px-[6vw] py-[5vh]">
        <div className="flex items-center gap-[1vw] mb-[2vh]">
          <div className="w-[3vw] h-[0.3vh] bg-accent" />
          <p className="font-body text-accent text-[1.2vw] font-semibold tracking-[0.2em] uppercase">
            The Science
          </p>
        </div>

        <h2 className="font-display text-primary text-[3.2vw] font-bold tracking-tight leading-[1.1] mb-[1vh]">
          Why Sequence Matters
        </h2>
        <p className="font-body text-muted text-[1.3vw] mb-[3vh]">
          Each modality primes the body for the next — the protocol is more effective in sequence than any modality alone.
        </p>

        <div className="flex-1 flex flex-col justify-center gap-[1.2vh]">
          {modalities.map((m, i) => (
            <div key={m.step} className="flex items-stretch gap-[1vw]">
              <div className="flex flex-col items-center w-[3vw] shrink-0">
                <div className={`w-[2.5vw] h-[2.5vw] rounded-full ${m.color} flex items-center justify-center`}>
                  <p className="font-body text-white text-[1vw] font-bold">{m.step}</p>
                </div>
                {i < modalities.length - 1 && (
                  <div className="flex-1 w-[0.15vw] bg-primary/20 my-[0.3vh]" />
                )}
              </div>
              <div className="flex-1 bg-white rounded-[0.6vw] border border-primary/10 px-[2vw] py-[1.2vh] flex items-center justify-between">
                <div>
                  <p className="font-body text-primary text-[1.3vw] font-semibold">
                    {m.name}
                  </p>
                  <p className="font-body text-text text-[1.1vw] mt-[0.3vh]">
                    {m.evidence}
                  </p>
                </div>
                <p className="font-body text-muted text-[1vw] italic shrink-0 ml-[2vw]">
                  {m.citation}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="font-body text-muted text-[1.1vw] mt-[2vh] italic">
          Protocol designed by BH Labs. All modalities are FDA-registered general wellness devices.
        </p>
      </div>
    </div>
  );
}
