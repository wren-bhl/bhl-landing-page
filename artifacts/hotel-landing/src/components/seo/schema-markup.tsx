import { useEffect } from "react";

interface SchemaMarkupProps {
  page: "hotels";
}

export function SchemaMarkup({ page }: SchemaMarkupProps) {
  useEffect(() => {
    const existingSchemas = document.querySelectorAll('script[data-schema]');
    existingSchemas.forEach(el => el.remove());
    const existingMeta = document.querySelectorAll('meta[data-dynamic]');
    existingMeta.forEach(el => el.remove());
    const existingCanonical = document.querySelector('link[data-dynamic]');
    existingCanonical?.remove();

    const dateModified = "2026-04-02";

    const organization = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "BH Labs",
      "url": "https://www.bh-labs.com",
      "logo": "https://www.bh-labs.com/logo-dark.png",
      "description": "Miami-based biohacking and wellness company installing turnkey Recovery Pods in hotels and resorts.",
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
      "name": "BH Labs Recovery Pod",
      "description": "Turnkey wellness pod for hotels featuring HBOT, red light therapy, infrared sauna, lymphatic drainage suits, and PEMF devices. Generates $27K+/month in new revenue with zero additional staff.",
      "brand": { "@type": "Brand", "name": "BH Labs" },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "45000",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock",
        "description": "Complete turnkey Recovery Pod installation with 1-year warranty"
      },
      "dateModified": dateModified
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "dateModified": dateModified,
      "mainEntity": [
        { q: "How much revenue can a hotel wellness pod generate?", a: "A BH Labs Recovery Pod generates approximately $27,000 per month — $21,000 from ADR wellness surcharges ($5/night across 200 rooms at 70% occupancy) plus $6,000 from a-la-carte walk-in sessions. That's $324,000 in annual revenue." },
        { q: "What is the payback period for a hotel Recovery Pod?", a: "Less than 2 months. The complete pod investment is approximately $45,000, and at $27,000/month in combined revenue, the investment pays for itself in under 60 days." },
        { q: "Does the hotel need to hire additional staff?", a: "No. BH Labs trains and certifies your existing spa staff to operate the Recovery Pod. Zero additional hires required." },
        { q: "What equipment is included in a Recovery Pod?", a: "Each Recovery Pod includes an HBOT (Hyperbaric Oxygen Therapy) chamber, red light therapy panels, an infrared sauna, lymphatic drainage suits, and PEMF (Pulsed Electromagnetic Field) devices — seven clinical-grade modalities total." },
        { q: "How much space does a Recovery Pod require?", a: "BH Labs provides custom architectural design to fit your available space. Our in-house architect configures the layout to maximize efficiency within your property." },
        { q: "How do wellness tourists spend compared to average travelers?", a: "According to the Global Wellness Institute (2024), wellness tourists spend 41-175% more than average travelers, making a Recovery Pod a powerful driver of higher-value bookings and increased ADR." }
      ].map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    };

    const pageUrl = "https://www.bh-labs.com/";

    const webPage = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "BH Labs Recovery Pods for Hotels & Resorts",
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

    document.title = "Recovery Pods for Hotels | BH Labs — $324K Annual Revenue";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Install a turnkey BH Labs Recovery Pod in your hotel. Generate $27K+/month in wellness revenue with zero additional staff. HBOT, red light therapy, infrared sauna, PEMF. Under 2 month payback.");
    setMeta("property", "og:title", "Recovery Pods for Hotels | BH Labs");
    setMeta("property", "og:description", "Install a turnkey BH Labs Recovery Pod. Generate $27K+/month in new wellness revenue with zero additional staff.");
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
  }, [page]);

  return null;
}
