import React from 'react';
import Logo from './Logo';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { MessageCircle, Phone, Heart } from 'lucide-react';

export default function Footer() {
  const whatsappUrl = getWhatsAppUrl('Hi PapBill, I have a quick question about restaurant billing.');

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          <div>
            <Logo isWhite={true} />
            <p className="text-xs text-slate-500 mt-2 max-w-sm">
              Smart restaurant billing, QR ordering, KOT, and thermal printing platform by Hatbricks.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-slate-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
            <a href="#hardware" className="hover:text-white transition-colors">Hardware</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF5A00] hover:text-orange-400 font-semibold flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>+91 94825 58220</span>
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Hatbricks. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-[#FF5A00] fill-current" />
            <span>for hospitality in India</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
