import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/content";
import { CheckCircle, ArrowRight, MapPin, Mail, Globe } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <SEO
        title="About Us"
        description="Learn about MPG Solution LLC — a Wyoming-registered digital advertising company providing Facebook & Instagram advertising and marketing services."
        path="/about"
      />

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground">About MPG Solution LLC</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We help businesses grow through strategic, data-driven digital advertising on Facebook and Instagram.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed">
              MPG Solution LLC is a digital advertising and marketing services company registered in Wyoming, USA. We specialize in helping businesses leverage the power of social media advertising — primarily Facebook and Instagram — to reach their ideal customers, generate qualified leads, and increase revenue.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team brings together expertise in performance marketing strategy, creative design, ad copywriting, and audience targeting to deliver campaigns that are not just visually compelling but strategically sound and results-oriented.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="border-y border-border bg-card py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To provide businesses with clear, effective, and measurable digital advertising solutions that drive real growth — delivered with transparency, expertise, and a genuine commitment to our clients' success.
            </p>
          </div>
        </div>
      </section>

      {/* Industries & Differentiators */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold text-foreground">Industries We Serve</h2>
              <ul className="space-y-3">
                {[
                  "E-commerce and online retail",
                  "Local service businesses",
                  "B2B and SaaS companies",
                  "Health and wellness brands",
                  "Real estate and property",
                  "Education and coaching",
                  "Hospitality and travel",
                ].map((industry) => (
                  <li key={industry} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                    {industry}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-2xl font-bold text-foreground">What Makes Us Different</h2>
              <ul className="space-y-3">
                {[
                  "Performance-first approach — every campaign is optimized for results",
                  "Full-service creative and strategy support",
                  "Transparent reporting with no hidden metrics",
                  "Custom strategies tailored to each client's goals",
                  "Continuous optimization throughout campaign lifecycle",
                  "Clear, professional communication at every step",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Block */}
      <section className="border-t border-border bg-card py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-xl rounded-xl border border-border bg-background p-8">
            <h3 className="mb-6 text-lg font-semibold text-foreground text-center">Company Information</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <span className="font-medium text-foreground w-32 shrink-0">Legal Name</span>
                <span className="text-muted-foreground">{COMPANY.legalName}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-medium text-foreground w-32 shrink-0">Address</span>
                <span className="text-muted-foreground">{COMPANY.address}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-medium text-foreground w-32 shrink-0">Email</span>
                <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">{COMPANY.email}</a>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-medium text-foreground w-32 shrink-0">Website</span>
                <span className="text-muted-foreground">{COMPANY.website}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="mb-4 text-2xl font-bold text-primary-foreground">
            Ready to Work Together?
          </h2>
          <p className="mb-6 text-primary-foreground/80">
            Get in touch to discuss how we can help grow your business.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Contact Us <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
