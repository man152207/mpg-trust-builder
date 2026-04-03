import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/content";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import aboutVisual from "@/assets/about-visual.jpg";

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

      {/* Who We Are + Image */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Who We Are</h2>
              <p className="text-muted-foreground leading-relaxed">
                MPG Solution LLC is a digital advertising and marketing services company registered in Wyoming, USA. We specialize in helping businesses leverage the power of social media advertising — primarily Facebook and Instagram — to reach their ideal customers, generate qualified leads, and increase revenue.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team brings together expertise in performance marketing strategy, creative design, ad copywriting, and audience targeting to deliver campaigns that are not just visually compelling but strategically sound and results-oriented.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src={aboutVisual}
                alt="MPG Solution team working on digital advertising campaigns"
                width={1280}
                height={640}
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
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
          <div className="mx-auto max-w-xl rounded-2xl border border-border bg-background p-8 shadow-sm">
            <h3 className="mb-6 text-lg font-semibold text-foreground text-center">Company Information</h3>
            <div className="space-y-4 text-sm">
              {[
                { label: "Legal Name", value: COMPANY.legalName },
                { label: "Address", value: COMPANY.address },
                { label: "Phone", value: COMPANY.phone, isLink: `tel:${COMPANY.phone}` },
                { label: "Email", value: COMPANY.email, isLink: `mailto:${COMPANY.email}` },
                { label: "Website", value: COMPANY.website },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="font-medium text-foreground w-32 shrink-0">{item.label}</span>
                  {item.isLink ? (
                    <a href={item.isLink} className="text-primary hover:underline">{item.value}</a>
                  ) : (
                    <span className="text-muted-foreground">{item.value}</span>
                  )}
                </div>
              ))}
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Contact Us <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
            <a href={`tel:${COMPANY.phone}`} className="inline-flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground text-sm font-medium">
              <Phone className="h-4 w-4" /> {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
