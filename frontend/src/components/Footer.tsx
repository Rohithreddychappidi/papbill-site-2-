import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Mail, Phone, MapPin, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#17212D] text-white pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <div className="inline-flex items-center bg-white px-3.5 py-2 rounded-xl shadow-xs border border-gray-100">
                <Logo />
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Smart billing, QR ordering, kitchen management, inventory, and analytics platform built for modern restaurants and growing hospitality brands.
            </p>
            <div className="pt-2 text-xs text-gray-400 space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FF571F]" />
                <a href="mailto:support@papbill.com" className="hover:text-white transition-colors">
                  support@papbill.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FF571F]" />
                <a href="tel:+919482558220" className="hover:text-white transition-colors font-medium">
                  +91 94825 58220
                </a>
                <span className="text-gray-400 text-[11px]">(9 AM – 10 PM IST)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>GST Compliant • Made in India</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold tracking-wider uppercase text-gray-300">Product</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link to="/mobile-app" className="hover:text-white transition-colors text-[#FF571F] font-bold">Mobile POS App</Link></li>
              <li><Link to="/features#pos-billing" className="hover:text-white transition-colors">POS Billing</Link></li>
              <li><Link to="/solutions/qr-ordering" className="hover:text-white transition-colors">QR Table Ordering</Link></li>
              <li><Link to="/features#kitchen-order-tickets" className="hover:text-white transition-colors">Kitchen Display & KOT</Link></li>
              <li><Link to="/features#inventory-management" className="hover:text-white transition-colors">Inventory & Recipe Cost</Link></li>
              <li><Link to="/features#reports-analytics" className="hover:text-white transition-colors">Reports & Analytics</Link></li>
              <li><Link to="/features#multi-branch" className="hover:text-white transition-colors">Multi-Branch System</Link></li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold tracking-wider uppercase text-gray-300">Solutions</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link to="/solutions#cafes" className="hover:text-white transition-colors">Cafes & Bakeries</Link></li>
              <li><Link to="/solutions#qsr" className="hover:text-white transition-colors">QSR & Fast Food</Link></li>
              <li><Link to="/solutions#full-service" className="hover:text-white transition-colors">Fine Dining & Bistros</Link></li>
              <li><Link to="/solutions#cloud-kitchens" className="hover:text-white transition-colors">Cloud Kitchens</Link></li>
              <li><Link to="/solutions#multi-branch" className="hover:text-white transition-colors">Multi-Outlet Franchises</Link></li>
              <li><Link to="/solutions#food-trucks" className="hover:text-white transition-colors">Food Trucks & Pop-Ups</Link></li>
              <li><Link to="/solutions/qr-ordering" className="hover:text-white transition-colors">Contactless Dine-in</Link></li>
            </ul>
          </div>

          {/* Company & Legal Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold tracking-wider uppercase text-gray-300">Company</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About PapBill</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing & Plans</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Sales</Link></li>
              <li><Link to="/support" className="hover:text-white transition-colors">Help & Support</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} PapBill by Hatbricks. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-gray-400 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-gray-400 transition-colors">Terms</Link>
            <Link to="/refund-policy" className="hover:text-gray-400 transition-colors">Refunds</Link>
            <Link to="/support" className="hover:text-gray-400 transition-colors">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
