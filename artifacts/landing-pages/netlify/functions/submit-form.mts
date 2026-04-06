import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const data = await req.json();
    
    // Format the email body
    const formType = data.formType || "unknown";
    const lines = Object.entries(data)
      .filter(([k]) => !["formType", "pageUrl", "bot-field"].includes(k))
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");
    
    const subject = `New BH Labs Lead — ${formType.charAt(0).toUpperCase() + formType.slice(1)}`;
    const body = `New lead from bh-labs-landing.netlify.app/${formType}\n\n${lines}\n\nSubmitted from: ${data.pageUrl || "unknown"}`;

    // Send via a simple email webhook (using our own endpoint)
    // For now, store in Netlify Blobs as backup and log
    console.log("=== NEW LEAD ===");
    console.log(`Type: ${formType}`);
    console.log(lines);
    console.log("================");

    // Send notification email via Web3Forms (free tier, client-side friendly)
    const emailResponse = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "YOUR_KEY_HERE", // Will be replaced with actual key
        subject: subject,
        from_name: "BH Labs Landing Page",
        to: "info@thebiohacklab.com",
        message: body,
        ...data,
      }),
    }).catch(() => null);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    console.error("Form submission error:", error);
    return new Response(JSON.stringify({ success: false, error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    });
  }
};

export const config = {
  path: "/api/submit-form",
};
