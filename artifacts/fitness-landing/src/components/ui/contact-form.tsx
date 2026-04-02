import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const req = (msg: string) => z.string().min(1, msg);

const fitnessSchema = z.object({
  firstName: req("First name is required"),
  lastName: req("Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  property: req("Gym/Club name is required"),
  role: req("Role/Title is required"),
  numberOfMembers: req("Number of members is required"),
  numberOfLocations: req("Number of locations is required"),
  facilityType: req("Facility type is required"),
  currentRecoveryAmenities: req("Please select at least one option"),
  availableSpace: req("Available space is required"),
  mainGoal: req("Main goal is required"),
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

function SelectField({ value, onChange, options, placeholder }: { value: string; onChange: (v: string) => void; options: string[]; placeholder?: string }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
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
    resolver: zodResolver(fitnessSchema),
    defaultValues: {
      firstName: "", lastName: "", email: "", phone: "", property: "", role: "",
      numberOfMembers: "", numberOfLocations: "", facilityType: "",
      currentRecoveryAmenities: "", availableSpace: "", mainGoal: "", targetTimeline: ""
    },
  });

  const onSubmit = (data: Record<string, unknown>) => {
    setIsSubmitting(true);
    const utmParams = getUTMParams();
    const payload = { ...data, ...utmParams, pageUrl: window.location.href, formType: "fitness" };
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
          Your request has been received. A BH Labs representative will contact you within 24 hours with your custom recovery pod proposal.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="outline" onClick={() => { setIsSubmitted(false); form.reset(); }}>
            Submit Another Request
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="bg-card rounded-2xl p-5 md:p-8 lg:p-10 shadow-xl border border-border" id="contact">
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-serif font-medium mb-2 text-foreground">
          {title || "Get Your Custom Recovery Pod"}
        </h3>
        <p className="text-muted-foreground">
          {subtitle || "Tell us about your facility and we'll design a recovery solution that drives retention and revenue."}
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                <FormLabel>Gym/Club Name *</FormLabel>
                <FormControl><Input placeholder="Premier Fitness Club" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="role" render={({ field }) => (
              <FormItem>
                <FormLabel>Role/Title *</FormLabel>
                <FormControl>
                  <SelectField value={field.value} onChange={field.onChange} options={["Owner", "General Manager", "Director of Operations", "Fitness Director", "Club Manager", "Other"]} placeholder="Select role..." />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

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
                <MultiCheckboxField value={field.value} onChange={field.onChange} options={["Sauna", "Cold Plunge", "Stretching Area", "Massage", "Compression Boots", "Red Light Therapy", "None"]} />
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

          <Button
            type="submit"
            className="w-full h-12 text-base font-medium"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Request a Meeting"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
