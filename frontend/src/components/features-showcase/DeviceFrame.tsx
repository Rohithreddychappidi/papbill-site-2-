import React from 'react';
import { Wifi, Signal } from 'lucide-react';

interface DesktopFrameProps {
  children: React.ReactNode;
}

export const DesktopMonitorFrame: React.FC<DesktopFrameProps> = ({ children }) => {
  return (
    <div className="relative w-full max-w-[510px] mx-auto flex flex-col items-center select-none">
      {/* iMac Display Chassis */}
      <div className="relative w-full rounded-[18px] sm:rounded-[22px] bg-[#1A202C] p-1.5 sm:p-2 shadow-[0_20px_50px_-10px_rgba(15,23,42,0.28)] border border-gray-700/60 ring-1 ring-black/40 z-10 flex flex-col">
        {/* Subtle Webcam Lens at Top Center */}
        <div className="w-full flex justify-center pb-1">
          <div className="w-1.5 h-1.5 rounded-full bg-black border border-gray-700 flex items-center justify-center">
            <div className="w-0.5 h-0.5 rounded-full bg-blue-900/80" />
          </div>
        </div>

        {/* Inner High-Resolution Display Screen */}
        <div className="relative w-full bg-white rounded-[12px] sm:rounded-[16px] overflow-hidden shadow-inner h-[295px] sm:h-[320px] flex flex-col border border-gray-200">
          {children}
        </div>
      </div>

      {/* Realistic iMac Aluminum Metallic Stand */}
      <div className="relative -mt-3 sm:-mt-4 w-36 sm:w-44 flex justify-center z-0 pointer-events-none">
        <img 
          src="/images/imac-metallic-stand.png" 
          alt="iMac metallic monitor stand"
          className="w-full h-auto drop-shadow-md"
          loading="eager"
        />
      </div>
    </div>
  );
};

interface MobileFrameProps {
  children: React.ReactNode;
  className?: string;
}

export const MobilePhoneFrame: React.FC<MobileFrameProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={`relative w-[130px] sm:w-[145px] rounded-[24px] bg-[#17212D] p-1.5 shadow-[0_20px_45px_-10px_rgba(15,23,42,0.4)] border border-gray-700/80 ring-1 ring-black/50 select-none ${className}`}>
      {/* Inner Screen Container */}
      <div className="relative w-full bg-white rounded-[18px] overflow-hidden flex flex-col border border-gray-200">
        
        {/* iOS Dynamic Island & Status Bar */}
        <div className="relative px-2 pt-1 pb-0.5 flex items-center justify-between bg-white text-[#17212D] text-[8px] font-black select-none z-20">
          <span>9:41</span>
          
          {/* Dynamic Island pill */}
          <div className="w-9 h-2 bg-black rounded-full mx-auto" />

          {/* Icons: Signal, Wifi, Battery */}
          <div className="flex items-center gap-0.5 text-[#17212D]">
            <Signal className="w-2 h-2" />
            <Wifi className="w-2 h-2" />
            <div className="w-2.5 h-1.5 rounded-[1.5px] border border-current p-0.5 flex items-center">
              <div className="w-full h-full bg-current rounded-[0.5px]" />
            </div>
          </div>
        </div>

        {/* Mobile Viewport Screen */}
        <div className="relative w-full bg-[#F6F8FB] overflow-hidden h-[230px] sm:h-[245px] flex flex-col text-[#17212D]">
          {children}
        </div>

        {/* Home Indicator Bar */}
        <div className="py-1 bg-white flex justify-center z-20">
          <div className="w-10 h-0.5 bg-gray-300 rounded-full" />
        </div>
      </div>
    </div>
  );
};

interface FloatingPillProps {
  label?: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}

export const FloatingFeaturePill: React.FC<FloatingPillProps> = ({
  label,
  position,
  className = ''
}) => {
  if (!label) return null;

  const positionClasses = {
    'top-left': 'top-2 -left-2 sm:-left-4',
    'top-right': 'top-5 -right-2 sm:-right-4',
    'bottom-left': 'bottom-16 -left-3 sm:-left-5',
    'bottom-right': 'bottom-5 right-2 sm:right-4'
  }[position];

  return (
    <div className={`absolute z-30 transition-all duration-300 pointer-events-none sm:pointer-events-auto ${positionClasses} ${className}`}>
      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E5E9EF] shadow-md shadow-slate-900/5 hover:scale-105 transition-all text-[#17212D]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#17212D] flex-shrink-0" />
        <span className="text-[11px] sm:text-xs font-bold tracking-tight whitespace-nowrap">
          {label}
        </span>
      </div>
    </div>
  );
};
