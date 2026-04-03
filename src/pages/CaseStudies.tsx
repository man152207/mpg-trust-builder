import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CASE_STUDIES } from "@/lib/content";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const CaseStudies = () => {
  return (
    <Layout>
      <SEO
        title="Case Studies"
        description="See how MPG Solution LLC has helped businesses improve their digital advertising results through strategic campaigns."
        path="/case-studies"
      />

      <section className="border-b border-border bg-card py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground">Case Studies</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A look at how we've helped businesses improve their advertising performance through strategic campaign management.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-8">
            {CASE_STUDIES.map((cs) => (
              <Card key={cs.id} className="border-border">
                <CardContent className="p-6 lg:p-8">
                  <div className="mb-4 flex flex-wrap gap-2">
                    <Badge variant="secondary">{cs.industry}</Badge>
                    {cs.platforms.map((p) => (
                      <Badge key={p} variant="outline">{p}</Badge>
                    ))}
                  </div>
                  <h2 className="mb-3 text-2xl font-bold text-foreground">{cs.title}</h2>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                      <h4 className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">Objective</h4>
                      <p className="text-sm text-muted-foreground">{cs.objective}</p>
                    </div>
                    <div>
                      <h4 className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">Solution</h4>
                      <p className="text-sm text-muted-foreground">{cs.solution}</p>
                    </div>
                    <div>
                      <h4 className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">Services</h4>
                      <p className="text-sm text-muted-foreground">{cs.services.join(", ")}</p>
                    </div>
                    <div>
                      <h4 className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">Result</h4>
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
            Ready to see what strategic digital advertising can do for your business?
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
