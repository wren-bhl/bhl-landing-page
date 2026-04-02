import { useEffect } from "react";

export function SchemaMarkup() {
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
      "sameAs": [
        "https://www.bh-labs.com"
      ]
    };

    const product = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "BH Labs Recovery Pod for University Athletics",
      "description": "Turnkey wellness pod for university athletic facilities featuring HBOT, red light therapy, infrared sauna, compression therapy, lymphatic drainage, and PEMF devices. Reduces injury downtime and accelerates return-to-play with zero additional staff.",
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
        { q: "How does a Recovery Pod benefit a university athletics program?", a: "A Recovery Pod provides 7 clinical-grade modalities (HBOT, red light, infrared sauna, compression, PEMF, lymphatic drainage) that accelerate return-to-play, reduce injury downtime, and serve every sport — all in one on-site installation." },
        { q: "How does the cost compare to outsourcing recovery?", a: "A complete Recovery Pod costs approximately $45,000 — a one-time investment that replaces $100K+/year in outsourced cryo sessions, off-campus recovery centers, and fragmented treatment services." },
        { q: "Can one pod serve all sports programs?", a: "Yes. The Recovery Pod is designed to serve athletes across every sport — football, basketball, soccer, track, swimming, and more. 30+ protocols cover sport-specific recovery needs." },
        { q: "Does our athletic training staff need certification?", a: "BH Labs provides comprehensive training and certification for your athletic trainers. No additional hires required — your existing staff will be fully equipped to run every protocol." },
        { q: "How does recovery technology help with recruiting?", a: "Top recruits compare facilities. A Recovery Pod signals that your program invests in athlete health and performance, giving you a tangible recruiting advantage over programs without dedicated recovery." },
        { q: "What's the installation timeline?", a: "From initial consultation to a fully operational pod typically takes 4-6 weeks. Our team handles custom design, installation, and staff training — all turnkey." }
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
      "name": "BH Labs Recovery Pods for University Athletics",
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

    document.title = "Recovery Pods for University Athletics | BH Labs — Pro-Level Recovery for Every Athlete";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Install a turnkey BH Labs Recovery Pod in your athletic facility. 7 clinical-grade modalities that reduce injury downtime, accelerate return-to-play, and cost less than outsourcing recovery. No additional staff required.");
    setMeta("property", "og:title", "Recovery Pods for University Athletics | BH Labs");
    setMeta("property", "og:description", "Give every athlete pro-level recovery. One turnkey pod replaces $100K+/year in outsourced services. 7 clinical-grade modalities. No additional staff.");
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
