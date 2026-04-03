import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { COMPANY, SERVICES, CASE_STUDIES, FAQS } from "@/lib/content";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Facebook, Instagram, TrendingUp, PenTool, Target, Users,
  CheckCircle, ArrowRight, Shield, Zap, BarChart3, MessageSquare
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Facebook, Instagram, TrendingUp, PenTool, Target, Users,
};

const Index = () => {
  const coreServices = SERVICES.slice(0, 6);

  return (
    <Layout>
      <SEO
        title="Digital Advertising & Marketing Services"
        description="MPG Solution LLC provides performance-focused Facebook & Instagram advertising, creative strategy, and marketing services for growing businesses."
        path="/"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3" />
        <div className="container relative mx-auto px-4 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <Shield className="h-3.5 w-3.5 text-primary" />
              Wyoming-Registered Digital Advertising Company
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Scale Your Business with Strategic{" "}
              <span className="text-primary">Facebook & Instagram</span>{" "}
              Advertising
            </h1>
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed md:text-xl">
              Data-driven ad campaigns, compelling creatives, and precision targeting that deliver measurable growth for your business.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Get a Quote <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="border-b border-border bg-card">
        <div className="container mx-auto grid grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4 lg:px-8">
          {[
            { icon: Shield, label: "Wyoming Registered", sub: "US Business Entity" },
            { icon: Zap, label: "Performance Focused", sub: "Data-Driven Results" },
            { icon: BarChart3, label: "Full-Funnel Strategy", sub: "Awareness to Conversion" },
            { icon: MessageSquare, label: "Dedicated Support", sub: "Responsive Communication" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center">
              <item.icon className="mb-2 h-6 w-6 text-primary" />
              <p className="text-sm font-semibold text-foreground">{item.label}</p>
              <p className="text-xs text-muted-foreground">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">Our Core Services</h2>
            <p className="text-muted-foreground">
              Comprehensive digital advertising solutions designed to drive real business growth.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service) => {
              const Icon = iconMap[service.icon] || Target;
              return (
                <Card key={service.id} className="group border-border transition-shadow hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">{service.title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{service.shortDesc}</p>
                    <Link
                      to="/services"
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      Learn More <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-y border-border bg-card py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">Why Choose MPG Solution LLC</h2>
            <p className="text-muted-foreground">
              We focus on what matters — measurable results, transparent communication, and strategies built for growth.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Data-Driven Approach", desc: "Every decision backed by analytics. We track, measure, and optimize to ensure your budget delivers maximum impact." },
              { title: "Creative Excellence", desc: "Compelling ad creatives and copy that capture attention and drive action in crowded social feeds." },
              { title: "Transparent Reporting", desc: "Clear, honest reporting on campaign performance. No vanity metrics — just the numbers that matter to your business." },
              { title: "Platform Expertise", desc: "Deep understanding of Facebook and Instagram advertising platforms, algorithms, and best practices." },
              { title: "Tailored Strategies", desc: "No cookie-cutter campaigns. Every strategy is custom-built around your business goals and target audience." },
              { title: "Ongoing Optimization", desc: "Continuous monitoring and optimization to improve performance throughout the life of every campaign." },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">How We Work</h2>
            <p className="text-muted-foreground">
              A simple, transparent process from consultation to campaign performance.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { step: "01", title: "Discovery & Strategy", desc: "We learn your business, audience, and goals, then build a tailored advertising strategy." },
              { step: "02", title: "Launch & Execute", desc: "We set up campaigns, produce creatives, configure targeting, and launch across your chosen platforms." },
              { step: "03", title: "Optimize & Report", desc: "We continuously monitor performance, make data-driven optimizations, and provide transparent reports." },
            ].map((item) => (
              <div key={item.step} className="relative rounded-xl border border-border bg-card p-6 text-center">
                <div className="mb-3 text-3xl font-bold text-primary/20">{item.step}</div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="border-y border-border bg-card py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">Selected Work</h2>
            <p className="text-muted-foreground">
              Real projects, real strategies, real impact.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CASE_STUDIES.map((cs) => (
              <Card key={cs.id} className="border-border">
                <CardContent className="p-6">
                  <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {cs.industry}
                  </span>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{cs.title}</h3>
                  <p className="mb-3 text-sm text-muted-foreground leading-relaxed">{cs.objective}</p>
                  <p className="text-sm font-medium text-foreground">{cs.result}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link to="/case-studies">View All Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible>
              {FAQS.slice(0, 4).map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-sm">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="mt-6 text-center">
              <Button variant="outline" asChild>
                <Link to="/faq">View All FAQs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-border bg-primary">
        <div className="container mx-auto px-4 py-16 text-center lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground">
            Ready to Grow Your Business?
          </h2>
          <p className="mb-8 text-primary-foreground/80">
            Let's discuss how strategic digital advertising can drive results for your business.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              Book a Consultation <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
