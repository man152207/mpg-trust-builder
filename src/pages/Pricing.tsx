import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PRICING_PLANS } from "@/lib/content";
import { CheckCircle, ArrowRight, Info } from "lucide-react";
import { cn } from "@/lib/utils";

const Pricing = () => {
  return (
    <Layout>
      <SEO
        title="Pricing & Plans"
        description="Explore MPG Solution LLC's transparent pricing plans for digital marketing services. From startup to enterprise, find the right plan for your business."
        path="/pricing"
      />

      <section className="border-b border-border bg-card py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground">Pricing & Plans</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Clear, straightforward pricing for professional digital marketing services. Choose the plan that fits your growth stage.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PRICING_PLANS.map((plan) => (
              <Card
                key={plan.id}
                className={cn(
                  "border-border relative flex flex-col",
                  plan.popular && "border-primary ring-2 ring-primary"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.subtitle}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                  </div>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col space-y-4">
                  {plan.bestFor && (
                    <div className="rounded-lg bg-accent/50 p-3">
                      <p className="text-xs text-muted-foreground">
                        <span className="font-semibold text-foreground">Best for:</span> {plan.bestFor}
                      </p>
                    </div>
                  )}
                  <ul className="flex-1 space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"} asChild>
                    <Link to="/contact">{plan.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-2xl space-y-4">
            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Note:</strong> All plans cover service and management fees only. Advertising spend (budget paid to Facebook/Instagram) is separate and determined based on your goals. Custom quotes are available for businesses with specific requirements.
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-6">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-1">Getting Started</h4>
                <p className="text-sm text-muted-foreground">
                  After signing up, we begin with a discovery call to understand your business, followed by strategy development, and campaign launch — typically within 5 to 10 business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-14">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="mb-4 text-2xl font-bold text-primary-foreground">
            Not Sure Which Plan Is Right?
          </h2>
          <p className="mb-6 text-primary-foreground/80">
            Let's talk about your goals and find the right fit for your business.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Request a Proposal <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;