import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SERVICES } from "@/lib/content";
import {
  ArrowRight, Facebook, Instagram, TrendingUp, PenTool, Palette, Target, Settings,
  Users, ShoppingCart, Layout as LayoutIcon, Share2, Megaphone, Lightbulb,
  RefreshCw, Filter, MessageCircle, ClipboardCheck, Type
} from "lucide-react";
import servicesVisual from "@/assets/services-visual.jpg";

const iconMap: Record<string, React.ElementType> = {
  Facebook, Instagram, TrendingUp, PenTool, Palette, Target, Settings, Users,
  ShoppingCart, Layout: LayoutIcon, Share2, Megaphone, Lightbulb,
  RefreshCw, Filter, MessageCircle, ClipboardCheck, Type,
};

const Services = () => {
  return (
    <Layout>
      <SEO
        title="Services"
        description="Explore MPG Solution LLC's digital marketing services including social media strategy, Meta Ads management, Facebook & Instagram advertising, creative strategy, lead generation, and more."
        path="/services"
      />

      <section className="border-b border-border bg-card py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h1 className="mb-4 text-4xl font-bold text-foreground">Our Services</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                End-to-end digital marketing services designed to help your business reach, engage, and convert your ideal customers — from strategy and creative to campaign management and optimization.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{SERVICES.length} services</span> across strategy, creative, paid campaigns, and growth support.
              </p>
            </div>
            <div className="hidden lg:block overflow-hidden rounded-2xl">
              <img
                src={servicesVisual}
                alt="Digital marketing services overview"
                width={1280}
                height={640}
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-8">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon] || Target;
              return (
                <Card key={service.id} className="border-border overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/5">
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <div className="flex-1 space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">{service.title}</h2>
                        <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                        <div className="grid gap-4 sm:grid-cols-3">
                          <div className="rounded-lg bg-accent/50 p-4">
                            <h4 className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">Who It's For</h4>
                            <p className="text-sm text-muted-foreground">{service.forWhom}</p>
                          </div>
                          <div className="rounded-lg bg-accent/50 p-4">
                            <h4 className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">Expected Benefit</h4>
                            <p className="text-sm text-muted-foreground">{service.benefit}</p>
                          </div>
                          <div className="rounded-lg bg-accent/50 p-4">
                            <h4 className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">Our Approach</h4>
                            <p className="text-sm text-muted-foreground">{service.approach}</p>
                          </div>
                        </div>
                        <Button asChild>
                          <Link to="/contact">
                            Get Started <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-primary py-14">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="mb-4 text-2xl font-bold text-primary-foreground">
            Need a Custom Solution?
          </h2>
          <p className="mb-6 text-primary-foreground/80">
            Every business is different. Let's build a marketing strategy tailored to your goals.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Request a Proposal <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;