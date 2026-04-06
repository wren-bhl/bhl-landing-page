import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/ui/contact-form";
import { ROICalculator } from "@/components/ui/roi-calculator";
import { FAQSection } from "@/components/ui/faq-section";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Dumbbell, ArrowRight, CheckCircle2, ChevronDown,
  TrendingUp, Users, Zap, DollarSign, Activity, Star
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

export default function Fitness() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SchemaMarkup page="fitness" />
      <Navbar />

      <main className="flex-grow pt-20 lg:pt-36">
        <section className="relative min-h-[70vh] md:min-h-[90vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="BH Labs Recovery Pod installation for fitness clubs"
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
                <Dumbbell className="w-4 h-4" />
                <span>For Fitness and Sports Club</span>
              </motion.div>

              <motion.h1 variants={FADE_UP} className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-serif tracking-tight text-foreground mb-4 md:mb-6 leading-[1.1]">
                Keep Members Longer. <span className="text-primary italic">Charge More.</span>
              </motion.h1>

              <motion.p variants={FADE_UP} className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-10 max-w-2xl leading-relaxed">
                Add a turnkey BH Labs Recovery Pod to your facility. Launch a <span className="text-primary font-bold text-xl md:text-2xl lg:text-3xl">premium recovery tier</span> that drives retention, attracts new members, and generates recurring revenue. No additional staff required.
              </motion.p>

              <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-14 px-8 text-base" asChild data-testid="btn-hero-cta">
                  <a href="#contact">
                    Request a Meeting
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base bg-background/50 backdrop-blur-sm" asChild data-testid="btn-hero-secondary">
                  <a href="#equipment">
                    View Equipment
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

        {/* ROI Calculator */}
        <ROICalculator type="fitness" />

        <section className="py-8 bg-secondary/30 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-base md:text-lg text-foreground max-w-4xl mx-auto text-center leading-relaxed">
              <strong>BH Labs installs turnkey Recovery Pods</strong> in gyms, fitness studios, and padel clubs. A complete pod costs approximately <strong>$49,000</strong>, enables a <strong>premium membership tier</strong>, boosts member retention by up to <strong>30%</strong>, and pays for itself through higher-value memberships. No additional staff required.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-background" id="value">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
              <div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={FADE_UP}
                  className="mb-8 md:mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">How does a Recovery Pod drive member retention and premium pricing?</h2>
                  <p className="text-muted-foreground text-lg">Members who recover better, train harder, and stay longer. A Recovery Pod transforms your facility from a commodity gym into a premium performance destination.</p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Member Retention",
                      value: "+30%",
                      subtext: "Recovery amenities dramatically reduce churn and increase lifetime value",
                      icon: Users
                    },
                    {
                      title: "Premium Tier Revenue",
                      value: "$50-100/mo",
                      subtext: "Per member upgrade to a premium recovery membership tier",
                      icon: DollarSign
                    },
                    {
                      title: "Competitive Edge",
                      value: "Top 1%",
                      subtext: "Position your facility as the go-to destination for serious athletes and wellness seekers",
                      icon: TrendingUp
                    },
                    {
                      title: "Additional Staff",
                      value: "Zero",
                      subtext: "We train your existing staff to operate the pod seamlessly",
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
                  src={compressionImage}
                  alt="Compression therapy in fitness club recovery pod"
                  className="rounded-2xl shadow-xl w-full object-cover aspect-[3/4]"
                  loading="lazy"
                  width={600}
                  height={800}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent rounded-2xl flex items-end p-8">
                  <div className="text-primary-foreground">
                    <div className="text-sm font-medium uppercase tracking-wider mb-2 opacity-80">Member Lifetime Value Increase</div>
                    <div className="text-3xl md:text-5xl font-sans font-bold tracking-tighter text-secondary">+$1,200/yr</div>
                    <div className="text-sm mt-2 opacity-80">Per member on premium recovery tier</div>
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
              <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-6">What's the cost of <span className="text-red-600 italic">not</span> offering recovery?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-red-200 shadow-sm">
                  <div className="text-3xl font-serif text-red-600 mb-2">67%</div>
                  <p className="text-sm text-muted-foreground">Of gym members say recovery is a top reason they'd upgrade or switch facilities</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-red-200 shadow-sm">
                  <div className="text-3xl font-serif text-red-600 mb-2">$0</div>
                  <p className="text-sm text-muted-foreground">Revenue from members who churn to competitors with better amenities</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-red-200 shadow-sm">
                  <div className="text-3xl font-serif text-red-600 mb-2">Every Day</div>
                  <p className="text-sm text-muted-foreground">Boutique fitness and padel clubs are adding recovery — your members are noticing</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-background" id="equipment">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="text-center max-w-3xl mx-auto mb-8 md:mb-16"
            >
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-serif text-foreground mb-4">What equipment is included in a Recovery Pod?</h2>
              <p className="text-lg text-muted-foreground">Seven clinical-grade modalities that your members will love. Every piece is BH Labs branded and professionally installed.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "HBOT Chamber", desc: "Hyperbaric Oxygen Therapy — accelerated muscle recovery and reduced inflammation after intense training.", image: hbotImage },
                { name: "Red Light Therapy", desc: "Full-body panels for muscle repair, skin rejuvenation, and faster recovery between sessions.", image: redLightImage },
                { name: "Infrared Sauna", desc: "Full-spectrum infrared for deep tissue recovery, detoxification, and cardiovascular conditioning.", image: saunaImage },
                { name: "Compression Therapy", desc: "Dynamic lymphatic drainage suits — the perfect post-workout recovery for athletes.", image: compressionImage },
                { name: "Lymphatic Drainage", desc: "Advanced compression therapy combining red light and pressotherapy for enhanced circulation.", image: lymphaticImage },
                { name: "PEMF Device", desc: "Pulsed Electromagnetic Field therapy for cellular recovery, pain relief, and faster healing.", image: pemfImage },
                { name: "PEMF Treatment", desc: "Targeted PEMF application for localized therapy and sports injury recovery.", image: pemfTreatmentImage }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group rounded-2xl overflow-hidden border border-border bg-card hover:shadow-lg transition-shadow"
                >
                  <div className="overflow-hidden bg-neutral-50 flex items-center justify-center max-h-[250px] md:max-h-[400px]">
                    <img src={item.image} alt={`${item.name} — BH Labs Recovery Pod equipment for fitness clubs`} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 max-h-[250px] md:max-h-[400px]" loading="lazy" />
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

        <section className="py-12 md:py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="text-center max-w-3xl mx-auto mb-8 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">How does the turnkey installation work for fitness facilities?</h2>
              <p className="text-muted-foreground text-lg">We handle everything. You focus on your members.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Custom Layout", desc: "Our architect designs the pod to fit your facility's available space perfectly.", image: turnkeyDesignImage },
                { title: "Science-Backed", desc: "30+ recovery protocols designed from peer-reviewed research for real athletic results.", image: turnkeyScienceImage },
                { title: "Full Support", desc: "Comprehensive 1-year warranty, technical support, and maintenance included.", image: turnkeySupportImage },
                { title: "Staff Training", desc: "We train your team to operate the pod and guide members through protocols.", image: turnkeyTrainingImage }
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
                      alt={`${feature.title} — BH Labs turnkey fitness installation`}
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
                  Who trusts BH Labs with their recovery integration?
                </motion.h2>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={FADE_UP}
                  className="text-primary-foreground/80 text-lg mb-8"
                >
                  From elite fitness brands to boutique padel clubs, BH Labs powers recovery for top facilities across South Florida.
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
                    <img src={logoLight} alt="BH Labs" className="w-28 h-28 md:w-56 md:h-56" loading="lazy" width={400} height={400} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif mb-6 text-primary-foreground leading-snug">
                    "Recovery is the #1 amenity driving premium membership upgrades in fitness."
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Industry Insight</div>
                      <div className="text-primary-foreground/60 text-sm">IHRSA Health Club Industry Report, 2024</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <FAQSection items={[
          { question: "How does a Recovery Pod help with member retention?", answer: "Members who use recovery equipment stay 30% longer on average. A Recovery Pod gives members a reason to upgrade to a premium tier and keeps them coming back — reducing churn and increasing lifetime value." },
          { question: "What's the ROI for a fitness facility?", answer: "A BH Labs Recovery Pod costs approximately $49,000. By launching a premium recovery membership tier ($50-100/month per member), most facilities see full payback within 3-6 months while generating recurring revenue." },
          { question: "Does our staff need special training?", answer: "BH Labs provides comprehensive staff training and certification. Your existing team will be fully equipped to guide members through 30+ recovery protocols." },
          { question: "How much space does a Recovery Pod require?", answer: "Our in-house architect designs the pod layout to fit your available space. Whether you have a spare room or an open area, we'll configure equipment to maximize efficiency." },
          { question: "What types of fitness facilities use Recovery Pods?", answer: "Gyms, CrossFit boxes, padel clubs, boutique fitness studios, martial arts academies, and multi-sport facilities. Any facility looking to differentiate with premium recovery." },
          { question: "What equipment is included?", answer: "Each Recovery Pod includes an HBOT chamber, red light therapy panels, infrared sauna, compression therapy suits, lymphatic drainage, and PEMF devices — seven clinical-grade modalities total." }
        ]} />

        <section className="py-12 md:py-24 bg-background relative overflow-hidden" id="contact">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/30 rounded-l-full blur-3xl -z-10 transform translate-x-1/2" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <ContactForm
                type="fitness"
                title="Get Your Custom Recovery Pod"
                subtitle="Tell us about your facility and we'll design a recovery solution that drives retention and revenue."
              />
            </div>
          </div>
        </section>
      </main>

      <Footer page="fitness" />
    </div>
  );
}
