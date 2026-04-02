export default function RegulatorySlide() {
  const points = [
    {
      title: "Wellness-Grade HBOT",
      detail:
        "Operates at ≤ 2.0 ATA (atmospheric pressure). At this level, HBOT is classified the same as a sauna or steam room — a general wellness device, not a medical device.",
    },
    {
      title: "No Physician Oversight Required",
      detail:
        "Restore Hyper Wellness operates HBOT across 198+ locations nationwide with no physician on-site and no medical licensing — validating the regulatory pathway at scale.",
    },
    {
      title: "All 7 Modalities Are General Wellness",
      detail:
        "Red Light, PEMF, Cold Plunge, Infrared Sauna, Compression, and Lymphatic Drainage are all FDA-registered as general wellness devices. No prescriptions, no medical claims.",
    },
    {
      title: "No Medical Licensing Required",
      detail:
        "Your existing spa or front-desk staff can operate every modality after BH Labs certification training. No nurses, no medical director, no special permits.",
    },
  ];

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-primary">
      <div className="absolute top-0 left-0 w-full h-[0.5vh] bg-gradient-to-r from-accent via-accent/50 to-transparent" />
      <div className="absolute top-0 right-0 w-[30vw] h-[30vh] bg-gradient-to-bl from-accent/10 to-transparent" />

      <div className="absolute inset-0 flex flex-col px-[6vw] py-[5vh]">
        <div className="flex items-center gap-[1vw] mb-[2vh]">
          <div className="w-[3vw] h-[0.3vh] bg-accent" />
          <p className="font-body text-accent text-[1.2vw] font-semibold tracking-[0.2em] uppercase">
            Regulatory
          </p>
        </div>

        <h2 className="font-display text-white text-[3.2vw] font-bold tracking-tight leading-[1.1] mb-[1vh]">
          Addressing the HBOT Question
        </h2>
        <p className="font-body text-white/60 text-[1.4vw] mb-[4vh]">
          The most common concern — answered directly.
        </p>

        <div className="flex-1 flex flex-col gap-[2vh]">
          {points.map((p) => (
            <div
              key={p.title}
              className="bg-white/5 rounded-[1vw] p-[2.5vw] border border-white/10 flex items-start gap-[2vw]"
            >
              <div className="w-[0.4vw] h-full min-h-[4vh] bg-accent rounded-full shrink-0 mt-[0.3vh]" />
              <div>
                <p className="font-body text-white text-[1.4vw] font-semibold mb-[0.5vh]">
                  {p.title}
                </p>
                <p className="font-body text-white/60 text-[1.2vw] leading-relaxed">
                  {p.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="font-body text-white/30 text-[1.1vw] mt-[2vh] italic">
          BH Labs provides compliance documentation and regulatory guidance as part of every deployment.
        </p>
      </div>
    </div>
  );
}
