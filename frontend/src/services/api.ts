import { LeadSubmission } from '../types';

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

export interface StoredLead extends LeadSubmission {
  id: string;
  createdAt: string;
  status: 'new' | 'contacted';
  whatsappLink: string;
}

const SUPPORT_PHONE_CLEAN = '919482558220';

/**
 * Generate a pre-filled WhatsApp message URL with lead details
 */
export function buildWhatsAppLeadUrl(lead: LeadSubmission): string {
  const products = lead.interestedProducts && lead.interestedProducts.length > 0 
    ? lead.interestedProducts.join(', ') 
    : 'Restaurant POS Billing';
    
  const text = `*New PapBill Demo & Setup Inquiry*\n\n` +
    `👤 *Name:* ${lead.name}\n` +
    `🏢 *Restaurant:* ${lead.businessName} (${lead.businessType})\n` +
    `📱 *Phone:* ${lead.phone}\n` +
    `✉️ *Email:* ${lead.email}\n` +
    `🏪 *Outlets:* ${lead.outletCount || '1'}\n` +
    `📦 *Interested In:* ${products}\n` +
    `⏱️ *Timeline:* ${lead.timeline || 'Immediate'}\n` +
    (lead.message ? `💬 *Notes:* ${lead.message}\n` : '') +
    `\n_Sent via PapBill Web Portal_`;

  return `https://wa.me/${SUPPORT_PHONE_CLEAN}?text=${encodeURIComponent(text)}`;
}

/**
 * 100% Client-Side Lead Submission
 * Validates, saves to localStorage, and prepares WhatsApp link with zero backend dependency.
 */
export async function submitLead(lead: LeadSubmission): Promise<ApiResponse<{ id: string; whatsappUrl: string }>> {
  // Client-side quick validation
  if (!lead.name || lead.name.trim().length < 2) {
    return { success: false, message: 'Please provide a valid full name.' };
  }
  if (!lead.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return { success: false, message: 'Please provide a valid business email address.' };
  }
  if (!lead.phone || lead.phone.replace(/\D/g, '').length < 10) {
    return { success: false, message: 'Please provide a valid 10-digit phone number.' };
  }
  if (!lead.businessName || lead.businessName.trim().length < 2) {
    return { success: false, message: 'Please specify your restaurant or business name.' };
  }
  if (!lead.privacyConsent) {
    return { success: false, message: 'Please agree to the privacy policy to proceed.' };
  }

  // Artificial small delay for smooth realistic UI feedback (350ms)
  await new Promise((resolve) => setTimeout(resolve, 350));

  const referenceId = 'PB-' + Math.floor(100000 + Math.random() * 900000);
  const whatsappUrl = buildWhatsAppLeadUrl(lead);

  const storedRecord: StoredLead = {
    ...lead,
    id: referenceId,
    createdAt: new Date().toISOString(),
    status: 'new',
    whatsappLink: whatsappUrl,
  };

  try {
    const existing = JSON.parse(localStorage.getItem('papbill_saved_leads') || '[]');
    existing.unshift(storedRecord);
    localStorage.setItem('papbill_saved_leads', JSON.stringify(existing.slice(0, 50))); // Keep last 50 inquiries

    // Dispatch event in case other frontend components listen
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('papbill:lead_submitted', { detail: storedRecord }));
    }

    return {
      success: true,
      message: 'Inquiry received successfully! Our restaurant onboarding team will reach out to you within 24 hours.',
      data: {
        id: referenceId,
        whatsappUrl,
      },
    };
  } catch (storageErr) {
    console.warn('LocalStorage error:', storageErr);
    return {
      success: true,
      message: 'Inquiry received! Our team will contact you shortly.',
      data: {
        id: referenceId,
        whatsappUrl,
      },
    };
  }
}
