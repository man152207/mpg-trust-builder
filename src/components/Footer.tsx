import { Link } from "react-router-dom";
import { COMPANY } from "@/lib/content";
import { Mail, MapPin, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-xs font-bold text-primary-foreground">M</span>
              </div>
              <span className="text-lg font-bold text-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                MPG Solution
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {COMPANY.description}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-primary transition-colors">Facebook Advertising</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Instagram Advertising</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Performance Marketing</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Ad Copywriting</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Lead Generation</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/company-info" className="hover:text-primary transition-colors">Business Verification</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{COMPANY.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-primary transition-colors">{COMPANY.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="h-4 w-4 shrink-0 text-primary" />
                <span>{COMPANY.website}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved. {COMPANY.owner}
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
            <Link to="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
