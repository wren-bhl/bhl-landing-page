import { Router, type Request, type Response } from "express";
import nodemailer from "nodemailer";

const router = Router();

// SMTP config for wren.coles@thebiohacklab.com (Google Workspace)
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER || "wren.coles@thebiohacklab.com",
    pass: process.env.SMTP_PASS || "",
  },
});

const RECIPIENTS = [
  "stephan.coles@thebiohacklab.com",
  "info@thebiohacklab.com",
];

function formatFormData(data: Record<string, unknown>): string {
  const fieldLabels: Record<string, string> = {
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phone: "Phone",
    property: "Property/Company",
    role: "Role/Title",
    propertyState: "State",
    propertyCity: "City",
    numberOfRooms: "Number of Rooms",
    averageOccupancy: "Occupancy Rate",
    existingSpaGym: "Existing Spa/Gym",
    estimatedPodSpace: "Estimated Pod Space (sqft)",
    targetTimeline: "Target Timeline",
    numberOfMembers: "Number of Members",
    numberOfLocations: "Number of Locations",
    facilityType: "Facility Type",
    currentRecoveryAmenities: "Current Recovery Amenities",
    availableSpace: "Available Space (sqft)",
    mainGoal: "Main Goal",
    propertyType: "Property Type",
    numberOfUnits: "Number of Units",
    currentAmenities: "Current Amenities",
    wellnessFees: "Has Wellness Fees",
    amenityFeeAmount: "Amenity Fee Amount",
    decisionStage: "Decision Stage",
    timeline: "Timeline",
    sportDepartment: "Sport/Department",
    numberOfAthletes: "Number of Athletes",
    currentRecoverySetup: "Current Recovery Setup",
    annualRecoverySpend: "Annual Recovery Spend",
    facilitySpace: "Facility Space",
    budgetCycle: "Budget Cycle",
    formType: "Form Type",
    pageUrl: "Page URL",
  };

  const skipKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];

  const lines: string[] = [];
  for (const [key, value] of Object.entries(data)) {
    if (skipKeys.includes(key) || !value) continue;
    const label = fieldLabels[key] || key;
    lines.push(`<tr><td style="padding:8px 12px;font-weight:600;color:#0A2E1C;border-bottom:1px solid #eee;white-space:nowrap">${label}</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${String(value)}</td></tr>`);
  }

  // UTM section
  const utmLines: string[] = [];
  for (const key of skipKeys) {
    const val = data[key];
    if (val) utmLines.push(`<tr><td style="padding:4px 12px;color:#999;font-size:12px">${key}</td><td style="padding:4px 12px;color:#999;font-size:12px">${String(val)}</td></tr>`);
  }

  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
      <div style="background:#0A2E1C;padding:20px 24px;border-radius:8px 8px 0 0">
        <h2 style="color:#C8A951;margin:0;font-size:20px">New Recovery Pod Inquiry</h2>
        <p style="color:rgba(255,255,255,0.6);margin:4px 0 0;font-size:14px">${String(data.formType || "unknown")} form submission</p>
      </div>
      <table style="width:100%;border-collapse:collapse;background:#fff;border:1px solid #eee">
        ${lines.join("")}
      </table>
      ${utmLines.length > 0 ? `
        <div style="margin-top:12px;padding:8px 0">
          <p style="color:#999;font-size:12px;margin:0 0 4px 12px">Campaign Tracking</p>
          <table style="width:100%;border-collapse:collapse">${utmLines.join("")}</table>
        </div>
      ` : ""}
      <div style="padding:16px 24px;background:#f5f5f5;border-radius:0 0 8px 8px;text-align:center">
        <p style="color:#666;font-size:12px;margin:0">BH Labs Recovery Pod™ — thebiohacklab.com</p>
      </div>
    </div>
  `;
}

router.post("/contact", async (req: Request, res: Response) => {
  try {
    const data = req.body as Record<string, unknown>;

    if (!data.email || !data.firstName) {
      res.status(400).json({ error: "Missing required fields" });
      return;
    }

    const formType = String(data.formType || "general");
    const name = `${data.firstName} ${data.lastName || ""}`.trim();
    const property = data.property ? ` — ${data.property}` : "";
    const subject = `🏨 New ${formType} inquiry: ${name}${property}`;

    await transporter.sendMail({
      from: `"BH Labs Forms" <wren.coles@thebiohacklab.com>`,
      to: RECIPIENTS.join(", "),
      replyTo: String(data.email),
      subject,
      html: formatFormData(data),
    });

    // Send confirmation to the lead
    await transporter.sendMail({
      from: `"BH Labs" <wren.coles@thebiohacklab.com>`,
      to: String(data.email),
      subject: "We received your Recovery Pod inquiry — BH Labs",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:500px;margin:0 auto">
          <div style="background:#0A2E1C;padding:24px;border-radius:8px 8px 0 0;text-align:center">
            <h2 style="color:#C8A951;margin:0">Thank You, ${data.firstName}!</h2>
          </div>
          <div style="padding:24px;background:#fff;border:1px solid #eee">
            <p style="color:#333;line-height:1.6">We've received your inquiry about the Recovery Pod™. A BH Labs representative will reach out within 24 hours with a custom proposal for your property.</p>
            <p style="color:#333;line-height:1.6">In the meantime, feel free to explore our <a href="https://thebiohacklab.com" style="color:#0A2E1C;font-weight:600">website</a> or reply to this email with any questions.</p>
          </div>
          <div style="padding:16px;background:#f5f5f5;border-radius:0 0 8px 8px;text-align:center">
            <p style="color:#999;font-size:12px;margin:0">BH Labs · The Recovery Pod™ · thebiohacklab.com</p>
          </div>
        </div>
      `,
    });

    res.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    res.status(500).json({ error: "Failed to send" });
  }
});

export default router;
