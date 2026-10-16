import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, FileText, RefreshCw, AlertCircle } from 'lucide-react';
import { SEO } from '../components/SEO';

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  badge: string;
  canonicalPath: string;
  children: React.ReactNode;
}

const LegalLayout: React.FC<LegalLayoutProps> = ({ title, lastUpdated, badge, canonicalPath, children }) => (
  <div className="min-h-screen bg-[#F6F8FB] py-16">
    <SEO
      title={`${title} - PapBill Restaurant Billing Software`}
      description={`Official ${title} for PapBill restaurant POS software and services provided by Hatbricks.`}
      canonical={`https://papbill.com${canonicalPath}`}
    />
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Notice alert */}
      <div className="mb-8 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-2.5">
        <AlertCircle className="w-4 h-4 flex-shrink-0" />
        <span>
          <strong>Draft Legal Documentation:</strong> This draft is subject to formal review and periodic updates by Hatbricks legal counsel.
        </span>
      </div>

      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E5E9EF] shadow-lg">
        <div className="border-b border-gray-100 pb-6 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF571F]">
            {badge}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17212D] tracking-tight mt-1">
            {title}
          </h1>
          <p className="text-xs text-gray-400 mt-2">
            Last Updated: {lastUpdated} • PapBill by Hatbricks
          </p>
        </div>

        <div className="prose prose-sm max-w-none text-gray-600 space-y-6 text-xs sm:text-sm leading-relaxed">
          {children}
        </div>
      </div>

    </div>
  </div>
);

export const PrivacyPage: React.FC = () => (
  <LegalLayout title="Privacy Policy" lastUpdated="October 2026" badge="Data Privacy" canonicalPath="/privacy">
    <section className="space-y-3">
      <h3 className="text-base font-bold text-[#17212D]">1. Information We Collect</h3>
      <p>
        PapBill ("we", "our", or "us"), a product of Hatbricks, respects your privacy. When you use our marketing website, software applications, or hardware services, we may collect personal details such as your name, business name, phone number, email address, and restaurant outlet specifications.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-bold text-[#17212D]">2. How We Use Information</h3>
      <p>
        We use the collected information solely to:
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Provide restaurant billing, QR menu, and KOT services.</li>
        <li>Process hardware orders, shipping, and firmware synchronization.</li>
        <li>Respond to sales inquiries, quote requests, and technical support tickets.</li>
        <li>Maintain security and prevent abusive or fraudulent transactions.</li>
      </ul>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-bold text-[#17212D]">3. Restaurant Customer Data</h3>
      <p>
        Dining patrons who view menus or submit orders via PapBill table QR codes do not require an account. Any contact numbers or order histories provided during dine-in sessions remain the property of the respective restaurant establishment and are not sold or rented to third-party advertisers.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-bold text-[#17212D]">4. Data Security</h3>
      <p>
        All cloud communications are encrypted via HTTPS (TLS 1.3). Database records are protected by industry-standard access control policies and regular automated backups.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-bold text-[#17212D]">5. Contact Regarding Privacy</h3>
      <p>
        For inquiries regarding your data or to request data erasure, please contact our privacy compliance team at <a href="mailto:privacy@papbill.com" className="text-[#FF571F] font-semibold">privacy@papbill.com</a>.
      </p>
    </section>
  </LegalLayout>
);

export const TermsPage: React.FC = () => (
  <LegalLayout title="Terms & Conditions of Service" lastUpdated="October 2026" badge="Legal Agreement" canonicalPath="/terms">
    <section className="space-y-3">
      <h3 className="text-base font-bold text-[#17212D]">1. Agreement to Terms</h3>
      <p>
        By accessing or using PapBill software, hardware products, or websites operated by Hatbricks, you agree to be bound by these Terms and Conditions. If you do not agree, do not access or use the services.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-bold text-[#17212D]">2. SaaS Subscriptions & Billing</h3>
      <p>
        Software subscriptions are billed in advance on either a monthly or annual cycle. Subscriptions automatically renew unless canceled before the next renewal date. Failure to maintain an active subscription may result in limited access to cloud synchronization features, although offline billing functionality will preserve local order records.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-bold text-[#17212D]">3. Hardware Warranty</h3>
      <p>
        All hardware purchased directly from PapBill (including thermal printers, POS tablets, cash drawers, and barcode scanners) carries a 1-year manufacturer replacement warranty against electronic failure or defect under normal operational use. Physical water damage or deliberate tampering voids hardware warranty coverage.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-bold text-[#17212D]">4. Limitation of Liability</h3>
      <p>
        Hatbricks shall not be liable for indirect, incidental, or consequential damages resulting from restaurant business disruptions, third-party internet outages, or power failures.
      </p>
    </section>
  </LegalLayout>
);

export const RefundPolicyPage: React.FC = () => (
  <LegalLayout title="Refund & Cancellation Policy" lastUpdated="October 2026" badge="Refund Terms" canonicalPath="/refund-policy">
    <section className="space-y-3">
      <h3 className="text-base font-bold text-[#17212D]">1. Software Subscriptions</h3>
      <p>
        We offer a 14-day money-back guarantee for first-time annual subscriptions if PapBill does not fulfill the agreed operational features described during onboarding. Monthly subscriptions are non-refundable once the billing month commences, but can be canceled at any time to prevent subsequent renewal.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-bold text-[#17212D]">2. Hardware Returns & Exchanges</h3>
      <p>
        Hardware items may be returned within 7 days of delivery if unopened and in original packaging. Defective units reported within 30 days are eligible for immediate advance replacement at no additional shipping cost.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-base font-bold text-[#17212D]">3. Refund Processing</h3>
      <p>
        Approved refunds are credited back to the original payment source (UPI, Credit Card, or Net Banking) within 5 to 7 business days following receipt and inspection of returned goods.
      </p>
    </section>
  </LegalLayout>
);
