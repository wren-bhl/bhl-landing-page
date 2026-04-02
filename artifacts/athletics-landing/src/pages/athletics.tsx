import { Header } from "@/components/layout/header";
import { ContactForm } from "@/components/ui/contact-form";
import { FAQSection } from "@/components/ui/faq-section";
import { ROICalculator } from "@/components/ui/roi-calculator";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  GraduationCap, ArrowRight, ChevronDown,
  TrendingUp, Users, Zap, DollarSign, Activity, Shield
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
        <section className="relative min-h-[90vh] flex items-center">
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
                <GraduationCap className="w-4 h-4" />
                <span>For University Athletics</span>
              </motion.div>

              <motion.h1 variants={FADE_UP} className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight text-foreground mb-6 leading-[1.1]">
                Give Every Athlete <span className="text-primary italic">Pro-Level Recovery</span>
              </motion.h1>

              <motion.p variants={FADE_UP} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                Install a turnkey BH Labs Recovery Pod in your athletic facility. <span className="text-primary font-bold text-2xl md:text-3xl">7 clinical-grade modalities</span> that reduce injury downtime, accelerate return-to-play, and cost less than outsourcing recovery. No additional staff required.
              </motion.p>

              <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-14 px-8 text-base" asChild>
                  <a href="#contact">
                    Request a Meeting
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base bg-background/50 backdrop-blur-sm" asChild>
                  <a href="#roi">
                    ROI Calculator
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

        <section className="py-8 bg-secondary/30 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-base md:text-lg text-foreground max-w-4xl mx-auto text-center leading-relaxed">
              <strong>BH Labs installs turnkey Recovery Pods</strong> in university athletic facilities. A complete pod costs approximately <strong>$45,000</strong> — a fraction of annual outsourced recovery costs — and serves <strong>every sport, every athlete</strong>, with 30+ science-backed protocols. No additional staff required.
            </p>
          </div>
        </section>

        <ROICalculator />

        <section className="py-24 bg-background" id="value">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={FADE_UP}
                  className="mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Why are athletic departments investing in on-site recovery?</h2>
                  <p className="text-muted-foreground text-lg">University athletics programs spend thousands annually on outsourced recovery services. A single Recovery Pod replaces fragmented solutions with one integrated system that serves every sport year-round.</p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Cost Savings",
                      value: "60-80%",
                      subtext: "Less than outsourced recovery services, cryo facilities, and off-campus treatment",
                      icon: DollarSign
                    },
                    {
                      title: "Athlete Availability",
                      value: "+25%",
                      subtext: "Faster return-to-play with consistent, on-site recovery access",
                      icon: TrendingUp
                    },
                    {
                      title: "All Sports",
                      value: "1 Pod",
                      subtext: "Serves football, basketball, soccer, track, and every other sport program",
                      icon: Users
                    },
                    {
                      title: "Additional Staff",
                      value: "Zero",
                      subtext: "We train your athletic trainers to operate the pod and run protocols",
                      icon: Zap
                    }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
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
                    <div className="text-5xl font-sans font-bold tracking-tighter text-secondary">~$45K</div>
                    <div className="text-sm mt-2 opacity-80">vs. $100K+/year in outsourced recovery</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-red-50 border-y border-red-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-6">What's the cost of <span className="text-red-600 italic">not</span> investing in recovery?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-red-200 shadow-sm">
                  <div className="text-3xl font-serif text-red-600 mb-2">$100K+</div>
                  <p className="text-sm text-muted-foreground">Annual spend on outsourced cryo, recovery centers, and off-campus treatments</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-red-200 shadow-sm">
                  <div className="text-3xl font-serif text-red-600 mb-2">Lost Games</div>
                  <p className="text-sm text-muted-foreground">Athletes sidelined longer without consistent, on-site recovery access</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-red-200 shadow-sm">
                  <div className="text-3xl font-serif text-red-600 mb-2">Recruiting</div>
                  <p className="text-sm text-muted-foreground">Top recruits compare facilities — recovery tech is now a deciding factor</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-background" id="equipment">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">What equipment is included in a Recovery Pod?</h2>
              <p className="text-lg text-muted-foreground">Seven clinical-grade modalities used by professional athletes. Now accessible for every college program.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "HBOT Chamber", desc: "Hyperbaric Oxygen Therapy — accelerated healing for sports injuries, concussion recovery, and post-surgery rehabilitation.", image: hbotImage },
                { name: "Red Light Therapy", desc: "Full-body panels for muscle recovery, reducing inflammation, and speeding tissue repair between games.", image: redLightImage },
                { name: "Infrared Sauna", desc: "Full-spectrum infrared for deep muscle recovery, joint pain relief, and cardiovascular conditioning.", image: saunaImage },
                { name: "Compression Therapy", desc: "Dynamic lymphatic drainage suits — essential for post-game recovery and reducing muscle soreness.", image: compressionImage },
                { name: "Lymphatic Drainage", desc: "Advanced compression therapy combining red light and pressotherapy for faster athlete recovery.", image: lymphaticImage },
                { name: "PEMF Device", desc: "Pulsed Electromagnetic Field therapy for bone healing, pain management, and accelerated injury recovery.", image: pemfImage },
                { name: "PEMF Treatment", desc: "Targeted PEMF application for sport-specific injuries and localized recovery therapy.", image: pemfTreatmentImage }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group rounded-2xl overflow-hidden border border-border bg-card hover:shadow-lg transition-shadow"
                >
                  <div className="overflow-hidden bg-neutral-50 flex items-center justify-center" style={{ maxHeight: '400px' }}>
                    <img src={item.image} alt={`${item.name} — BH Labs Recovery Pod for university athletics`} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" style={{ maxHeight: '400px' }} loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-medium text-foreground mb-1">{item.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">How does the turnkey installation work for athletic facilities?</h2>
              <p className="text-muted-foreground text-lg">We handle everything. Your athletic trainers stay focused on athletes.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Custom Layout", desc: "Our architect designs the pod to fit your training facility's available space.", image: turnkeyDesignImage },
                { title: "Science-Backed", desc: "30+ sport-specific recovery protocols designed from peer-reviewed research.", image: turnkeyScienceImage },
                { title: "Full Support", desc: "Comprehensive 1-year warranty, technical support, and maintenance.", image: turnkeySupportImage },
                { title: "Staff Training", desc: "We certify your athletic trainers to run every protocol confidently.", image: turnkeyTrainingImage }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.1 } } }}
                  className="bg-background rounded-2xl border border-border overflow-hidden group hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={feature.image}
                      alt={`${feature.title} — BH Labs turnkey athletics installation`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.h2
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={FADE_UP}
                  className="text-3xl md:text-5xl font-serif mb-6"
                >
                  Who trusts BH Labs with athlete recovery?
                </motion.h2>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={FADE_UP}
                  className="text-primary-foreground/80 text-lg mb-8"
                >
                  BH Labs powers recovery for elite fitness brands, medical facilities, and high-performance athletes across South Florida.
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
                <div className="bg-background/5 p-8 rounded-2xl border border-primary-foreground/20 backdrop-blur-md">
                  <div className="flex justify-center mb-6">
                    <img src={logoLight} alt="BH Labs" className="w-56 h-56" loading="lazy" width={400} height={400} />
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

        <FAQSection items={[
          { question: "How does a Recovery Pod benefit a university athletics program?", answer: "A Recovery Pod provides 7 clinical-grade modalities (HBOT, red light, infrared sauna, compression, PEMF, lymphatic drainage) that accelerate return-to-play, reduce injury downtime, and serve every sport — all in one on-site installation." },
          { question: "How does the cost compare to outsourcing recovery?", answer: "A complete Recovery Pod costs approximately $45,000 — a one-time investment that replaces $100K+/year in outsourced cryo sessions, off-campus recovery centers, and fragmented treatment services." },
          { question: "Can one pod serve all our sports programs?", answer: "Yes. The Recovery Pod is designed to serve athletes across every sport — football, basketball, soccer, track, swimming, and more. 30+ protocols cover sport-specific recovery needs." },
          { question: "Does our athletic training staff need certification?", answer: "BH Labs provides comprehensive training and certification for your athletic trainers. No additional hires required — your existing staff will be fully equipped to run every protocol." },
          { question: "How does recovery technology help with recruiting?", answer: "Top recruits compare facilities. A Recovery Pod signals that your program invests in athlete health and performance, giving you a tangible recruiting advantage over programs without dedicated recovery." },
          { question: "What's the installation timeline?", answer: "From initial consultation to a fully operational pod typically takes 4-6 weeks. Our team handles custom design, installation, and staff training — all turnkey." }
        ]} />

        <section className="py-24 bg-background relative overflow-hidden" id="contact">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/30 rounded-l-full blur-3xl -z-10 transform translate-x-1/2" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
