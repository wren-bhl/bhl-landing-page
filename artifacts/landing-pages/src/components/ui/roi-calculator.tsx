import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, DollarSign, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ROICalculatorProps {
  type: "hotel" | "residential";
}

export function ROICalculator({ type }: ROICalculatorProps) {
  const isHotel = type === "hotel";

  const [units, setUnits] = useState(isHotel ? 200 : 150);
  const [rate, setRate] = useState(isHotel ? 5 : 30);
  const [occupancy, setOccupancy] = useState(70);
  const [sessionsPerDay, setSessionsPerDay] = useState(10);
  const [sessionPrice, setSessionPrice] = useState(20);

  const results = useMemo(() => {
    const investmentCost = 45000;
    if (isHotel) {
      const adrMonthly = units * (occupancy / 100) * rate * 30;
      const alaCarteMonthly = sessionsPerDay * sessionPrice * 30;
      const totalMonthly = adrMonthly + alaCarteMonthly;
      const annual = totalMonthly * 12;
      const paybackMonths = totalMonthly > 0 ? investmentCost / totalMonthly : 0;
      return { adrMonthly, alaCarteMonthly, totalMonthly, annual, paybackMonths, investmentCost };
    } else {
      const monthlyRevenue = units * rate;
      const annual = monthlyRevenue * 12;
      const paybackMonths = monthlyRevenue > 0 ? investmentCost / monthlyRevenue : 0;
      return { totalMonthly: monthlyRevenue, annual, paybackMonths, investmentCost };
    }
  }, [units, rate, occupancy, sessionsPerDay, sessionPrice, isHotel]);

  const formatCurrency = (n: number) => "$" + Math.round(n).toLocaleString();
  const formatMonths = (n: number) => n < 1 ? "Under 1 Month" : n < 2 ? "Under 2 Months" : Math.ceil(n) + " Months";

  const prefix = type;

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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 text-secondary-foreground text-sm font-medium mb-4">
            <Calculator className="w-4 h-4" />
            <span>ROI Calculator</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            {isHotel ? "How much wellness revenue could your hotel generate?" : "How much new revenue could your property generate?"}
          </h2>
          <p className="text-muted-foreground text-lg">Adjust the inputs below to see your projected returns.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-background rounded-2xl border border-border p-6 md:p-8 space-y-6">
              <h3 className="text-lg font-medium text-foreground">Your Property</h3>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <label htmlFor={`${prefix}-units`} className="text-muted-foreground">{isHotel ? "Number of Rooms" : "Number of Units"}</label>
                  <span className="font-medium text-foreground">{units}</span>
                </div>
                <input
                  id={`${prefix}-units`}
                  type="range"
                  min={isHotel ? 50 : 30}
                  max={500}
                  value={units}
                  onChange={(e) => setUnits(Number(e.target.value))}
                  className="w-full accent-primary"
                  aria-label={isHotel ? `Number of Rooms: ${units}` : `Number of Units: ${units}`}
                />
              </div>

              {isHotel ? (
                <>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <label htmlFor={`${prefix}-rate`} className="text-muted-foreground">Wellness Surcharge per Night</label>
                      <span className="font-medium text-foreground">${rate}</span>
                    </div>
                    <input id={`${prefix}-rate`} type="range" min={2} max={15} value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full accent-primary" aria-label={`Wellness Surcharge per Night: $${rate}`} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <label htmlFor={`${prefix}-occupancy`} className="text-muted-foreground">Occupancy Rate</label>
                      <span className="font-medium text-foreground">{occupancy}%</span>
                    </div>
                    <input id={`${prefix}-occupancy`} type="range" min={40} max={95} value={occupancy} onChange={(e) => setOccupancy(Number(e.target.value))} className="w-full accent-primary" aria-label={`Occupancy Rate: ${occupancy}%`} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <label htmlFor={`${prefix}-sessions`} className="text-muted-foreground">Walk-In Sessions per Day</label>
                      <span className="font-medium text-foreground">{sessionsPerDay}</span>
                    </div>
                    <input id={`${prefix}-sessions`} type="range" min={0} max={30} value={sessionsPerDay} onChange={(e) => setSessionsPerDay(Number(e.target.value))} className="w-full accent-primary" aria-label={`Walk-In Sessions per Day: ${sessionsPerDay}`} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <label htmlFor={`${prefix}-price`} className="text-muted-foreground">Average Session Price</label>
                      <span className="font-medium text-foreground">${sessionPrice}</span>
                    </div>
                    <input id={`${prefix}-price`} type="range" min={10} max={75} value={sessionPrice} onChange={(e) => setSessionPrice(Number(e.target.value))} className="w-full accent-primary" aria-label={`Average Session Price: $${sessionPrice}`} />
                  </div>
                </>
              ) : (
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <label htmlFor={`${prefix}-rate`} className="text-muted-foreground">Monthly Wellness Fee per Unit</label>
                    <span className="font-medium text-foreground">${rate}</span>
                  </div>
                  <input id={`${prefix}-rate`} type="range" min={10} max={75} value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full accent-primary" aria-label={`Monthly Wellness Fee per Unit: $${rate}`} />
                </div>
              )}
            </div>

            <div className="bg-primary text-primary-foreground rounded-2xl p-6 md:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-medium mb-6 text-primary-foreground/80">Your Projected Returns</h3>
                <div className="space-y-5">
                  {isHotel && "adrMonthly" in results && (
                    <>
                      <div className="flex items-start gap-3">
                        <DollarSign className="w-5 h-5 mt-0.5 text-secondary" />
                        <div>
                          <div className="text-sm text-primary-foreground/60">ADR Wellness Surcharge</div>
                          <div className="text-xl font-serif">{formatCurrency(results.adrMonthly)}<span className="text-sm font-sans text-primary-foreground/60">/mo</span></div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <DollarSign className="w-5 h-5 mt-0.5 text-secondary" />
                        <div>
                          <div className="text-sm text-primary-foreground/60">A-La-Carte Sessions</div>
                          <div className="text-xl font-serif">{formatCurrency(results.alaCarteMonthly!)}<span className="text-sm font-sans text-primary-foreground/60">/mo</span></div>
                        </div>
                      </div>
                      <div className="h-px bg-primary-foreground/20" />
                    </>
                  )}
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 mt-0.5 text-secondary" />
                    <div>
                      <div className="text-sm text-primary-foreground/60">Total Monthly Revenue</div>
                      <div className="text-2xl font-serif">{formatCurrency(results.totalMonthly)}<span className="text-sm font-sans text-primary-foreground/60">/mo</span></div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 mt-0.5 text-secondary" />
                    <div>
                      <div className="text-sm text-primary-foreground/60">Annual Revenue</div>
                      <div className="text-3xl font-serif">{formatCurrency(results.annual)}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 mt-0.5 text-secondary" />
                    <div>
                      <div className="text-sm text-primary-foreground/60">Payback Period</div>
                      <div className="text-xl font-serif">{formatMonths(results.paybackMonths)}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button size="lg" variant="secondary" className="w-full h-12 text-base font-medium" asChild>
                  <a href="#contact">Get Your Custom Projection</a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
