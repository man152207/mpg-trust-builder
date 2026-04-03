import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/content";
import { Shield, ArrowRight, Phone } from "lucide-react";

const CompanyInfo = () => {
  return (
    <Layout>
      <SEO
        title="Business Verification & Company Information"
        description="Verify MPG Solution LLC's business information. Wyoming-registered digital advertising company — legal name, address, and business details."
        path="/company-info"
      />

      <section className="border-b border-border bg-card py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Shield className="mx-auto mb-4 h-10 w-10 text-primary" />
            <h1 className="mb-4 text-4xl font-bold text-foreground">Company Information</h1>
            <p className="text-lg text-muted-foreground">
              Official business details for MPG Solution LLC.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="rounded-2xl border border-border bg-card p-8 lg:p-10 shadow-sm">
              <div className="space-y-6">
                {[
                  { label: "Legal Business Name", value: COMPANY.legalName },
                  { label: "Registered Address", value: COMPANY.address },
                  { label: "Official Website", value: COMPANY.website },
                  { label: "Official Email", value: COMPANY.email, isEmail: true },
                  { label: "Official Phone", value: COMPANY.phone, isPhone: true },
                  { label: "Nature of Business", value: COMPANY.nature },
                  {
                    label: "Services Offered",
                    value: "Facebook Advertising, Instagram Advertising, Creative Strategy, Ad Copywriting, Creative Design for Ads, Audience Targeting, Campaign Setup & Optimization, Lead Generation Campaigns, E-commerce Advertising Support, Landing Page & Creative Support",
                  },
                ].map((item) => (
                  <div key={item.label} className="border-b border-border pb-4 last:border-0 last:pb-0">
                    <dt className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">{item.label}</dt>
                    <dd className="text-foreground">
                      {item.isEmail ? (
                        <a href={`mailto:${item.value}`} className="text-primary hover:underline">{item.value}</a>
                      ) : item.isPhone ? (
                        <a href={`tel:${item.value}`} className="text-primary hover:underline">{item.value}</a>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl bg-accent p-4 text-center">
                <p className="text-sm text-accent-foreground font-medium">
                  {COMPANY.owner}
                </p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="mb-4 text-sm text-muted-foreground">
                For verification inquiries or additional information, please contact us directly.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button asChild>
                  <Link to="/contact">Contact Us <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
                <a href={`tel:${COMPANY.phone}`} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="h-4 w-4" /> {COMPANY.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CompanyInfo;
