import React from 'react';

export default function Logo({ className = '', height = 34 }) {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <img
        src="/papbill-logo.png"
        alt="PapBill Logo"
        style={{ height: `${height}px`, width: 'auto' }}
        className="object-contain filter hover:brightness-105 transition-all"
        loading="eager"
      />
    </div>
  );
}
