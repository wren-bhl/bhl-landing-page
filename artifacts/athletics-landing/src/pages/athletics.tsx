import { Header } from "@/components/layout/header";
import { ContactForm } from "@/components/ui/contact-form";
import { FAQSection } from "@/components/ui/faq-section";
import { ROICalculator } from "@/components/ui/roi-calculator";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  GraduationCap, ArrowRight, ChevronDown, CheckCircle2,
  TrendingUp, Users, Zap, DollarSign, Activity, Shield,
  Camera, Star, Heart, Sparkles, Droplets
} from "lucide-react";
import heroImage from "@/assets/images/biohack-lab-front.jpg";
import hbotImage from "@/assets/images/hbot-chamber.jpg";
import redLightImage from "@/assets/images/redlight-therapy.jpg";
import saunaImage from "@/assets/images/infrared-sauna.jpg";
import compressionImage from "@/assets/images/compression-boots.jpg";
import pemfImage from "@/assets/images/pemf-device.jpg";
import pemfTreatmentImage from "@/assets/images/pemf-treatment.jpg";
import lymphaticImage from "@/assets/images/lymphatic-drainage.jpg";
import logoDark from "@/assets/images/logo-dark.png";
import logoLight from "@/assets/images/logo-light.png";
import turnkeyDesignImage from "@/assets/images/turnkey-design.png";
import turnkeyTrainingImage from "@/assets/images/turnkey-training.png";
import turnkeyScienceImage from "@/assets/images/turnkey-science.png";
import turnkeySupportImage from "@/assets/images/turnkey-support.png";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const STAGGER = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Athletics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SchemaMarkup />
      <Header />

      <main className="flex-grow pt-20">
        {/* HERO */}
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
                Cut Recovery Costs. <span className="text-primary italic">Improve Athlete Availability.</span>
              </motion.h1>

              <motion.p variants={FADE_UP} className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl leading-relaxed">
                Install a turnkey BH Labs Recovery Pod in your athletic facility. Replace fragmented outsourced recovery with one centralized system that serves every sport, supports return-to-play workflows, and requires no additional staff.
              </motion.p>

              <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button size="lg" className="h-14 px-8 text-base" asChild>
                  <a href="#roi">
                    Calculate Recovery Savings
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base bg-background/50 backdrop-blur-sm" asChild>
                  <a href="#contact">
                    Request a Custom Proposal
                  </a>
                </Button>
              </motion.div>

              <motion.div variants={FADE_UP} className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl">
                {[
                  { value: "~$45K", label: "One-time pod investment" },
                  { value: "All Sports", label: "Replaces fragmented outsourced spend" },
                  { value: "30+", label: "Recovery protocols included" }
                ].map((stat, i) => (
                  <div key={i} className="text-center sm:text-left">
                    <div className="text-lg font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              <motion.p variants={FADE_UP} className="text-xs text-muted-foreground/60 mt-4 italic">
                Illustrative figures based on program size, current outsourced spend, and operating assumptions.
              </motion.p>
            </motion.div>
          </div>

          <motion.a
            href="#why-now"
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

        {/* WHY ATHLETIC DEPARTMENTS ARE INVESTING */}
        <section className="py-12 md:py-24 bg-background" id="why-now">
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
                  <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Why athletic departments are investing in on-site recovery</h2>
                  <p className="text-muted-foreground text-lg">University programs spend thousands annually on outsourced recovery services. A single Recovery Pod replaces fragmented solutions with one integrated system that serves every sport year-round.</p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: "Outsourced Spend Reduction", value: "Significant", subtext: "Replace fragmented cryo, off-campus recovery, and vendor contracts with one centralized in-house system", icon: DollarSign },
                    { title: "Recovery Access", value: "Consistent", subtext: "On-site recovery means faster return-to-play support and more consistent access for all athletes", icon: TrendingUp },
                    { title: "Multi-Sport Utility", value: "1 Pod", subtext: "Serves football, basketball, soccer, track, and every other sport program — 30+ protocols", icon: Users },
                    { title: "Additional Staff", value: "Zero", subtext: "We train your existing athletic trainers to operate the pod and run all recovery protocols", icon: Zap }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } } }}
                      className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
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
                    <div className="text-sm mt-2 opacity-80">vs. ongoing outsourced recovery contracts</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ROI CALCULATOR */}
        <ROICalculator />

        {/* PROOF / CREDIBILITY */}
        <section className="py-12 md:py-24 bg-primary text-primary-foreground" id="proof">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
              <div>
                <motion.h2
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={FADE_UP}
                  className="text-2xl md:text-3xl lg:text-5xl font-serif mb-4"
                >
                  Why athletics departments take BH Labs seriously
                </motion.h2>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={FADE_UP}
                  className="text-primary-foreground/80 text-lg mb-8"
                >
                  BH Labs has 5 successful wellness installations across Miami — from premium fitness brands to medical facilities. Every installation is designed, equipped, and supported end-to-end.
                </motion.p>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={STAGGER}
                  className="space-y-4 mb-8"
                >
                  {[
                    { name: "Equinox at Merrick Park", detail: "Premium fitness", sub: "Recovery Pod operational inside Equinox Merrick Park. Runs on existing Equinox staff." },
                    { name: "Reserve Padel Sole Mia", detail: "Sports & recreation", sub: "Installed at South Florida's #1 padel facility. Post-match recovery drives repeat visits." },
                    { name: "Dr. Johnny Salomon's Medical Facility", detail: "Medical wellness", sub: "Integrated into Dr. Salomon's plastic surgery practice for post-procedure recovery protocols." }
                  ].map((partner, i) => (
                    <motion.div key={i} variants={FADE_UP} className="bg-primary-foreground/10 px-4 py-3 rounded-lg backdrop-blur-sm">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                        <div>
                          <span className="font-medium text-primary-foreground">{partner.name}</span>
                          <span className="text-primary-foreground/60 text-sm ml-2">— {partner.detail}</span>
                        </div>
                      </div>
                      <p className="text-xs text-primary-foreground/50 mt-1 ml-8">{partner.sub}</p>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={FADE_UP}
                  className="bg-primary-foreground/5 border border-primary-foreground/15 rounded-xl p-5"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Camera className="w-4 h-4 text-secondary" />
                    <span className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider">Partnership Spotlight</span>
                  </div>
                  <h4 className="text-base font-medium text-primary-foreground mb-2">Reserve Padel at Sole Mia + Equinox Coral Gables</h4>
                  <p className="text-sm text-primary-foreground/60 leading-relaxed">
                    BH Labs operates recovery installations inside two elite sports and fitness environments in South Florida. Athletes and members use HBOT, compression, red light, and PEMF for post-training recovery — all managed by existing facility staff with BH Labs' protocols and ongoing support.
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={FADE_UP}
              >
                <div className="bg-background/5 p-8 rounded-2xl border border-primary-foreground/20 backdrop-blur-md">
                  <div className="flex justify-center mb-6">
                    <img src={logoLight} alt="BH Labs" className="w-28 h-28 md:w-56 md:h-56" loading="lazy" width={400} height={400} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif mb-6 text-primary-foreground leading-snug">
                    "Properties with dedicated wellness offerings report higher satisfaction scores and competitive positioning."
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Industry Insight</div>
                      <div className="text-primary-foreground/60 text-sm">Global Wellness Institute</div>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-primary-foreground/50 mt-4 italic text-center">
                  All projections are based on modeled assumptions. Actual results vary by program.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* RECOVERY SYSTEM — WHAT ATHLETES GET */}
        <section className="py-12 md:py-24 bg-background" id="system">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="max-w-3xl mx-auto text-center mb-8 md:mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">One centralized recovery system for your entire program</h2>
              <p className="text-muted-foreground text-lg">A single Recovery Pod supports multiple sports across training, rehab, soreness management, and return-to-play workflows — without requiring fragmented off-site appointments.</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Users, title: "Multi-Sport Coverage", desc: "Football, basketball, soccer, track, swimming — one pod covers every sport in your program with 30+ sport-specific protocols." },
                { icon: Heart, title: "Training & Rehab Support", desc: "Useful across daily training recovery, injury rehabilitation, soreness management, and structured return-to-play workflows." },
                { icon: Sparkles, title: "Training Room Integration", desc: "Designed to fit within existing performance and training room space — not a separate facility your athletes have to travel to." },
                { icon: Zap, title: "Reduced Vendor Fragmentation", desc: "Replace outsourced cryo sessions, off-campus recovery centers, and fragmented vendor contracts with one in-house system." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } } }}
                  className="bg-card rounded-2xl p-6 border border-border"
                >
                  <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-medium text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* EQUIPMENT — UNIFIED ATHLETICS RECOVERY SYSTEM */}
        <section className="py-12 md:py-24 bg-card" id="equipment">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="text-center max-w-3xl mx-auto mb-8 md:mb-16"
            >
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-serif text-foreground mb-4">What's included in a Recovery Pod?</h2>
              <p className="text-lg text-muted-foreground">Seven clinical-grade modalities covering recovery, circulation, rehab support, and return-to-play readiness.</p>
            </motion.div>

            {[
              {
                category: "Injury Recovery & Return-to-Play",
                categoryIcon: Heart,
                description: "Core modalities for accelerated injury recovery, post-surgery rehabilitation, and structured return-to-play protocols.",
                items: [
                  { name: "HBOT Chamber", desc: "Hyperbaric Oxygen Therapy — accelerated healing for sports injuries, concussion recovery support, and post-surgery rehabilitation.", image: hbotImage },
                  { name: "PEMF Therapy", desc: "Pulsed Electromagnetic Field therapy for bone healing, pain management, and accelerated tissue recovery.", image: pemfImage },
                  { name: "Compression Therapy", desc: "Dynamic compression suits for post-game recovery, reducing muscle soreness, and supporting lymphatic function.", image: compressionImage }
                ]
              },
              {
                category: "Daily Training Recovery",
                categoryIcon: Sparkles,
                description: "Modalities for daily use across all sports — managing soreness, reducing inflammation, and supporting consistent training volume.",
                items: [
                  { name: "Infrared Sauna", desc: "Full-spectrum infrared for deep muscle recovery, joint pain relief, and cardiovascular conditioning — a high-use daily recovery tool.", image: saunaImage },
                  { name: "Red Light Therapy", desc: "Full-body panels for muscle recovery, reducing inflammation, and speeding tissue repair between games and training sessions.", image: redLightImage }
                ]
              },
              {
                category: "Circulation & Regeneration",
                categoryIcon: Droplets,
                description: "Advanced circulation and detoxification support for athlete wellness — complements training and rehab protocols.",
                items: [
                  { name: "Lymphatic Drainage", desc: "Advanced pressotherapy combining compression and red light for enhanced circulation and full-body recovery.", image: lymphaticImage },
                  { name: "Targeted PEMF", desc: "Localized electromagnetic therapy for sport-specific injuries and targeted recovery areas.", image: pemfTreatmentImage }
                ]
              }
            ].map((group, gi) => (
              <div key={gi} className="mb-12 last:mb-0">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={FADE_UP}
                  className="flex items-center gap-3 mb-2"
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <group.categoryIcon className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif text-foreground">{group.category}</h3>
                </motion.div>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={FADE_UP}
                  className="text-sm text-muted-foreground mb-6 max-w-2xl"
                >{group.description}</motion.p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.items.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="group rounded-2xl overflow-hidden border border-border bg-background hover:shadow-lg transition-shadow"
                    >
                      <div className="overflow-hidden bg-neutral-50 flex items-center justify-center max-h-[250px] md:max-h-[400px]">
                        <img src={item.image} alt={`${item.name} — BH Labs Recovery Pod`} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 max-h-[250px] md:max-h-[400px]" loading="lazy" />
                      </div>
                      <div className="p-5">
                        <h4 className="text-lg font-medium text-foreground mb-1">{item.name}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* INSTALLATION / TRAINING ROOM INTEGRATION */}
        <section className="py-12 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="text-center max-w-3xl mx-auto mb-8 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Designed for training room integration. We handle everything.</h2>
              <p className="text-muted-foreground text-lg">BH Labs manages design, equipment, installation, and staff training. Your athletic trainers stay focused on athletes — with minimal disruption during setup.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Custom Layout Design", desc: "Our architect designs the pod to fit within your existing training room, performance facility, or available amenity space.", image: turnkeyDesignImage, reassurance: "Fits your existing space" },
                { title: "Equipment & Installation", desc: "All seven modalities delivered, installed, and calibrated on-site with minimal disruption to athlete operations.", image: turnkeyScienceImage, reassurance: "Minimal athlete disruption" },
                { title: "Staff Onboarding", desc: "We train your athletic trainers to run every protocol confidently — covering all 30+ recovery protocols and equipment operation.", image: turnkeyTrainingImage, reassurance: "Your ATCs, fully trained" },
                { title: "Ongoing Support", desc: "Comprehensive 1-year warranty, technical support, and same-day service availability from our Miami-based team.", image: turnkeySupportImage, reassurance: "We stay with you post-install" }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.1 } } }}
                  className="bg-card rounded-2xl border border-border overflow-hidden group hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={step.image}
                      alt={`${step.title} — BH Labs turnkey athletics installation`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">Step {i + 1}</div>
                    <h3 className="text-xl font-medium text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">{step.desc}</p>
                    <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full">{step.reassurance}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* OPPORTUNITY COST */}
        <section className="py-16 bg-stone-50 border-y border-stone-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-3">What is the operational cost of not investing in on-site recovery?</h2>
              <p className="text-muted-foreground text-base mb-8 max-w-2xl mx-auto">Every season without centralized recovery means more fragmentation, more outsourced spend, and less consistent athlete access.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm">
                  <div className="text-3xl font-serif text-foreground mb-2">Athlete Downtime</div>
                  <p className="text-sm text-muted-foreground">Without consistent on-site recovery, athletes face longer return-to-play timelines and less predictable availability.</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm">
                  <div className="text-3xl font-serif text-foreground mb-2">Vendor Fragmentation</div>
                  <p className="text-sm text-muted-foreground">Off-campus appointments, outsourced cryo contracts, and fragmented vendors mean more coordination, less control, and higher costs.</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm">
                  <div className="text-3xl font-serif text-foreground mb-2">Facility Competition</div>
                  <p className="text-sm text-muted-foreground">Recruits compare facilities. Recovery infrastructure is increasingly part of how top programs differentiate and attract talent.</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground/60 mt-6 italic">Figures are illustrative and based on modeled assumptions. Actual impact varies by program.</p>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection items={[
          { question: "How does the cost compare to outsourcing recovery?", answer: "A complete Recovery Pod costs approximately $45,000 — a one-time investment that replaces ongoing outsourced cryo sessions, off-campus recovery centers, and fragmented vendor contracts. Illustrative savings depend on your current spend and usage patterns." },
          { question: "Can one pod serve all our sports programs?", answer: "Yes. The Recovery Pod is designed to serve athletes across every sport — football, basketball, soccer, track, swimming, and more. 30+ protocols cover sport-specific recovery needs." },
          { question: "How many athletes can use the pod per day?", answer: "Usage capacity depends on your scheduling and protocol selection. Most modalities support multiple athletes per day through structured session scheduling managed by your athletic training staff." },
          { question: "Which sports benefit most?", answer: "All sports benefit from recovery infrastructure. High-contact and high-volume training sports (football, basketball, soccer, track) tend to see the most frequent usage, but the pod serves every athlete in your program." },
          { question: "Can this fit in an existing training room?", answer: "Most installations require 400-800 square feet. Our in-house architect designs a custom layout optimized for your existing training room, performance facility, or available amenity space." },
          { question: "What utilities or space requirements are needed?", answer: "The Recovery Pod requires standard electrical outlets (no special power), adequate ventilation, and 400-800 square feet of floor space. Our team provides a detailed assessment during the planning process." },
          { question: "How much oversight does the athletic training staff need to provide?", answer: "Minimal. BH Labs trains your ATCs on all equipment operation and 30+ recovery protocols. Most protocols are designed for guided athlete use without constant supervision." },
          { question: "Does our athletic training staff need special certification?", answer: "BH Labs provides comprehensive training for your athletic trainers. No additional hires or external certifications required — your existing staff will be fully equipped to run every protocol." },
          { question: "Does recovery infrastructure support recruiting?", answer: "Recovery facilities are increasingly part of how top programs differentiate. A Recovery Pod signals investment in athlete health and performance — a tangible facility advantage for recruits comparing programs." },
          { question: "What's the installation timeline?", answer: "From initial consultation to a fully operational pod typically takes 4-6 weeks. Our team handles custom design, installation, and staff training — all turnkey with minimal disruption to athlete operations." },
          { question: "What happens after installation?", answer: "BH Labs provides a comprehensive 1-year warranty, ongoing technical support, and same-day service availability from our Miami-based team. We stay involved to ensure the system operates smoothly." }
        ]} />

        {/* LEAD FORM */}
        <section className="py-12 md:py-24 bg-background relative overflow-hidden" id="contact">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/30 rounded-l-full blur-3xl -z-10 transform translate-x-1/2" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <ContactForm
                title="Request a Custom Proposal"
                subtitle="Tell us about your athletics program and we'll prepare a tailored recovery solution and savings analysis."
              />
              <p className="text-sm text-muted-foreground text-center mt-6">
                Prefer to call? Reach us directly at{" "}
                <a href="tel:+19548705814" className="text-primary font-medium hover:underline">(954) 870-5814</a>
                {" "}or email{" "}
                <a href="mailto:info@thebiohacklab.com" className="text-primary font-medium hover:underline">info@thebiohacklab.com</a>
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-10 bg-primary text-primary-foreground border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <img src={logoLight} alt="BH Labs" className="w-10 h-10" />
                <span className="font-sans font-semibold text-lg tracking-tight uppercase">BH Labs</span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-primary-foreground/70">
                <a href="https://thebiohacklab.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">thebiohacklab.com</a>
                <span className="hidden md:inline">|</span>
                <a href="https://www.bh-labs.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">bh-labs.com</a>
                <span className="hidden md:inline">|</span>
                <a href="mailto:info@thebiohacklab.com" className="hover:text-primary-foreground transition-colors">info@thebiohacklab.com</a>
                <span className="hidden md:inline">|</span>
                <a href="tel:+19548705814" className="hover:text-primary-foreground transition-colors">(954) 870-5814</a>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/50">
              <p>&copy; {new Date().getFullYear()} BH Labs. All rights reserved. <a href="#" className="underline underline-offset-2 hover:text-primary-foreground/70">Privacy Policy</a></p>
              <p className="max-w-xl text-center md:text-right leading-relaxed">All projections are illustrative and based on modeled assumptions. Actual results vary by property, utilization, pricing strategy, and market conditions.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
