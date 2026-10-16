import React from 'react';
import { Settings, Play, QrCode, ChefHat, TrendingUp } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '1',
      title: 'Setup',
      description: 'We configure your menu, tables and settings.',
      icon: Settings,
    },
    {
      step: '2',
      title: 'Go Live',
      description: 'Start using PapBill seamlessly on your devices.',
      icon: Play,
    },
    {
      step: '3',
      title: 'Customers Order',
      description: 'Via table QR or at the front billing POS.',
      icon: QrCode,
    },
    {
      step: '4',
      title: 'Orders in Kitchen',
      description: 'KOT prints automatically at kitchen stations.',
      icon: ChefHat,
    },
    {
      step: '5',
      title: 'Manage & Grow',
      description: 'Track sales, inventory and reports in real time.',
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-20 bg-[#F6F8FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17212D] tracking-tight">
            How It Works
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#667085]">
            Get started with PapBill in 5 simple steps.
          </p>
        </div>

        {/* 5 Steps Flow */}
        <div className="relative">
          {/* Connector Line on Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gray-200 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Number Circle */}
                  <div className="relative mb-4">
                    <div className="w-14 h-14 rounded-full bg-white border-2 border-[#FF571F] shadow-sm flex items-center justify-center text-[#FF571F] font-extrabold text-lg group-hover:bg-[#FF571F] group-hover:text-white transition-all duration-300">
                      {item.step}
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-[#17212D] text-white flex items-center justify-center text-xs shadow-xs">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#17212D] mt-2 group-hover:text-[#FF571F] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#667085] mt-1.5 leading-relaxed max-w-[200px]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
