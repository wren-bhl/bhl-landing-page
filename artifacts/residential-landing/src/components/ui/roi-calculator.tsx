import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, DollarSign, Clock, AlertTriangle, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ROICalculator() {
  const [units, setUnits] = useState(150);
  const [rate, setRate] = useState(30);
  const [participation, setParticipation] = useState(95);
  const [operatingCost, setOperatingCost] = useState(450);

  const results = useMemo(() => {
    const investmentCost = 45000;
    const grossMonthly = units * (participation / 100) * rate;
    const totalMonthly = grossMonthly - operatingCost;
    const annual = totalMonthly * 12;
    const paybackMonths = totalMonthly > 0 ? investmentCost / totalMonthly : 0;
    const capRate = 0.05;
    const propertyValueIncrease = annual > 0 ? annual / capRate : 0;
    return { totalMonthly, grossMonthly, annual, paybackMonths, investmentCost, propertyValueIncrease };
  }, [units, rate, participation, operatingCost]);

  const formatCurrency = (n: number) => "$" + Math.round(n).toLocaleString();
  const formatMonths = (n: number) => n < 1 ? "Under 1 Month" : n < 2 ? "Under 2 Months" : Math.ceil(n) + " Months";

  return (
    <section className="py-12 md:py-24 bg-card" id="calculator">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
            <Calculator className="w-4 h-4" />
            <span>Interactive ROI Calculator</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            How much new revenue could your property generate?
          </h2>
          <p className="text-muted-foreground text-lg">Adjust the inputs below to see your projected returns — results update instantly.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-background rounded-2xl border border-border p-6 md:p-8 space-y-6">
              <h3 className="text-lg font-medium text-foreground">Your Property Details</h3>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <label htmlFor="res-units" className="text-muted-foreground">Number of Units</label>
                  <span className="font-semibold text-foreground text-base">{units}</span>
                </div>
                <input
                  id="res-units"
                  type="range"
                  min={30}
                  max={500}
                  value={units}
                  onChange={(e) => setUnits(Number(e.target.value))}
                  className="w-full accent-emerald-600"
                  aria-label={`Number of Units: ${units}`}
                />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <label htmlFor="res-rate" className="text-muted-foreground">Monthly Wellness Fee per Unit</label>
                  <span className="font-semibold text-foreground text-base">${rate}</span>
                </div>
                <input id="res-rate" type="range" min={10} max={75} value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full accent-emerald-600" aria-label={`Monthly Wellness Fee per Unit: $${rate}`} />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <label htmlFor="res-participation" className="text-muted-foreground">Participation Rate</label>
                  <span className="font-semibold text-foreground text-base">{participation}%</span>
                </div>
                <input id="res-participation" type="range" min={50} max={100} value={participation} onChange={(e) => setParticipation(Number(e.target.value))} className="w-full accent-emerald-600" aria-label={`Participation Rate: ${participation}%`} />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <label htmlFor="res-operating" className="text-muted-foreground">Monthly Operating Cost</label>
                  <span className="font-semibold text-foreground text-base">${operatingCost}</span>
                </div>
                <input id="res-operating" type="range" min={0} max={2000} step={50} value={operatingCost} onChange={(e) => setOperatingCost(Number(e.target.value))} className="w-full accent-emerald-600" aria-label={`Monthly Operating Cost: $${operatingCost}`} />
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 text-white rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-2xl shadow-emerald-900/30">
              <div>
                <h3 className="text-lg font-medium mb-6 text-emerald-200">Your Projected Returns</h3>
                <div className="space-y-5">
                  <div className="bg-emerald-600/40 rounded-xl p-4 border border-emerald-500/30">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-6 h-6 mt-0.5 text-emerald-300" />
                      <div>
                        <div className="text-sm text-emerald-200 font-medium">New Monthly Revenue Generated</div>
                        <div className="text-2xl md:text-4xl font-serif font-bold text-white">+{formatCurrency(results.totalMonthly)}<span className="text-base md:text-lg font-sans text-emerald-200">/mo</span></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 mt-0.5 text-emerald-300" />
                    <div>
                      <div className="text-sm text-emerald-300">Annual Net Revenue</div>
                      <div className="text-2xl font-serif">{formatCurrency(results.annual)}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 mt-0.5 text-emerald-300" />
                    <div>
                      <div className="text-sm text-emerald-300">Payback Period</div>
                      <div className="text-xl font-serif">{formatMonths(results.paybackMonths)}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building className="w-5 h-5 mt-0.5 text-emerald-300" />
                    <div>
                      <div className="text-sm text-emerald-300">Estimated Property Value Increase</div>
                      <div className="text-xl font-serif">{formatCurrency(results.propertyValueIncrease)}</div>
                      <div className="text-xs text-emerald-400 mt-0.5">Based on 5% cap rate</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2 text-amber-300 text-sm">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                  <span className="italic">Every month this space remains unused = lost revenue.</span>
                </div>
                <Button size="lg" className="w-full h-14 text-base font-bold bg-white text-emerald-800 hover:bg-emerald-50 shadow-lg" asChild>
                  <a href="#contact">Request a Meeting</a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
