import { ContactForm } from "@/components/ui/contact-form";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Hotel, ArrowRight, ChevronDown,
  TrendingUp, Users, Zap, DollarSign, Activity
} from "lucide-react";
import heroImage from "@/assets/images/biohack-lab-front.jpg";
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

export default function CampaignHotels() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <section className="relative min-h-[70vh] md:min-h-[90vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="BH Labs Recovery Pod installation for hotels and resorts"
              className="w-full h-full object-cover"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={STAGGER}
              className="max-w-3xl"
            >
              <motion.div variants={FADE_UP} className="mb-4 md:mb-6">
                <img src={logoDark} alt="BH Labs Logo" className="w-24 h-24 md:w-48 md:h-48 mb-2 md:mb-4" width={400} height={400} />
              </motion.div>
              <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 text-secondary-foreground text-sm font-medium mb-6">
                <Hotel className="w-4 h-4" />
                <span>For Hotels & Resorts</span>
              </motion.div>

              <motion.h1 variants={FADE_UP} className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-serif tracking-tight text-foreground mb-4 md:mb-6 leading-[1.1]">
                Turn Idle Space Into <span className="text-primary italic">Wellness Revenue</span>
              </motion.h1>

              <motion.p variants={FADE_UP} className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-10 max-w-2xl leading-relaxed">
                Install a turnkey BH Labs Recovery Pod in your hotel. Generate <span className="text-primary font-bold text-xl md:text-2xl lg:text-3xl">$25K+ monthly revenue</span> with zero additional staff. Clinical biohacking meets luxury hospitality.
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
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-foreground/70 hover:text-foreground transition-colors cursor-pointer"
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
        <section className="py-12 md:py-24 bg-background" id="value">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="text-center max-w-3xl mx-auto mb-8 md:mb-16"
            >
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-serif text-foreground mb-4">Why Hotels Are Adding Recovery Pods</h2>
              <p className="text-lg text-muted-foreground">A single installation unlocks premium guest wellness, incremental revenue, and a differentiated hospitality experience.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: DollarSign,
                  title: "Incremental Revenue",
                  desc: "Generate $25K+/month from ADR surcharges and walk-in sessions — a new revenue stream from existing space."
                },
                {
                  icon: Hotel,
                  title: "Premium Guest Amenity",
                  desc: "Clinical-grade biohacking elevates your property above the competition and attracts high-value wellness travelers."
                },
                {
                  icon: TrendingUp,
                  title: "Differentiated Hospitality",
                  desc: "Wellness tourists spend 41-175% more than average travelers. Capture this rapidly growing market segment."
                },
                {
                  icon: Zap,
                  title: "Turnkey Implementation",
                  desc: "We handle design, installation, staff training, and ongoing support. No disruption to your operations."
                },
                {
                  icon: Users,
                  title: "Zero Additional Staff",
                  desc: "Your existing spa team is trained and certified by BH Labs to operate the Recovery Pod seamlessly."
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
        <section className="py-12 md:py-24 bg-card" id="roi">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="text-center max-w-3xl mx-auto mb-8 md:mb-16"
            >
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-serif text-foreground mb-4">The Revenue Impact</h2>
              <p className="text-lg text-muted-foreground">Real numbers from a single Recovery Pod installation in a 200-room hotel.</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { title: "ADR Revenue", value: "$21,000/mo", subtext: "200 rooms x 70% occupancy x $5/night wellness surcharge", icon: TrendingUp },
                { title: "A-La-Carte Sessions", value: "$6,000/mo", subtext: "~10 walk-in sessions/day at $20/session average", icon: DollarSign },
                { title: "Payback Period", value: "< 2 Months", subtext: "On a ~$45,000 pod investment with combined revenue streams", icon: Zap },
                { title: "Additional Staff", value: "Zero", subtext: "We train and certify your existing spa staff to run the pod", icon: Users }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-background rounded-2xl p-6 border border-border shadow-sm"
                >
                  <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center mb-4">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-muted-foreground text-xs font-medium uppercase tracking-wider mb-1">{stat.title}</h3>
                  <div className="text-3xl font-serif text-foreground mb-2">{stat.value}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{stat.subtext}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center mt-12"
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
        <section className="py-12 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="text-center max-w-3xl mx-auto mb-8 md:mb-16"
            >
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-serif text-foreground mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground">From consultation to revenue in as little as 4-6 weeks.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  step: "01",
                  title: "Custom Design",
                  desc: "Our in-house architect assesses your available space and configures a pod layout that integrates seamlessly with your property.",
                  image: turnkeyDesignImage
                },
                {
                  step: "02",
                  title: "Turnkey Installation",
                  desc: "We deliver, install, and brand all seven clinical-grade modalities. 30+ science-backed protocols included from day one.",
                  image: turnkeyScienceImage
                },
                {
                  step: "03",
                  title: "Staff Training & Launch",
                  desc: "Your existing spa team receives comprehensive certification. Full 1-year warranty and ongoing technical support included.",
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
        <section className="py-12 md:py-24 bg-card relative overflow-hidden" id="contact">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/30 rounded-l-full blur-3xl -z-10 transform translate-x-1/2" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <ContactForm
                type="hotel"
                title="Request a Meeting"
                subtitle="Get a custom revenue projection and financial model for your property. A BH Labs representative will contact you within 24 hours."
              />
            </div>
          </div>
        </section>

        {/* 6. Trust / Credibility */}
        <section className="py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
              <div>
                <motion.h2
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={FADE_UP}
                  className="text-2xl md:text-3xl lg:text-5xl font-serif mb-6"
                >
                  Trusted by Leading Hospitality & Wellness Brands
                </motion.h2>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={FADE_UP}
                  className="text-primary-foreground/80 text-lg mb-8"
                >
                  With 5 successful wellness locations across Miami, BH Labs is the standard for premium recovery integration in South Florida.
                </motion.p>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={STAGGER}
                  className="space-y-4"
                >
                  {[
                    "Equinox Partnership Integrations",
                    "Reserve Padel Solemia",
                    "Dr. Johnny Salomon's Medical Facility"
                  ].map((partner, i) => (
                    <motion.div key={i} variants={FADE_UP} className="flex items-center gap-3 bg-primary-foreground/10 px-4 py-3 rounded-lg backdrop-blur-sm">
                      <Activity className="w-5 h-5 text-secondary" />
                      <span className="font-medium text-primary-foreground">{partner}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={FADE_UP}
              >
                <div className="bg-background/5 p-5 md:p-8 rounded-2xl border border-primary-foreground/20 backdrop-blur-md">
                  <div className="flex justify-center mb-6">
                    <img src={logoLight} alt="BH Labs" className="w-28 h-28 md:w-56 md:h-56" loading="lazy" width={400} height={400} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif mb-6 text-primary-foreground leading-snug">
                    "Wellness tourists spend 41-175% more than average travelers."
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">GWI</span>
                    </div>
                    <div>
                      <div className="font-medium">Global Wellness Institute</div>
                      <div className="text-primary-foreground/60 text-sm">Global Wellness Economy Report, 2024</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 7. Final CTA */}
        <section className="py-12 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="text-center max-w-3xl mx-auto"
            >
              <img src={logoDark} alt="BH Labs" className="w-20 h-20 md:w-32 md:h-32 mx-auto mb-4 md:mb-6" />
              <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">
                Every Month Without a Recovery Pod Is Revenue Left on the Table
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-10 max-w-2xl mx-auto">
                Join the hospitality leaders already generating $25K+ monthly from their BH Labs Recovery Pod. Your guests are looking for wellness — give it to them.
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
