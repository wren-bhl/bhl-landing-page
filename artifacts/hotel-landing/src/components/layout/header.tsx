import { Calculator } from "lucide-react";
import logoDark from "@/assets/images/logo-dark.png";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-3">
              <img src={logoDark} alt="BH Labs" className="w-14 h-14" />
              <span className="font-sans font-semibold text-lg tracking-tight uppercase">BH Labs</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#calculator"
              className="hidden sm:inline-flex h-12 items-center justify-center rounded-full bg-emerald-600 px-6 text-sm font-bold text-white transition-all hover:bg-emerald-700 shadow-lg shadow-emerald-600/30 ring-2 ring-emerald-400/30 hover:ring-emerald-400/50 hover:shadow-xl hover:shadow-emerald-600/40 hover:scale-105"
            >
              <Calculator className="w-4 h-4 mr-2" />
              ROI Calculator
            </a>
            <a
              href="#contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Request a Meeting
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
