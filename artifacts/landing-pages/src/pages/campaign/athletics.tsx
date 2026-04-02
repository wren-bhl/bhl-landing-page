import { ContactForm } from "@/components/ui/contact-form";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  GraduationCap, ArrowRight, ChevronDown,
  TrendingUp, Users, Zap, DollarSign, Activity, Shield
} from "lucide-react";
import heroImage from "@/assets/images/biohack-lab-front.jpg";
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

export default function CampaignAthletics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <section className="relative min-h-[70vh] md:min-h-[90vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="BH Labs Recovery Pod for university athletics programs"
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
                <GraduationCap className="w-4 h-4" />
                <span>For University Athletics</span>
              </motion.div>

              <motion.h1 variants={FADE_UP} className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-serif tracking-tight text-foreground mb-4 md:mb-6 leading-[1.1]">
                Give Every Athlete <span className="text-primary italic">Pro-Level Recovery</span>
              </motion.h1>

              <motion.p variants={FADE_UP} className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-10 max-w-2xl leading-relaxed">
                Install a turnkey BH Labs Recovery Pod in your athletic facility. <span className="text-primary font-bold text-xl md:text-2xl lg:text-3xl">7 clinical-grade modalities</span> that reduce injury downtime, accelerate return-to-play, and cost less than outsourcing recovery. No additional staff required.
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
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-serif text-foreground mb-4">Why Athletic Departments Are Going On-Site</h2>
              <p className="text-lg text-muted-foreground">A single Recovery Pod replaces fragmented, outsourced solutions with one integrated system that serves every sport year-round.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Athlete Recovery & Injury Prevention",
                  desc: "HBOT, red light, compression, PEMF, and infrared sauna — modalities used by NFL, NBA, and Olympic athletes, now accessible for every college program."
                },
                {
                  icon: TrendingUp,
                  title: "Performance Support",
                  desc: "Consistent, on-site recovery access means faster return-to-play, reduced injury downtime, and athletes performing at their peak."
                },
                {
                  icon: GraduationCap,
                  title: "Recruiting Differentiation",
                  desc: "Top recruits compare facilities. A Recovery Pod signals your program invests in athlete health and gives you a tangible recruiting edge."
                },
                {
                  icon: Zap,
                  title: "Sports Science Integration",
                  desc: "30+ sport-specific protocols designed from peer-reviewed research. Your athletic trainers get certified to run every protocol."
                },
                {
                  icon: DollarSign,
                  title: "Easy Implementation",
                  desc: "One-time ~$45K investment replaces $100K+/year in outsourced cryo, off-campus recovery, and fragmented treatment services."
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
              <div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={FADE_UP}
                  className="mb-8 md:mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">The Numbers Athletic Directors Care About</h2>
                  <p className="text-muted-foreground text-lg">University athletics programs spend thousands annually on outsourced recovery. A Recovery Pod changes the economics entirely.</p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: "Cost Savings", value: "60-80%", subtext: "Less than outsourced recovery services, cryo facilities, and off-campus treatment", icon: DollarSign },
                    { title: "Athlete Availability", value: "+25%", subtext: "Faster return-to-play with consistent, on-site recovery access", icon: TrendingUp },
                    { title: "All Sports", value: "1 Pod", subtext: "Serves football, basketball, soccer, track, and every other sport program", icon: Users },
                    { title: "Additional Staff", value: "Zero", subtext: "We train your athletic trainers to operate the pod and run protocols", icon: Zap }
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
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img
                  src={hbotImage}
                  alt="HBOT chamber for university athlete recovery"
                  className="rounded-2xl shadow-xl w-full object-cover aspect-[3/4]"
                  loading="lazy"
                  width={600}
                  height={800}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent rounded-2xl flex items-end p-8">
                  <div className="text-primary-foreground">
                    <div className="text-sm font-medium uppercase tracking-wider mb-2 opacity-80">One-Time Investment</div>
                    <div className="text-3xl md:text-5xl font-sans font-bold tracking-tighter text-secondary">~$45K</div>
                    <div className="text-sm mt-2 opacity-80">vs. $100K+/year in outsourced recovery</div>
                  </div>
                </div>
              </motion.div>
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
              <p className="text-lg text-muted-foreground">We handle everything. Your athletic trainers stay focused on athletes.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  step: "01",
                  title: "Facility Assessment",
                  desc: "Our architect designs the pod to fit your training facility's available space — from dedicated rooms to open areas.",
                  image: turnkeyDesignImage
                },
                {
                  step: "02",
                  title: "Installation & Protocols",
                  desc: "Seven clinical-grade modalities installed with 30+ sport-specific recovery protocols designed from peer-reviewed research.",
                  image: turnkeyScienceImage
                },
                {
                  step: "03",
                  title: "Trainer Certification",
                  desc: "We certify your athletic trainers to run every protocol confidently. Full 1-year warranty and ongoing technical support included.",
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
                type="athletics-full"
                title="Request a Meeting"
                subtitle="Tell us about your athletics program and we'll prepare a detailed proposal with pricing and implementation plan."
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
                  Trusted by Elite Performance Programs
                </motion.h2>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={FADE_UP}
                  className="text-primary-foreground/80 text-lg mb-8"
                >
                  BH Labs powers recovery for high-performance athletic programs and training facilities across South Florida.
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
                    "Recovery technology is the new arms race in college athletics recruiting."
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Industry Insight</div>
                      <div className="text-primary-foreground/60 text-sm">NCAA Division I Athletic Directors Survey, 2024</div>
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
                Your Athletes Deserve Pro-Level Recovery
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-10 max-w-2xl mx-auto">
                Every day without on-site recovery is lost games, longer injury timelines, and recruits choosing other programs. Make the investment that pays for itself.
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
