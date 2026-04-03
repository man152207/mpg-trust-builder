
# MPG Solution LLC — Corporate Website

## Overview
A premium, compliance-friendly corporate website for MPG Solution LLC, a Wyoming-registered digital advertising company. The site prioritizes trust, consistent legal identity, lead generation, and a full admin CMS with publish workflow.

## Brand System
- **Primary accent**: MPG Orange (#F97316)
- **Background**: Clean white (#FFFFFF) with light neutral cards (#F9FAFB)
- **Text**: Dark charcoal (#1A1A1A) for readability
- **Typography**: Strong hierarchy with generous spacing, polished cards, soft shadows
- **Style**: Minimal, modern, high-conversion, compliance-friendly

## Public Pages

### 1. Homepage
- Hero: "Scale Your Business with Strategic Facebook & Instagram Advertising" + dual CTAs (Get a Quote / View Services)
- Trust indicators section (Wyoming registered, consistent identity)
- Core services grid (6 key services with icons)
- "Why Choose MPG Solution LLC" section
- How We Work (3-step process)
- Selected case studies preview (2-3 cards)
- FAQ preview (4 top questions)
- Final CTA banner
- Consistent footer

### 2. About Page
- Company overview, mission, industries served
- Differentiators section
- Optional founder mention (corporate style)
- Company information block (legal name, address, email, website)

### 3. Services Page
- 10 service cards: Facebook Ads, Instagram Ads, Performance Marketing Strategy, Ad Copywriting, Creative Design, Audience Targeting, Campaign Setup & Optimization, Lead Generation, E-commerce Ad Support, Landing Page Support
- Each with description, target audience, benefits, approach, CTA

### 4. Case Studies / Portfolio
- Structured cards: industry, objective, solution, results (safe summaries only), platforms used
- No fake metrics — uses credible language like "Improved lead flow"

### 5. Pricing / Plans
- 4 tiers: Launch, Scale, Dominance, Custom
- Clean comparison cards with deliverables
- Note: ad spend separate
- CTA to request proposal

### 6. FAQ Page
- 10+ real, helpful questions and answers
- Accordion layout

### 7. Contact Page
- Professional inquiry form (name, company, email, phone, service interest dropdown, message, privacy consent checkbox)
- Business contact info sidebar
- Anti-spam structure

### 8. Business Verification / Company Info
- Formal trust page with legal name, registered address, website, email, nature of business, services offered
- Clean, compliance-reviewer-friendly layout

### 9. Privacy Policy
### 10. Terms & Conditions
### 11. Cookie / Data Use Notice
- All legal pages with consistent MPG Solution LLC identity, professional language

### 12. 404 Page
- Branded error page with navigation back

## Admin CMS Dashboard

### Admin Login
- Secure login page (local auth for now, role-ready architecture)

### Dashboard
- Overview with page statuses, recent form submissions, quick actions

### Content Management
- **Page Manager**: List all pages, edit content sections, reorder sections
- **Service Manager**: CRUD for services (title, description, icon, CTA)
- **Case Study Manager**: CRUD for portfolio items
- **FAQ Manager**: CRUD for questions/answers
- **Pricing Manager**: Edit plans, features, pricing
- **Testimonial Manager**: Optional, CRUD
- **Media Manager**: Upload/manage images

### SEO & Metadata
- Per-page: meta title, description, slug, OG image, OG title/description

### Settings
- Contact info (email, address, phone)
- Footer content
- Legal page content editor
- Navigation management

### Publish Workflow
- Draft / Preview / Publish / Unpublish per page
- Last edited timestamp
- Page status indicators (draft/published badge)
- Save without publishing
- Preview before publish

## Navigation

### Header
- Logo + Home, About, Services, Case Studies, Pricing, FAQ, Contact
- CTA button: "Get a Quote"
- Mobile hamburger menu

### Footer
- Business info block
- Services quick links
- Legal links (Privacy, Terms, Cookies)
- Contact details
- "Owned and operated by MPG Solution LLC"
- © 2025 MPG Solution LLC

## Technical Approach
- React component architecture with reusable UI components
- React Router for all pages
- Context-based CMS state management (localStorage-persisted for admin)
- Responsive design (mobile-first)
- SEO meta tags via react-helmet
- Contact form with validation and submission handling
- Clean, fast-loading with no unnecessary dependencies

## Content Strategy
- All copy written fresh — professional, concise, trust-building
- No placeholder text, no fake stats, no conflicting identity
- Single consistent entity: MPG Solution LLC throughout
- Compliance-reviewer friendly language
