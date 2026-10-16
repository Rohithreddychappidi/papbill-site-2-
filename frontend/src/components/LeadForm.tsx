import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Building2, 
  Phone, 
  Mail, 
  User, 
  Clock, 
  Store 
} from 'lucide-react';
import { LeadSubmission } from '../types';
import { submitLead } from '../services/api';

interface LeadFormProps {
  defaultProduct?: string;
  sourcePage?: string;
  onSuccess?: () => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({ defaultProduct, sourcePage = 'contact', onSuccess }) => {
  const [formData, setFormData] = useState<LeadSubmission>({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: 'cafe',
    outletCount: '1',
    interestedProducts: defaultProduct ? [defaultProduct] : ['POS Billing'],
    timeline: 'immediate',
    message: '',
    privacyConsent: true,
    sourcePage,
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'idle' | 'success' | 'error';
    message: string;
    leadId?: string;
  }>({
    type: 'idle',
    message: '',
  });

  const productOptions = [
    'POS Billing',
    'QR Table Ordering',
    'Kitchen Display (KOT)',
    'Inventory Management',
    'Thermal Receipt Printers',
    'Multi-Branch System',
  ];

  const handleProductToggle = (prod: string) => {
    setFormData((prev) => {
      const exists = prev.interestedProducts.includes(prod);
      if (exists) {
        if (prev.interestedProducts.length === 1) return prev; // Keep at least one
        return {
          ...prev,
          interestedProducts: prev.interestedProducts.filter((p) => p !== prod),
        };
      } else {
        return {
          ...prev,
          interestedProducts: [...prev.interestedProducts, prod],
        };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: 'idle', message: '' });

    const result = await submitLead(formData);

    setLoading(false);
    if (result.success) {
      setStatus({
        type: 'success',
        message: result.message,
        leadId: result.data?.id,
      });
      if (onSuccess) onSuccess();
    } else {
      setStatus({
        type: 'error',
        message: result.message || 'Something went wrong. Please check your information and try again.',
      });
    }
  };

  if (status.type === 'success') {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E5E9EF] shadow-lg text-center space-y-5 animate-in zoom-in-95 duration-200">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-extrabold text-[#17212D]">
            Inquiry Received!
          </h3>
          <p className="text-sm text-[#667085] max-w-md mx-auto leading-relaxed">
            {status.message}
          </p>
        </div>

        {status.leadId && (
          <div className="inline-block px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs font-mono text-gray-500">
            Reference ID: {status.leadId}
          </div>
        )}

        <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => {
              setStatus({ type: 'idle', message: '' });
              setFormData({
                name: '',
                email: '',
                phone: '',
                businessName: '',
                businessType: 'cafe',
                outletCount: '1',
                interestedProducts: ['POS Billing'],
                timeline: 'immediate',
                message: '',
                privacyConsent: true,
                sourcePage,
              });
            }}
            className="text-xs font-bold text-[#FF571F] hover:underline"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-10 rounded-3xl bg-white border border-[#E5E9EF] shadow-xl space-y-6 text-[#17212D]"
    >
      {/* Form Error Banner */}
      {status.type === 'error' && (
        <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{status.message}</span>
        </div>
      )}

      {/* Grid: Name & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
            Your Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              required
              placeholder="e.g. Ramesh Kumar"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF571F] focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="tel"
              required
              placeholder="10-digit mobile number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF571F] focus:border-transparent transition-all"
            />
          </div>
        </div>
      </div>

      {/* Grid: Email & Business Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
            Business Email <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              required
              placeholder="owner@restaurant.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF571F] focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
            Restaurant / Business Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Store className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              required
              placeholder="e.g. Varahi Restaurant"
              value={formData.businessName}
              onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF571F] focus:border-transparent transition-all"
            />
          </div>
        </div>
      </div>

      {/* Grid: Business Type & Outlets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
            Business Type
          </label>
          <select
            value={formData.businessType}
            onChange={(e) => setFormData({ ...formData, businessType: e.target.value as any })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF571F] focus:border-transparent bg-white transition-all"
          >
            <option value="cafe">Cafe / Bakery</option>
            <option value="qsr">Quick-Service Restaurant (QSR)</option>
            <option value="fine-dining">Full-Service / Fine Dining</option>
            <option value="cloud-kitchen">Cloud Kitchen / Delivery Hub</option>
            <option value="multi-branch">Multi-Branch Chain</option>
            <option value="other">Other Food Business</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
            Number of Outlets
          </label>
          <select
            value={formData.outletCount}
            onChange={(e) => setFormData({ ...formData, outletCount: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF571F] focus:border-transparent bg-white transition-all"
          >
            <option value="1">1 Outlet (Single Location)</option>
            <option value="2-5">2 – 5 Outlets</option>
            <option value="6-10">6 – 10 Outlets</option>
            <option value="10+">10+ Outlets (Enterprise)</option>
          </select>
        </div>
      </div>

      {/* Interested Products Multi-Select */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
          Interested In (Select all that apply)
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {productOptions.map((prod) => {
            const isSelected = formData.interestedProducts.includes(prod);
            return (
              <button
                type="button"
                key={prod}
                onClick={() => handleProductToggle(prod)}
                className={`p-2.5 rounded-xl text-xs font-semibold border text-left transition-all ${
                  isSelected
                    ? 'border-[#FF571F] bg-[#FFF2ED] text-[#FF571F]'
                    : 'border-gray-200 hover:border-gray-300 text-gray-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{prod}</span>
                  {isSelected && <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Implementation Timeline */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
          Estimated Timeline
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
          {[
            { id: 'immediate', label: 'Immediately' },
            { id: '1-month', label: 'Within 1 Month' },
            { id: '3-months', label: 'Within 3 Months' },
            { id: 'exploring', label: 'Just Exploring' },
          ].map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => setFormData({ ...formData, timeline: item.id as any })}
              className={`py-2 px-3 rounded-xl font-medium border text-center transition-all ${
                formData.timeline === item.id
                  ? 'bg-[#17212D] text-white border-[#17212D]'
                  : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Message Textarea */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
          Additional Notes or Specific Requirements
        </label>
        <textarea
          rows={3}
          placeholder="Tell us about your restaurant setup, current POS software, or specific requirements..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF571F] focus:border-transparent transition-all"
        />
      </div>

      {/* Privacy Consent Checkbox */}
      <div className="flex items-start gap-2.5 pt-1">
        <input
          type="checkbox"
          id="privacyConsent"
          required
          checked={formData.privacyConsent}
          onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
          className="mt-1 h-4 w-4 rounded border-gray-300 text-[#FF571F] focus:ring-[#FF571F]"
        />
        <label htmlFor="privacyConsent" className="text-xs text-[#667085] leading-relaxed">
          I agree to the <a href="/privacy" className="text-[#FF571F] hover:underline">Privacy Policy</a> and authorize PapBill by Hatbricks to contact me regarding restaurant software solutions.
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-full text-base font-bold text-white bg-[#FF571F] hover:bg-[#E04612] disabled:opacity-60 transition-all shadow-md hover:shadow-lg cursor-pointer"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting Your Request...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Request Free Demo & Quote
          </>
        )}
      </button>

      <p className="text-[11px] text-center text-gray-400">
        No credit card required • 100% confidential • Typical response time &lt; 2 hours
      </p>
    </form>
  );
};
