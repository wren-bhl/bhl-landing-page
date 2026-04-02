import { ContactForm } from "@/components/ui/contact-form";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Building, ArrowRight, ChevronDown,
  TrendingUp, ShieldCheck, Zap, Leaf, Clock, Gem
} from "lucide-react";
import heroImage from "@/assets/images/hero-residential.png";
import saunaImage from "@/assets/images/infrared-sauna.jpg";
import hbotImage from "@/assets/images/hbot-chamber.jpg";
import logoDark from "@/assets/images/logo-dark.png";
import logoLight from "@/assets/images/logo-light.png";
import turnkeyDesignImage from "@/assets/images/turnkey-design.png";
import turnkeyTrainingImage from "@/assets/images/turnkey-training.png";
import turnkeyScienceImage from "@/assets/images/turnkey-science.png";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const STAGGER = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function CampaignResidential() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <section className="relative min-h-[90vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Luxury residential building with wellness amenity space"
              className="w-full h-full object-cover"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={STAGGER}
              className="max-w-3xl"
            >
              <motion.div variants={FADE_UP} className="mb-6">
                <img src={logoDark} alt="BH Labs Logo" className="w-48 h-48 mb-4" width={400} height={400} />
              </motion.div>
              <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 text-secondary-foreground text-sm font-medium mb-6">
                <Building className="w-4 h-4" />
                <span>For Luxury Residential</span>
              </motion.div>

              <motion.h1 variants={FADE_UP} className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight text-foreground mb-6 leading-[1.1]">
                The Amenity That <span className="text-primary italic">Pays for Itself</span>
              </motion.h1>

              <motion.p variants={FADE_UP} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                Elevate your property with a turnkey BH Labs Recovery Pod. World-class biohacking equipment that drives resident satisfaction, increases property value by <span className="text-primary font-bold">10-25%</span>, and generates net-positive HOA revenue. No additional staff required.
              </motion.p>

              <motion.div variants={FADE_UP}>
                <Button size="lg" className="h-14 px-8 text-base" asChild>
                  <a href="#contact">
                    Request a Meeting
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          <motion.a
            href="#value"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-foreground/70 hover:text-foreground transition-colors cursor-pointer"
          >
            <span className="text-sm font-semibold uppercase tracking-widest">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ChevronDown className="w-10 h-10" />
            </motion.div>
          </motion.a>
        </section>

        {/* 2. Value Proposition — 5 Benefit Cards */}
        <section className="py-24 bg-background" id="value">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">Why Premium Properties Are Adding Recovery Pods</h2>
              <p className="text-lg text-muted-foreground">Pools and gyms are expected. High-end recovery tech is the new differentiator that drives resident satisfaction and property value.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Gem,
                  title: "Elevated Resident Amenity",
                  desc: "Seven clinical-grade modalities deliver a wellness experience residents can't find in competing properties."
                },
                {
                  icon: Building,
                  title: "Property Differentiation",
                  desc: "Stand out in the market. According to the Global Wellness Institute, wellness-integrated properties command premium positioning."
                },
                {
                  icon: TrendingUp,
                  title: "Developer Value Enhancement",
                  desc: "Properties with wellness amenities see a 10-25% increase in property value — a measurable return backed by industry data."
                },
                {
                  icon: Leaf,
                  title: "Premium Building Experience",
                  desc: "HBOT, red light therapy, infrared sauna, PEMF, and compression therapy — all available steps from residents' doors."
                },
                {
                  icon: ShieldCheck,
                  title: "Exclusive Wellness Access",
                  desc: "Self-guided, research-backed protocols residents can use safely. No supervision required. 30+ protocols included."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Outcomes / ROI */}
        <section className="py-24 bg-card" id="roi">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={STAGGER}
              >
                <motion.h2 variants={FADE_UP} className="text-3xl md:text-5xl font-serif text-foreground mb-6">
                  The Financial Impact
                </motion.h2>
                <motion.p variants={FADE_UP} className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  A Recovery Pod isn't just an amenity — it's a revenue-generating asset that increases your property's market value.
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div variants={FADE_UP} className="bg-background p-6 rounded-2xl border border-border">
                    <TrendingUp className="w-8 h-8 text-primary mb-4" />
                    <div className="text-2xl font-serif text-foreground mb-1">$4,500/mo</div>
                    <div className="text-sm text-muted-foreground">New revenue based on 150 units at $30/mo wellness fee</div>
                  </motion.div>
                  <motion.div variants={FADE_UP} className="bg-background p-6 rounded-2xl border border-border">
                    <Clock className="w-8 h-8 text-primary mb-4" />
                    <div className="text-2xl font-serif text-foreground mb-1">10 Months</div>
                    <div className="text-sm text-muted-foreground">Average payback period on ~$45,000 complete pod investment</div>
                  </motion.div>
                  <motion.div variants={FADE_UP} className="bg-background p-6 rounded-2xl border border-border">
                    <TrendingUp className="w-8 h-8 text-primary mb-4" />
                    <div className="text-2xl font-serif text-foreground mb-1">10-25%</div>
                    <div className="text-sm text-muted-foreground">Property value increase — Global Wellness Institute, 2025</div>
                  </motion.div>
                  <motion.div variants={FADE_UP} className="bg-background p-6 rounded-2xl border border-border">
                    <Zap className="w-8 h-8 text-primary mb-4" />
                    <div className="text-2xl font-serif text-foreground mb-1">$45K+/yr</div>
                    <div className="text-sm text-muted-foreground">Net annual revenue for the HOA post-payback</div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-square rounded-full bg-secondary/30 absolute -inset-4 blur-3xl -z-10" />
                <img src={saunaImage} alt="Premium infrared sauna in luxury residential wellness pod" className="rounded-2xl shadow-xl border border-border/50" loading="lazy" />

                <div className="absolute -bottom-8 -left-8 bg-card p-6 rounded-2xl shadow-xl border border-border max-w-xs">
                  <div className="text-sm font-medium uppercase text-muted-foreground mb-2">Net Annual Revenue</div>
                  <div className="text-3xl font-serif text-foreground">+$45,000</div>
                  <div className="text-xs text-muted-foreground mt-2">Pure profit for the HOA post-payback.</div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center mt-16"
            >
              <Button size="lg" className="h-14 px-8 text-base" asChild>
                <a href="#contact">
                  Request a Meeting
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* 4. How It Works — 3 Steps */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground">Completely turnkey. No dedicated staff required. Designed for property managers who are already busy.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  step: "01",
                  title: "Custom Design",
                  desc: "Our in-house architect configures the pod layout to maximize efficiency within your available amenity space.",
                  image: turnkeyDesignImage
                },
                {
                  step: "02",
                  title: "Professional Installation",
                  desc: "Seven clinical-grade modalities delivered, installed, and branded. 30+ self-guided protocols configured for resident use.",
                  image: turnkeyScienceImage
                },
                {
                  step: "03",
                  title: "Warranty & Support",
                  desc: "Comprehensive 1-year warranty, rapid response technical support, and ongoing maintenance from our Miami-based team.",
                  image: turnkeyTrainingImage
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="bg-card rounded-2xl border border-border overflow-hidden group hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-primary font-bold text-sm mb-2">STEP {item.step}</div>
                    <h3 className="text-xl font-medium text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Lead Capture Form */}
        <section className="py-24 bg-card relative overflow-hidden" id="contact">
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-secondary/20 rounded-tr-full blur-3xl -z-10" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <ContactForm
                type="residential"
                title="Request a Meeting"
                subtitle="Get a comprehensive property assessment and ROI analysis from BH Labs."
              />
            </div>
          </div>
        </section>

        {/* 6. Trust / Credibility */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={STAGGER}
                className="space-y-8"
              >
                <motion.h2 variants={FADE_UP} className="text-3xl md:text-4xl font-serif">Trusted by Miami's Premier Properties</motion.h2>
                <motion.p variants={FADE_UP} className="text-primary-foreground/80 text-lg">
                  With 5 successful wellness locations across Miami, BH Labs is the standard for premium recovery integration in South Florida.
                </motion.p>

                <div className="space-y-6 mt-8">
                  {[
                    { icon: ShieldCheck, title: "1-Year Comprehensive Warranty", desc: "Full coverage on all clinical equipment from our Miami-based team." },
                    { icon: Zap, title: "Technical Support & Maintenance", desc: "Rapid response times with same-day service availability." },
                    { icon: Leaf, title: "Self-Guided Protocols", desc: "30+ research-backed protocols residents can use safely without supervision." }
                  ].map((feature, i) => (
                    <motion.div key={i} variants={FADE_UP} className="flex gap-4">
                      <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-primary-foreground mb-1">{feature.title}</h4>
                        <p className="text-primary-foreground/70 text-sm">{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl relative"
              >
                <img src={hbotImage} alt="Resident using HBOT chamber in luxury condo wellness pod" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex items-end p-8">
                  <div className="text-primary-foreground">
                    <div className="font-serif text-2xl mb-2">"A massive draw for new buyers."</div>
                    <div className="text-sm opacity-80">— Luxury Condo Developer, Miami FL</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 7. Final CTA */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="text-center max-w-3xl mx-auto"
            >
              <img src={logoDark} alt="BH Labs" className="w-32 h-32 mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">
                Your Residents Deserve World-Class Wellness
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                Competing properties are already adding wellness amenities. Don't leave $45K+ in annual revenue and a 10-25% property value increase on the table.
              </p>
              <Button size="lg" className="h-14 px-8 text-base" asChild>
                <a href="#contact">
                  Request a Meeting
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  );
}
