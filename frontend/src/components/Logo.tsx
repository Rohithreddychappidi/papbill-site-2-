import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', light = false }) => {
  return (
    <Link 
      to="/" 
      className={`inline-flex items-center group ${className}`} 
      aria-label="PapBill - #1 Restaurant POS & Billing Software Home"
      title="PapBill - #1 Restaurant POS & Billing Software"
    >
      <img
        src={light ? '/images/papbill-logo-white.png' : '/images/papbill-logo.png'}
        alt="PapBill - #1 Restaurant POS & Billing Software"
        title="PapBill - Smart Restaurant Billing Software & POS App"
        width="168"
        height="42"
        loading="eager"
        decoding="async"
        className="h-8 sm:h-10 md:h-[42px] w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
        onError={(e) => {
          const target = e.currentTarget;
          target.style.display = 'none';
          if (target.nextElementSibling) {
            (target.nextElementSibling as HTMLElement).style.display = 'flex';
          }
        }}
      />
      <div className="hidden flex-col">
        <div className="flex items-center text-2xl font-extrabold tracking-tight">
          <span className={light ? 'text-white' : 'text-[#17212D]'}>Pap</span>
          <span className="text-[#FF571F]">Bill</span>
        </div>
        <span className={`text-[9px] font-semibold tracking-wider uppercase -mt-1 ${light ? 'text-gray-400' : 'text-[#667085]'}`}>
          by Hatbricks
        </span>
      </div>
    </Link>
  );
};
