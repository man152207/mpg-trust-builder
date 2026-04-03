import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { COMPANY } from "@/lib/content";

const Privacy = () => {
  return (
    <Layout>
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for MPG Solution LLC. Learn how we collect, use, and protect your personal information."
        path="/privacy"
      />

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl prose prose-sm">
            <h1 className="text-3xl font-bold text-foreground mb-8">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground mb-6">Last updated: January 2025</p>

            <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
              <section>
                <h2 className="text-lg font-semibold text-foreground mb-2">1. Introduction</h2>
                <p>{COMPANY.name} ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website ({COMPANY.website}) or use our services.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground mb-2">2. Information We Collect</h2>
                <p>We may collect the following types of information:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li><strong>Contact Information:</strong> Name, email address, phone number, and company name provided through our contact forms.</li>
                  <li><strong>Inquiry Details:</strong> Information about your service interests and project requirements submitted through our forms.</li>
                  <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and referring sources.</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, device information, and operating system.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground mb-2">3. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Respond to your inquiries and provide requested services</li>
                  <li>Communicate with you about our services</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground mb-2">4. Information Sharing</h2>
                <p>We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting business, provided they agree to keep this information confidential.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground mb-2">5. Data Security</h2>
                <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground mb-2">6. Your Rights</h2>
                <p>You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">{COMPANY.email}</a>.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground mb-2">7. Contact Us</h2>
                <p>If you have questions about this Privacy Policy, please contact us:</p>
                <p className="mt-2">{COMPANY.name}<br />{COMPANY.address}<br />{COMPANY.email}</p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
