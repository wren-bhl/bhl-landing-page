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

const hotelSchema = z.object({
  firstName: req("First name is required"),
  lastName: req("Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  property: req("Name is required"),
  role: req("Role/Title is required"),
  propertyState: req("State is required"),
  propertyCity: req("City is required"),
  numberOfRooms: req("Number of rooms is required"),
  averageOccupancy: req("Occupancy rate is required"),
  existingSpaGym: req("This field is required"),
  estimatedPodSpace: req("Estimated pod space is required"),
  targetTimeline: req("Timeline is required"),
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

interface ContactFormProps {
  title?: string;
  subtitle?: string;
}

export function ContactForm({ title, subtitle }: ContactFormProps) {
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

  const form = useForm({
    resolver: zodResolver(hotelSchema),
    defaultValues: {
      firstName: "", lastName: "", email: "", phone: "", property: "", role: "",
      propertyState: "", propertyCity: "", numberOfRooms: "", averageOccupancy: "",
      existingSpaGym: "", estimatedPodSpace: "", targetTimeline: ""
    },
  });

  const propertyStateValue = form.watch("propertyState");

  useEffect(() => {
    if (propertyStateValue) {
      const currentCity = form.getValues("propertyCity");
      const availableCities = CITIES_BY_STATE[propertyStateValue] || [];
      if (currentCity && !availableCities.includes(currentCity)) {
        form.setValue("propertyCity", "");
      }
    }
  }, [propertyStateValue, form]);

  const onSubmit = (data: Record<string, unknown>) => {
    setIsSubmitting(true);
    const utmParams = getUTMParams();
    const payload = { ...data, ...utmParams, pageUrl: window.location.href, formType: "hotel" };
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
          Your request has been received. A BH Labs representative will contact you within 24 hours with your custom revenue projection.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="outline" onClick={() => { setIsSubmitted(false); form.reset(); }}>
            Submit Another Request
          </Button>
          <Button asChild>
            <a href="#calculator">
              Try the ROI Calculator
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </motion.div>
    );
  }

  const cityOptions = propertyStateValue ? (CITIES_BY_STATE[propertyStateValue] || []) : [];

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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="property"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hotel/Resort Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="The Grand Hotel" {...field} data-testid="input-property" />
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
                    <SelectField value={field.value} onChange={field.onChange} options={["General Manager", "Director of Operations", "VP of Hospitality", "Revenue Manager", "Spa/Wellness Director", "Owner", "Other"]} placeholder="Select role..." />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

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
