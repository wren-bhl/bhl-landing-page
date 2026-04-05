import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";

const req = (msg: string) => z.string().min(1, msg);

const residentialSchema = z.object({
  firstName: req("First name is required"),
  lastName: req("Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  property: req("Property name is required"),
  role: req("Role is required"),
  numberOfUnits: req("Number of units is required"),
  isDecisionMaker: z.string().optional(),
  propertyType: z.string().optional(),
  managementType: z.string().optional(),
  currentAmenities: z.string().optional(),
  availableSpace: z.string().optional(),
  chargesAmenityFees: z.string().optional(),
  currentFeeAmount: z.string().optional(),
  decisionStage: z.string().optional(),
  timeline: z.string().optional(),
  customEstimate: z.string().optional(),
});

function getUTMParams(): Record<string, string> {
  const params: Record<string, string> = {};
  const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
  utmKeys.forEach(key => {
    const val = sessionStorage.getItem(key);
    if (val) params[key] = val;
  });
  return params;
}

function SelectField({ value, onChange, options, placeholder, disabled }: { value: string; onChange: (v: string) => void; options: string[]; placeholder?: string; disabled?: boolean }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
      style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em', paddingRight: '2.5rem' }}
    >
      <option value="">{placeholder || "Select..."}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  );
}

function PillSelectField({ value, onChange, options }: { value: string; onChange: (v: string) => void; options: string[] }) {
  const selected = value ? value.split(", ").filter(Boolean) : [];
  const toggle = (opt: string) => {
    let next: string[];
    if (opt === "None") {
      next = selected.includes("None") ? [] : ["None"];
    } else {
      const withoutNone = selected.filter(s => s !== "None");
      next = withoutNone.includes(opt) ? withoutNone.filter(s => s !== opt) : [...withoutNone, opt];
    }
    onChange(next.join(", "));
  };
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => toggle(opt)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
            selected.includes(opt)
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-background text-muted-foreground border-border hover:border-primary/50"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

interface ContactFormProps {
  title?: string;
  subtitle?: string;
}

export function ContactForm({ title, subtitle }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
    utmKeys.forEach(key => {
      const val = urlParams.get(key);
      if (val) sessionStorage.setItem(key, val);
    });
  }, []);

  const form = useForm({
    resolver: zodResolver(residentialSchema),
    defaultValues: {
      firstName: "", lastName: "", email: "", phone: "", property: "", role: "",
      numberOfUnits: "", isDecisionMaker: "",
      propertyType: "", managementType: "", currentAmenities: "", availableSpace: "",
      chargesAmenityFees: "", currentFeeAmount: "", decisionStage: "", timeline: "", customEstimate: ""
    },
  });

  const chargesFeesValue = form.watch("chargesAmenityFees");

  const validateStep1 = async () => {
    const result = await form.trigger(["firstName", "lastName", "email", "phone", "property", "role", "numberOfUnits"]);
    if (result) setStep(2);
  };

  const onSubmit = (data: Record<string, unknown>) => {
    setIsSubmitting(true);
    const utmParams = getUTMParams();
    const payload = { ...data, ...utmParams, pageUrl: window.location.href, formType: "residential" };
    console.log("Form submission payload:", payload);

    const base = import.meta.env.BASE_URL.replace(/\/$/, "");
    setTimeout(() => {
      setIsSubmitting(false);
      window.location.href = `${base}/thank-you`;
    }, 1500);
  };

  return (
    <div className="bg-card rounded-2xl p-5 md:p-8 lg:p-10 shadow-xl border border-border" id="contact">
      <div className="mb-6">
        <h3 className="text-2xl md:text-3xl font-serif font-medium mb-2 text-foreground">
          {title || "Request a Meeting"}
        </h3>
        <p className="text-muted-foreground">
          {subtitle || "Tell us about your property and we'll prepare a tailored wellness amenity assessment."}
        </p>
      </div>

      <div className="flex items-center gap-3 mb-8">
        <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${step >= 1 ? "bg-emerald-600 text-white" : "bg-muted text-muted-foreground"}`}>1</div>
        <div className={`flex-1 h-1 rounded-full ${step >= 2 ? "bg-emerald-600" : "bg-muted"}`} />
        <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${step >= 2 ? "bg-emerald-600 text-white" : "bg-muted text-muted-foreground"}`}>2</div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Contact Info & Property Basics</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="firstName" render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name *</FormLabel>
                    <FormControl><Input placeholder="John" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="lastName" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name *</FormLabel>
                    <FormControl><Input placeholder="Doe" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Work Email *</FormLabel>
                    <FormControl><Input type="email" placeholder="john@company.com" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="phone" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number *</FormLabel>
                    <FormControl><Input type="tel" placeholder="(555) 000-0000" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="property" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property / Building Name *</FormLabel>
                    <FormControl><Input placeholder="The Grand Residences" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="role" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Role *</FormLabel>
                    <FormControl>
                      <SelectField value={field.value} onChange={field.onChange} options={["Property Manager", "HOA Board Member", "HOA President", "Building Manager", "Developer", "Owner", "Asset Manager", "Other"]} placeholder="Select role..." />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              <FormField control={form.control} name="numberOfUnits" render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Units *</FormLabel>
                  <FormControl><Input type="number" placeholder="150" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <Button type="button" onClick={validateStep1} className="w-full h-12 text-base font-medium">
                Continue
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Property Details & Goals</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="propertyType" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property Type</FormLabel>
                    <FormControl>
                      <SelectField value={field.value || ""} onChange={field.onChange} options={["Condo", "Luxury Apartment", "HOA Community", "Multifamily", "Mixed-Use Residential", "Co-op", "Other"]} placeholder="Select type..." />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="managementType" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Management Structure</FormLabel>
                    <FormControl>
                      <SelectField value={field.value || ""} onChange={field.onChange} options={["Management Company", "Developer", "HOA Board", "Ownership Group", "Self-Managed", "Other"]} placeholder="Select..." />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="isDecisionMaker" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Are you the decision-maker?</FormLabel>
                    <FormControl>
                      <SelectField value={field.value || ""} onChange={field.onChange} options={["Yes — I can approve this", "I influence the decision", "I'm researching for someone else"]} placeholder="Select..." />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="availableSpace" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Available Amenity Space (sq ft)</FormLabel>
                    <FormControl><Input type="number" placeholder="500" {...field} min={0} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              <FormField control={form.control} name="currentAmenities" render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Amenities</FormLabel>
                  <FormControl>
                    <PillSelectField value={field.value || ""} onChange={field.onChange} options={["Pool", "Gym", "Clubhouse", "Spa", "Tennis Courts", "Concierge", "Business Center", "None"]} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="chargesAmenityFees" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Do you already charge amenity fees?</FormLabel>
                    <FormControl>
                      <SelectField value={field.value || ""} onChange={field.onChange} options={["Yes", "No", "Included in HOA dues"]} placeholder="Select..." />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                {chargesFeesValue === "Yes" && (
                  <FormField control={form.control} name="currentFeeAmount" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Fee Amount</FormLabel>
                      <FormControl><Input placeholder="$50/mo" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                )}
                <FormField control={form.control} name="decisionStage" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Where are you in the process?</FormLabel>
                    <FormControl>
                      <SelectField value={field.value || ""} onChange={field.onChange} options={["Just exploring", "Actively researching", "Comparing options", "Ready to move forward"]} placeholder="Select stage..." />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="timeline" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Target Timeline</FormLabel>
                    <FormControl>
                      <SelectField value={field.value || ""} onChange={field.onChange} options={["0-3 months", "3-6 months", "6-12 months", "Planning stage"]} placeholder="Select timeline..." />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="customEstimate" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Would you like a custom ROI estimate?</FormLabel>
                    <FormControl>
                      <SelectField value={field.value || ""} onChange={field.onChange} options={["Yes — send me a custom estimate", "No — just a meeting"]} placeholder="Select..." />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              <div className="flex gap-3">
                <Button type="button" variant="outline" onClick={() => setStep(1)} className="h-12 px-6">
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back
                </Button>
                <Button
                  type="submit"
                  className="flex-1 h-12 text-base font-medium"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Request a Meeting"}
                </Button>
              </div>
            </motion.div>
          )}
        </form>
      </Form>
    </div>
  );
}
