import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, DollarSign, Clock } from "lucide-react";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function ROICalculator() {
  const [athletes, setAthletes] = useState(300);
  const [outsourcedCost, setOutsourcedCost] = useState(100000);
  const [podCost] = useState(45000);

  const annualSavings = outsourcedCost - (podCost * 0.1);
  const savingsPercent = Math.round((1 - (podCost / outsourcedCost)) * 100);
  const paybackMonths = Math.max(1, Math.round((podCost / outsourcedCost) * 12));
  const costPerAthlete = Math.round(podCost / athletes);

  return (
    <section className="py-24 bg-card" id="roi">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FADE_UP}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            <Calculator className="w-4 h-4" />
            Interactive ROI Calculator
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">How much could your program save?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Adjust the sliders to see your program's potential savings with an on-site Recovery Pod vs. outsourced recovery services.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="bg-background rounded-2xl p-8 border border-border shadow-sm"
          >
            <h3 className="text-lg font-medium text-foreground mb-6">Your Program</h3>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-foreground">Number of Athletes</label>
                  <span className="text-sm font-bold text-emerald-600">{athletes}</span>
                </div>
                <input
                  type="range"
                  min={50}
                  max={800}
                  step={10}
                  value={athletes}
                  onChange={(e) => setAthletes(Number(e.target.value))}
                  className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>50</span>
                  <span>800</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-foreground">Current Annual Recovery Spend</label>
                  <span className="text-sm font-bold text-emerald-600">${outsourcedCost.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min={25000}
                  max={500000}
                  step={5000}
                  value={outsourcedCost}
                  onChange={(e) => setOutsourcedCost(Number(e.target.value))}
                  className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>$25K</span>
                  <span>$500K</span>
                </div>
              </div>

              <div className="bg-secondary/50 rounded-xl p-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">One-Time Pod Investment</span>
                  <span className="text-lg font-bold text-foreground">~${podCost.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="bg-emerald-600 rounded-2xl p-8 text-white shadow-xl"
          >
            <h3 className="text-lg font-medium text-emerald-100 mb-6">Your Savings</h3>

            <div className="space-y-6">
              <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                  <DollarSign className="w-5 h-5 text-emerald-200" />
                  <span className="text-sm text-emerald-100">First-Year Net Savings</span>
                </div>
                <div className="text-4xl font-bold text-white">${Math.max(0, annualSavings).toLocaleString()}</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-emerald-200" />
                    <span className="text-xs text-emerald-100">Cost Reduction</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{savingsPercent}%</div>
                </div>

                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-emerald-200" />
                    <span className="text-xs text-emerald-100">Payback Period</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{paybackMonths} mo</div>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Calculator className="w-4 h-4 text-emerald-200" />
                  <span className="text-xs text-emerald-100">Cost Per Athlete</span>
                </div>
                <div className="text-2xl font-bold text-white">${costPerAthlete}</div>
                <p className="text-xs text-emerald-200 mt-1">One-time investment per athlete served</p>
              </div>

              <a
                href="#contact"
                className="block w-full text-center bg-white text-emerald-700 font-bold py-3 rounded-xl hover:bg-emerald-50 transition-colors shadow-lg"
              >
                Request a Meeting
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
