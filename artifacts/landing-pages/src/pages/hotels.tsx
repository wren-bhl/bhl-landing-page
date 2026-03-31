import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/ui/contact-form";
import { ROICalculator } from "@/components/ui/roi-calculator";
import { FAQSection } from "@/components/ui/faq-section";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Activity, ArrowRight, CheckCircle2, ChevronDown,
  Hotel, Plus, TrendingUp, Users, Zap, DollarSign
} from "lucide-react";
import heroImage from "@/assets/images/biohack-lab-front.jpg";
import hbotImage from "@/assets/images/hbot-chamber.jpg";
import redLightImage from "@/assets/images/redlight-therapy.jpg";
import saunaImage from "@/assets/images/infrared-sauna.jpg";
import compressionImage from "@/assets/images/compression-boots.jpg";
import pemfImage from "@/assets/images/pemf-device.jpg";
import pemfTreatmentImage from "@/assets/images/pemf-treatment.jpg";
import lymphaticImage from "@/assets/images/lymphatic-drainage.jpg";
import roiWellnessImage from "@/assets/images/roi-wellness.png";
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

export default function Hotels() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SchemaMarkup page="hotels" />
      <Navbar />

      <main className="flex-grow pt-36">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImage} 
              alt="Luxury hotel wellness spa" 
              className="w-full h-full object-cover"
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
                <img src={logoDark} alt="BH Labs Logo" className="w-48 h-48 mb-4" />
              </motion.div>
              <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 text-secondary-foreground text-sm font-medium mb-6">
                <Hotel className="w-4 h-4" />
                <span>For Hospitality & Resorts</span>
              </motion.div>
              
              <motion.h1 variants={FADE_UP} className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight text-foreground mb-6 leading-[1.1]">
                Turn Idle Space Into <span className="text-primary italic">Wellness Revenue</span>
              </motion.h1>
              
              <motion.p variants={FADE_UP} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                Install a turnkey BH Labs Recovery Pod in your hotel. Generate <span className="text-primary font-bold text-2xl md:text-3xl">$25K+ monthly revenue</span> with zero additional staff. Clinical biohacking meets luxury hospitality.
              </motion.p>
              
              <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-14 px-8 text-base" asChild data-testid="btn-hero-cta">
                  <a href="#contact">
                    Request a Revenue Projection
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base bg-background/50 backdrop-blur-sm" asChild data-testid="btn-hero-secondary">
                  <a href="#equipment">
                    View Equipment
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base bg-background/50 backdrop-blur-sm" asChild>
                  <a href="#calculator">
                    <TrendingUp className="mr-2 w-5 h-5" />
                    ROI Calculator
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          <motion.a
            href="#roi"
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

        {/* The Math Section */}
        <section className="py-24 bg-card" id="roi">
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
                  <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">The New Standard of Amenity ROI</h2>
                  <p className="text-muted-foreground text-lg">Wellness is no longer a cost center. It's your most profitable square footage.</p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      title: "ADR Revenue",
                      value: "$21,000/mo",
                      subtext: "200 rooms x 70% occupancy x $5/night wellness surcharge",
                      icon: TrendingUp
                    },
                    {
                      title: "A-La-Carte Sessions",
                      value: "$6,000/mo",
                      subtext: "~10 walk-in sessions/day at $20/session average",
                      icon: DollarSign
                    },
                    {
                      title: "Payback Period",
                      value: "< 2 Months",
                      subtext: "On a ~$45K pod investment with combined revenue streams",
                      icon: Zap
                    },
                    {
                      title: "Additional Staff",
                      value: "Zero",
                      subtext: "We train and certify your existing spa staff to run the pod",
                      icon: Users
                    }
                  ].map((stat, i) => (
                    <motion.div 
                      key={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
                      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } } }}
                      className="bg-background rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
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
                  src={roiWellnessImage} 
                  alt="Premium hotel wellness center" 
                  className="rounded-2xl shadow-xl w-full object-cover aspect-[3/4]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent rounded-2xl flex items-end p-8">
                  <div className="text-primary-foreground">
                    <div className="text-sm font-medium uppercase tracking-wider mb-2 opacity-80">Combined Annual Revenue</div>
                    <div className="text-5xl font-sans font-bold tracking-tighter text-secondary">+$324,000</div>
                    <div className="text-sm mt-2 opacity-80">ADR surcharge + a-la-carte sessions</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Equipment Section */}
        <section className="py-24 bg-background" id="equipment">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">The Recovery Pod Ecosystem</h2>
              <p className="text-lg text-muted-foreground">Clinical-grade modalities curated for high-end environments. Every piece of equipment is BH Labs branded and professionally installed.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "HBOT Chamber", desc: "Hyperbaric Oxygen Therapy — pressurized soft chamber for accelerated recovery and cellular regeneration.", image: hbotImage },
                { name: "Red Light Therapy", desc: "Full-body red and near-infrared panels for skin rejuvenation, inflammation reduction, and muscle recovery.", image: redLightImage },
                { name: "Infrared Sauna", desc: "Full-spectrum infrared sauna for deep tissue detoxification and cardiovascular conditioning.", image: saunaImage },
                { name: "Compression Therapy", desc: "Dynamic lymphatic drainage suits for enhanced circulation and faster post-workout recovery.", image: compressionImage },
                { name: "Lymphatic Drainage", desc: "Advanced lymphatic compression therapy combining red light and pressotherapy for enhanced circulation and detoxification.", image: lymphaticImage },
                { name: "PEMF Device", desc: "Pulsed Electromagnetic Field therapy for cellular recovery, pain relief, and bone healing.", image: pemfImage },
                { name: "PEMF Treatment", desc: "Targeted PEMF application with BH Labs branded equipment for localized therapy sessions.", image: pemfTreatmentImage }
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
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" style={{ maxHeight: '400px' }} />
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

        {/* Turnkey Solution */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">A True Turnkey Partnership</h2>
              <p className="text-muted-foreground text-lg">We handle the complexity. You collect the revenue.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Custom Design", desc: "Our in-house architect configures the layout perfectly for your available space.", image: turnkeyDesignImage },
                { title: "Science-Backed", desc: "30+ protocols designed from peer-reviewed research for real results.", image: turnkeyScienceImage },
                { title: "Full Support", desc: "Comprehensive 1-year warranty, technical support, and maintenance.", image: turnkeySupportImage },
                { title: "Staff Training", desc: "We train and certify your existing spa staff to run the pod seamlessly.", image: turnkeyTrainingImage }
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
                      alt={feature.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
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

        {/* Social Proof */}
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
                  Trusted by Miami's Wellness Elite
                </motion.h2>
                <motion.p 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={FADE_UP}
                  className="text-primary-foreground/80 text-lg mb-8"
                >
                  With 5 successful wellness locations across Miami, we are the standard for premium recovery integration.
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
                    <img src={logoLight} alt="BH Labs" className="w-56 h-56" />
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
                      <div className="text-primary-foreground/60 text-sm">Global Wellness Economy Report</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <ROICalculator type="hotel" />

        <FAQSection items={[
          { question: "How much revenue can a hotel wellness pod generate?", answer: "A BH Labs Recovery Pod generates approximately $27,000 per month — $21,000 from ADR wellness surcharges ($5/night across 200 rooms at 70% occupancy) plus $6,000 from a-la-carte walk-in sessions. That's $324,000 in annual revenue." },
          { question: "What is the payback period for a hotel Recovery Pod?", answer: "Less than 2 months. The complete pod investment is approximately $45,000, and at $27,000/month in combined revenue, the investment pays for itself in under 60 days." },
          { question: "Does the hotel need to hire additional staff?", answer: "No. BH Labs trains and certifies your existing spa staff to operate the Recovery Pod. Zero additional hires required." },
          { question: "What equipment is included in a Recovery Pod?", answer: "Each Recovery Pod includes an HBOT (Hyperbaric Oxygen Therapy) chamber, red light therapy panels, an infrared sauna, lymphatic drainage suits, and PEMF (Pulsed Electromagnetic Field) devices." },
          { question: "How much space does a Recovery Pod require?", answer: "BH Labs provides custom architectural design to fit your available space. Our in-house architect configures the layout to maximize efficiency within your property." },
          { question: "How do wellness tourists spend compared to average travelers?", answer: "According to the Global Wellness Institute, wellness tourists spend 41-175% more than average travelers, making a Recovery Pod a powerful driver of higher-value bookings." }
        ]} />

        {/* Contact Section */}
        <section className="py-24 bg-background relative overflow-hidden" id="contact">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/30 rounded-l-full blur-3xl -z-10 transform translate-x-1/2" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <ContactForm 
                type="hotel" 
                title="Get Your Revenue Projection" 
                subtitle="Request a custom proposal and financial model for your property."
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
