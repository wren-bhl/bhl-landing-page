import { Link } from "wouter";
import logoDark from "@/assets/images/logo-dark.png";
import heroImage from "@/assets/images/biohack-lab-front.jpg";
import hbotImage from "@/assets/images/hbot-chamber.jpg";
import redlightImage from "@/assets/images/redlight-therapy.jpg";
import saunaImage from "@/assets/images/infrared-sauna.jpg";
import compressionImage from "@/assets/images/compression-boots.jpg";

const sectors = [
  {
    title: "Hotels & Resorts",
    description: "Turn idle space into wellness revenue. $60K+ monthly with zero additional staff.",
    path: "/hotels",
    image: heroImage,
    stats: ["108% higher RevPAR", "Under 90 days to launch", "$400+/sqft/yr"],
    cta: "Explore Hotels",
  },
  {
    title: "Fitness & Sports Clubs",
    description: "Add premium recovery to your membership offering. Increase retention and revenue per member.",
    path: "/fitness",
    image: compressionImage,
    stats: ["12% premium uptake", "New revenue stream", "Member retention"],
    cta: "Explore Fitness",
  },
  {
    title: "Residential & HOA",
    description: "Differentiate your property with world-class wellness amenities. Increase unit value and fees.",
    path: "/residential",
    image: saunaImage,
    stats: ["Property value uplift", "Amenity fee revenue", "Resident wellness"],
    cta: "Explore Residential",
  },
  {
    title: "University Athletics",
    description: "Give your athletes a competitive edge with clinical-grade recovery infrastructure.",
    path: "/athletics",
    image: hbotImage,
    stats: ["Faster recovery", "Injury prevention", "Recruiting advantage"],
    cta: "Explore Athletics",
  },
];

const modalities = [
  { name: "HBOT", desc: "Hyperbaric Oxygen" },
  { name: "Red Light", desc: "Photobiomodulation" },
  { name: "PEMF", desc: "Pulsed Electromagnetic" },
  { name: "IR Sauna", desc: "Infrared Heat" },
  { name: "Compression", desc: "Lymphatic Therapy" },
  { name: "Lymphatic", desc: "Drainage System" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F1EA]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoDark} alt="BH Labs" className="h-10 w-auto" />
            <span className="font-semibold text-[#0A2E1C] text-lg tracking-tight">BH LABS</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {sectors.map((s) => (
              <Link key={s.path} href={s.path} className="text-sm font-medium text-gray-600 hover:text-[#0A2E1C] transition-colors">
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2E1C] via-[#0A2E1C]/95 to-[#0A2E1C]/85" />
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-[#C8A951]" />
              <span className="text-[#C8A951] text-sm font-semibold tracking-[0.2em] uppercase">
                Recovery Pod™ by BH Labs
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
              Turnkey Wellness<br />
              Infrastructure for<br />
              <span className="text-[#C8A951] italic">Every Property Type</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
              6 clinical-grade recovery modalities. One plug-and-play system.
              500–750 sqft. Under 90 days to launch.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#sectors" className="inline-flex items-center gap-2 bg-[#C8A951] text-[#0A2E1C] px-8 py-4 rounded-lg font-semibold text-base hover:bg-[#d4b760] transition-colors">
                Explore Solutions
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </a>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "5", label: "Operating Locations" },
              { value: "900+", label: "Sessions/Month" },
              { value: "173%", label: "YoY Revenue Growth" },
              { value: "85", label: "Net Promoter Score" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-[#C8A951] text-3xl md:text-4xl font-serif font-bold">{stat.value}</p>
                <p className="text-white/40 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section id="sectors" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#C8A951] text-sm font-semibold tracking-[0.2em] uppercase">Solutions</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0A2E1C] mt-3 mb-4">
              One System. Every Vertical.
            </h2>
            <p className="text-gray-500 text-lg">
              Choose your property type to see a custom projection and proposal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sectors.map((sector) => (
              <Link key={sector.path} href={sector.path}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-[#C8A951]/30">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={sector.image}
                      alt={sector.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2E1C]/80 to-transparent" />
                    <div className="absolute bottom-4 left-6 right-6">
                      <h3 className="text-white text-2xl font-serif font-bold">{sector.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 leading-relaxed">{sector.description}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {sector.stats.map((stat) => (
                        <span key={stat} className="text-xs font-medium text-[#0A2E1C] bg-[#0A2E1C]/5 px-3 py-1 rounded-full">
                          {stat}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-[#C8A951] font-semibold group-hover:gap-3 transition-all">
                      {sector.cta}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Modalities strip */}
      <section className="py-16 bg-[#0A2E1C]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[#C8A951] text-sm font-semibold tracking-[0.2em] uppercase mb-8">
            6 Evidence-Based Modalities
          </p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {modalities.map((m) => (
              <div key={m.name} className="text-center py-4 px-3 rounded-xl bg-white/5 border border-white/10">
                <p className="text-white font-semibold text-base">{m.name}</p>
                <p className="text-white/40 text-xs mt-1">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F5F1EA]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0A2E1C] mb-4">
            Ready to Add Wellness Revenue?
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Select your property type above, or contact us directly for a custom projection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:stephan.coles@thebiohacklab.com" className="inline-flex items-center justify-center gap-2 bg-[#0A2E1C] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0A2E1C]/90 transition-colors">
              Contact Us
            </a>
            <a href="https://thebiohacklab.com" target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 bg-white text-[#0A2E1C] px-8 py-4 rounded-lg font-semibold border border-gray-200 hover:border-[#C8A951]/30 transition-colors">
              Visit thebiohacklab.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#0A2E1C]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logoDark} alt="BH Labs" className="h-8 w-auto brightness-[10]" />
            <span className="text-white/60 text-sm">© 2026 BH Labs. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            {sectors.map((s) => (
              <Link key={s.path} href={s.path} className="text-white/40 text-sm hover:text-[#C8A951] transition-colors">
                {s.title.split(" ")[0]}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
