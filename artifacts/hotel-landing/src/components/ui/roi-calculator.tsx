import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, DollarSign, Clock, AlertTriangle, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ROICalculator() {
  const [units, setUnits] = useState(200);
  const [rate, setRate] = useState(5);
  const [occupancy, setOccupancy] = useState(70);
  const [sessionsPerDay, setSessionsPerDay] = useState(10);
  const [sessionPrice, setSessionPrice] = useState(20);
  const [operatingCost, setOperatingCost] = useState(450);

  const results = useMemo(() => {
    const investmentCost = 45000;
    const adrMonthly = units * (occupancy / 100) * rate * 30;
    const alaCarteMonthly = sessionsPerDay * sessionPrice * 30;
    const grossMonthly = adrMonthly + alaCarteMonthly;
    const totalMonthly = grossMonthly - operatingCost;
    const annual = totalMonthly * 12;
    const paybackMonths = totalMonthly > 0 ? investmentCost / totalMonthly : 0;
    const capRate = 0.06;
    const propertyValueIncrease = annual > 0 ? annual / capRate : 0;
    return { adrMonthly, alaCarteMonthly, grossMonthly, totalMonthly, annual, paybackMonths, investmentCost, propertyValueIncrease };
  }, [units, rate, occupancy, sessionsPerDay, sessionPrice, operatingCost]);

  const formatCurrency = (n: number) => "$" + Math.round(n).toLocaleString();
  const formatMonths = (n: number) => n < 1 ? "Under 1 Month" : n < 2 ? "Under 2 Months" : Math.ceil(n) + " Months";

  return (
    <section className="py-24 bg-card" id="calculator">
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
            How much wellness revenue could your hotel generate?
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
                  <label htmlFor="hotel-units" className="text-muted-foreground">Number of Rooms</label>
                  <span className="font-semibold text-foreground text-base">{units}</span>
                </div>
                <input
                  id="hotel-units"
                  type="range"
                  min={50}
                  max={500}
                  value={units}
                  onChange={(e) => setUnits(Number(e.target.value))}
                  className="w-full accent-emerald-600"
                  aria-label={`Number of Rooms: ${units}`}
                />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <label htmlFor="hotel-rate" className="text-muted-foreground">Wellness Surcharge per Night</label>
                  <span className="font-semibold text-foreground text-base">${rate}</span>
                </div>
                <input id="hotel-rate" type="range" min={2} max={15} value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full accent-emerald-600" aria-label={`Wellness Surcharge per Night: $${rate}`} />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <label htmlFor="hotel-occupancy" className="text-muted-foreground">Occupancy Rate</label>
                  <span className="font-semibold text-foreground text-base">{occupancy}%</span>
                </div>
                <input id="hotel-occupancy" type="range" min={40} max={95} value={occupancy} onChange={(e) => setOccupancy(Number(e.target.value))} className="w-full accent-emerald-600" aria-label={`Occupancy Rate: ${occupancy}%`} />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <label htmlFor="hotel-sessions" className="text-muted-foreground">Walk-In Sessions per Day</label>
                  <span className="font-semibold text-foreground text-base">{sessionsPerDay}</span>
                </div>
                <input id="hotel-sessions" type="range" min={0} max={30} value={sessionsPerDay} onChange={(e) => setSessionsPerDay(Number(e.target.value))} className="w-full accent-emerald-600" aria-label={`Walk-In Sessions per Day: ${sessionsPerDay}`} />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <label htmlFor="hotel-price" className="text-muted-foreground">Average Session Price</label>
                  <span className="font-semibold text-foreground text-base">${sessionPrice}</span>
                </div>
                <input id="hotel-price" type="range" min={10} max={75} value={sessionPrice} onChange={(e) => setSessionPrice(Number(e.target.value))} className="w-full accent-emerald-600" aria-label={`Average Session Price: $${sessionPrice}`} />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <label htmlFor="hotel-operating" className="text-muted-foreground">Monthly Operating Cost</label>
                  <span className="font-semibold text-foreground text-base">${operatingCost}</span>
                </div>
                <input id="hotel-operating" type="range" min={0} max={2000} step={50} value={operatingCost} onChange={(e) => setOperatingCost(Number(e.target.value))} className="w-full accent-emerald-600" aria-label={`Monthly Operating Cost: $${operatingCost}`} />
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 text-white rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-2xl shadow-emerald-900/30">
              <div>
                <h3 className="text-lg font-medium mb-6 text-emerald-200">Your Projected Returns</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 mt-0.5 text-emerald-300" />
                    <div>
                      <div className="text-sm text-emerald-300">ADR Wellness Surcharge</div>
                      <div className="text-xl font-serif">{formatCurrency(results.adrMonthly)}<span className="text-sm font-sans text-emerald-300">/mo</span></div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 mt-0.5 text-emerald-300" />
                    <div>
                      <div className="text-sm text-emerald-300">A-La-Carte Sessions</div>
                      <div className="text-xl font-serif">{formatCurrency(results.alaCarteMonthly)}<span className="text-sm font-sans text-emerald-300">/mo</span></div>
                    </div>
                  </div>
                  <div className="h-px bg-emerald-600/50" />

                  <div className="bg-emerald-600/40 rounded-xl p-4 border border-emerald-500/30">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-6 h-6 mt-0.5 text-emerald-300" />
                      <div>
                        <div className="text-sm text-emerald-200 font-medium">New Monthly Revenue Generated</div>
                        <div className="text-4xl font-serif font-bold text-white">+{formatCurrency(results.totalMonthly)}<span className="text-lg font-sans text-emerald-200">/mo</span></div>
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
                      <div className="text-xs text-emerald-400 mt-0.5">Based on 6% cap rate</div>
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
