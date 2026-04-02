export default function DeploymentSlide() {
  const bhDelivers = [
    "Full equipment suite (7 modalities)",
    "Space design and layout plan",
    "Professional installation",
    "Staff training and certification",
    "Operating playbook and protocols",
    "Ongoing maintenance and support",
    "Marketing collateral and templates",
  ];

  const hotelProvides = [
    "500–750 sqft dedicated space",
    "Standard electrical (20A / 240V)",
    "Water access for plunge + drain",
    "3–4 existing staff for training",
    "Guest-facing booking integration",
  ];

  const timeline = [
    { label: "Assessment", weeks: "Wk 1–2", width: "15%" },
    { label: "Procurement", weeks: "Wk 3–6", width: "30%" },
    { label: "Install", weeks: "Wk 7–10", width: "25%" },
    { label: "Training", weeks: "Wk 11–12", width: "15%" },
    { label: "Launch", weeks: "Wk 13+", width: "15%" },
  ];

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-cream">
      <div className="absolute top-0 left-0 w-full h-[0.5vh] bg-gradient-to-r from-accent via-primary to-accent" />

      <div className="absolute inset-0 flex flex-col px-[6vw] py-[5vh]">
        <div className="flex items-center gap-[1vw] mb-[2vh]">
          <div className="w-[3vw] h-[0.3vh] bg-accent" />
          <p className="font-body text-accent text-[1.2vw] font-semibold tracking-[0.2em] uppercase">
            Deployment
          </p>
        </div>

        <h2 className="font-display text-primary text-[3.2vw] font-bold tracking-tight leading-[1.1] mb-[4vh]">
          How We Deploy
        </h2>

        <div className="flex gap-[3vw] flex-1">
          <div className="flex-1 bg-primary rounded-[1vw] p-[2.5vw] flex flex-col">
            <p className="font-body text-accent text-[1.2vw] font-semibold tracking-[0.15em] uppercase mb-[2vh]">
              BH Labs Delivers
            </p>
            <div className="space-y-[1.5vh]">
              {bhDelivers.map((item) => (
                <div key={item} className="flex items-start gap-[0.8vw]">
                  <span className="text-accent text-[1.2vw] leading-none mt-[0.2vh]">&#10003;</span>
                  <p className="font-body text-white text-[1.2vw]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 bg-white rounded-[1vw] p-[2.5vw] border border-primary/10 flex flex-col">
            <p className="font-body text-primary text-[1.2vw] font-semibold tracking-[0.15em] uppercase mb-[2vh]">
              Hotel Provides
            </p>
            <div className="space-y-[1.5vh]">
              {hotelProvides.map((item) => (
                <div key={item} className="flex items-start gap-[0.8vw]">
                  <span className="text-primary text-[1.2vw] leading-none mt-[0.2vh]">&#10003;</span>
                  <p className="font-body text-text text-[1.2vw]">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-[2vh]">
              <p className="font-body text-muted text-[1.1vw] italic">
                No construction. No new hires. No medical licensing.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-[3vh]">
          <p className="font-body text-primary text-[1.2vw] font-semibold mb-[1.5vh]">
            Deployment Timeline — Under 90 Days
          </p>
          <div className="flex h-[6vh] rounded-[0.6vw] overflow-hidden">
            {timeline.map((t, i) => (
              <div
                key={t.label}
                className={`flex flex-col items-center justify-center ${
                  i === timeline.length - 1
                    ? "bg-accent text-primary"
                    : i % 2 === 0
                      ? "bg-primary text-white"
                      : "bg-primary/80 text-white"
                }`}
                style={{ width: t.width }}
              >
                <p className="font-body text-[1.1vw] font-semibold">{t.label}</p>
                <p className="font-body text-[0.9vw] opacity-70">{t.weeks}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
