import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Clock, 
  ShieldCheck, 
  MapPin, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  HelpCircle, 
  ChevronDown,
  MessageCircle,
  Headphones
} from 'lucide-react';
import { LeadForm } from '../components/LeadForm';
import { SEO } from '../components/SEO';

export const ContactPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const phoneDisplay = '+91 94825 58220';
  const phoneClean = '919482558220';
  const whatsappUrl = `https://wa.me/${phoneClean}?text=${encodeURIComponent(
    'Hi PapBill Team, I would like to schedule a personalized demo and discuss pricing for my restaurant.'
  )}`;

  const faqs = [
    {
      q: 'How fast can our restaurant go live with PapBill?',
      a: 'Most single-outlet cafes and QSRs go live in less than 15 minutes. Our team can bulk import your Excel/PDF menu catalog, tax rates, and categories so you can begin billing immediately.'
    },
    {
      q: 'Do I need to buy expensive dedicated POS terminals?',
      a: 'No. PapBill is completely hardware-agnostic. You can run it on any Android phone, tablet, iPad, Windows desktop, or Mac. It seamlessly pairs with standard ESC/POS USB, Bluetooth, Wi-Fi, and Ethernet thermal printers.'
    },
    {
      q: 'What happens if our restaurant internet goes down during peak rush?',
      a: 'PapBill features an offline-first local billing engine. You can continue taking orders, firing KOTs to kitchen printers, and settling customer bills without any internet. Everything auto-synchronizes securely to the cloud the moment connectivity returns.'
    },
    {
      q: 'Do you offer on-site or remote staff training?',
      a: 'Yes! Every new account receives free one-on-one video walkthrough sessions for cashiers, managers, and kitchen staff, along with comprehensive video documentation and 7-day-a-week phone assistance.'
    }
  ];

  const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "name": "Contact PapBill Restaurant POS Support & Sales",
        "url": "https://papbill.com/contact",
        "description": "24/7 sales inquiries, live restaurant POS demos, and hardware integration support.",
        "mainEntity": {
          "@type": "Organization",
          "name": "PapBill",
          "telephone": "+91-94825-58220",
          "email": "support@papbill.com",
          "url": "https://papbill.com"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#F6F8FB] text-[#17212D]">
      <SEO
        title="Contact PapBill - 24/7 Restaurant Support & Sales | +91 94825 58220"
        description="Get in touch with PapBill. Call or WhatsApp +91 94825 58220 or email support@papbill.com for immediate restaurant POS onboarding, custom hardware setups, and live demos."
        keywords="contact PapBill, restaurant POS support, PapBill customer care, restaurant billing customer service India, PapBill phone number, PapBill WhatsApp support"
        canonical="https://papbill.com/contact"
        schema={contactSchema}
      />
      
      {/* ========================================================
          1. HERO HEADER
          ======================================================== */}
      <section className="relative pt-16 pb-20 bg-white border-b border-[#E5E9EF] overflow-hidden">
        {/* Subtle decorative background gradient circles */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none translate-y-1/2" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF2ED] text-[#FF571F] text-xs font-black uppercase tracking-wider mb-5 border border-orange-200/60 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct VIP Channels • Rapid Onboarding</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#17212D] tracking-tight leading-[1.12]">
            Speak with a Restaurant <br className="hidden sm:inline" />
            <span className="text-[#FF571F]">Tech Specialist</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#667085] leading-relaxed max-w-2xl mx-auto">
            Whether you need a live personalized demo, multi-branch architecture advice, custom thermal printer setup, or same-day onboarding — our team is ready.
          </p>

          {/* Trust Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-8 pt-6 border-t border-gray-100 text-xs font-semibold text-gray-600">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>15-Min Average SLA</span>
            </div>
            <span className="hidden sm:inline text-gray-300">•</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Free Guided Setup</span>
            </div>
            <span className="hidden sm:inline text-gray-300">•</span>
            <div className="flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-[#FF571F]" />
              <span>Hyderabad & Bengaluru Hubs</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. DIRECT REACH QUICK ACTION CARDS (4 CHANNELS)
          ======================================================== */}
      <section className="py-12 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* 1. Direct Phone Line */}
            <div className="bg-white rounded-3xl p-6 border border-[#E5E9EF] shadow-lg shadow-slate-900/5 hover:border-[#FF571F]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFF2ED] text-[#FF571F] flex items-center justify-center mb-4">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Direct Phone Line</span>
                <h3 className="text-lg font-black text-[#17212D] mt-1">{phoneDisplay}</h3>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  Call our solution engineers directly for immediate sales or technical inquiries.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  9 AM – 10 PM IST
                </span>
                <a
                  href={`tel:${phoneClean}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#FF571F] hover:text-[#e04612] transition-colors"
                >
                  Call Now <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* 2. Instant WhatsApp Chat */}
            <div className="bg-white rounded-3xl p-6 border border-[#E5E9EF] shadow-lg shadow-slate-900/5 hover:border-[#25D366]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#25D366] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-bl-xl">
                Fastest
              </div>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#25D366] flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">WhatsApp Instant Chat</span>
                <h3 className="text-lg font-black text-[#17212D] mt-1">{phoneDisplay}</h3>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  Chat directly with our onboarding specialists. Quickest route for live video demos & custom quotes.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  &lt; 15 min reply
                </span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#25D366] hover:text-[#1da851] transition-colors"
                >
                  Chat Now <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* 3. Official Email & Inquiries */}
            <div className="bg-white rounded-3xl p-6 border border-[#E5E9EF] shadow-lg shadow-slate-900/5 hover:border-[#FF571F]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF571F] flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Official Email</span>
                <h3 className="text-lg font-black text-[#17212D] mt-1">support@papbill.com</h3>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  Send your menu files, custom franchise requirements, or general inquiries.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-gray-500">
                  Turnaround: &lt; 2 hrs
                </span>
                <a
                  href="mailto:support@papbill.com"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#FF571F] hover:text-[#e04612] transition-colors"
                >
                  Send Email <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* 4. Priority Operations Desk */}
            <div className="bg-white rounded-3xl p-6 border border-[#E5E9EF] shadow-lg shadow-slate-900/5 hover:border-slate-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-100 text-[#17212D] flex items-center justify-center mb-4">
                  <Headphones className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Support Desk</span>
                <h3 className="text-lg font-black text-[#17212D] mt-1">support@papbill.com</h3>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  Active restaurant counter support, printer pairing diagnostics, and cloud synchronization help.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Live Counter Help
                </span>
                <a
                  href="mailto:support@papbill.com"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#17212D] hover:text-[#FF571F] transition-colors"
                >
                  Contact Desk <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          3. MAIN ENGAGEMENT SECTION: LEAD FORM & OFFICE HUBS
          ======================================================== */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column (5 Cols): Why PapBill + Physical Presence */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Value Proposition Box */}
              <div className="bg-white rounded-3xl p-8 border border-[#E5E9EF] shadow-md space-y-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF571F]">
                    THE PAPBILL PROMISE
                  </span>
                  <h3 className="text-2xl font-black text-[#17212D] mt-1 tracking-tight">
                    Why Restaurants Choose Us
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-100 text-[#FF571F] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#17212D]">15-Minute Zero-Downtime Migration</h4>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                        Moving from another POS? We convert your item catalog, modifiers, and floor plans with zero lost bills.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-100 text-[#FF571F] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#17212D]">100% Offline-Resilient Architecture</h4>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                        Local SQLite storage ensures your billing never pauses during Wi-Fi or broadband drops.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-100 text-[#FF571F] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#17212D]">Universal Printer & Device Compatibility</h4>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                        Plug into standard USB, Bluetooth, or LAN ESC/POS thermal receipt printers without proprietary vendor lock-in.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-100 text-[#FF571F] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#17212D]">Transparent Pricing, No Surcharges</h4>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                        Fixed subscription with zero surprise per-bill fees or cut of your online/counter revenues.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <p className="text-xs font-semibold text-emerald-800">
                      SLA Guarantee: Inquiries are routed directly to dedicated solution engineers within 15 minutes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Locations */}
              <div className="bg-white rounded-3xl p-8 border border-[#E5E9EF] shadow-md space-y-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                    OUR LOCATIONS
                  </span>
                  <h3 className="text-xl font-black text-[#17212D] mt-1">
                    Technology & Innovation Hubs
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Hyderabad Hub */}
                  <div className="p-4 rounded-2xl bg-[#F6F8FB] border border-[#E5E9EF] space-y-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#FF571F]" />
                      <span className="font-bold text-xs text-[#17212D]">Hyderabad Hub</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      HITEC City & Madhapur Tech Corridor, Hyderabad, Telangana, India
                    </p>
                  </div>

                  {/* Bengaluru Hub */}
                  <div className="p-4 rounded-2xl bg-[#F6F8FB] border border-[#E5E9EF] space-y-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#FF571F]" />
                      <span className="font-bold text-xs text-[#17212D]">Bengaluru Hub</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Indiranagar / Koramangala Startup Belt, Bengaluru, Karnataka, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Parent Brand Card */}
              <div className="p-7 rounded-3xl bg-[#17212D] text-white space-y-3 relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF571F]/15 rounded-full blur-2xl pointer-events-none" />
                <span className="text-[10px] font-mono font-black tracking-widest uppercase text-[#FF571F]">
                  ENGINEERED BY HATBRICKS
                </span>
                <h4 className="text-lg font-black tracking-tight">PapBill by Hatbricks</h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Hatbricks builds specialized operating software and point-of-sale infrastructure engineered for high-volume retail and restaurant chains across India.
                </p>
                <div className="pt-2 flex items-center gap-4 text-xs text-gray-400 font-mono">
                  <span>GSTIN Compliant</span>
                  <span>•</span>
                  <span>ISO Standards</span>
                  <span>•</span>
                  <span>Made in India</span>
                </div>
              </div>

            </div>

            {/* Right Column (7 Cols): Lead Generation Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5E9EF] shadow-xl shadow-slate-900/5 relative">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-[#FF571F] text-xs font-bold uppercase tracking-wider mb-2">
                    <Clock className="w-3.5 h-3.5" />
                    Book Free 1-on-1 Product Demo
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#17212D] tracking-tight">
                    Schedule Your Custom Walkthrough
                  </h2>
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    Tell us about your restaurant setup. A solution architect will prepare a customized demo showing exact workflows for your cuisine and format.
                  </p>
                </div>

                <LeadForm sourcePage="contact-page-upgraded" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          4. FREQUENTLY ASKED QUESTIONS
          ======================================================== */}
      <section className="py-16 bg-white border-t border-[#E5E9EF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF2ED] text-[#FF571F] text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Common Inquiries</span>
            </div>
            <h2 className="text-3xl font-black text-[#17212D] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Everything you need to know before onboarding your restaurant on PapBill.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#E5E9EF] bg-[#F6F8FB] transition-all overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full py-4 px-6 flex items-center justify-between text-left font-bold text-sm sm:text-base text-[#17212D] hover:text-[#FF571F] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 flex-shrink-0 ml-4 ${
                        isOpen ? 'rotate-180 text-[#FF571F]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-200/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Help Banner */}
          <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-orange-50 via-white to-amber-50 border border-orange-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="font-black text-sm text-[#17212D]">Prefer to chat directly?</h4>
              <p className="text-xs text-gray-600 mt-0.5">
                Reach us on WhatsApp anytime at <span className="font-bold text-[#17212D]">{phoneDisplay}</span>
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold inline-flex items-center gap-2 shadow-sm transition-all flex-shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
