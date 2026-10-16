import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  Printer, 
  Wifi, 
  Smartphone, 
  MessageCircle, 
  FileText, 
  ArrowRight,
  PhoneCall
} from 'lucide-react';
import { BottomCta } from '../components/BottomCta';
import { SEO } from '../components/SEO';

export const SupportPage: React.FC = () => {
  const guides = [
    {
      icon: Printer,
      title: 'Thermal Printer Setup Guide',
      desc: 'Step-by-step instructions for pairing USB, Bluetooth, and LAN 80mm printers with your PapBill terminal.',
    },
    {
      icon: Wifi,
      title: 'Configuring Offline Mode & Local Cache',
      desc: 'How PapBill queues KOT and invoices locally during broadband disruptions and auto-synchronizes.',
    },
    {
      icon: Smartphone,
      title: 'QR Code Table Printing & Stands',
      desc: 'Best practices for laminating, downloading high-res SVG vectors, and positioning QR table markers.',
    },
    {
      icon: FileText,
      title: 'GST Tax Profiles & Z-Reports',
      desc: 'Setting up 5%, 12%, and 18% tax slabs, service charge exemptions, and day-end settlement reports.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F8FB]">
      <SEO
        title="Help & Support Center - PapBill Restaurant Billing Software"
        description="Printer setup guides, hardware integration tutorials, offline mode troubleshooting, and 24/7 technical customer support for PapBill restaurant POS."
        keywords="PapBill support, thermal printer setup POS, offline POS troubleshooting, restaurant billing help, PapBill documentation"
        canonical="https://papbill.com/support"
      />
      
      {/* Header */}
      <section className="pt-16 pb-16 bg-white border-b border-[#E5E9EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF2ED] text-[#FF571F] text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Support Center
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-[#17212D] tracking-tight leading-tight">
            How Can We Help Your Restaurant?
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#667085] leading-relaxed">
            Quick-start setup documentation, hardware troubleshooting, and direct support lines for active restaurant operators.
          </p>
        </div>
      </section>

      {/* Quick Setup Guides */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-extrabold text-[#17212D]">
              Popular Setup Documentation
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
            {guides.map((g, idx) => {
              const Icon = g.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-[#E5E9EF] shadow-xs hover:shadow-md transition-shadow flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF2ED] text-[#FF571F] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#17212D]">{g.title}</h3>
                    <p className="text-xs text-[#667085] mt-1 leading-relaxed">{g.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Direct Support Channels */}
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 border border-[#E5E9EF] shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-[#17212D]">Need Urgent On-Counter Assistance?</h3>
              <p className="text-xs text-gray-500 mt-1">Our restaurant technical support engineers are available during service hours.</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="tel:+919482558220"
                className="px-5 py-3 rounded-full bg-[#17212D] hover:bg-black text-white text-xs font-bold inline-flex items-center gap-2 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#FF571F]" />
                +91 94825 58220
              </a>
              <a
                href="https://wa.me/919482558220?text=Hi%20PapBill%20Support%2C%20I%20need%20assistance%20with%20my%20restaurant%20POS%20system."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold inline-flex items-center gap-2 shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Support
              </a>
            </div>
          </div>

        </div>
      </section>

      <BottomCta />

    </div>
  );
};
