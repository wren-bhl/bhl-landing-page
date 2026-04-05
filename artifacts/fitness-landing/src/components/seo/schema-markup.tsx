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
      "description": "Miami-based biohacking and wellness company installing turnkey Recovery Pods in fitness clubs and sports facilities.",
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
        "name": "South Florida"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-954-870-5814",
        "contactType": "sales",
        "email": "info@thebiohacklab.com"
      },
      "sameAs": [
        "https://www.bh-labs.com"
      ]
    };

    const product = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "BH Labs Recovery Pod for Fitness Clubs",
      "description": "Turnkey wellness pod for fitness clubs and sports facilities. Launch a premium recovery tier that drives member retention, generates ancillary revenue, and requires zero additional headcount.",
      "brand": { "@type": "Brand", "name": "BH Labs" },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "45000",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock",
        "description": "Complete turnkey Recovery Pod installation with 1-year warranty and staff training"
      },
      "dateModified": dateModified
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "dateModified": dateModified,
      "mainEntity": [
        { q: "What type of gym or sports club is the best fit?", a: "Recovery Pods work well in premium gyms, boutique fitness studios, CrossFit boxes, padel clubs, sports performance facilities, and athletic clubs with 200+ active members." },
        { q: "How much space is needed?", a: "Most installations require 400-800 square feet. Our in-house architect designs a custom layout for your available space." },
        { q: "How much staff involvement is required?", a: "Minimal. BH Labs trains and certifies your existing staff to operate every modality. No dedicated recovery specialists needed." },
        { q: "How do facilities usually monetize Recovery Pods?", a: "Premium membership tier ($50-100/mo), drop-in recovery sessions ($25-50/visit), and performance packages for athletes. Many combine all three." },
        { q: "How long does installation take?", a: "2-4 weeks from layout approval to operational launch. BH Labs manages the full process to minimize disruption." },
        { q: "Do you help with pricing and package strategy?", a: "Yes. BH Labs provides guidance on premium tier pricing, drop-in pricing, and member packaging." },
        { q: "What happens after installation?", a: "Comprehensive 1-year warranty, ongoing technical support, and maintenance." }
      ].map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    };

    const pageUrl = "https://www.bh-labs.com/fitness";

    const webPage = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Fitness Club Recovery Revenue Solution | BH Labs Recovery Pods",
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

    document.title = "Recovery Pods for Gyms & Sports Clubs | BH Labs — Premium Member Amenity";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Add a premium recovery tier that drives retention and revenue. BH Labs Recovery Pods for gyms and sports clubs. Calculate your potential.");
    setMeta("property", "og:title", "Fitness Club Recovery Revenue Solution | BH Labs Recovery Pods");
    setMeta("property", "og:description", "Turn recovery into a new revenue stream. Turnkey Recovery Pod installation for gyms and sports clubs with zero additional headcount.");
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
