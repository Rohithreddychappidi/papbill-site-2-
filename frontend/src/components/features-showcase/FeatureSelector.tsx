import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FeatureId, FeatureItem } from './types';

interface FeatureSelectorProps {
  features: FeatureItem[];
  activeId: FeatureId;
  onSelectFeature: (id: FeatureId) => void;
}

export const FeatureSelector: React.FC<FeatureSelectorProps> = ({
  features,
  activeId,
  onSelectFeature
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      nextIndex = (index + 1) % features.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      nextIndex = (index - 1 + features.length) % features.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = features.length - 1;
    }

    if (nextIndex !== index) {
      onSelectFeature(features[nextIndex].id);
      const buttons = containerRef.current?.querySelectorAll<HTMLButtonElement>('button[role="tab"]');
      buttons?.[nextIndex]?.focus();
    }
  };

  return (
    <div className="w-full border-t border-[#E5E9EF] bg-[#FBFBFD] select-none">
      <div 
        ref={containerRef}
        role="tablist" 
        aria-label="PapBill Core Features Navigation"
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E9EF] overflow-x-auto no-scrollbar focus:outline-none"
      >
        {features.map((item, idx) => {
          const isActive = item.id === activeId;

          return (
            <button
              key={item.id}
              role="tab"
              id={`feature-tab-${item.id}`}
              aria-selected={isActive}
              aria-controls={`feature-panel-${item.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onSelectFeature(item.id)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className={`relative flex flex-col items-center justify-center py-3.5 px-2 transition-all cursor-pointer min-h-[58px] focus:outline-none ${
                isActive
                  ? 'bg-white text-[#17212D]'
                  : 'text-[#667085] hover:text-[#17212D] hover:bg-gray-50/70'
              }`}
            >
              {/* Active Top Line Indicator with 4s Progress */}
              {isActive && (
                <span className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#E5E9EF] overflow-hidden">
                  <motion.span
                    key={`progress-${item.id}`}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 4, ease: 'linear' }}
                    className="block h-full bg-[#17212D]"
                  />
                </span>
              )}

              {/* Number (visible on active or subtle on inactive) */}
              {isActive && (
                <span className="text-[10px] font-bold text-gray-400 leading-none mb-0.5">
                  {item.num}
                </span>
              )}

              {/* Tab Title */}
              <span className={`text-xs sm:text-[13px] tracking-tight whitespace-nowrap text-center ${
                isActive ? 'font-black text-[#17212D]' : 'font-medium'
              }`}>
                {item.navTitle}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
