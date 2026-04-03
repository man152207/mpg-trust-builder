import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/content";
import { CheckCircle, ArrowRight, Phone, Building2, Globe, Users, Target } from "lucide-react";
import aboutVisual from "@/assets/about-visual.jpg";

const About = () => {
  return (
    <Layout>
      <SEO
        title="About Us"
        description="Learn about MPG Solution LLC — a digital marketing company providing social media marketing, Meta Ads management, creative strategy, and performance marketing services."
        path="/about"
      />

      {/* Hero */}
      <section className="border-b border-border bg-card py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground">About MPG Solution LLC</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We help businesses grow through strategic, performance-focused digital marketing — from social media campaigns and creative strategy to lead generation and conversion optimization.
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
                MPG Solution LLC is a digital marketing company registered in Wyoming, USA. We specialize in helping businesses leverage the power of strategic marketing — including social media advertising, Meta Ads management, creative strategy, and performance-focused campaigns — to reach their ideal customers, generate qualified leads, and increase revenue.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team brings together expertise in digital marketing strategy, campaign management, creative design, ad copywriting, and audience targeting to deliver marketing that is not just visually compelling but strategically sound and results-oriented.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src={aboutVisual}
                alt="MPG Solution team working on digital marketing campaigns"
                width={1280}
                height={640}
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How We Support Businesses */}
      <section className="border-y border-border bg-card py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground">How We Support Businesses</h2>
            <p className="text-muted-foreground leading-relaxed">
              We focus on digital marketing work that directly impacts business growth — strategy, creative, paid campaigns, and optimization.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Target, title: "Strategy", desc: "Custom marketing strategies built around your business goals and audience." },
              { icon: Building2, title: "Campaign Management", desc: "Full-service management of paid social campaigns with ongoing optimization." },
              { icon: Users, title: "Lead Generation", desc: "Structured campaigns designed to deliver qualified leads consistently." },
              { icon: Globe, title: "Creative & Messaging", desc: "Compelling ad creatives, copywriting, and brand messaging support." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-background p-6 text-center">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To provide businesses with clear, effective, and measurable digital marketing solutions that drive real growth — delivered with transparency, expertise, and a genuine commitment to our clients' success.
            </p>
          </div>
        </div>
      </section>

      {/* Industries & Differentiators */}
      <section className="border-y border-border bg-card py-16 lg:py-20">
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
                  "Startups and growing businesses",
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
                  "Full-service creative, strategy, and campaign support",
                  "Transparent reporting with no hidden metrics",
                  "Custom strategies tailored to each client's goals",
                  "Continuous optimization throughout campaign lifecycle",
                  "Clear, professional communication at every step",
                  "Broader digital marketing support beyond just ad management",
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
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-xl rounded-2xl border border-border bg-card p-8 shadow-sm">
            <h3 className="mb-6 text-lg font-semibold text-foreground text-center">Company Information</h3>
            <div className="space-y-4 text-sm">
              {[
                { label: "Legal Name", value: COMPANY.legalName },
                { label: "Address", value: COMPANY.address },
                { label: "Phone", value: COMPANY.phone, isLink: `tel:${COMPANY.phone}` },
                { label: "Email", value: COMPANY.email, isLink: `mailto:${COMPANY.email}` },
                { label: "Website", value: COMPANY.website },
                { label: "Nature of Business", value: COMPANY.nature },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="font-medium text-foreground w-36 shrink-0">{item.label}</span>
                  {item.isLink ? (
                    <a href={item.isLink} className="text-primary hover:underline">{item.value}</a>
                  ) : (
                    <span className="text-muted-foreground">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-border text-center">
              <p className="text-xs text-muted-foreground">{COMPANY.owner}</p>
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
            Get in touch to discuss how we can help grow your business through digital marketing.
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