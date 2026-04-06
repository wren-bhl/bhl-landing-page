import { useState } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Calculator, Menu, X } from "lucide-react";
import logoDark from "@/assets/images/logo-dark.png";

export function Navbar() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Hotels & Resorts", testId: "link-nav-hotels" },
    { href: "/fitness", label: "Fitness and Sports Club", testId: "link-nav-fitness" },
    { href: "/residential", label: "Luxury Residential", testId: "link-nav-residential" },
    { href: "/athletics", label: "University Athletics", testId: "link-nav-athletics" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-36">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3" data-testid="link-logo">
              <img src={logoDark} alt="BH Labs" className="w-14 h-14 lg:w-32 lg:h-32" />
              <span className="font-sans font-semibold text-lg tracking-tight uppercase">BH Labs</span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location === link.href ? "text-primary" : "text-muted-foreground"
                )}
                data-testid={link.testId}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {(location === "/" || location === "/residential" || location === "/fitness") && (
              <a
                href="#calculator"
                className="hidden lg:inline-flex h-12 items-center justify-center rounded-full bg-emerald-600 px-6 text-sm font-bold text-white transition-all hover:bg-emerald-700 shadow-lg shadow-emerald-600/30 ring-2 ring-emerald-400/30 hover:ring-emerald-400/50 hover:shadow-xl hover:shadow-emerald-600/40 hover:scale-105"
                data-testid="link-nav-calculator"
              >
                <Calculator className="w-4 h-4 mr-2" />
                ROI Calculator
              </a>
            )}
            <a
              href="#contact"
              className="hidden lg:inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              data-testid="link-nav-contact"
            >
              Contact Us
            </a>
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border/50">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-base font-medium py-2 px-3 rounded-md transition-colors",
                  location === link.href ? "text-primary bg-secondary/50" : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#contact"
              className="mt-2 text-center py-2 px-3 rounded-md bg-primary text-primary-foreground text-base font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
