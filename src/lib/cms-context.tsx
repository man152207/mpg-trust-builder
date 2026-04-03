import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { SERVICES, CASE_STUDIES, PRICING_PLANS, FAQS, COMPANY } from "@/lib/content";
import { BlogPost, BLOG_POSTS } from "@/lib/blog-data";

export interface PageStatus {
  status: "draft" | "published";
  lastEdited: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
}

export interface FormSubmission {
  id: string;
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
  date: string;
}

interface CMSState {
  pages: Record<string, PageStatus>;
  services: typeof SERVICES;
  caseStudies: typeof CASE_STUDIES;
  pricingPlans: typeof PRICING_PLANS;
  faqs: typeof FAQS;
  contactInfo: {
    email: string;
    phone: string;
    address: string;
    website: string;
  };
  submissions: FormSubmission[];
}

interface CMSContextType {
  state: CMSState;
  updatePage: (slug: string, updates: Partial<PageStatus>) => void;
  updateContactInfo: (info: CMSState["contactInfo"]) => void;
  updateFaqs: (faqs: typeof FAQS) => void;
  togglePageStatus: (slug: string) => void;
}

const defaultPages: Record<string, PageStatus> = {
  home: { status: "published", lastEdited: new Date().toISOString(), slug: "/", metaTitle: "Digital Advertising & Marketing Services", metaDescription: "Performance-focused Facebook & Instagram advertising for growing businesses." },
  about: { status: "published", lastEdited: new Date().toISOString(), slug: "/about", metaTitle: "About Us", metaDescription: "Learn about MPG Solution LLC." },
  services: { status: "published", lastEdited: new Date().toISOString(), slug: "/services", metaTitle: "Services", metaDescription: "Digital advertising services." },
  "case-studies": { status: "published", lastEdited: new Date().toISOString(), slug: "/case-studies", metaTitle: "Case Studies", metaDescription: "See our work." },
  pricing: { status: "published", lastEdited: new Date().toISOString(), slug: "/pricing", metaTitle: "Pricing & Plans", metaDescription: "Service plans and pricing." },
  faq: { status: "published", lastEdited: new Date().toISOString(), slug: "/faq", metaTitle: "FAQ", metaDescription: "Frequently asked questions." },
  contact: { status: "published", lastEdited: new Date().toISOString(), slug: "/contact", metaTitle: "Contact Us", metaDescription: "Get in touch." },
  "company-info": { status: "published", lastEdited: new Date().toISOString(), slug: "/company-info", metaTitle: "Business Verification", metaDescription: "Company information." },
  privacy: { status: "published", lastEdited: new Date().toISOString(), slug: "/privacy", metaTitle: "Privacy Policy", metaDescription: "Our privacy policy." },
  terms: { status: "published", lastEdited: new Date().toISOString(), slug: "/terms", metaTitle: "Terms & Conditions", metaDescription: "Terms of service." },
  cookies: { status: "published", lastEdited: new Date().toISOString(), slug: "/cookies", metaTitle: "Cookie Policy", metaDescription: "Cookie usage policy." },
};

const defaultState: CMSState = {
  pages: defaultPages,
  services: SERVICES,
  caseStudies: CASE_STUDIES,
  pricingPlans: PRICING_PLANS,
  faqs: FAQS,
  contactInfo: {
    email: COMPANY.email,
    phone: COMPANY.phone,
    address: COMPANY.address,
    website: COMPANY.website,
  },
  submissions: [
    { id: "1", name: "John Smith", email: "john@example.com", company: "Acme Corp", service: "Facebook Advertising", message: "Interested in running Facebook campaigns for our product launch.", date: "2025-01-15" },
    { id: "2", name: "Sarah Lee", email: "sarah@startup.io", company: "Startup IO", service: "Lead Generation", message: "We need help generating B2B leads.", date: "2025-01-18" },
  ],
};

const CMS_STORAGE_KEY = "mpg_cms_state";

const CMSContext = createContext<CMSContextType | null>(null);

export const useCMS = () => {
  const ctx = useContext(CMSContext);
  if (!ctx) throw new Error("useCMS must be used within CMSProvider");
  return ctx;
};

export const CMSProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<CMSState>(() => {
    try {
      const stored = localStorage.getItem(CMS_STORAGE_KEY);
      return stored ? JSON.parse(stored) : defaultState;
    } catch {
      return defaultState;
    }
  });

  useEffect(() => {
    localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const updatePage = (slug: string, updates: Partial<PageStatus>) => {
    setState((prev) => ({
      ...prev,
      pages: {
        ...prev.pages,
        [slug]: { ...prev.pages[slug], ...updates, lastEdited: new Date().toISOString() },
      },
    }));
  };

  const togglePageStatus = (slug: string) => {
    setState((prev) => ({
      ...prev,
      pages: {
        ...prev.pages,
        [slug]: {
          ...prev.pages[slug],
          status: prev.pages[slug].status === "published" ? "draft" : "published",
          lastEdited: new Date().toISOString(),
        },
      },
    }));
  };

  const updateContactInfo = (info: CMSState["contactInfo"]) => {
    setState((prev) => ({ ...prev, contactInfo: info }));
  };

  const updateFaqs = (faqs: typeof FAQS) => {
    setState((prev) => ({ ...prev, faqs }));
  };

  return (
    <CMSContext.Provider value={{ state, updatePage, updateContactInfo, updateFaqs, togglePageStatus }}>
      {children}
    </CMSContext.Provider>
  );
};
