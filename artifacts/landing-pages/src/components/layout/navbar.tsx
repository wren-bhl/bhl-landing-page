import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import logoDark from "@/assets/images/logo-dark.png";

export function Navbar() {
  const [location] = useLocation();

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-36">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3" data-testid="link-logo">
              <img src={logoDark} alt="BH Labs" className="w-32 h-32" />
              <span className="font-sans font-semibold text-lg tracking-tight uppercase">BH Labs</span>
            </Link>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location === "/" ? "text-primary" : "text-muted-foreground"
              )}
              data-testid="link-nav-hotels"
            >
              Hotels & Resorts
            </Link>
            <Link 
              href="/residential" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location === "/residential" ? "text-primary" : "text-muted-foreground"
              )}
              data-testid="link-nav-residential"
            >
              Luxury Residential
            </Link>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a 
              href="#contact" 
              className="hidden md:inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              data-testid="link-nav-contact"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
