import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, DollarSign, Clock, Users, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ROICalculator() {
  const [totalMembers, setTotalMembers] = useState(500);
  const [premiumUptake, setPremiumUptake] = useState(10);
  const [premiumPrice, setPremiumPrice] = useState(75);
  const [dropInSessions, setDropInSessions] = useState(5);
  const [dropInPrice, setDropInPrice] = useState(30);
  const [operatingCost, setOperatingCost] = useState(400);
  const [showMethodology, setShowMethodology] = useState(false);

  const results = useMemo(() => {
    const investmentCost = 45000;
    const premiumMembers = Math.round(totalMembers * (premiumUptake / 100));
    const premiumMonthly = premiumMembers * premiumPrice;
    const dropInMonthly = dropInSessions * dropInPrice * 30;
    const grossMonthly = premiumMonthly + dropInMonthly;
    const netMonthly = grossMonthly - operatingCost;
    const annual = netMonthly * 12;
    const paybackMonths = netMonthly > 0 ? investmentCost / netMonthly : 0;
    return { premiumMembers, premiumMonthly, dropInMonthly, grossMonthly, netMonthly, annual, paybackMonths, investmentCost };
  }, [totalMembers, premiumUptake, premiumPrice, dropInSessions, dropInPrice, operatingCost]);

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
            <span>Revenue Estimator</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Estimate your facility's recovery revenue potential
          </h2>
          <p className="text-muted-foreground text-lg">Adjust the inputs to model projected returns from a premium recovery offering. Results are illustrative and update instantly.</p>
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
              <h3 className="text-lg font-medium text-foreground">Your Facility Details</h3>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <label htmlFor="fit-members" className="text-muted-foreground">Total Members</label>
                  <span className="font-semibold text-foreground text-base">{totalMembers}</span>
                </div>
                <input id="fit-members" type="range" min={100} max={2000} step={50} value={totalMembers} onChange={(e) => setTotalMembers(Number(e.target.value))} className="w-full accent-emerald-600" aria-label={`Total Members: ${totalMembers}`} />
                <p className="text-xs text-muted-foreground mt-1">Active membership base at your facility</p>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <label htmlFor="fit-uptake" className="text-muted-foreground">Premium Tier Uptake</label>
                  <span className="font-semibold text-foreground text-base">{premiumUptake}% ({Math.round(totalMembers * premiumUptake / 100)} members)</span>
                </div>
                <input id="fit-uptake" type="range" min={3} max={30} value={premiumUptake} onChange={(e) => setPremiumUptake(Number(e.target.value))} className="w-full accent-emerald-600" aria-label={`Premium Tier Uptake: ${premiumUptake}%`} />
                <p className="text-xs text-muted-foreground mt-1">Percentage of members upgrading to a recovery membership tier</p>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <label htmlFor="fit-price" className="text-muted-foreground">Premium Tier Price</label>
                  <span className="font-semibold text-foreground text-base">${premiumPrice}/mo</span>
                </div>
                <input id="fit-price" type="range" min={30} max={150} step={5} value={premiumPrice} onChange={(e) => setPremiumPrice(Number(e.target.value))} className="w-full accent-emerald-600" aria-label={`Premium Tier Price: $${premiumPrice}/mo`} />
                <p className="text-xs text-muted-foreground mt-1">Monthly add-on price for recovery access</p>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <label htmlFor="fit-dropin" className="text-muted-foreground">Drop-In Sessions per Day</label>
                  <span className="font-semibold text-foreground text-base">{dropInSessions}</span>
                </div>
                <input id="fit-dropin" type="range" min={0} max={20} value={dropInSessions} onChange={(e) => setDropInSessions(Number(e.target.value))} className="w-full accent-emerald-600" aria-label={`Drop-In Sessions per Day: ${dropInSessions}`} />
                <p className="text-xs text-muted-foreground mt-1">Non-member or pay-per-session recovery visits</p>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <label htmlFor="fit-dropin-price" className="text-muted-foreground">Average Drop-In Price</label>
                  <span className="font-semibold text-foreground text-base">${dropInPrice}</span>
                </div>
                <input id="fit-dropin-price" type="range" min={15} max={75} step={5} value={dropInPrice} onChange={(e) => setDropInPrice(Number(e.target.value))} className="w-full accent-emerald-600" aria-label={`Average Drop-In Price: $${dropInPrice}`} />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <label htmlFor="fit-operating" className="text-muted-foreground">Monthly Operating Cost</label>
                  <span className="font-semibold text-foreground text-base">${operatingCost}</span>
                </div>
                <input id="fit-operating" type="range" min={0} max={2000} step={50} value={operatingCost} onChange={(e) => setOperatingCost(Number(e.target.value))} className="w-full accent-emerald-600" aria-label={`Monthly Operating Cost: $${operatingCost}`} />
                <p className="text-xs text-muted-foreground mt-1">Estimated costs reflect basic staffing and utilization assumptions and may vary</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 text-white rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-2xl shadow-emerald-900/30">
              <div>
                <h3 className="text-lg font-medium mb-6 text-emerald-200">Projected Returns</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 mt-0.5 text-emerald-300" />
                    <div>
                      <div className="text-sm text-emerald-300">Premium Tier Revenue</div>
                      <div className="text-xl font-serif">{formatCurrency(results.premiumMonthly)}<span className="text-sm font-sans text-emerald-300">/mo</span></div>
                      <div className="text-xs text-emerald-400">{results.premiumMembers} members × ${premiumPrice}/mo</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 mt-0.5 text-emerald-300" />
                    <div>
                      <div className="text-sm text-emerald-300">Drop-In Session Revenue</div>
                      <div className="text-xl font-serif">{formatCurrency(results.dropInMonthly)}<span className="text-sm font-sans text-emerald-300">/mo</span></div>
                    </div>
                  </div>
                  <div className="h-px bg-emerald-600/50" />

                  <div className="bg-emerald-600/40 rounded-xl p-4 border border-emerald-500/30">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-6 h-6 mt-0.5 text-emerald-300" />
                      <div>
                        <div className="text-sm text-emerald-200 font-medium">Estimated Monthly Revenue</div>
                        <div className="text-2xl md:text-4xl font-serif font-bold text-white">+{formatCurrency(results.netMonthly)}<span className="text-base md:text-lg font-sans text-emerald-200">/mo</span></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 mt-0.5 text-emerald-300" />
                    <div>
                      <div className="text-sm text-emerald-300">Annual Ancillary Revenue</div>
                      <div className="text-2xl font-serif">{formatCurrency(results.annual)}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 mt-0.5 text-emerald-300" />
                    <div>
                      <div className="text-sm text-emerald-300">Estimated Payback Period</div>
                      <div className="text-xl font-serif">{formatMonths(results.paybackMonths)}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <p className="text-xs text-emerald-300/80 italic leading-relaxed">Illustrative estimate only. Actual results depend on membership size, utilization, pricing strategy, staffing model, and local demand.</p>
                <Button size="lg" className="w-full h-14 text-base font-bold bg-white text-emerald-800 hover:bg-emerald-50 shadow-lg" asChild>
                  <a href="#contact">
                    Book a Strategy Call
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto mt-6">
            <button
              onClick={() => setShowMethodology(!showMethodology)}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showMethodology ? "rotate-180" : ""}`} />
              How we calculate this
            </button>
            {showMethodology && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-3 bg-background border border-border rounded-xl p-5 text-sm text-muted-foreground space-y-2"
              >
                <p><strong className="text-foreground">Premium Tier Revenue</strong> = Total members × uptake % × monthly premium price</p>
                <p><strong className="text-foreground">Drop-In Revenue</strong> = Sessions per day × average price × 30 days</p>
                <p><strong className="text-foreground">Net Monthly Revenue</strong> = (Premium Tier + Drop-In) − Monthly Operating Cost</p>
                <p><strong className="text-foreground">Payback Period</strong> = ~$45,000 pod investment ÷ Net Monthly Revenue</p>
                <p className="text-xs italic mt-3">Projections are modeled assumptions. Actual results vary by membership base, utilization, pricing, and operating model.</p>
              </motion.div>
            )}
          </div>

          <div className="max-w-3xl mx-auto mt-12 text-center bg-background rounded-2xl p-8 border border-border">
            <h3 className="text-xl md:text-2xl font-serif text-foreground mb-3">Want to see what this could look like in your facility?</h3>
            <p className="text-muted-foreground mb-6">Book a 15-minute strategy call to review your space, member fit, and revenue potential.</p>
            <Button size="lg" className="h-14 px-8 text-base" asChild>
              <a href="#contact">
                Book a Strategy Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
