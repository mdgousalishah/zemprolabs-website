import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck, Terminal } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { company } from '../data/company';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[rgba(148,163,184,0.12)] bg-[#05070D] text-[#94A3B8] pt-16 pb-12 mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Col 1: Brand & Positioning (Spans 2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <BrandLogo variant="full" size="lg" />
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed max-w-sm pt-1 font-sans">
              <span className="text-white font-medium block mb-1">{company.positioning}</span>
              {company.positioningSub}
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/20 px-3 py-1.5 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
              <span>SYSTEMS OPERATIONAL &bull; 2026</span>
            </div>
          </div>

          {/* Col 2: Six Core Services */}
          <div>
            <h4 className="text-white text-xs font-mono tracking-wider uppercase mb-4 text-[#F8FAFC]">
              // Core Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  01 — Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  02 — SEO &amp; Growth
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  03 — Enterprise
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  04 — Marketing
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  05 — Research
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  06 — Recruitment
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Managed Operations */}
          <div>
            <h4 className="text-white text-xs font-mono tracking-wider uppercase mb-4 text-[#F8FAFC]">
              // Run &amp; Manage
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/managed-services" className="hover:text-white transition-colors">
                  Website Maintenance
                </Link>
              </li>
              <li>
                <Link to="/managed-services" className="hover:text-white transition-colors">
                  E-Commerce Operations
                </Link>
              </li>
              <li>
                <Link to="/pricing#maintenance-plans" className="hover:text-white transition-colors">
                  Monthly Retainer Plans
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors">
                  Scope &amp; Cost Estimator
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-white transition-colors">
                  Project Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div>
            <h4 className="text-white text-xs font-mono tracking-wider uppercase mb-4 text-[#F8FAFC]">
              // Contact &amp; Office
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <span className="block text-white font-semibold text-xs uppercase tracking-wider font-mono">
                  {company.name}
                </span>
                <span className="text-[11px] text-[#94A3B8] font-mono block">
                  {company.positioning}
                </span>
              </div>

              <div className="space-y-2 pt-1 text-xs">
                {/* Email */}
                <a
                  href={company.emailHref}
                  className="flex items-center gap-2 text-white hover:text-[#FF6B00] transition-colors group"
                >
                  <Mail className="w-3.5 h-3.5 text-[#FF6B00] shrink-0" />
                  <span className="font-mono break-all">{company.email}</span>
                </a>

                {/* Primary Phone */}
                <a
                  href={company.phoneHref}
                  className="flex items-center gap-2 text-white hover:text-[#FF6B00] transition-colors group"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FF6B00] shrink-0" />
                  <span className="font-mono">{company.phone}</span>
                </a>

                {/* WhatsApp */}
                <a
                  href={company.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Zemprolabs on WhatsApp"
                  className="flex items-center gap-2 text-white hover:text-[#10B981] transition-colors group"
                >
                  <span className="w-3.5 h-3.5 rounded-full bg-[#10B981]/20 flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                  </span>
                  <span className="font-mono text-[#10B981] hover:underline">WhatsApp: {company.phone}</span>
                </a>

                {/* Office Address */}
                <div className="flex items-start gap-2 text-[#94A3B8] pt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#004AAD] shrink-0 mt-0.5" />
                  <span className="leading-relaxed text-[11px]">
                    {company.address.full}
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 text-xs font-mono text-[#FF6B00] hover:underline"
                >
                  <span>Submit Project Scope</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[rgba(148,163,184,0.1)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#94A3B8]">
          <div>
            &copy; {new Date().getFullYear()} {company.name}. All rights reserved. {company.positioning}
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#FF6B00]" />
              <span>100% Client Code Ownership</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Terminal className="w-4 h-4 text-[#004AAD]" />
              <span>Zero Disjointed Vendors</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
