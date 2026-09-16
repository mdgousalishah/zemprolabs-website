import React from 'react';
import { SEO } from '../components/SEO';
import { ScopeEstimator } from '../components/ScopeEstimator';
import { maintenancePlans } from '../data/maintenancePlans';
import { ShopifyPricingReference } from '../components/ShopifyPricingReference';
import { FirebasePricingReference } from '../components/FirebasePricingReference';
import { ServiceComparisonTable } from '../components/ServiceComparisonTable';
import { CostTransparencySection } from '../components/CostTransparencySection';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, ShieldCheck, HelpCircle, RefreshCw, Hammer, Wrench, ShoppingBag, TrendingUp, Info } from 'lucide-react';

export const Pricing: React.FC = () => {
  const faqs = [
    {
      q: 'Do I need to pay Shopify separately?',
      a: 'Yes. Shopify subscription fees are paid directly to Shopify Inc. under your company’s billing account. Zemprolabs storefront development, theme customization, and ongoing store-management fees are separate unless specifically bundled in an all-inclusive custom enterprise proposal.'
    },
    {
      q: 'Does Firebase have a monthly fixed price?',
      a: 'No. Google Firebase includes generous no-cost quotas (e.g. 50k Firestore reads/day, 10k phone auths/mo) and usage-based billing depending on consumption. We do not advertise Firebase as a fixed monthly fee. Google bills your usage directly with zero agency markup.'
    },
    {
      q: 'Can Zemprolabs manage my Shopify store after launch?',
      a: 'Yes. We offer this as an optional ongoing managed operations service. We can handle product catalog uploads, collection organization, promotional banners, seasonal discount codes, app maintenance, and checkout flow monitoring.'
    },
    {
      q: 'Can you manage an existing website built by another developer?',
      a: 'Yes, subject to technical access and an initial codebase assessment. We review your current repository, hosting infrastructure, and dependency health to verify compatibility before initiating our maintenance plan.'
    },
    {
      q: 'Can you manage products and content?',
      a: 'Yes, when included in the agreed maintenance or store-management scope. Our team can update copy, upload new product photography, configure variant matrices, and format product descriptions.'
    },
    {
      q: 'Can I cancel maintenance?',
      a: 'Maintenance retainers are structured on a month-to-month or quarterly basis depending on your executed agreement, typically requiring a simple 30-day written notice with no termination penalties.'
    }
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-16">
      <SEO
        title="Transparent Scope & Pricing | Development, Maintenance & Platform Costs"
        description="Transparent digital engagement models: One-time custom development, monthly website maintenance, Shopify store operations, and clear third-party infrastructure references."
        canonicalPath="/pricing"
      />

      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-8 pb-16 max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-[#FF6B00] text-xs font-mono">
            <span>TRANSPARENT COMMERCIAL TERMS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-[1.1]">
            Clear Scope. Predictable Retainers. Zero Surprises.
          </h1>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Whether you need a custom one-time build, monthly website maintenance, or hands-on e-commerce store operations, our scope guidelines and platform cost distinctions are completely transparent.
          </p>
        </div>
      </section>

      {/* 14. "Beyond the Build" Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 max-w-7xl mx-auto">
        <div className="rounded-2xl bg-[#0B0F17] border border-[rgba(148,163,184,0.18)] p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[rgba(148,163,184,0.12)] gap-4">
            <div>
              <div className="text-xs font-mono text-[#FF6B00] uppercase tracking-wider mb-1">
                // FULL PLATFORM LIFECYCLE
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
                Beyond the Build
              </h2>
              <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">
                A digital platform requires continuous stewardship. We support your business across every operational phase:
              </p>
            </div>
            <div className="px-3 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-[#FF6B00] text-xs font-mono shrink-0 flex items-center gap-1.5 w-fit">
              <RefreshCw className="w-3.5 h-3.5" />
              <span>END-TO-END CARE</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[#05070D] border border-[rgba(148,163,184,0.1)] space-y-2">
              <div className="flex items-center gap-2 text-[#FF6B00] font-mono font-bold text-xs">
                <Hammer className="w-4 h-4" />
                <span>BUILD</span>
              </div>
              <div className="text-sm font-bold text-white font-display">One-Time Development</div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Full milestone development for custom web applications, SaaS platforms, and Shopify storefronts.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#05070D] border border-[rgba(148,163,184,0.1)] space-y-2">
              <div className="flex items-center gap-2 text-[#004AAD] font-mono font-bold text-xs">
                <Wrench className="w-4 h-4" />
                <span>MAINTAIN</span>
              </div>
              <div className="text-sm font-bold text-white font-display">Monthly Technical Care</div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Security patches, dependency updates, uptime monitoring, and continuous Core Web Vitals checks.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#05070D] border border-[rgba(148,163,184,0.1)] space-y-2">
              <div className="flex items-center gap-2 text-[#10B981] font-mono font-bold text-xs">
                <ShoppingBag className="w-4 h-4" />
                <span>MANAGE</span>
              </div>
              <div className="text-sm font-bold text-white font-display">Storefront Operations</div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Hands-on product catalog uploads, collection staging, promotional banners, and discount configurations.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#05070D] border border-[rgba(148,163,184,0.1)] space-y-2">
              <div className="flex items-center gap-2 text-[#06B6D4] font-mono font-bold text-xs">
                <TrendingUp className="w-4 h-4" />
                <span>GROW</span>
              </div>
              <div className="text-sm font-bold text-white font-display">Continuous Optimization</div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Conversion rate testing, technical SEO tracking, analytics reporting, and ongoing sprint rollouts.
              </p>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-[#94A3B8] flex items-center gap-2">
            <Info className="w-4 h-4 text-[#FF6B00] shrink-0" />
            <span>
              <strong>Important Note:</strong> Third-party platform and infrastructure costs (Shopify subscriptions, Google Firebase usage, domains) are separate from Zemprolabs professional service fees unless explicitly included in a proposal.
            </span>
          </div>
        </div>
      </section>

      {/* 15. Extended Interactive Scope & Cost Estimator */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 max-w-7xl mx-auto">
        <ScopeEstimator />
      </section>

      {/* 9. Monthly Maintenance Plans Grid */}
      <section id="maintenance-plans" className="px-4 sm:px-6 lg:px-8 py-16 bg-[#0B0F17]/60 border-y border-[rgba(148,163,184,0.12)]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-mono text-[#FF6B00] uppercase tracking-wider">
              // RECURRING TECHNICAL CARE
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
              Monthly Maintenance &amp; Care Plans
            </h2>
            <p className="text-sm text-[#94A3B8]">
              Select an ongoing support retainer to keep your website fast, secure, and monitored.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {maintenancePlans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all ${
                  plan.popular
                    ? 'bg-[#0B0F17] border-2 border-[#FF6B00] shadow-[0_0_30px_rgba(255,107,0,0.2)] relative'
                    : 'bg-[#0B0F17] border border-[rgba(148,163,184,0.15)]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-[#FF6B00] font-bold">
                      {plan.tag}
                    </span>
                    {plan.popular && (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#FF6B00] text-black text-[10px] font-mono font-bold">
                        RECOMMENDED
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold font-display text-white mb-2">{plan.name}</h3>

                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold font-display text-white">{plan.displayINR}</span>
                    <span className="text-xs font-mono text-[#94A3B8]">{plan.period}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-[rgba(148,163,184,0.1)] mb-8">
                    <div className="text-[11px] font-mono text-[#94A3B8] uppercase">
                      Included Deliverables:
                    </div>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-[#F8FAFC]">
                        <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={`/contact?service=Website%20Maintenance&engagement=${encodeURIComponent(
                    plan.name
                  )}`}
                  className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold transition-all ${
                    plan.popular
                      ? 'bg-[#FF6B00] text-black hover:bg-[#ff7b1a] shadow-[0_0_20px_rgba(255,107,0,0.3)]'
                      : 'bg-[#05070D] text-white hover:bg-white/5 border border-[rgba(148,163,184,0.2)]'
                  }`}
                >
                  <span>Select {plan.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Shopify Pricing Reference */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
        <ShopifyPricingReference />
      </section>

      {/* 4. Firebase Pricing Reference */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 max-w-7xl mx-auto">
        <FirebasePricingReference />
      </section>

      {/* 16. Service Comparison Matrix */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 max-w-5xl mx-auto">
        <ServiceComparisonTable />
      </section>

      {/* 17. Cost Transparency: What You Pay For */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 max-w-7xl mx-auto">
        <CostTransparencySection />
      </section>


      {/* 18. Expanded FAQ Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-[#0B0F17]/40 border-t border-[rgba(148,163,184,0.12)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#94A3B8]">
              Transparent answers regarding Shopify, Firebase, maintenance retainers, and platform billing.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#0B0F17] border border-[rgba(148,163,184,0.12)] space-y-2"
              >
                <h4 className="text-base font-bold text-white font-display flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#FF6B00] shrink-0" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-sm text-[#94A3B8] leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
