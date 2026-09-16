import React from 'react';
import { SEO } from '../components/SEO';
import { services } from '../data/services';
import { ServiceCard } from '../components/ServiceCard';
import { FirebasePricingReference } from '../components/FirebasePricingReference';
import { ShopifyPricingReference } from '../components/ShopifyPricingReference';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Server, Check, ShieldCheck, Layers } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-28 pb-16">
      <SEO
        title="Services & Capabilities | Software, SEO, Enterprise, Marketing, Research & Recruitment"
        description="Explore Zemprolabs six core disciplines: Development (Web, Mobile, E-Commerce, SaaS), SEO & Growth, Enterprise ServiceNow systems, Performance Marketing, Business Research, and International Recruitment."
        canonicalPath="/services"
      />

      {/* Hero Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-8 pb-14 max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-[#FF6B00] text-xs font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>SIX CORE SERVICE DISCIPLINES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-[1.1]">
            Structured Technology &amp; Growth Capabilities.
          </h1>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Zemprolabs provides specialized digital solutions organized into six distinct service areas—combining rigorous engineering standards, focused search visibility, enterprise automation, and business intelligence.
          </p>
        </div>
      </section>

      {/* Primary 6 Services Grid (Top-Level Primary Architecture) */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 max-w-7xl mx-auto">
        <div className="mb-10 pb-4 border-b border-[rgba(148,163,184,0.12)] flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-[#FF6B00] uppercase tracking-wider mb-1">
              // SERVICE ARCHITECTURE
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Primary Business &amp; Engineering Areas
            </h2>
          </div>
          <div className="text-xs font-mono text-[#94A3B8]">
            01 Development &bull; 02 SEO &amp; Growth &bull; 03 Enterprise &bull; 04 Marketing &bull; 05 Research &bull; 06 Recruitment
          </div>
        </div>

        {/* 6 Cards Grid - Mobile Friendly */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Deep-Dive: Shopify Integration within Development */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-[#0B0F17]/80 border-y border-[rgba(148,163,184,0.12)]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono text-[#10B981] uppercase tracking-wider">
                <ShoppingBag className="w-4 h-4" />
                <span>DEVELOPMENT &bull; E-COMMERCE SPECIALTY</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white">
                Shopify Engineering Under Development
              </h2>

              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                Shopify is positioned directly under our <strong>Development</strong> discipline and backed by our <strong>Managed Services</strong> team. From theme customization and Storefront API integrations to catalog staging and payment pipelines, we build stores that convert and remain technically healthy.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#F8FAFC] pt-1">
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                  <span>Custom Liquid Theme Development</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                  <span>Headless Storefront API Integration</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                  <span>Product Catalog Architecture &amp; Tags</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                  <span>Payment Gateway (Razorpay, Stripe) Setup</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                  <span>Store Migration &amp; Platform Upgrades</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                  <span>Day-to-Day Operations &amp; Management</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/contact?service=01%20—%20Development"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs sm:text-sm font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all shadow-[0_0_20px_rgba(255,107,0,0.3)]"
                >
                  <span>Build a Shopify Store</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/managed-services"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs sm:text-sm font-semibold bg-[#05070D] text-white hover:bg-white/5 border border-[rgba(148,163,184,0.2)]"
                >
                  <span>Explore Store Management</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#05070D] border border-[rgba(148,163,184,0.18)] p-6 font-mono text-xs shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[rgba(148,163,184,0.1)]">
                  <span className="text-[#94A3B8]">// SHOPIFY SCOPE SEPARATION</span>
                  <span className="text-[#10B981]">INDEPENDENT BILLING</span>
                </div>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-[#0B0F17] border border-white/5">
                    <div className="text-[#FF6B00] font-bold">ZEMPROLABS DEVELOPMENT FEE</div>
                    <div className="text-[#94A3B8] text-[11px] mt-1">
                      Professional service fee for theme coding, features, catalog setup, and testing.
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#0B0F17] border border-white/5">
                    <div className="text-[#10B981] font-bold">SHOPIFY SUBSCRIPTION (DIRECT)</div>
                    <div className="text-[#94A3B8] text-[11px] mt-1">
                      Software subscription paid directly to Shopify Inc. under your business account.
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#0B0F17] border border-white/5">
                    <div className="text-[#004AAD] font-bold">OPTIONAL STORE MANAGEMENT</div>
                    <div className="text-[#94A3B8] text-[11px] mt-1">
                      Ongoing monthly retainer for catalog uploads, promotional banners, and app upkeep.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shopify Plan Reference Table */}
          <ShopifyPricingReference />
        </div>
      </section>

      {/* Deep-Dive: Cloud & Backend Infrastructure */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2 text-xs font-mono text-[#F59E0B] uppercase tracking-wider">
              <Server className="w-4 h-4" />
              <span>DEVELOPMENT &bull; BACKEND &amp; CLOUD</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white">
              Backend Architecture &amp; Firebase Cloud
            </h2>

            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
              We design and maintain dependable backend systems supporting web and mobile applications. Whether using serverless Google Firebase or custom Node.js, Express, and PostgreSQL microservices, infrastructure is architected for stability and type safety.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono text-white pt-1">
              <span className="p-2.5 rounded bg-[#0B0F17] border border-white/5">Google Firebase</span>
              <span className="p-2.5 rounded bg-[#0B0F17] border border-white/5">Cloud Firestore</span>
              <span className="p-2.5 rounded bg-[#0B0F17] border border-white/5">Firebase Auth</span>
              <span className="p-2.5 rounded bg-[#0B0F17] border border-white/5">Cloud Functions</span>
              <span className="p-2.5 rounded bg-[#0B0F17] border border-white/5">REST / GraphQL APIs</span>
              <span className="p-2.5 rounded bg-[#0B0F17] border border-white/5">PostgreSQL / MongoDB</span>
            </div>

            <div className="pt-2">
              <Link
                to="/contact?service=01%20—%20Development"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs sm:text-sm font-semibold bg-[#F59E0B] text-black hover:bg-[#d97706] transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)]"
              >
                <span>Architect a Backend System</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <FirebasePricingReference />
          </div>
        </div>
      </section>

      {/* Global Call to Action */}
      <section className="px-4 sm:px-6 lg:px-8 py-14 max-w-7xl mx-auto text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0B0F17] border border-[rgba(148,163,184,0.18)] max-w-3xl mx-auto space-y-5 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>DISCUSS YOUR SPECIFIC REQUIREMENTS</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Have a project or technical requirement?
          </h3>
          <p className="text-sm text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
            Reach out to our engineering team to review technical feasibility, architectural options, and delivery milestones.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all shadow-[0_0_20px_rgba(255,107,0,0.3)] w-full sm:w-auto"
            >
              <span>Initiate Project Scope</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-white border border-[rgba(148,163,184,0.2)] hover:border-white/40 transition-colors w-full sm:w-auto"
            >
              <span>View Transparent Estimator</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
