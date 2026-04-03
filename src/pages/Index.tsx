import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { COMPANY, SERVICES, CASE_STUDIES, FAQS } from "@/lib/content";
import { BLOG_POSTS } from "@/lib/blog-data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Facebook, Instagram, TrendingUp, PenTool, Target, Users, Share2, Megaphone,
  CheckCircle, ArrowRight, Zap, BarChart3, MessageSquare, Phone, Lightbulb,
  Globe, Briefcase, Heart
} from "lucide-react";
import heroVisual from "@/assets/hero-visual.jpg";

const iconMap: Record<string, React.ElementType> = {
  Facebook, Instagram, TrendingUp, PenTool, Target, Users, Share2, Megaphone, Lightbulb,
};

const Index = () => {
  const coreServices = SERVICES.slice(0, 6);

  return (
    <Layout>
      <SEO
        title="Strategic Digital Marketing Services"
        description="MPG Solution LLC offers strategic digital marketing services including social media marketing, Meta Ads management, lead generation, creative strategy, and performance marketing for growing businesses."
        path="/"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/30" />
        <div className="container relative mx-auto px-4 py-16 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">
                <Zap className="h-3.5 w-3.5 text-primary" />
                Performance-Driven Digital Marketing Company
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-[3.25rem]">
                Strategic{" "}
                <span className="text-primary">Digital Marketing</span>{" "}
                for Growing Businesses
              </h1>
              <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                From social media strategy and paid campaigns to creative design and lead generation — we deliver marketing that drives measurable business growth.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Get a Quote <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/services">View Services</Link>
                </Button>
              </div>
              <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <Phone className="h-4 w-4 text-primary" />
                  {COMPANY.phone}
                </a>
                <span className="text-border">|</span>
                <a href={`mailto:${COMPANY.email}`} className="hover:text-primary transition-colors">
                  {COMPANY.email}
                </a>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="overflow-hidden rounded-2xl shadow-2xl shadow-primary/10">
                <img
                  src={heroVisual}
                  alt="Digital marketing analytics dashboard"
                  width={1280}
                  height={720}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="border-b border-border bg-card">
        <div className="container mx-auto grid grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4 lg:px-8">
          {[
            { icon: Zap, label: "Performance Marketing", sub: "Data-Driven Campaigns" },
            { icon: BarChart3, label: "Full-Funnel Strategy", sub: "Awareness to Conversion" },
            { icon: Lightbulb, label: "Creative Strategy", sub: "Compelling Brand Messaging" },
            { icon: MessageSquare, label: "Dedicated Support", sub: "Responsive Communication" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
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
              Comprehensive digital marketing solutions designed to drive real business growth.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service) => {
              const Icon = iconMap[service.icon] || Target;
              return (
                <Card key={service.id} className="group border-border transition-all hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent">
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
              <Link to="/services">View All {SERVICES.length} Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="border-y border-border bg-card py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">Who We Help</h2>
            <p className="text-muted-foreground">
              We partner with businesses across industries that are ready to grow through smart digital marketing.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShoppingCart, label: "E-commerce Brands", desc: "Drive online sales and reduce acquisition costs" },
              { icon: Briefcase, label: "B2B & Service Businesses", desc: "Generate qualified leads and build pipelines" },
              { icon: Heart, label: "Health & Wellness", desc: "Build brand awareness and customer trust" },
              { icon: Globe, label: "Local Businesses", desc: "Reach local customers with targeted campaigns" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-border bg-background p-6 text-center transition-all hover:shadow-md hover:shadow-primary/5">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-1 text-sm font-semibold text-foreground">{item.label}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">Why Businesses Work With MPG Solution LLC</h2>
            <p className="text-muted-foreground">
              We focus on what matters — measurable results, transparent communication, and strategies built for growth.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Data-Driven Approach", desc: "Every decision backed by analytics. We track, measure, and optimize to ensure your budget delivers maximum impact." },
              { title: "Creative Excellence", desc: "Compelling creatives and copy that capture attention and drive action in crowded social feeds." },
              { title: "Transparent Reporting", desc: "Clear, honest reporting on campaign performance. No vanity metrics — just the numbers that matter to your business." },
              { title: "Full-Service Marketing", desc: "From strategy and creative to campaign management and optimization — everything you need under one roof." },
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
      <section className="border-y border-border bg-card py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">How We Work</h2>
            <p className="text-muted-foreground">
              A simple, transparent process from consultation to campaign performance.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { step: "01", title: "Discovery & Strategy", desc: "We learn your business, audience, and goals, then build a tailored marketing strategy." },
              { step: "02", title: "Launch & Execute", desc: "We set up campaigns, produce creatives, configure targeting, and launch across your chosen platforms." },
              { step: "03", title: "Optimize & Report", desc: "We continuously monitor performance, make data-driven optimizations, and provide transparent reports." },
            ].map((item) => (
              <div key={item.step} className="relative rounded-2xl border border-border bg-background p-8 text-center transition-all hover:shadow-lg hover:shadow-primary/5">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">{item.step}</div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">Selected Work</h2>
            <p className="text-muted-foreground">
              Real projects, real strategies, real impact.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {CASE_STUDIES.slice(0, 4).map((cs) => (
              <Card key={cs.id} className="border-border transition-all hover:shadow-lg hover:shadow-primary/5">
                <CardContent className="p-6">
                  <span className="mb-3 inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
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

      {/* Blog Preview */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">Latest Insights</h2>
            <p className="text-muted-foreground">Expert strategies and tips from our marketing blog.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {BLOG_POSTS.filter(p => p.status === "published").slice(0, 3).map((post) => (
              <Card key={post.id} className="group overflow-hidden border-border transition-all hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5">
                <div className="aspect-[16/9] overflow-hidden bg-accent">
                  <img src={`/blog/${post.slug}.jpg`} alt={post.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg"; }} />
                </div>
                <CardContent className="p-5">
                  <span className="mb-2 inline-block rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground">{post.category}</span>
                  <h3 className="mb-2 text-sm font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">{post.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link to="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="border-t border-border bg-card py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible>
              {FAQS.slice(0, 5).map((faq, i) => (
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
          <p className="mb-8 text-primary-foreground/80 max-w-xl mx-auto">
            Let's discuss how strategic digital marketing can drive results for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Book a Consultation <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <a href={`tel:${COMPANY.phone}`} className="inline-flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground text-sm font-medium transition-colors">
              <Phone className="h-4 w-4" /> {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const ShoppingCart = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
);

export default Index;