import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { CITIES_BY_STATE } from "@/data/cities-by-state";

const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia",
  "Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland",
  "Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey",
  "New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina",
  "South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"
];

const req = (msg: string) => z.string().min(1, msg);

const baseSchema = {
  firstName: req("First name is required"),
  lastName: req("Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  property: req("Name is required"),
  role: req("Role/Title is required"),
};

const hotelSchema = z.object({
  ...baseSchema,
  propertyState: req("State is required"),
  propertyCity: req("City is required"),
  numberOfRooms: req("Number of rooms is required"),
  averageOccupancy: req("Occupancy rate is required"),
  existingSpaGym: req("This field is required"),
  estimatedPodSpace: req("Estimated pod space is required"),
  targetTimeline: req("Timeline is required"),
});

const fitnessSchema = z.object({
  ...baseSchema,
  numberOfMembers: req("Number of members is required"),
  numberOfLocations: req("Number of locations is required"),
  facilityType: req("Facility type is required"),
  currentRecoveryAmenities: req("Please select at least one option"),
  availableSpace: req("Available space is required"),
  mainGoal: req("Main goal is required"),
  targetTimeline: req("Timeline is required"),
});

const residentialSchema = z.object({
  ...baseSchema,
  propertyType: req("Property type is required"),
  numberOfUnits: req("Number of units is required"),
  currentAmenities: req("Please select at least one option"),
  availableSpace: req("Available space is required"),
  wellnessFees: req("This field is required"),
  amenityFeeAmount: z.string().optional(),
  decisionStage: req("Decision stage is required"),
  timeline: req("Timeline is required"),
});

const athleticsBriefSchema = z.object({
  firstName: req("First name is required"),
  lastName: req("Last name is required"),
  email: z.string().email("Invalid email address"),
  property: req("University/Program name is required"),
  role: req("Role/Title is required"),
  sportDepartment: req("Sport/Department is required"),
});

const athleticsFullSchema = z.object({
  ...baseSchema,
  sportDepartment: req("Sport/Department is required"),
  numberOfAthletes: req("Number of athletes is required"),
  currentRecoverySetup: req("Current recovery setup is required"),
  annualRecoverySpend: req("Annual recovery spend is required"),
  facilitySpace: req("Facility space is required"),
  budgetCycle: req("Budget cycle is required"),
  timeline: req("Timeline is required"),
});

type FormType = "hotel" | "fitness" | "residential" | "athletics-brief" | "athletics-full";

function getSchema(type: FormType) {
  switch (type) {
    case "hotel": return hotelSchema;
    case "fitness": return fitnessSchema;
    case "residential": return residentialSchema;
    case "athletics-brief": return athleticsBriefSchema;
    case "athletics-full": return athleticsFullSchema;
  }
}

function getDefaults(type: FormType): Record<string, string> {
  const base = { firstName: "", lastName: "", email: "", phone: "", property: "", role: "" };
  switch (type) {
    case "hotel":
      return { ...base, propertyState: "", propertyCity: "", numberOfRooms: "", averageOccupancy: "", existingSpaGym: "", estimatedPodSpace: "", targetTimeline: "" };
    case "fitness":
      return { ...base, numberOfMembers: "", numberOfLocations: "", facilityType: "", currentRecoveryAmenities: "", availableSpace: "", mainGoal: "", targetTimeline: "" };
    case "residential":
      return { ...base, propertyType: "", numberOfUnits: "", currentAmenities: "", availableSpace: "", wellnessFees: "", amenityFeeAmount: "", decisionStage: "", timeline: "" };
    case "athletics-brief":
      return { firstName: "", lastName: "", email: "", property: "", role: "", sportDepartment: "" };
    case "athletics-full":
      return { ...base, sportDepartment: "", numberOfAthletes: "", currentRecoverySetup: "", annualRecoverySpend: "", facilitySpace: "", budgetCycle: "", timeline: "" };
  }
}

function getThankYouMessage(type: FormType) {
  switch (type) {
    case "hotel": return "revenue projection";
    case "fitness": return "custom recovery pod proposal";
    case "residential": return "property assessment";
    case "athletics-brief": return "athletics recovery brief";
    case "athletics-full": return "proposal";
  }
}

interface ContactFormProps {
  type: FormType;
  title?: string;
  subtitle?: string;
}

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

function MultiCheckboxField({ value, onChange, options }: { value: string; onChange: (v: string) => void; options: string[] }) {
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
    <div className="grid grid-cols-2 gap-2">
      {options.map((opt) => (
        <label key={opt} className="flex items-center gap-2 text-sm cursor-pointer py-1">
          <input
            type="checkbox"
            checked={selected.includes(opt)}
            onChange={() => toggle(opt)}
            className="rounded border-input h-4 w-4 text-primary focus:ring-primary"
          />
          <span className="text-foreground">{opt}</span>
        </label>
      ))}
    </div>
  );
}

function NumberInputWithSuffix({ value, onChange, placeholder, suffix, min, max }: { value: string; onChange: (v: string) => void; placeholder?: string; suffix?: string; min?: number; max?: number }) {
  return (
    <div className="relative">
      <Input
        type="number"
        value={value}
        onChange={(e) => {
          let val = e.target.value;
          if (max !== undefined && Number(val) > max) val = String(max);
          if (min !== undefined && Number(val) < min && val !== "") val = String(min);
          onChange(val);
        }}
        placeholder={placeholder}
        min={min}
        max={max}
        className={suffix ? "pr-8" : ""}
      />
      {suffix && value && (
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">{suffix}</span>
      )}
    </div>
  );
}

export function ContactForm({ type, title, subtitle }: ContactFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
    utmKeys.forEach(key => {
      const val = urlParams.get(key);
      if (val) sessionStorage.setItem(key, val);
    });
  }, []);

  const schema = getSchema(type);
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: getDefaults(type),
  });

  const wellnessFeesValue = form.watch("wellnessFees");
  const propertyStateValue = form.watch("propertyState");

  useEffect(() => {
    if (type === "hotel" && propertyStateValue) {
      const currentCity = form.getValues("propertyCity");
      const availableCities = CITIES_BY_STATE[propertyStateValue] || [];
      if (currentCity && !availableCities.includes(currentCity)) {
        form.setValue("propertyCity", "");
      }
    }
  }, [propertyStateValue, type, form]);

  const onSubmit = async (data: Record<string, unknown>) => {
    setIsSubmitting(true);
    const utmParams = getUTMParams();
    const payload = { ...data, ...utmParams, pageUrl: window.location.href, formType: type };

    try {
      // Send to form relay (delivers email to stephan.coles@thebiohacklab.com + info@thebiohacklab.com)
      const res = await fetch("https://markets-securities-boxes-downloadable.trycloudflare.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      // Also send to Netlify Forms as backup
      try {
        const formData = new URLSearchParams();
        formData.append("form-name", `bh-labs-${type}`);
        Object.entries(payload).forEach(([k, v]) => formData.append(k, String(v ?? "")));
        await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: formData.toString() }).catch(() => {});
      } catch {}

      // Send to HubSpot CRM (when forms are configured)
      try {
        await fetch("https://api.hsforms.com/submissions/v3/integration/submit/48197674/placeholder-form-id", {
          method: "POST",
          headers: { "Content-Type": "application/json",  },
          body: JSON.stringify({
            fields: Object.entries(payload).map(([k, v]) => ({ name: k, value: String(v ?? "") })),
            context: { pageUri: window.location.href, pageName: document.title },
          }),
        }).catch(() => {});
      } catch {}

      setIsSubmitted(true);
      toast({
        title: "Request Submitted Successfully",
        description: "A BH Labs representative will contact you shortly.",
      });
    } catch (err) {
      console.error("Form submission error:", err);
      toast({
        title: "Submission Error",
        description: "Please try again or call us at (954) 870-5814.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card rounded-2xl p-8 md:p-12 shadow-xl border border-border text-center" id="contact"
      >
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-emerald-600" />
        </div>
        <h3 className="text-2xl md:text-3xl font-serif font-medium mb-3 text-foreground">
          Thank You!
        </h3>
        <p className="text-muted-foreground text-lg mb-6 max-w-md mx-auto">
          Your request has been received. A BH Labs representative will contact you within 24 hours with your custom {getThankYouMessage(type)}.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="outline" onClick={() => { setIsSubmitted(false); form.reset(); }}>
            Submit Another Request
          </Button>
          {(type === "hotel" || type === "residential") && (
            <Button asChild>
              <a href="#calculator">
                Try the ROI Calculator
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          )}
        </div>
      </motion.div>
    );
  }

  const cityOptions = type === "hotel" && propertyStateValue ? (CITIES_BY_STATE[propertyStateValue] || []) : [];

  return (
    <div className="bg-card rounded-2xl p-5 md:p-8 lg:p-10 shadow-xl border border-border" id="contact">
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-serif font-medium mb-2 text-foreground">
          {title || "Request a Proposal"}
        </h3>
        <p className="text-muted-foreground">
          {subtitle || "Fill out the form below and we'll be in touch."}
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} data-testid="input-firstname" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Doe" {...field} data-testid="input-lastname" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Work Email *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="john@company.com" {...field} data-testid="input-email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {type !== "athletics-brief" && (
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number *</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="(555) 000-0000" {...field} data-testid="input-phone" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="property"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {type === "hotel" ? "Hotel/Resort Name *" :
                     type === "fitness" ? "Gym/Club Name *" :
                     type === "residential" ? "Property/Community Name *" :
                     "University/Program Name *"}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={
                        type === "hotel" ? "The Grand Hotel" :
                        type === "fitness" ? "Premier Fitness Club" :
                        type === "residential" ? "Oceanview Condos" :
                        "State University Athletics"
                      }
                      {...field}
                      data-testid="input-property"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role/Title *</FormLabel>
                  <FormControl>
                    {type === "hotel" ? (
                      <SelectField value={field.value} onChange={field.onChange} options={["General Manager", "Director of Operations", "VP of Hospitality", "Revenue Manager", "Spa/Wellness Director", "Owner", "Other"]} placeholder="Select role..." />
                    ) : type === "fitness" ? (
                      <SelectField value={field.value} onChange={field.onChange} options={["Owner", "General Manager", "Director of Operations", "Fitness Director", "Club Manager", "Other"]} placeholder="Select role..." />
                    ) : type === "residential" ? (
                      <SelectField value={field.value} onChange={field.onChange} options={["Property Manager", "HOA Board Member", "Developer", "Building Owner", "Community Director", "Other"]} placeholder="Select role..." />
                    ) : (
                      <SelectField value={field.value} onChange={field.onChange} options={["Athletic Director", "Head Coach", "Associate AD", "Sports Medicine Director", "Strength & Conditioning Coach", "Athletic Trainer", "Other"]} placeholder="Select role..." />
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {type === "hotel" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="propertyState" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property State *</FormLabel>
                    <FormControl>
                      <SelectField value={field.value} onChange={field.onChange} options={US_STATES} placeholder="Select state..." />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="propertyCity" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property City *</FormLabel>
                    <FormControl>
                      <SelectField
                        value={field.value}
                        onChange={field.onChange}
                        options={cityOptions}
                        placeholder={propertyStateValue ? "Select city..." : "Select a state first..."}
                        disabled={!propertyStateValue}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="numberOfRooms" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Rooms *</FormLabel>
                    <FormControl><Input type="number" placeholder="200" {...field} data-testid="input-units" /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="averageOccupancy" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Average Occupancy Rate *</FormLabel>
                    <FormControl>
                      <NumberInputWithSuffix value={field.value} onChange={field.onChange} placeholder="70" suffix="%" min={0} max={100} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="existingSpaGym" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Existing Spa/Gym/Wellness Area? *</FormLabel>
                    <FormControl>
                      <SelectField value={field.value} onChange={field.onChange} options={["Yes", "No", "Planned"]} placeholder="Select..." />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="estimatedPodSpace" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Estimated Pod Space (sq ft) *</FormLabel>
                    <FormControl><Input type="number" placeholder="500" {...field} min={0} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
              <FormField control={form.control} name="targetTimeline" render={({ field }) => (
                <FormItem>
                  <FormLabel>Target Timeline *</FormLabel>
                  <FormControl><Input placeholder="Q2 2026" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </>
          )}

          {type === "fitness" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="numberOfMembers" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Members *</FormLabel>
                    <FormControl><Input type="number" placeholder="500" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="numberOfLocations" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Locations *</FormLabel>
                    <FormControl><Input type="number" placeholder="1" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="facilityType" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type of Facility *</FormLabel>
                    <FormControl>
                      <SelectField value={field.value} onChange={field.onChange} options={["Gym", "Padel Club", "CrossFit", "Boutique Studio", "Multi-Sport Facility", "Martial Arts", "Other"]} placeholder="Select facility type..." />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="mainGoal" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Main Goal / Interest *</FormLabel>
                    <FormControl><Input placeholder="Member retention, premium tier, etc." {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
              <FormField control={form.control} name="currentRecoveryAmenities" render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Recovery Amenities *</FormLabel>
                  <FormControl>
                    <MultiCheckboxField value={field.value} onChange={field.onChange} options={["Sauna", "Cold Plunge", "Steam Room", "Massage", "Compression Boots", "Red Light Therapy", "Cryotherapy", "None"]} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="availableSpace" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Available Space (sq ft) *</FormLabel>
                    <FormControl><Input type="number" placeholder="400" {...field} min={0} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="targetTimeline" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Target Timeline *</FormLabel>
                    <FormControl><Input placeholder="Q2 2026" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
            </>
          )}

          {type === "residential" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="propertyType" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type of Property *</FormLabel>
                    <FormControl>
                      <SelectField value={field.value} onChange={field.onChange} options={["Condo", "HOA", "Mixed-Use", "Co-op", "Luxury Apartment", "Other"]} placeholder="Select property type..." />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="numberOfUnits" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Units *</FormLabel>
                    <FormControl><Input type="number" placeholder="150" {...field} data-testid="input-units" /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
              <FormField control={form.control} name="currentAmenities" render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Amenities *</FormLabel>
                  <FormControl>
                    <MultiCheckboxField value={field.value} onChange={field.onChange} options={["Pool", "Gym", "Clubhouse", "Spa", "Tennis Courts", "Concierge", "Business Center", "None"]} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="availableSpace" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Available Space (sq ft) *</FormLabel>
                    <FormControl><Input type="number" placeholder="500" {...field} min={0} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="wellnessFees" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amenity/Wellness Fees Currently? *</FormLabel>
                    <FormControl>
                      <SelectField value={field.value} onChange={field.onChange} options={["Yes", "No"]} placeholder="Select..." />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
              {wellnessFeesValue === "Yes" && (
                <FormField control={form.control} name="amenityFeeAmount" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amenity Fee Amount</FormLabel>
                    <FormControl><Input placeholder="$50/mo" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="decisionStage" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Decision Stage *</FormLabel>
                    <FormControl>
                      <SelectField value={field.value} onChange={field.onChange} options={["Just Exploring", "Actively Researching", "Comparing Options", "Ready to Move Forward"]} placeholder="Select stage..." />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="timeline" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Timeline *</FormLabel>
                    <FormControl><Input placeholder="Q2 2026" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
            </>
          )}

          {(type === "athletics-brief" || type === "athletics-full") && (
            <FormField control={form.control} name="sportDepartment" render={({ field }) => (
              <FormItem>
                <FormLabel>Sport / Department *</FormLabel>
                <FormControl>
                  <SelectField value={field.value} onChange={field.onChange} options={["Football", "Basketball", "All Sports", "Baseball/Softball", "Track & Field", "Soccer", "Swimming", "Volleyball", "Athletic Department", "Other"]} placeholder="Select sport..." />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          )}

          {type === "athletics-full" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="numberOfAthletes" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Athletes *</FormLabel>
                    <FormControl><Input type="number" placeholder="500" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="currentRecoverySetup" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Recovery Setup *</FormLabel>
                    <FormControl><Input placeholder="Ice baths, training room, etc." {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="annualRecoverySpend" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Annual Recovery Spend *</FormLabel>
                    <FormControl><Input placeholder="$50,000" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="facilitySpace" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Facility Space Available (sq ft) *</FormLabel>
                    <FormControl><Input placeholder="600 sq ft" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="budgetCycle" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Budget Cycle / Purchase Window *</FormLabel>
                    <FormControl><Input placeholder="Fiscal year starts July" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="timeline" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Timeline *</FormLabel>
                    <FormControl><Input placeholder="Q3 2026" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
            </>
          )}

          <Button
            type="submit"
            className="w-full h-12 text-base font-medium"
            disabled={isSubmitting}
            data-testid="button-submit-form"
          >
            {isSubmitting ? "Submitting..." : "Request a Meeting"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
