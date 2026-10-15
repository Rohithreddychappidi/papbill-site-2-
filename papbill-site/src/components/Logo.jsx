import React from 'react';

export default function Logo({ className = '', isWhite = false }) {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Brand Icon: Minimal receipt fold badge */}
      <div className="relative w-8 h-8 rounded-lg bg-[#FF5A00] flex items-center justify-center shadow-sm shadow-orange-500/20 overflow-hidden group">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 text-white"
        >
          <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
          <path d="M8 8h8" />
          <path d="M8 12h6" />
        </svg>
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <span className={`text-[17px] font-bold tracking-tight leading-tight ${isWhite ? 'text-white' : 'text-slate-900'}`}>
            Pap<span className="text-[#FF5A00]">Bill</span>
          </span>
        </div>
        <span className={`text-[10px] uppercase font-medium tracking-wider -mt-0.5 ${isWhite ? 'text-slate-400' : 'text-slate-400'}`}>
          by Hatbricks
        </span>
      </div>
    </div>
  );
}
