import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Menu, X, ArrowUpRight, MessageCircle, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#top' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'How It Works', href: '#how' },
    { label: 'POS Billing', href: '#features' },
    { label: 'Demo', href: '#demo' },
    { label: 'Hardware', href: '#hardware' },
    { label: 'Pricing (₹199)', href: '#pricing' },
    { label: 'About', href: '#about' }
  ];

  const trialUrl = getWhatsAppUrl('Hi PapBill, I want to start my 15 days free trial.');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] py-2.5'
          : 'bg-white/95 backdrop-blur-sm border-b border-slate-100 py-3.5'
      }`}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 max-w-full">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#top" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg">
            <Logo height={32} />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-slate-950 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#FF5A00] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action: 15 Days Free Trial & WhatsApp */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getWhatsAppUrl('Hi PapBill, I want to know about restaurant billing setup.')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-medium text-slate-700 hover:text-[#FF5A00] px-3 py-1.5 transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <a
              href={trialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-2 px-4 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-200" />
              <span>15 Days Free Trial</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href={trialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-[11px] py-1.5 px-3"
            >
              15 Days Free
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-x-0 border-t border-slate-200 mt-2 px-4 py-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[14px] font-medium text-slate-700 hover:text-[#FF5A00] py-2 px-3 rounded-md hover:bg-slate-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={trialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center py-2.5 text-[13px]"
            >
              Start 15 Days Free Trial on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
