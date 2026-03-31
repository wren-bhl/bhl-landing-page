import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/ui/contact-form";
import { ROICalculator } from "@/components/ui/roi-calculator";
import { FAQSection } from "@/components/ui/faq-section";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Building, CheckCircle2, TrendingUp, ShieldCheck, ChevronDown,
  Leaf, Zap, Clock, ArrowRight
} from "lucide-react";
import heroImage from "@/assets/images/hero-residential.png";
import hbotImage from "@/assets/images/hbot-chamber.jpg";
import redLightImage from "@/assets/images/redlight-therapy.jpg";
import saunaImage from "@/assets/images/infrared-sauna.jpg";
import compressionImage from "@/assets/images/compression-boots.jpg";
import pemfImage from "@/assets/images/pemf-device.jpg";
import pemfTreatmentImage from "@/assets/images/pemf-treatment.jpg";
import lymphaticImage from "@/assets/images/lymphatic-drainage.jpg";
import logoDark from "@/assets/images/logo-dark.png";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const STAGGER = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Residential() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SchemaMarkup page="residential" />
      <Navbar />

      <main className="flex-grow pt-36">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImage} 
              alt="Luxury residential wellness amenity" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-background/95 via-background/80 to-background/40" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 flex justify-end">
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
                <Building className="w-4 h-4" />
                <span>For Luxury Residential & HOAs</span>
              </motion.div>
              
              <motion.h1 variants={FADE_UP} className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight text-foreground mb-6 leading-[1.1]">
                The Amenity That <span className="text-primary italic">Pays for Itself</span>
              </motion.h1>
              
              <motion.p variants={FADE_UP} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                Elevate your property value with a turnkey BH Labs Recovery Pod. World-class biohacking equipment that drives resident satisfaction and net-positive HOA revenue.
              </motion.p>
              
              <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-14 px-8 text-base" asChild data-testid="btn-hero-cta">
                  <a href="#contact">
                    Request a Property Assessment
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
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-muted-foreground/60 hover:text-foreground transition-colors cursor-pointer"
          >
            <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.a>
        </section>

        {/* Value Proposition */}
        <section className="py-24 bg-card" id="value">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={STAGGER}
              >
                <motion.h2 variants={FADE_UP} className="text-3xl md:text-5xl font-serif text-foreground mb-6">
                  Differentiate Your Real Estate
                </motion.h2>
                <motion.p variants={FADE_UP} className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Pools and standard gyms are expected. High-end recovery tech is the new differentiator. 
                  According to the Global Wellness Institute's 2025 report, wellness-integrated properties see a 
                  <strong className="text-foreground font-semibold"> 10-25% increase in property value</strong>.
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div variants={FADE_UP} className="bg-background p-6 rounded-2xl border border-border">
                    <TrendingUp className="w-8 h-8 text-primary mb-4" />
                    <div className="text-2xl font-serif text-foreground mb-1">$4,500/mo</div>
                    <div className="text-sm text-muted-foreground">New Revenue based on 150 units at $30/mo wellness fee</div>
                  </motion.div>
                  <motion.div variants={FADE_UP} className="bg-background p-6 rounded-2xl border border-border">
                    <Clock className="w-8 h-8 text-primary mb-4" />
                    <div className="text-2xl font-serif text-foreground mb-1">10 Months</div>
                    <div className="text-sm text-muted-foreground">Average payback period on ~$45K complete pod investment</div>
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
                <img src={saunaImage} alt="Premium Residential Sauna" className="rounded-2xl shadow-xl border border-border/50" />
                
                <div className="absolute -bottom-8 -left-8 bg-card p-6 rounded-2xl shadow-xl border border-border max-w-xs">
                  <div className="text-sm font-medium uppercase text-muted-foreground mb-2">Net Annual Revenue</div>
                  <div className="text-3xl font-serif text-foreground">+$45,000</div>
                  <div className="text-xs text-muted-foreground mt-2">Pure profit for the HOA post-payback.</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Pod Ecosystem */}
        <section className="py-24 bg-background" id="equipment">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">The Recovery Pod Ecosystem</h2>
              <p className="text-lg text-muted-foreground">A complete, clinical-grade wellness center packaged perfectly for residential amenities. Installed and supported by experts.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "HBOT Chamber", desc: "Hyperbaric Oxygen Therapy — pressurized soft chamber for accelerated recovery.", image: hbotImage },
                { name: "Red Light Therapy", desc: "Full-body red and near-infrared panels for skin rejuvenation and recovery.", image: redLightImage },
                { name: "Infrared Sauna", desc: "Full-spectrum infrared sauna for deep tissue detox and cardiovascular health.", image: saunaImage },
                { name: "Compression Therapy", desc: "Dynamic lymphatic drainage suits for enhanced circulation and recovery.", image: compressionImage },
                { name: "Lymphatic Drainage", desc: "Advanced lymphatic compression therapy combining red light and pressotherapy for enhanced circulation and detoxification.", image: lymphaticImage },
                { name: "PEMF Device", desc: "Pulsed Electromagnetic Field therapy for cellular recovery and pain relief.", image: pemfImage },
                { name: "PEMF Treatment", desc: "Targeted PEMF application with BH Labs branded equipment.", image: pemfTreatmentImage }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group rounded-2xl overflow-hidden border border-border bg-card hover:shadow-lg transition-shadow"
                >
                  <div className="overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500" />
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

        {/* Service & Support */}
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
                <motion.h2 variants={FADE_UP} className="text-3xl md:text-4xl font-serif">Hands-Off Operation</motion.h2>
                <motion.p variants={FADE_UP} className="text-primary-foreground/80 text-lg">
                  We know property managers are busy. The Recovery Pod is designed to be a completely turnkey, low-maintenance amenity.
                </motion.p>

                <div className="space-y-6 mt-8">
                  {[
                    { icon: ShieldCheck, title: "1-Year Comprehensive Warranty", desc: "Full coverage on all clinical equipment." },
                    { icon: Zap, title: "Technical Support & Maintenance", desc: "Rapid response times from our Miami-based team." },
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
                <img src={hbotImage} alt="Resident using HBOT" className="absolute inset-0 w-full h-full object-cover" />
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

        <ROICalculator type="residential" />

        <FAQSection items={[
          { question: "How much revenue can a residential Recovery Pod generate?", answer: "A BH Labs Recovery Pod generates approximately $4,500 per month for an HOA with 150 units at a $30/month wellness fee. That's $45,000+ in net annual revenue after payback." },
          { question: "What is the payback period for a residential Recovery Pod?", answer: "Approximately 10 months. The complete pod investment is about $45,000, paid back through monthly wellness fees." },
          { question: "Does a Recovery Pod increase property value?", answer: "Yes. According to the Global Wellness Institute's 2025 report, wellness-integrated properties see a 10-25% increase in property value." },
          { question: "What equipment is included?", answer: "Each Recovery Pod includes an HBOT chamber, red light therapy panels, infrared sauna, lymphatic drainage suits, PEMF devices, and custom architectural design." },
          { question: "Does the property need dedicated staff?", answer: "No. The Recovery Pod includes 30+ self-guided, research-backed protocols that residents can use safely without supervision. BH Labs also provides a 1-year comprehensive warranty and technical support." },
          { question: "How is the Recovery Pod maintained?", answer: "BH Labs provides a comprehensive 1-year warranty and ongoing technical support from our Miami-based team. The pod is designed for minimal maintenance with rapid response service." }
        ]} />

        {/* Contact Section */}
        <section className="py-24 bg-card relative overflow-hidden" id="contact">
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-secondary/20 rounded-tr-full blur-3xl -z-10" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <ContactForm 
                type="residential" 
                title="Increase Your Property Value NOW" 
                subtitle="Request a comprehensive property assessment and ROI analysis from BH Labs."
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
