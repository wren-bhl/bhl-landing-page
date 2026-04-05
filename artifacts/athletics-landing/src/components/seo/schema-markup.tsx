import { useEffect } from "react";

export function SchemaMarkup() {
  useEffect(() => {
    const existingSchemas = document.querySelectorAll('script[data-schema]');
    existingSchemas.forEach(el => el.remove());
    const existingMeta = document.querySelectorAll('meta[data-dynamic]');
    existingMeta.forEach(el => el.remove());
    const existingCanonical = document.querySelector('link[data-dynamic]');
    existingCanonical?.remove();

    const dateModified = "2026-04-03";

    const organization = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "BH Labs",
      "url": "https://www.bh-labs.com",
      "logo": "https://www.bh-labs.com/logo-dark.png",
      "description": "Miami-based biohacking and wellness company installing turnkey Recovery Pods in university athletic facilities.",
      "telephone": "+1-954-870-5814",
      "email": "info@thebiohacklab.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Miami",
        "addressRegion": "FL",
        "addressCountry": "US"
      },
      "areaServed": {
        "@type": "Place",
        "name": "United States"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-954-870-5814",
        "contactType": "sales",
        "email": "info@thebiohacklab.com"
      },
      "sameAs": ["https://www.bh-labs.com"]
    };

    const product = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "BH Labs Recovery Pod for University Athletics",
      "description": "Turnkey recovery infrastructure for university athletic facilities. Replaces outsourced recovery with 7 clinical-grade modalities serving all sports — HBOT, red light therapy, infrared sauna, compression therapy, lymphatic drainage, and PEMF devices. No additional staff required.",
      "brand": { "@type": "Brand", "name": "BH Labs" },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "45000",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock",
        "description": "Complete turnkey Recovery Pod installation with 1-year warranty and athletic training staff onboarding"
      },
      "dateModified": dateModified
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "dateModified": dateModified,
      "mainEntity": [
        { q: "How does the cost compare to outsourcing recovery?", a: "A complete Recovery Pod costs approximately $45,000 — a one-time investment that replaces ongoing outsourced recovery contracts." },
        { q: "Can one pod serve all sports programs?", a: "Yes. The pod serves athletes across every sport with 30+ sport-specific protocols." },
        { q: "How many athletes can use the pod per day?", a: "Usage depends on scheduling and protocol selection. Most modalities support multiple athletes per day." },
        { q: "Can this fit in an existing training room?", a: "Most installations require 400-800 sq ft. Custom layout designed for your existing training room or performance facility." },
        { q: "How much oversight does athletic training staff need to provide?", a: "Minimal. BH Labs trains your ATCs on all equipment and 30+ recovery protocols." },
        { q: "What's the installation timeline?", a: "4-6 weeks from consultation to fully operational pod — all turnkey." },
        { q: "What happens after installation?", a: "1-year warranty, ongoing technical support, and same-day service availability." }
      ].map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    };

    const pageUrl = "https://www.bh-labs.com/athletics";

    const webPage = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "University Athletics Recovery Infrastructure | BH Labs Recovery Pods",
      "url": pageUrl,
      "dateModified": dateModified,
      "publisher": {
        "@type": "Organization",
        "name": "BH Labs"
      }
    };

    [organization, product, faqSchema, webPage].forEach(schema => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-schema", "true");
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    const canonical = document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = pageUrl;
    canonical.setAttribute("data-dynamic", "true");
    document.head.appendChild(canonical);

    const setMeta = (attr: string, key: string, content: string) => {
      const meta = document.createElement("meta");
      meta.setAttribute(attr, key);
      meta.setAttribute("content", content);
      meta.setAttribute("data-dynamic", "true");
      document.head.appendChild(meta);
    };

    document.title = "Recovery Pods for Universities & Athletic Programs | BH Labs — Athlete Recovery";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Give your athletes a competitive recovery edge. BH Labs Recovery Pods for university athletic programs — turnkey install, proven protocols.");
    setMeta("property", "og:title", "University Athletics Recovery Infrastructure | BH Labs");
    setMeta("property", "og:description", "Cut recovery costs. Improve athlete availability. One turnkey Recovery Pod replaces outsourced services for every sport. No additional staff required.");
    setMeta("property", "og:url", pageUrl);
    setMeta("property", "og:image", "https://www.bh-labs.com/opengraph.jpg");
    setMeta("property", "og:image:width", "1200");
    setMeta("property", "og:image:height", "630");
    setMeta("name", "twitter:image", "https://www.bh-labs.com/opengraph.jpg");

    return () => {
      document.querySelectorAll('script[data-schema]').forEach(el => el.remove());
      document.querySelectorAll('meta[data-dynamic]').forEach(el => el.remove());
      document.querySelector('link[data-dynamic]')?.remove();
    };
  }, []);

  return null;
}
