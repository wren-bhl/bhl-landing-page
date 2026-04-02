import { useEffect } from "react";

interface SchemaMarkupProps {
  page: "hotels" | "residential" | "fitness" | "athletics";
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
      "description": "Miami-based biohacking and wellness company installing turnkey Recovery Pods in hotels, resorts, fitness clubs, luxury residential properties, and university athletics facilities.",
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

    const productDescriptions: Record<string, string> = {
      hotels: "Turnkey wellness pod for hotels featuring HBOT, red light therapy, infrared sauna, lymphatic drainage suits, and PEMF devices. Generates $27K+/month in new revenue with zero additional staff.",
      residential: "Turnkey wellness pod for luxury residential properties featuring HBOT, red light therapy, infrared sauna, lymphatic drainage suits, and PEMF devices. 10-25% property value increase.",
      fitness: "Turnkey recovery pod for fitness clubs and padel facilities featuring HBOT, red light therapy, infrared sauna, compression therapy, and PEMF devices. Drives member retention and premium membership revenue.",
      athletics: "Turnkey recovery pod for university athletics programs featuring HBOT, red light therapy, infrared sauna, compression therapy, and PEMF devices. Pro-level recovery for every athlete at a fraction of outsourced costs."
    };

    const product = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "BH Labs Recovery Pod",
      "description": productDescriptions[page],
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

    const faqsByPage: Record<string, Array<{q: string; a: string}>> = {
      hotels: [
        { q: "How much revenue can a hotel wellness pod generate?", a: "A BH Labs Recovery Pod generates approximately $27,000 per month — $21,000 from ADR wellness surcharges ($5/night across 200 rooms at 70% occupancy) plus $6,000 from a-la-carte walk-in sessions. That's $324,000 in annual revenue." },
        { q: "What is the payback period for a hotel Recovery Pod?", a: "Less than 2 months. The complete pod investment is approximately $45,000, and at $27,000/month in combined revenue, the investment pays for itself in under 60 days." },
        { q: "Does the hotel need to hire additional staff?", a: "No. BH Labs trains and certifies your existing spa staff to operate the Recovery Pod. Zero additional hires required." },
        { q: "What equipment is included in a Recovery Pod?", a: "Each Recovery Pod includes an HBOT (Hyperbaric Oxygen Therapy) chamber, red light therapy panels, an infrared sauna, lymphatic drainage suits, and PEMF (Pulsed Electromagnetic Field) devices — seven clinical-grade modalities total." },
        { q: "How much space does a Recovery Pod require?", a: "BH Labs provides custom architectural design to fit your available space. Our in-house architect configures the layout to maximize efficiency within your property." },
        { q: "How do wellness tourists spend compared to average travelers?", a: "According to the Global Wellness Institute (2024), wellness tourists spend 41-175% more than average travelers, making a Recovery Pod a powerful driver of higher-value bookings and increased ADR." }
      ],
      residential: [
        { q: "How much revenue can a residential Recovery Pod generate?", a: "A BH Labs Recovery Pod generates approximately $4,500 per month for an HOA with 150 units at a $30/month wellness fee. That's $45,000+ in net annual revenue after payback." },
        { q: "What is the payback period for a residential Recovery Pod?", a: "Approximately 10 months. The complete pod investment is about $45,000, paid back through monthly wellness fees." },
        { q: "Does a Recovery Pod increase property value?", a: "Yes. According to the Global Wellness Institute's 2025 report, wellness-integrated properties see a 10-25% increase in property value." },
        { q: "What equipment is included?", a: "Each Recovery Pod includes an HBOT chamber, red light therapy panels, infrared sauna, lymphatic drainage suits, PEMF devices, and custom architectural design — seven clinical-grade modalities total." },
        { q: "Does the property need dedicated staff?", a: "No. The Recovery Pod includes 30+ self-guided, research-backed protocols that residents can use safely without supervision. BH Labs also provides a 1-year comprehensive warranty and technical support." },
        { q: "How is the Recovery Pod maintained?", a: "BH Labs provides a comprehensive 1-year warranty and ongoing technical support from our Miami-based team. The pod is designed for minimal maintenance with rapid response service." }
      ],
      fitness: [
        { q: "How does a Recovery Pod help with member retention?", a: "Members who use recovery equipment stay 30% longer on average. A Recovery Pod gives members a reason to upgrade to a premium tier and keeps them coming back — reducing churn and increasing lifetime value." },
        { q: "What's the ROI for a fitness facility?", a: "A BH Labs Recovery Pod costs approximately $45,000. By launching a premium recovery membership tier ($50-100/month per member), most facilities see full payback within 3-6 months while generating recurring revenue." },
        { q: "Does our staff need special training?", a: "BH Labs provides comprehensive staff training and certification. Your existing team will be fully equipped to guide members through 30+ recovery protocols." },
        { q: "How much space does a Recovery Pod require?", a: "Our in-house architect designs the pod layout to fit your available space. Whether you have a spare room or an open area, we'll configure equipment to maximize efficiency." },
        { q: "What types of fitness facilities use Recovery Pods?", a: "Gyms, CrossFit boxes, padel clubs, boutique fitness studios, martial arts academies, and multi-sport facilities. Any facility looking to differentiate with premium recovery." },
        { q: "What equipment is included?", a: "Each Recovery Pod includes an HBOT chamber, red light therapy panels, infrared sauna, compression therapy suits, lymphatic drainage, and PEMF devices — seven clinical-grade modalities total." }
      ],
      athletics: [
        { q: "How does a Recovery Pod benefit a university athletics program?", a: "A Recovery Pod provides 7 clinical-grade modalities (HBOT, red light, infrared sauna, compression, PEMF, lymphatic drainage) that accelerate return-to-play, reduce injury downtime, and serve every sport — all in one on-site installation." },
        { q: "How does the cost compare to outsourcing recovery?", a: "A complete Recovery Pod costs approximately $45,000 — a one-time investment that replaces $100K+/year in outsourced cryo sessions, off-campus recovery centers, and fragmented treatment services." },
        { q: "Can one pod serve all our sports programs?", a: "Yes. The Recovery Pod is designed to serve athletes across every sport — football, basketball, soccer, track, swimming, and more. 30+ protocols cover sport-specific recovery needs." },
        { q: "Does our athletic training staff need certification?", a: "BH Labs provides comprehensive training and certification for your athletic trainers. No additional hires required — your existing staff will be fully equipped to run every protocol." },
        { q: "How does recovery technology help with recruiting?", a: "Top recruits compare facilities. A Recovery Pod signals that your program invests in athlete health and performance, giving you a tangible recruiting advantage over programs without dedicated recovery." },
        { q: "What's the installation timeline?", a: "From initial consultation to a fully operational pod typically takes 4-6 weeks. Our team handles custom design, installation, and staff training — all turnkey." }
      ]
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "dateModified": dateModified,
      "mainEntity": faqsByPage[page].map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    };

    const pageUrls: Record<string, string> = {
      hotels: "https://www.bh-labs.com/",
      residential: "https://www.bh-labs.com/residential",
      fitness: "https://www.bh-labs.com/fitness",
      athletics: "https://www.bh-labs.com/athletics"
    };

    const pageNames: Record<string, string> = {
      hotels: "Hotels & Resorts",
      residential: "Luxury Residential",
      fitness: "Fitness & Padel Clubs",
      athletics: "University Athletics"
    };

    const breadcrumbs = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.bh-labs.com/" },
        { "@type": "ListItem", "position": 2, "name": "Recovery Pods", "item": "https://www.bh-labs.com/" },
        { "@type": "ListItem", "position": 3, "name": pageNames[page], "item": pageUrls[page] }
      ]
    };

    const webPage = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": `BH Labs Recovery Pods for ${pageNames[page]}`,
      "url": pageUrls[page],
      "dateModified": dateModified,
      "publisher": {
        "@type": "Organization",
        "name": "BH Labs"
      }
    };

    [organization, product, faqSchema, breadcrumbs, webPage].forEach(schema => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-schema", "true");
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    const pageUrl = pageUrls[page];

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

    const titleMap: Record<string, string> = {
      hotels: "Recovery Pods for Hotels | BH Labs — $324K Annual Revenue",
      residential: "Recovery Pods for Luxury Residential | BH Labs — 10-25% Property Value Increase",
      fitness: "Recovery Pods for Fitness & Padel Clubs | BH Labs — Boost Member Retention",
      athletics: "Recovery Pods for University Athletics | BH Labs — Pro-Level Recovery"
    };

    const descriptionMap: Record<string, string> = {
      hotels: "Install a turnkey BH Labs Recovery Pod in your hotel. Generate $27K+/month in wellness revenue with zero additional staff. HBOT, red light therapy, infrared sauna, PEMF. Under 2 month payback.",
      residential: "Elevate your property with a BH Labs Recovery Pod. $4,500/mo new HOA revenue, 10-month payback, 10-25% property value increase. HBOT, red light therapy, infrared sauna, PEMF.",
      fitness: "Add a turnkey BH Labs Recovery Pod to your gym or padel club. Drive member retention, launch premium tiers, and differentiate with 7 clinical-grade recovery modalities.",
      athletics: "Install a BH Labs Recovery Pod in your athletic facility. 7 clinical-grade modalities for every sport. Pro-level recovery at a fraction of outsourced costs."
    };

    const ogTitleMap: Record<string, string> = {
      hotels: "Recovery Pods for Hotels | BH Labs",
      residential: "Recovery Pods for Luxury Residential | BH Labs",
      fitness: "Recovery Pods for Fitness & Padel Clubs | BH Labs",
      athletics: "Recovery Pods for University Athletics | BH Labs"
    };

    const ogDescriptionMap: Record<string, string> = {
      hotels: "Install a turnkey BH Labs Recovery Pod. Generate $27K+/month in new wellness revenue with zero additional staff.",
      residential: "Elevate your property with a BH Labs Recovery Pod. $4,500/mo new HOA revenue, 10-25% property value increase.",
      fitness: "Add a BH Labs Recovery Pod to your facility. Boost member retention and launch premium recovery memberships.",
      athletics: "Give every athlete pro-level recovery. 7 clinical-grade modalities, one turnkey installation."
    };

    document.title = titleMap[page];
    document.querySelector('meta[name="description"]')?.setAttribute("content", descriptionMap[page]);
    setMeta("property", "og:title", ogTitleMap[page]);
    setMeta("property", "og:description", ogDescriptionMap[page]);
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
