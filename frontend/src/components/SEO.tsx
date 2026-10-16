import React, { useEffect } from 'react';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogType?: 'website' | 'article' | 'product';
  ogImage?: string;
  schema?: Record<string, any> | Array<Record<string, any>>;
  noindex?: boolean;
}

const DEFAULT_TITLE = 'PapBill - #1 Restaurant POS & Billing Software | Offline Mobile App';
const DEFAULT_DESCRIPTION = 'PapBill is India\'s #1 restaurant billing software and mobile POS app. 100% offline billing, QR ordering, KOT printing, 5% GST invoicing, Swiggy/Zomato sync, and multi-outlet management.';
const DEFAULT_KEYWORDS = 'restaurant billing software, restaurant billing app, restaurant POS software, offline restaurant billing, KOT printing software, thermal printer billing app, cafe billing software, food court POS, cloud kitchen billing software, Indian restaurant POS, restaurant management software, GST restaurant billing';
const SITE_URL = 'https://papbill.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export const SEO: React.FC<SEOProps> = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  canonical,
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  schema,
  noindex = false
}) => {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper to safely set meta tag
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMeta('name', 'description', description);
    setMeta('name', 'keywords', keywords);
    setMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    setMeta('name', 'author', 'Hatbricks');

    // 3. Open Graph Tags
    const currentUrl = canonical ? (canonical.startsWith('http') ? canonical : `${SITE_URL}${canonical}`) : window.location.href;
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', currentUrl);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'og:site_name', 'PapBill Restaurant POS');
    setMeta('property', 'og:locale', 'en_IN');

    // 4. Twitter Card Tags
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);

    // 5. Canonical Link Tag
    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', currentUrl);

    // 6. Structured Data (JSON-LD)
    const scriptId = 'dynamic-page-schema';
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (schema) {
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.id = scriptId;
        scriptEl.type = 'application/ld+json';
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(schema);
    } else if (scriptEl) {
      scriptEl.remove();
    }

    return () => {
      // Clean up dynamic script on unmount
      const existingScript = document.getElementById(scriptId);
      if (existingScript) existingScript.remove();
    };
  }, [title, description, keywords, canonical, ogType, ogImage, schema, noindex]);

  return null;
};
