import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CASE_STUDIES } from "@/lib/content";
import { ArrowRight, Briefcase, Target, Lightbulb, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const CaseStudies = () => {
  return (
    <Layout>
      <SEO
        title="Case Studies"
        description="See how MPG Solution LLC has helped businesses improve their digital marketing results through strategic campaigns, creative strategy, and performance optimization."
        path="/case-studies"
      />

      <section className="border-b border-border bg-card py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground">Case Studies</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A look at how we've helped businesses improve their marketing performance through strategic campaign management and creative optimization.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-8">
            {CASE_STUDIES.map((cs) => (
              <Card key={cs.id} className="border-border overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/5">
                <CardContent className="p-6 lg:p-8">
                  <div className="mb-4 flex flex-wrap gap-2">
                    <Badge className="bg-accent text-accent-foreground border-0">{cs.industry}</Badge>
                    {cs.platforms.map((p) => (
                      <Badge key={p} variant="outline">{p}</Badge>
                    ))}
                  </div>
                  <h2 className="mb-4 text-2xl font-bold text-foreground">{cs.title}</h2>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-lg bg-card border border-border p-4">
                      <div className="mb-2 flex items-center gap-2">
                        <Target className="h-4 w-4 text-primary" />
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">Objective</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">{cs.objective}</p>
                    </div>
                    <div className="rounded-lg bg-card border border-border p-4">
                      <div className="mb-2 flex items-center gap-2">
                        <Lightbulb className="h-4 w-4 text-primary" />
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">Solution</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">{cs.solution}</p>
                    </div>
                    <div className="rounded-lg bg-card border border-border p-4">
                      <div className="mb-2 flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-primary" />
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">Services</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">{cs.services.join(", ")}</p>
                    </div>
                    <div className="rounded-lg bg-accent p-4">
                      <div className="mb-2 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">Result</h4>
                      </div>
                      <p className="text-sm font-medium text-foreground">{cs.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-14">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="mb-4 text-2xl font-bold text-primary-foreground">
            Let's Create Your Success Story
          </h2>
          <p className="mb-6 text-primary-foreground/80">
            Ready to see what strategic digital marketing can do for your business?
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Start a Conversation <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;