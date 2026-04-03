import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { COMPANY, SERVICES } from "@/lib/content";
import { MapPin, Mail, Globe, Phone, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!consent) {
      toast({ title: "Please accept the privacy policy to continue.", variant: "destructive" });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <Layout>
      <SEO
        title="Contact Us"
        description="Get in touch with MPG Solution LLC for a consultation about your digital advertising needs. Request a quote or book a call."
        path="/contact"
      />

      <section className="border-b border-border bg-card py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              Ready to discuss your digital advertising goals? Send us an inquiry and we'll get back to you promptly.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-12 text-center">
                  <CheckCircle className="mb-4 h-12 w-12 text-primary" />
                  <h2 className="mb-2 text-2xl font-bold text-foreground">Thank You</h2>
                  <p className="text-muted-foreground">
                    Your inquiry has been received. We'll review your message and get back to you within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">Full Name *</label>
                      <Input placeholder="Your name" required maxLength={100} />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">Company</label>
                      <Input placeholder="Company name" maxLength={100} />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">Email *</label>
                      <Input type="email" placeholder="your@email.com" required maxLength={255} />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">Phone (Optional)</label>
                      <Input type="tel" placeholder="+1 (555) 000-0000" maxLength={20} />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">Service Interest</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {SERVICES.map((s) => (
                          <SelectItem key={s.id} value={s.id}>{s.title}</SelectItem>
                        ))}
                        <SelectItem value="other">Other / Not Sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">Message *</label>
                    <Textarea placeholder="Tell us about your project or goals..." required rows={5} maxLength={1000} />
                  </div>
                  <div className="flex items-start gap-2">
                    <Checkbox
                      id="consent"
                      checked={consent}
                      onCheckedChange={(v) => setConsent(v === true)}
                    />
                    <label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed">
                      I agree to the{" "}
                      <Link to="/privacy" className="text-primary underline">Privacy Policy</Link>.
                      By submitting this form, I consent to MPG Solution LLC contacting me regarding my inquiry.
                    </label>
                  </div>
                  <Button type="submit" disabled={loading} size="lg">
                    {loading ? "Sending..." : "Send Inquiry"}
                  </Button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="mb-4 text-lg font-semibold text-foreground">Business Contact</h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{COMPANY.address}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-4 w-4 shrink-0 text-primary" />
                    <a href={`tel:${COMPANY.phone}`} className="text-primary hover:underline">{COMPANY.phone}</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-4 w-4 shrink-0 text-primary" />
                    <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">{COMPANY.email}</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Globe className="h-4 w-4 shrink-0 text-primary" />
                    <span>{COMPANY.website}</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="mb-2 text-lg font-semibold text-foreground">Response Time</h3>
                <p className="text-sm text-muted-foreground">
                  We typically respond to all inquiries within one business day. For urgent matters, please indicate the priority in your message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
