import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { COMPANY } from "@/lib/content";

const Cookies = () => {
  return (
    <Layout>
      <SEO
        title="Cookie Policy"
        description="Cookie and data use policy for MPG Solution LLC's website."
        path="/cookies"
      />

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold text-foreground mb-8">Cookie & Data Use Policy</h1>
            <p className="text-sm text-muted-foreground mb-6">Last updated: January 2025</p>

            <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
              <section>
                <h2 className="text-lg font-semibold text-foreground mb-2">1. What Are Cookies</h2>
                <p>Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and improve your browsing experience.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground mb-2">2. How We Use Cookies</h2>
                <p>{COMPANY.name} may use cookies and similar technologies for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li><strong>Essential Cookies:</strong> Required for the website to function properly.</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website to improve the user experience.</li>
                  <li><strong>Functional Cookies:</strong> Remember your preferences and settings.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground mb-2">3. Third-Party Cookies</h2>
                <p>We may use third-party analytics services that set their own cookies. These services help us analyze website traffic and usage patterns. We do not control these cookies, and their use is governed by the respective third party's privacy policy.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground mb-2">4. Managing Cookies</h2>
                <p>You can control and manage cookies through your browser settings. Most browsers allow you to refuse or delete cookies. Please note that disabling cookies may affect the functionality of our website.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground mb-2">5. Contact</h2>
                <p>For questions about our use of cookies, please contact us:</p>
                <p className="mt-2">{COMPANY.name}<br />{COMPANY.address}<br />{COMPANY.email}</p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cookies;
