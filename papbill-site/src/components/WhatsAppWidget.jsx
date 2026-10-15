import React, { useState } from 'react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const quickPrompts = [
    { label: '👋 I want a live demo', msg: 'Hi PapBill, I would like to schedule a quick 10-minute demo.' },
    { label: '💰 Pricing & plans inquiry', msg: 'Hi PapBill, I want to know more about your pricing and hardware packages.' },
    { label: '📱 QR ordering question', msg: 'Hi PapBill, how does the QR table ordering work for customers?' },
  ];

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 select-none">
      
      {/* Quick Chat Popup */}
      {isOpen && (
        <div className="mb-3 w-[290px] sm:w-[320px] rounded-2xl glass-panel bg-white shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          {/* Header */}
          <div className="bg-[#0F172A] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                <MessageCircle className="w-4 h-4 fill-current" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-slate-900" />
              </div>
              <div>
                <div className="font-bold text-xs text-white">PapBill Support</div>
                <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                  Online · Replies in 5 mins
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close chat popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 bg-white/95">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 leading-relaxed">
              👋 Hey there! Need help setting up billing, ordering hardware, or seeing a demo? Pick a question below or message us directly:
            </div>

            {/* Quick Chips */}
            <div className="space-y-1.5">
              {quickPrompts.map((p, i) => (
                <a
                  key={i}
                  href={getWhatsAppUrl(p.msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-left p-2 rounded-lg bg-orange-50/70 hover:bg-orange-100 text-[11px] font-medium text-slate-800 border border-orange-200/60 transition-colors"
                >
                  {p.label}
                </a>
              ))}
            </div>

            {/* Direct Send button */}
            <a
              href={getWhatsAppUrl('Hi PapBill team, I am on your website and want to chat.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-primary text-xs py-2 rounded-lg flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] shadow-sm shadow-emerald-500/30"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Start WhatsApp Chat</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center shadow-xl shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#FF5A00] text-white font-bold text-[9px] flex items-center justify-center border-2 border-white shadow-xs">
          1
        </span>
        <MessageCircle className="w-7 h-7 fill-current" />
      </button>

    </div>
  );
}
