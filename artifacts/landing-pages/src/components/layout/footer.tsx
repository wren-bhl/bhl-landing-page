import { Link } from "wouter";
import { Mail, Phone, Globe } from "lucide-react";
import logoLight from "@/assets/images/logo-light.png";

type PageType = "hotels" | "fitness" | "residential" | "athletics";

interface FooterProps {
  page?: PageType;
}

function getDescription(page?: PageType): string {
  switch (page) {
    case "hotels":
      return "Miami's premier biohacking and wellness integration company. Turnkey Recovery Pods for hotels and resorts — generate new wellness revenue with zero additional staff.";
    case "fitness":
      return "Miami's premier biohacking and wellness integration company. Turnkey Recovery Pods for fitness and sports clubs — boost member retention and launch premium recovery tiers.";
    case "residential":
      return "Miami's premier biohacking and wellness integration company. Turnkey Recovery Pods for luxury residential properties — increase property value and generate HOA revenue.";
    case "athletics":
      return "Miami's premier biohacking and wellness integration company. Turnkey Recovery Pods for university athletics programs — pro-level recovery for every athlete at a fraction of outsourced costs.";
    default:
      return "Miami's premier biohacking and wellness integration company. Turnkey Recovery Pods for high-end commercial and residential spaces.";
  }
}

export function Footer({ page }: FooterProps) {
  return (
    <footer className="bg-primary text-primary-foreground py-10 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logoLight} alt="BH Labs" className="w-20 h-20 md:w-40 md:h-40" />
              <span className="font-sans font-semibold text-lg tracking-tight uppercase">BH Labs</span>
            </div>
            <p className="text-primary-foreground/70 text-sm max-w-xs">
              {getDescription(page)}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-primary-foreground/90">Solutions</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors" data-testid="link-footer-hotels">
                  Hotels & Resorts
                </Link>
              </li>
              <li>
                <Link href="/fitness" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors" data-testid="link-footer-fitness">
                  Fitness and Sports Club
                </Link>
              </li>
              <li>
                <Link href="/residential" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors" data-testid="link-footer-residential">
                  Luxury Residential
                </Link>
              </li>
              <li>
                <Link href="/athletics" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors" data-testid="link-footer-athletics">
                  University Athletics
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-primary-foreground/90">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@thebiohacklab.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors" data-testid="link-footer-email">
                  <Mail className="w-4 h-4" />
                  info@thebiohacklab.com
                </a>
              </li>
              <li>
                <a href="tel:954-870-5814" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors" data-testid="link-footer-phone">
                  <Phone className="w-4 h-4" />
                  954-870-5814
                </a>
              </li>
              <li>
                <a href="https://www.bh-labs.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors" data-testid="link-footer-website">
                  <Globe className="w-4 h-4" />
                  www.bh-labs.com
                </a>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between text-sm text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} BH Labs. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Miami, FL</p>
        </div>
      </div>
    </footer>
  );
}
