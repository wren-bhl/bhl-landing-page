import type { Context } from "@netlify/functions";
import nodemailer from "nodemailer";

const SMTP_USER = process.env.SMTP_USER || "wren.coles@thebiohacklab.com";
const SMTP_PASS = process.env.SMTP_PASS || "";

const RECIPIENTS = [
  "stephan.coles@thebiohacklab.com",
  "info@thebiohacklab.com",
];

function formatFormData(data: Record<string, unknown>): string {
  const fieldLabels: Record<string, string> = {
    firstName: "First Name", lastName: "Last Name", email: "Email", phone: "Phone",
    property: "Property/Company", role: "Role/Title", propertyState: "State", propertyCity: "City",
    numberOfRooms: "Number of Rooms", averageOccupancy: "Occupancy Rate",
    existingSpaGym: "Existing Spa/Gym", estimatedPodSpace: "Estimated Pod Space",
    targetTimeline: "Target Timeline", numberOfMembers: "Number of Members",
    numberOfLocations: "Number of Locations", facilityType: "Facility Type",
    currentRecoveryAmenities: "Current Recovery Amenities", availableSpace: "Available Space",
    mainGoal: "Main Goal", formType: "Form Type", pageUrl: "Page URL",
    propertyType: "Property Type", numberOfUnits: "Number of Units",
    currentAmenities: "Current Amenities", wellnessFees: "Has Wellness Fees",
    decisionStage: "Decision Stage", timeline: "Timeline",
    sportDepartment: "Sport/Department", numberOfAthletes: "Number of Athletes",
    currentRecoverySetup: "Current Recovery Setup", annualRecoverySpend: "Annual Recovery Spend",
  };

  const lines = Object.entries(data)
    .filter(([k, v]) => v && !k.startsWith("utm_"))
    .map(([k, v]) => `<tr><td style="padding:8px 12px;font-weight:600;color:#0A2E1C;border-bottom:1px solid #eee">${fieldLabels[k] || k}</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${String(v)}</td></tr>`)
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
      <div style="background:#0A2E1C;padding:20px 24px;border-radius:8px 8px 0 0">
        <h2 style="color:#C8A951;margin:0">New Recovery Pod Inquiry</h2>
        <p style="color:rgba(255,255,255,0.6);margin:4px 0 0;font-size:14px">${String(data.formType || "unknown")} form</p>
      </div>
      <table style="width:100%;border-collapse:collapse;background:#fff;border:1px solid #eee">${lines}</table>
      <div style="padding:16px 24px;background:#f5f5f5;border-radius:0 0 8px 8px;text-align:center">
        <p style="color:#666;font-size:12px;margin:0">BH Labs Recovery Pod™ — thebiohacklab.com</p>
      </div>
    </div>`;
}

export default async (req: Request, _context: Context) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "POST", "Access-Control-Allow-Headers": "Content-Type" },
    });
  }

  try {
    const data = await req.json() as Record<string, unknown>;

    if (!data.email || !data.firstName) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400, headers: { "Content-Type": "application/json" } });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const name = `${data.firstName} ${data.lastName || ""}`.trim();
    const property = data.property ? ` — ${data.property}` : "";

    await transporter.sendMail({
      from: `"BH Labs Forms" <${SMTP_USER}>`,
      to: RECIPIENTS.join(", "),
      replyTo: String(data.email),
      subject: `🏨 New ${data.formType || "general"} inquiry: ${name}${property}`,
      html: formatFormData(data),
    });

    // Confirmation to lead
    await transporter.sendMail({
      from: `"BH Labs" <${SMTP_USER}>`,
      to: String(data.email),
      subject: "We received your Recovery Pod inquiry — BH Labs",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:500px;margin:0 auto">
          <div style="background:#0A2E1C;padding:24px;border-radius:8px 8px 0 0;text-align:center">
            <h2 style="color:#C8A951;margin:0">Thank You, ${data.firstName}!</h2>
          </div>
          <div style="padding:24px;background:#fff;border:1px solid #eee">
            <p style="color:#333;line-height:1.6">We've received your inquiry about the Recovery Pod™. A BH Labs representative will reach out within 24 hours.</p>
            <p style="color:#333;line-height:1.6">Reply to this email with any questions.</p>
          </div>
          <div style="padding:16px;background:#f5f5f5;border-radius:0 0 8px 8px;text-align:center">
            <p style="color:#999;font-size:12px;margin:0">BH Labs · The Recovery Pod™ · thebiohacklab.com</p>
          </div>
        </div>`,
    });

    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    });
  } catch (err) {
    console.error("Contact form error:", err);
    return new Response(JSON.stringify({ error: "Failed to send" }), {
      status: 500,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    });
  }
};

export const config = {
  path: "/.netlify/functions/contact",
  method: "POST",
};
