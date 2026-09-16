import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Send, CheckCircle2, AlertCircle, Mail, Clock, ShieldCheck, HelpCircle } from 'lucide-react';
import { company } from '../data/company';

interface FormState {
  name: string;
  email: string;
  company: string;
  service: string;
  engagement: string;
  budget: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    service: searchParams.get('service') || 'ecommerce',
    engagement: searchParams.get('engagement') || 'project',
    budget: searchParams.get('budget') || '10k_50k',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'dev_notice' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle URL query parameters pre-population
  useEffect(() => {
    const s = searchParams.get('service');
    const e = searchParams.get('engagement');
    const b = searchParams.get('budget');
    if (s) setFormData((prev) => ({ ...prev, service: s }));
    if (e) setFormData((prev) => ({ ...prev, engagement: e }));
    if (b) setFormData((prev) => ({ ...prev, budget: b }));
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const endpoint = (import.meta as any).env?.VITE_CONTACT_ENDPOINT;

    // Real API Endpoint submission if configured
    if (endpoint && endpoint.trim() !== '') {
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (res.ok) {
          setStatus('success');
        } else {
          const errData = await res.json().catch(() => ({}));
          throw new Error(errData.message || 'Submission failed. Please email us directly.');
        }
      } catch (err: any) {
        setStatus('error');
        setErrorMessage(err.message || 'Unable to connect to submission gateway.');
      }
    } else {
      // Clean development & no-endpoint fallback
      setTimeout(() => {
        setStatus('dev_notice');
      }, 500);
    }
  };

  const mailtoLink = `mailto:${company.email}?subject=${encodeURIComponent(
    `Project Inquiry: ${formData.service} [${formData.engagement}] (${formData.name}) - ${company.name}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nService: ${formData.service}\nEngagement Type: ${formData.engagement}\nBudget: ${formData.budget}\n\nProject Scope & Requirements:\n${formData.message}`
  )}`;

  return (
    <div className="rounded-2xl bg-[#0B0F17] border border-[rgba(148,163,184,0.18)] p-6 sm:p-10 shadow-2xl">
      {/* Dev Mode Notice / Fallback State */}
      {status === 'dev_notice' && (
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-[#05070D] border border-[#FF6B00]/40">
            <div className="flex items-center gap-2 text-sm font-mono text-[#FF6B00] mb-2 font-semibold">
              <AlertCircle className="w-4 h-4" />
              <span>CONFIGURATION NOTICE: DIRECT DISPATCH READY</span>
            </div>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-4">
              Your inquiry has been compiled. Because <code>VITE_CONTACT_ENDPOINT</code> is currently unset in the frontend environment, you can dispatch your project brief directly to our senior engineering leads via direct email below:
            </p>
            <div className="p-3 rounded bg-[#0B0F17] border border-[rgba(148,163,184,0.12)] font-mono text-xs text-white mb-4 space-y-1">
              <div><strong>Name:</strong> {formData.name}</div>
              <div><strong>Email:</strong> {formData.email}</div>
              <div><strong>Service:</strong> {formData.service}</div>
              <div><strong>Engagement Model:</strong> {formData.engagement}</div>
              <div><strong>Budget:</strong> {formData.budget}</div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={mailtoLink}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Send via Email App</span>
              </a>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="px-4 py-3 rounded-lg text-xs font-mono text-[#94A3B8] hover:text-white border border-[rgba(148,163,184,0.2)]"
              >
                Edit Form Details
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Production Success State */}
      {status === 'success' && (
        <div className="p-6 rounded-xl bg-[#05070D] border border-[#10B981]/40 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#10B981]/20 border border-[#10B981] flex items-center justify-center mx-auto text-[#10B981]">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold font-display text-white">Project Brief Received</h3>
          <p className="text-sm text-[#94A3B8] max-w-md mx-auto leading-relaxed">
            Thank you, {formData.name}. Your specifications have been forwarded to our technical team. A dedicated technical lead will review your project and respond within <strong>&lt;24 hours</strong>.
          </p>
          <div className="pt-4">
            <button
              type="button"
              onClick={() => {
                setStatus('idle');
                setFormData({
                  name: '',
                  email: '',
                  company: '',
                  service: 'ecommerce',
                  engagement: 'project',
                  budget: '10k_50k',
                  message: ''
                });
              }}
              className="px-4 py-2 rounded-lg text-xs font-mono text-[#94A3B8] hover:text-white border border-[rgba(148,163,184,0.2)]"
            >
              Submit Another Brief
            </button>
          </div>
        </div>
      )}

      {/* Error State */}
      {status === 'error' && (
        <div className="p-4 rounded-lg bg-red-950/40 border border-red-500/50 mb-6 text-xs text-red-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-400" />
            <span>{errorMessage}</span>
          </div>
          <a href={mailtoLink} className="underline font-semibold ml-2">
            Send via email instead &rarr;
          </a>
        </div>
      )}

      {/* Actual Form */}
      {status !== 'success' && status !== 'dev_notice' && (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label htmlFor="form-name" className="block text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-2">
                Full Name *
              </label>
              <input
                id="form-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                className="w-full px-4 py-3 rounded-lg bg-[#05070D] border border-[rgba(148,163,184,0.18)] text-white text-sm focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] outline-none transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="form-email" className="block text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-2">
                Work Email *
              </label>
              <input
                id="form-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@company.com"
                className="w-full px-4 py-3 rounded-lg bg-[#05070D] border border-[rgba(148,163,184,0.18)] text-white text-sm focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Company */}
            <div>
              <label htmlFor="form-company" className="block text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-2">
                Company / Organization
              </label>
              <input
                id="form-company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder="Acme Brand or Store"
                className="w-full px-4 py-3 rounded-lg bg-[#05070D] border border-[rgba(148,163,184,0.18)] text-white text-sm focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] outline-none transition-colors"
              />
            </div>

            {/* Service Required */}
            <div>
              <label htmlFor="form-service" className="block text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-2">
                Primary Capability Required *
              </label>
              <select
                id="form-service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#05070D] border border-[rgba(148,163,184,0.18)] text-white text-sm focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] outline-none transition-colors"
              >
                <option value="01 — Development">01 — Development (Web, Android, iOS, Automation, E-Commerce, SaaS, Tools)</option>
                <option value="02 — SEO & Growth">02 — SEO &amp; Growth (Technical SEO, Product SEO, Branding)</option>
                <option value="03 — Enterprise">03 — Enterprise (ServiceNow Workflows, ITSM, ITOM, CRM)</option>
                <option value="04 — Marketing">04 — Marketing (Google Ads, Meta Ads, Social Media, Organic)</option>
                <option value="05 — Research">05 — Research &amp; Business Intelligence</option>
                <option value="06 — Recruitment">06 — Recruitment (International Markets Only)</option>
                <option value="Website Maintenance">Managed Website Maintenance &amp; Care</option>
                <option value="Other / Advisory">Other / General Technical Inquiry</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Engagement Type Field */}
            <div>
              <label htmlFor="form-engagement" className="block text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-2">
                Engagement Model *
              </label>
              <select
                id="form-engagement"
                name="engagement"
                required
                value={formData.engagement}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#05070D] border border-[rgba(148,163,184,0.18)] text-white text-sm focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] outline-none transition-colors"
              >
                <option value="One-Time Project">One-Time Project (Fixed-Scope Milestone)</option>
                <option value="Monthly Maintenance">Monthly Maintenance (Essential / Growth Care)</option>
                <option value="Monthly Store Management">Monthly Store Management (E-Commerce Care)</option>
                <option value="Long-Term Technology Partnership">Long-Term Technology Partnership</option>
                <option value="Not Sure">Not Sure (Need Initial Assessment)</option>
              </select>
            </div>

            {/* Budget Range (INR) */}
            <div>
              <label htmlFor="form-budget" className="block text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-2">
                Estimated Budget Allocation (INR) *
              </label>
              <select
                id="form-budget"
                name="budget"
                required
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#05070D] border border-[rgba(148,163,184,0.18)] text-white text-sm focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] outline-none transition-colors"
              >
                <option value="under_1lakh">Under ₹1,00,000 (Small Scopes / Audits / Fixes)</option>
                <option value="1lakh_3lakh">₹1,00,000 – ₹3,00,000 (Standard Builds / Storefronts)</option>
                <option value="3lakh_10lakh">₹3,00,000 – ₹10,00,000 (Custom Web Applications / Enterprise)</option>
                <option value="10lakh_plus">₹10,00,000+ (High-Scale Systems &amp; Large Platforms)</option>
                <option value="retainer">Monthly Retainer (₹35,000 – ₹1,45,000/month)</option>
              </select>
            </div>
          </div>

          {/* Message / Description */}
          <div>
            <label htmlFor="form-message" className="block text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-2">
              Project Description &amp; Technical Requirements *
            </label>
            <textarea
              id="form-message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your product goals, current website status, platform preferences (e.g. Shopify, Firebase), and desired launch timeline..."
              className="w-full px-4 py-3 rounded-lg bg-[#05070D] border border-[rgba(148,163,184,0.18)] text-white text-sm focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] outline-none transition-colors resize-y"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg text-sm font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all shadow-[0_0_25px_rgba(255,107,0,0.3)] disabled:opacity-50"
          >
            {status === 'submitting' ? (
              <span>Dispatching Brief...</span>
            ) : (
              <>
                <span>Start the Conversation</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>

          {/* SLA and Security Badges */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#94A3B8]">
            <span className="flex items-center gap-1.5 text-[#10B981]">
              <Clock className="w-3.5 h-3.5" />
              <span>&lt;24 Hour Response Guarantee</span>
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#004AAD]" />
              <span>Direct NDA &amp; Strict Confidentiality</span>
            </span>
          </div>
        </form>
      )}
    </div>
  );
};
