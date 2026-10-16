import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FeatureItem } from './types';

interface FeatureDescriptionProps {
  feature: FeatureItem;
}

export const FeatureDescription: React.FC<FeatureDescriptionProps> = ({ feature }) => {
  return (
    <div className="flex flex-col justify-between h-full space-y-4 sm:space-y-5 text-left pr-0 lg:pr-6">
      {/* Ghost Watermark Index Number */}
      <div className="space-y-2">
        <div className="text-[64px] sm:text-[84px] font-black text-[#E9EEF5] leading-none select-none tracking-tighter -mb-2 sm:-mb-3">
          {feature.num}
        </div>

        {/* Feature Headline */}
        <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#17212D] tracking-tight leading-tight">
          {feature.headline}
        </h3>

        {/* Italicized Graceful Subtitle */}
        {feature.subtitle && (
          <p className="text-sm sm:text-[15px] text-[#667085] italic font-medium">
            {feature.subtitle}
          </p>
        )}
      </div>

      {/* Subtle Divider Line */}
      <div className="w-10 h-0.5 bg-[#E5E9EF]" />

      {/* Concise Description Paragraph */}
      <p className="text-[13px] sm:text-[14px] text-[#667085] leading-relaxed max-w-md">
        {feature.description}
      </p>

      {/* Key Stats Highlight Matrix */}
      {feature.stats && feature.stats.length > 0 && (
        <div className="grid grid-cols-2 gap-4 pt-2 sm:pt-3 border-t border-[#F0F3F7]">
          {feature.stats.map((stat, idx) => (
            <div key={idx}>
              <div className="text-lg sm:text-xl font-black text-[#17212D] tracking-tight">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-[11px] font-extrabold text-[#98A2B3] uppercase tracking-wider mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Understated Explore Link */}
      <div className="pt-1">
        <Link
          to={feature.ctaUrl}
          className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#FF571F] hover:text-[#E04612] group transition-colors"
        >
          <span>{feature.ctaText}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};
