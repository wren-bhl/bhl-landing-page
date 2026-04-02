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

const athleticsSchema = z.object({
  firstName: req("First name is required"),
  lastName: req("Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  university: req("University name is required"),
  role: req("Role/Title is required"),
  numberOfSports: req("Number of sports programs is required"),
  numberOfAthletes: req("Number of athletes is required"),
  currentRecoveryMethods: req("Please select at least one option"),
  availableSpace: req("Available space is required"),
  primaryGoal: req("Primary goal is required"),
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
    resolver: zodResolver(athleticsSchema),
    defaultValues: {
      firstName: "", lastName: "", email: "", phone: "", university: "", role: "",
      numberOfSports: "", numberOfAthletes: "", currentRecoveryMethods: "",
      availableSpace: "", primaryGoal: "", targetTimeline: ""
    },
  });

  const onSubmit = (data: Record<string, unknown>) => {
    setIsSubmitting(true);
    const utmParams = getUTMParams();
    const payload = { ...data, ...utmParams, pageUrl: window.location.href, formType: "athletics" };
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
    <div className="bg-card rounded-2xl p-8 md:p-10 shadow-xl border border-border" id="contact">
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-serif font-medium mb-2 text-foreground">
          {title || "Get Your Custom Recovery Pod Proposal"}
        </h3>
        <p className="text-muted-foreground">
          {subtitle || "Tell us about your athletics program and we'll design a recovery solution tailored to your needs."}
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
                <FormControl><Input type="email" placeholder="john@university.edu" {...field} /></FormControl>
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
            <FormField control={form.control} name="university" render={({ field }) => (
              <FormItem>
                <FormLabel>University Name *</FormLabel>
                <FormControl><Input placeholder="State University" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="role" render={({ field }) => (
              <FormItem>
                <FormLabel>Role/Title *</FormLabel>
                <FormControl>
                  <SelectField value={field.value} onChange={field.onChange} options={["Athletic Director", "Associate AD", "Head Athletic Trainer", "Director of Sports Medicine", "Head Coach", "Director of Performance", "Facilities Director", "Other"]} placeholder="Select role..." />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField control={form.control} name="numberOfSports" render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Sports Programs *</FormLabel>
                <FormControl><Input type="number" placeholder="20" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="numberOfAthletes" render={({ field }) => (
              <FormItem>
                <FormLabel>Total Number of Athletes *</FormLabel>
                <FormControl><Input type="number" placeholder="400" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <FormField control={form.control} name="currentRecoveryMethods" render={({ field }) => (
            <FormItem>
              <FormLabel>Current Recovery Methods *</FormLabel>
              <FormControl>
                <MultiCheckboxField value={field.value} onChange={field.onChange} options={["Cold Plunge / Ice Baths", "Outsourced Cryo", "Compression Boots", "Athletic Training Room Only", "Off-Campus Recovery Center", "Massage / Manual Therapy", "None"]} />
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
            <FormField control={form.control} name="primaryGoal" render={({ field }) => (
              <FormItem>
                <FormLabel>Primary Goal *</FormLabel>
                <FormControl>
                  <SelectField value={field.value} onChange={field.onChange} options={["Reduce Injury Downtime", "Accelerate Return-to-Play", "Replace Outsourced Recovery", "Recruiting Advantage", "Comprehensive Athlete Wellness", "Cost Savings", "Other"]} placeholder="Select primary goal..." />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <FormField control={form.control} name="targetTimeline" render={({ field }) => (
            <FormItem>
              <FormLabel>Target Timeline *</FormLabel>
              <FormControl>
                <SelectField value={field.value} onChange={field.onChange} options={["Before Next Season", "Within 3 Months", "Within 6 Months", "Next Academic Year", "Exploring Options"]} placeholder="Select timeline..." />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

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
