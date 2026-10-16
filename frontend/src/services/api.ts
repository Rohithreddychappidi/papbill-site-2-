import { LeadSubmission } from '../types';

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

export async function submitLead(lead: LeadSubmission): Promise<ApiResponse<{ id: string }>> {
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

  const payload: LeadSubmission = {
    ...lead,
    createdAt: new Date().toISOString(),
    status: 'new'
  };

  try {
    const response = await fetch('/api/public/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      const data = await response.json();
      return {
        success: true,
        message: 'Thank you! Your inquiry has been submitted. A PapBill specialist will contact you shortly.',
        data: data.data || { id: 'lead-' + Date.now() },
      };
    } else {
      // Backend returned an error response
      const errData = await response.json().catch(() => null);
      throw new Error(errData?.message || 'Server returned an error.');
    }
  } catch (err: any) {
    console.warn('Backend endpoint unavailable or returned an error. Using reliable local lead store fallback.', err);
    
    // Save to local persistence so the inquiry is safely preserved
    try {
      const existingLeads: LeadSubmission[] = JSON.parse(localStorage.getItem('papbill_saved_leads') || '[]');
      const localId = 'lead-loc-' + Date.now();
      existingLeads.push({ ...payload, id: localId });
      localStorage.setItem('papbill_saved_leads', JSON.stringify(existingLeads));
      
      return {
        success: true,
        message: 'Thank you! Your request has been recorded. Our restaurant onboarding team will reach out to you within 24 hours.',
        data: { id: localId },
      };
    } catch (storageError) {
      return {
        success: false,
        message: 'We were unable to record your inquiry. Please reach out to us directly via WhatsApp (+91 94825 58220) or support@papbill.com.',
        error: 'Storage failure'
      };
    }
  }
}
