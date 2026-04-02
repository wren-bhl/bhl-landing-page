import type { MouseEvent, PointerEvent } from "react";
import { useState, useCallback } from "react";

interface Inputs {
  properties: number;
  sessionsPerMonth: number;
  blendedPrice: number;
  tier: "single" | "multi" | "enterprise";
}

const tierPrices: Record<string, number> = {
  single: 49000,
  multi: 39000,
  enterprise: 35000,
};

const tierLabels: Record<string, string> = {
  single: "Single ($49K)",
  multi: "Multi 5+ ($39K)",
  enterprise: "Enterprise (Custom)",
};

const presets: { label: string; inputs: Inputs }[] = [
  { label: "Conservative", inputs: { properties: 1, sessionsPerMonth: 150, blendedPrice: 60, tier: "single" } },
  { label: "Moderate", inputs: { properties: 5, sessionsPerMonth: 250, blendedPrice: 65, tier: "multi" } },
  { label: "Demonstrated", inputs: { properties: 10, sessionsPerMonth: 400, blendedPrice: 65, tier: "multi" } },
];

function fmt(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export default function ROICalculatorSlide() {
  const [inputs, setInputs] = useState<Inputs>({
    properties: 5,
    sessionsPerMonth: 250,
    blendedPrice: 65,
    tier: "multi",
  });

  const update = useCallback((partial: Partial<Inputs>) => {
    setInputs((prev) => ({ ...prev, ...partial }));
  }, []);

  const isEnterprise = inputs.tier === "enterprise";
  const unitCost = tierPrices[inputs.tier];
  const annualRevenuePerProperty = inputs.sessionsPerMonth * inputs.blendedPrice * 12;
  const totalPortfolioRevenue = annualRevenuePerProperty * inputs.properties;
  const totalInvestment = isEnterprise ? null : unitCost * inputs.properties;
  const paybackMonths = totalInvestment !== null ? totalInvestment / (annualRevenuePerProperty * inputs.properties / 12) : null;
  const revenuePerSqft = annualRevenuePerProperty / 625;

  const stopPropagation = useCallback((e: MouseEvent | PointerEvent) => {
    e.stopPropagation();
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-cream">
      <div className="absolute top-0 right-0 w-[25vw] h-[25vh] bg-gradient-to-bl from-accent/10 to-transparent" />

      <div className="absolute inset-0 flex flex-col px-[6vw] py-[4vh]">
        <div className="flex items-center gap-[1vw] mb-[1vh]">
          <div className="w-[3vw] h-[0.3vh] bg-accent" />
          <p className="font-body text-accent text-[1.1vw] font-semibold tracking-[0.2em] uppercase">
            Interactive ROI
          </p>
        </div>

        <h2 className="font-display text-primary text-[2.6vw] font-bold tracking-tight leading-[1.1] mb-[2vh]">
          Portfolio ROI Calculator
        </h2>

        <div className="flex gap-[1vw] mb-[2.5vh]">
          {presets.map((p) => (
            <button
              key={p.label}
              onClick={(e) => { e.stopPropagation(); update(p.inputs); }}
              onPointerDown={stopPropagation}
              className="px-[1.2vw] py-[0.6vh] rounded-full border border-primary/20 font-body text-[1vw] font-medium text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer"
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="flex gap-[3vw] flex-1">
          <div className="w-[38vw] flex flex-col gap-[2vh]">
            <div>
              <div className="flex justify-between mb-[0.5vh]">
                <p className="font-body text-text text-[1.1vw] font-medium">Properties</p>
                <p className="font-display text-primary text-[1.3vw] font-bold">{inputs.properties === 50 ? "50+" : inputs.properties}</p>
              </div>
              <input
                type="range"
                min={1}
                max={50}
                value={inputs.properties}
                onChange={(e) => update({ properties: +e.target.value })}
                onClick={stopPropagation}
                onPointerDown={stopPropagation}
                className="w-full h-[0.6vh] accent-accent cursor-pointer"
              />
              <div className="flex justify-between mt-[0.3vh]">
                <span className="font-body text-muted text-[0.9vw]">1</span>
                <span className="font-body text-muted text-[0.9vw]">50+</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-[0.5vh]">
                <p className="font-body text-text text-[1.1vw] font-medium">Sessions / Month</p>
                <p className="font-display text-primary text-[1.3vw] font-bold">{inputs.sessionsPerMonth}</p>
              </div>
              <input
                type="range"
                min={100}
                max={500}
                step={10}
                value={inputs.sessionsPerMonth}
                onChange={(e) => update({ sessionsPerMonth: +e.target.value })}
                onClick={stopPropagation}
                onPointerDown={stopPropagation}
                className="w-full h-[0.6vh] accent-accent cursor-pointer"
              />
              <div className="flex justify-between mt-[0.3vh]">
                <span className="font-body text-muted text-[0.9vw]">100</span>
                <span className="font-body text-muted text-[0.9vw]">500</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-[0.5vh]">
                <p className="font-body text-text text-[1.1vw] font-medium">Blended Session Price</p>
                <p className="font-display text-primary text-[1.3vw] font-bold">${inputs.blendedPrice}</p>
              </div>
              <input
                type="range"
                min={50}
                max={100}
                step={5}
                value={inputs.blendedPrice}
                onChange={(e) => update({ blendedPrice: +e.target.value })}
                onClick={stopPropagation}
                onPointerDown={stopPropagation}
                className="w-full h-[0.6vh] accent-accent cursor-pointer"
              />
              <div className="flex justify-between mt-[0.3vh]">
                <span className="font-body text-muted text-[0.9vw]">$50</span>
                <span className="font-body text-muted text-[0.9vw]">$100</span>
              </div>
            </div>

            <div>
              <p className="font-body text-text text-[1.1vw] font-medium mb-[0.8vh]">Investment Tier</p>
              <div className="flex gap-[0.8vw]">
                {(["single", "multi", "enterprise"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={(e) => { e.stopPropagation(); update({ tier: t }); }}
                    onPointerDown={stopPropagation}
                    className={`flex-1 py-[0.8vh] rounded-[0.4vw] font-body text-[1vw] font-medium transition-colors cursor-pointer border ${
                      inputs.tier === t
                        ? "bg-primary text-white border-primary"
                        : "bg-white text-primary border-primary/20 hover:border-primary/40"
                    }`}
                  >
                    {tierLabels[t]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-[1.5vh]">
            <div className="bg-white rounded-[0.8vw] border border-primary/10 p-[2vw] flex-1 flex flex-col justify-center gap-[2vh]">
              <div>
                <p className="font-body text-muted text-[1vw] font-medium uppercase tracking-wider">
                  Annual Revenue / Property
                </p>
                <p className="font-display text-primary text-[2.8vw] font-bold tracking-tight">
                  {fmt(annualRevenuePerProperty)}
                </p>
              </div>
              <div className="h-[0.1vh] bg-primary/10" />
              <div>
                <p className="font-body text-muted text-[1vw] font-medium uppercase tracking-wider">
                  Total Portfolio Revenue
                </p>
                <p className="font-display text-primary text-[2.8vw] font-bold tracking-tight">
                  {fmt(totalPortfolioRevenue)}
                </p>
              </div>
              <div className="h-[0.1vh] bg-primary/10" />
              <div className="flex gap-[2vw]">
                <div className="flex-1">
                  <p className="font-body text-muted text-[1vw] font-medium uppercase tracking-wider">
                    Total Investment
                  </p>
                  <p className="font-display text-primary text-[1.8vw] font-bold">
                    {totalInvestment !== null ? fmt(totalInvestment) : "Contact Us"}
                  </p>
                </div>
                <div className="flex-1">
                  <p className="font-body text-muted text-[1vw] font-medium uppercase tracking-wider">
                    Payback Period
                  </p>
                  <p className="font-display text-accent text-[1.8vw] font-bold">
                    {paybackMonths !== null ? (paybackMonths < 1 ? "<1" : paybackMonths.toFixed(1)) + " months" : "Contact Us"}
                  </p>
                </div>
              </div>
              <div className="h-[0.1vh] bg-primary/10" />
              <div>
                <p className="font-body text-muted text-[1vw] font-medium uppercase tracking-wider">
                  Revenue / Sqft / Year
                </p>
                <p className="font-display text-accent text-[1.8vw] font-bold">
                  {fmt(revenuePerSqft)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
