import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { COMPANY } from "@/lib/content";

const Terms = () => {
  return (
    <Layout>
      <SEO
        title="Terms & Conditions"
        description="Terms and Conditions for MPG Solution LLC's digital advertising services and website usage."
        path="/terms"
      />

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold text-foreground mb-8">Terms & Conditions</h1>
            <p className="text-sm text-muted-foreground mb-6">Last updated: January 2025</p>

            <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
              <section>
                <h2 className="text-lg font-semibold text-foreground mb-2">1. Agreement to Terms</h2>
                <p>By accessing or using the website of {COMPANY.name} ({COMPANY.website}), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website or services.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground mb-2">2. Services</h2>
                <p>{COMPANY.name} provides digital advertising and marketing services, including but not limited to Facebook advertising, Instagram advertising, ad copywriting, creative design, audience targeting, campaign management, and lead generation. Specific service terms are outlined in individual service agreements.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground mb-2">3. Intellectual Property</h2>
                <p>All content on this website, including text, graphics, logos, and design elements, is the property of {COMPANY.name} and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground mb-2">4. Limitation of Liability</h2>
                <p>{COMPANY.name} shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our website or services. Our total liability shall not exceed the fees paid for the specific services giving rise to the claim.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground mb-2">5. Advertising Results</h2>
                <p>While we strive to deliver optimal results, {COMPANY.name} does not guarantee specific advertising outcomes. Campaign performance depends on multiple factors including market conditions, budget, creative quality, and audience behavior.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground mb-2">6. Payment Terms</h2>
                <p>Payment terms for services are outlined in individual service agreements. Advertising spend (budget paid to advertising platforms) is separate from our service fees unless explicitly stated otherwise.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground mb-2">7. Governing Law</h2>
                <p>These Terms shall be governed by and construed in accordance with the laws of the State of Wyoming, United States of America.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground mb-2">8. Contact</h2>
                <p>For questions about these Terms, please contact us:</p>
                <p className="mt-2">{COMPANY.name}<br />{COMPANY.address}<br />{COMPANY.email}</p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
