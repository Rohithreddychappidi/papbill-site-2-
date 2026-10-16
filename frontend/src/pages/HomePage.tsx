import React from 'react';
import { Hero } from '../components/Hero';
import { FeaturesShowcase } from '../components/features-showcase';
import { SimpleSteps } from '../components/SimpleSteps';
import { HomeSolutions } from '../components/HomeSolutions';
import { HomePricing } from '../components/HomePricing';
import { BottomCta } from '../components/BottomCta';
import { SEO } from '../components/SEO';

const HOME_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Which is the best restaurant billing software in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "PapBill is rated India's #1 restaurant billing software and mobile POS app. It offers 100% offline billing, instant KOT printing to thermal printers, QR code table ordering, GST tax compliance, and multi-outlet management starting from just ₹269/month."
      }
    },
    {
      "@type": "Question",
      "name": "Does PapBill restaurant POS work offline without internet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! PapBill features a 100% offline-first local SQLite architecture. You can take orders, punch KOTs, print receipts via Bluetooth or USB thermal printers, and settle bills with zero internet. All data automatically syncs to the cloud once a connection is detected."
      }
    },
    {
      "@type": "Question",
      "name": "What is the price of PapBill restaurant billing software?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "PapBill pricing starts at ₹269/month (Starter plan, billed annually at ₹3,228/yr with 10% discount). Professional plan is ₹341/month, and Enterprise is ₹494/month. All plans include a 15-day free trial with zero setup fees."
      }
    },
    {
      "@type": "Question",
      "name": "Does PapBill support thermal receipt printers and KOT printing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, PapBill natively connects to all standard 58mm and 80mm thermal printers via Bluetooth, USB, WiFi, and Ethernet. It supports automatic multi-printer routing, sending kitchen order tickets (KOT) to kitchen printers and customer invoices to counter printers."
      }
    },
    {
      "@type": "Question",
      "name": "Can PapBill integrate with Swiggy and Zomato?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, PapBill consolidates dine-in, takeaway, and online delivery orders from platforms like Swiggy and Zomato into a single unified kitchen order queue and automated sales ledger."
      }
    }
  ]
};

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F6F8FB]">
      <SEO
        title="PapBill - #1 Restaurant POS & Billing Software | Offline Billing App"
        description="PapBill is India's #1 restaurant billing software and mobile POS app. 100% offline billing, instant KOT printing, QR ordering, 5% GST invoicing, and multi-outlet management."
        keywords="restaurant billing software, restaurant billing app, restaurant POS software, offline restaurant billing app, KOT printing software, thermal printer billing app, cafe billing software, food court POS, cloud kitchen billing software, Indian restaurant POS, restaurant management software, GST restaurant billing"
        canonical="https://papbill.com/"
        schema={HOME_FAQ_SCHEMA}
      />

      {/* Premium Hero Section */}
      <Hero />

      {/* Premium Interactive Features Showcase Section immediately below Hero */}
      <FeaturesShowcase />

      {/* Simple Steps to Get Started: Left Phone Screen + Right Context */}
      <SimpleSteps />

      {/* Tailored Industry Solutions Showcase */}
      <HomeSolutions />

      {/* Plans & Pricing Section */}
      <HomePricing />

      {/* Bottom CTA Banner */}
      <BottomCta />
    </div>
  );
};
