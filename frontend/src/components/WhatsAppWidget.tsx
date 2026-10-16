import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const WhatsAppWidget: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '919482558220';
  const defaultMessage = encodeURIComponent(
    'Hi PapBill, I would like to know more about your restaurant POS system.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <aside aria-label="WhatsApp Support" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3">
      {/* Tooltip / Label pill */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="hidden sm:flex items-center gap-2 py-2 px-3.5 rounded-2xl bg-[#17212D] text-white text-xs font-semibold shadow-2xl border border-white/10 pointer-events-none"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span>Chat with us on WhatsApp</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with PapBill Support (+91 94825 58220)"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-[0_8px_30px_rgb(37,211,102,0.45)] transition-all duration-300 hover:scale-108 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        {/* Subtle breathing ripple glow */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-25 animate-ping pointer-events-none scale-75" />

        {/* WhatsApp Official SVG Icon */}
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 fill-current relative z-10 transition-transform duration-300 group-hover:scale-110"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.979-.276-.1-.477-.15-.678.15s-.779.979-.955 1.18c-.176.2-.352.226-.653.075s-1.272-.469-2.423-1.496c-.896-.799-1.502-1.787-1.678-2.088s-.019-.464.132-.614c.136-.135.301-.352.452-.527s.2-.301.301-.502c.101-.2.05-.376-.025-.527s-.678-1.633-.93-2.237c-.245-.588-.494-.508-.678-.518-.176-.009-.377-.011-.578-.011s-.527.075-.803.376c-.276.301-1.054 1.029-1.054 2.51s1.079 2.912 1.23 3.113c.15.2 2.124 3.243 5.146 4.549.719.311 1.28.497 1.718.636.722.23 1.379.197 1.899.12.579-.087 1.782-.728 2.033-1.431.251-.703.251-1.305.176-1.431-.075-.126-.276-.201-.577-.351zM12.004 2C6.48 2 2 6.48 2 12.004c0 1.954.564 3.778 1.54 5.318L2 22l4.82-1.505c1.479.882 3.21 1.509 5.184 1.509 5.524 0 10.004-4.48 10.004-10.004C22.008 6.48 17.528 2 12.004 2zm0 18.2c-1.683 0-3.243-.518-4.542-1.411l-.326-.222-2.862.894.908-2.775-.22-.352C4.01 14.996 3.5 13.535 3.5 12.004 3.5 7.315 7.315 3.5 12.004 3.5c4.689 0 8.504 3.815 8.504 8.504 0 4.689-3.815 8.196-8.504 8.196z" />
        </svg>

        {/* Online Status Dot */}
        <span className="absolute top-0.5 right-0.5 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full shadow-xs" />
      </a>
    </aside>
  );
};
