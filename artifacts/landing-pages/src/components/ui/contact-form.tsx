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

const baseSchema = {
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  property: z.string().min(2, "Name is required"),
  role: z.string().min(2, "Role/Title is required"),
};

const hotelSchema = z.object({
  ...baseSchema,
  propertyLocation: z.string().optional(),
  numberOfRooms: z.string().optional(),
  averageOccupancy: z.string().optional(),
  existingSpaGym: z.string().optional(),
  estimatedPodSpace: z.string().optional(),
  targetTimeline: z.string().optional(),
});

const fitnessSchema = z.object({
  ...baseSchema,
  numberOfMembers: z.string().optional(),
  numberOfLocations: z.string().optional(),
  facilityType: z.string().optional(),
  currentRecoveryAmenities: z.string().optional(),
  availableSpace: z.string().optional(),
  mainGoal: z.string().optional(),
  targetTimeline: z.string().optional(),
});

const residentialSchema = z.object({
  ...baseSchema,
  propertyType: z.string().optional(),
  numberOfUnits: z.string().optional(),
  currentAmenities: z.string().optional(),
  availableSpace: z.string().optional(),
  wellnessFees: z.string().optional(),
  decisionStage: z.string().optional(),
  timeline: z.string().optional(),
});

const athleticsBriefSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  property: z.string().min(2, "University/Program name is required"),
  role: z.string().min(2, "Role/Title is required"),
  sportDepartment: z.string().optional(),
});

const athleticsFullSchema = z.object({
  ...baseSchema,
  sportDepartment: z.string().optional(),
  numberOfAthletes: z.string().optional(),
  currentRecoverySetup: z.string().optional(),
  annualRecoverySpend: z.string().optional(),
  facilitySpace: z.string().optional(),
  budgetCycle: z.string().optional(),
  timeline: z.string().optional(),
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
      return { ...base, propertyLocation: "", numberOfRooms: "", averageOccupancy: "", existingSpaGym: "", estimatedPodSpace: "", targetTimeline: "" };
    case "fitness":
      return { ...base, numberOfMembers: "", numberOfLocations: "", facilityType: "", currentRecoveryAmenities: "", availableSpace: "", mainGoal: "", targetTimeline: "" };
    case "residential":
      return { ...base, propertyType: "", numberOfUnits: "", currentAmenities: "", availableSpace: "", wellnessFees: "", decisionStage: "", timeline: "" };
    case "athletics-brief":
      return { firstName: "", lastName: "", email: "", property: "", role: "", sportDepartment: "" };
    case "athletics-full":
      return { ...base, sportDepartment: "", numberOfAthletes: "", currentRecoverySetup: "", annualRecoverySpend: "", facilitySpace: "", budgetCycle: "", timeline: "" };
  }
}

function getSubmitLabel(type: FormType) {
  switch (type) {
    case "hotel": return "Request a Revenue Projection";
    case "fitness": return "Get Your Custom Recovery Pod";
    case "residential": return "Request a Property Assessment";
    case "athletics-brief": return "Download the Athletics Recovery Brief";
    case "athletics-full": return "Request a Proposal";
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

  const onSubmit = (data: Record<string, unknown>) => {
    setIsSubmitting(true);
    const utmParams = getUTMParams();
    const payload = { ...data, ...utmParams, pageUrl: window.location.href, formType: type };
    console.log("Form submission payload:", payload);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Request Submitted Successfully",
        description: "A BH Labs representative will contact you shortly.",
      });
    }, 1500);
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

  return (
    <div className="bg-card rounded-2xl p-8 md:p-10 shadow-xl border border-border" id="contact">
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
                  <FormLabel>First Name</FormLabel>
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
                  <FormLabel>Last Name</FormLabel>
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
                  <FormLabel>Work Email</FormLabel>
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
                    <FormLabel>Phone Number</FormLabel>
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
                    {type === "hotel" ? "Hotel/Resort Name" :
                     type === "fitness" ? "Gym/Club Name" :
                     type === "residential" ? "Property/Community Name" :
                     "University/Program Name"}
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
                  <FormLabel>Role/Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={
                        type === "hotel" ? "General Manager" :
                        type === "fitness" ? "Owner / Director" :
                        type === "residential" ? "Property Manager" :
                        "Athletic Director"
                      }
                      {...field}
                      data-testid="input-role"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {type === "hotel" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="propertyLocation" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property Location</FormLabel>
                    <FormControl><Input placeholder="Miami, FL" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="numberOfRooms" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Rooms</FormLabel>
                    <FormControl><Input type="number" placeholder="200" {...field} data-testid="input-units" /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="averageOccupancy" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Average Occupancy Rate</FormLabel>
                    <FormControl><Input placeholder="70%" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="existingSpaGym" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Existing Spa/Gym/Wellness Area?</FormLabel>
                    <FormControl><Input placeholder="Yes — 2,000 sq ft spa" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="estimatedPodSpace" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Estimated Pod Space (sq ft)</FormLabel>
                    <FormControl><Input placeholder="500 sq ft" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="targetTimeline" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Target Timeline</FormLabel>
                    <FormControl><Input placeholder="Q2 2026" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
            </>
          )}

          {type === "fitness" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="numberOfMembers" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Members</FormLabel>
                    <FormControl><Input type="number" placeholder="500" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="numberOfLocations" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Locations</FormLabel>
                    <FormControl><Input type="number" placeholder="1" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="facilityType" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type of Facility</FormLabel>
                    <FormControl><Input placeholder="Gym / Padel Club / CrossFit / Boutique" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="currentRecoveryAmenities" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Recovery Amenities</FormLabel>
                    <FormControl><Input placeholder="Sauna, cold plunge, etc." {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="availableSpace" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Available Space (sq ft)</FormLabel>
                    <FormControl><Input placeholder="400 sq ft" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="mainGoal" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Main Goal / Interest</FormLabel>
                    <FormControl><Input placeholder="Member retention, premium tier, etc." {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
              <FormField control={form.control} name="targetTimeline" render={({ field }) => (
                <FormItem>
                  <FormLabel>Target Timeline</FormLabel>
                  <FormControl><Input placeholder="Q2 2026" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </>
          )}

          {type === "residential" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="propertyType" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type of Property</FormLabel>
                    <FormControl><Input placeholder="Condo / HOA / Mixed-Use" {...field} data-testid="input-property-type" /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="numberOfUnits" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Units</FormLabel>
                    <FormControl><Input type="number" placeholder="150" {...field} data-testid="input-units" /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="currentAmenities" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Amenities</FormLabel>
                    <FormControl><Input placeholder="Pool, gym, clubhouse, etc." {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="availableSpace" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Available Space (sq ft)</FormLabel>
                    <FormControl><Input placeholder="500 sq ft" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="wellnessFees" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amenity/Wellness Fees Currently?</FormLabel>
                    <FormControl><Input placeholder="Yes — $50/mo amenity fee" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="decisionStage" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Decision Stage</FormLabel>
                    <FormControl><Input placeholder="Researching / Comparing / Ready to move" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
              <FormField control={form.control} name="timeline" render={({ field }) => (
                <FormItem>
                  <FormLabel>Timeline</FormLabel>
                  <FormControl><Input placeholder="Q2 2026" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </>
          )}

          {(type === "athletics-brief" || type === "athletics-full") && (
            <FormField control={form.control} name="sportDepartment" render={({ field }) => (
              <FormItem>
                <FormLabel>Sport / Department</FormLabel>
                <FormControl><Input placeholder="Football, Basketball, All Sports" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          )}

          {type === "athletics-full" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="numberOfAthletes" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Athletes</FormLabel>
                    <FormControl><Input type="number" placeholder="500" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="currentRecoverySetup" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Recovery Setup</FormLabel>
                    <FormControl><Input placeholder="Ice baths, training room, etc." {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="annualRecoverySpend" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Annual Recovery Spend</FormLabel>
                    <FormControl><Input placeholder="$50,000" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="facilitySpace" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Facility Space Available (sq ft)</FormLabel>
                    <FormControl><Input placeholder="600 sq ft" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="budgetCycle" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Budget Cycle / Purchase Window</FormLabel>
                    <FormControl><Input placeholder="Fiscal year starts July" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="timeline" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Timeline</FormLabel>
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
            {isSubmitting ? "Submitting..." : getSubmitLabel(type)}
          </Button>
        </form>
      </Form>
    </div>
  );
}
