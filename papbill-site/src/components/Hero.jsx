import React, { useState, useRef } from 'react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { 
  ArrowRight, 
  Play, 
  Pause,
  Volume2,
  VolumeX,
  Cloud, 
  WifiOff, 
  Sparkles, 
  Printer, 
  RotateCcw, 
  Check, 
  Film
} from 'lucide-react';

export default function Hero() {
  const [printKey, setPrintKey] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [heroView, setHeroView] = useState('both'); // 'video' | 'interactive' | 'both'

  const videoRef = useRef(null);
  const freeTrialUrl = getWhatsAppUrl('Hi PapBill, I want to start my 15 days free trial for PapBill restaurant billing.');

  const triggerReprint = () => {
    setPrintKey((prev) => prev + 1);
  };

  const toggleVideoPlay = () => {
    if (!videoRef.current) return;
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsVideoPlaying(true)).catch(() => {});
    }
  };

  const toggleVideoMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isVideoMuted;
    setIsVideoMuted(!isVideoMuted);
  };

  return (
    <section className="pt-24 pb-16 md:pt-36 md:pb-24 relative overflow-hidden w-full">
      
      {/* Edge to edge container */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 max-w-full">
        
        {/* Main Hero Header */}
        <div className="max-w-4xl space-y-6 text-left mb-12 animate-fade-in-up">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF5A00] text-xs sm:text-sm font-bold tracking-wide shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A00] animate-ping" />
            <span>15 Days Free Trial · Cloud-Stored Bills · Starting at ₹199/mo</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.08]">
            Smart Billing for <br />
            <span className="text-[#FF5A00]">Modern Restaurants.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
            Lightning-fast counter POS, Table QR self-ordering, automatic kitchen tickets (KOT), and 58mm/80mm thermal receipt printing. Every bill is securely stored in the cloud.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={freeTrialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm sm:text-base py-3.5 px-8 shadow-lg shadow-orange-500/25 group font-bold"
            >
              <span>Start 15 Days Free Trial</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#pricing"
              className="btn-secondary text-sm sm:text-base py-3.5 px-6 font-semibold"
            >
              <span>View Plans (₹199 / ₹299)</span>
            </a>
          </div>

          {/* Product Badges */}
          <div className="pt-4 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-600">
            <span className="flex items-center gap-1.5 font-medium"><Sparkles className="w-4 h-4 text-[#FF5A00]" /> 15 Days Free Trial</span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5 font-medium"><Cloud className="w-4 h-4 text-sky-600" /> Cloud Backed</span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5 font-medium"><WifiOff className="w-4 h-4 text-emerald-600" /> Works Offline</span>
            <span className="text-slate-300">•</span>
            <span className="font-semibold text-slate-900">Zero Setup Fees</span>
          </div>

        </div>

        {/* Hero Visual Stage: 3D Video + Phone & Paper Bill (Responsive & Zoomed out on Mobile) */}
        <div className="w-full scale-[0.92] sm:scale-100 origin-top transition-transform">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: 3D Product Video Showcase */}
            <div className="lg:col-span-6">
              <div className="glass-panel rounded-3xl p-3 sm:p-4 bg-white/95 shadow-2xl border border-slate-200/90 relative overflow-hidden group">
                
                {/* Video Header bar */}
                <div className="flex items-center justify-between pb-3 px-2 border-b border-slate-100 text-xs">
                  <div className="flex items-center gap-2">
                    <Film className="w-4 h-4 text-[#FF5A00]" />
                    <span className="font-bold text-slate-900">PapBill Motion Intro</span>
                    <span className="px-2 py-0.5 rounded-full bg-orange-100 text-[#FF5A00] text-[10px] font-bold">HD</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleVideoPlay}
                      className="p-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                      title={isVideoPlaying ? "Pause" : "Play"}
                    >
                      {isVideoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                    </button>
                    <button
                      onClick={toggleVideoMute}
                      className="p-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                      title={isVideoMuted ? "Unmute" : "Mute"}
                    >
                      {isVideoMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* 16:9 Video Player */}
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-950 mt-3 shadow-inner">
                  <video
                    ref={videoRef}
                    src="/videos/hero-demo.mp4"
                    poster="/videos/hero-poster.jpg"
                    autoPlay
                    loop
                    muted={isVideoMuted}
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2.5 left-3 text-[10px] text-white/80 bg-black/50 px-2 py-0.5 rounded-md backdrop-blur-xs font-mono">
                    hero-demo.mp4 · 1280×720
                  </div>
                </div>

                <div className="mt-3 text-center text-xs text-slate-500 font-medium">
                  3D PapBill motion animation · Watch how it prints & syncs
                </div>
              </div>
            </div>

            {/* Right: Phone Menu Generation & Animated Paper Bill */}
            <div className="lg:col-span-6">
              <div className="relative w-full max-w-[560px] mx-auto grid grid-cols-1 sm:grid-cols-12 gap-5 items-start">
                
                {/* Phone Mockup: Menu & Instant Bill Trigger */}
                <div className="sm:col-span-6 relative z-10 glass-panel rounded-[36px] bg-slate-950 p-2.5 shadow-2xl border-[3px] border-slate-800">
                  <div className="w-16 h-4 bg-black rounded-full mx-auto mb-2 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-slate-800" />
                  </div>

                  <div className="bg-white rounded-[28px] overflow-hidden p-3 text-xs space-y-2.5">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <div>
                        <div className="font-extrabold text-[12px] text-slate-900">Udupi Tiffins</div>
                        <div className="text-[10px] text-slate-500">Table 6 · Bill #1042</div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[9px] font-bold border border-emerald-200">
                        LIVE POS
                      </span>
                    </div>

                    <div className="space-y-1.5 font-sans">
                      <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
                        <div>
                          <div className="font-bold text-[11px] text-slate-800">2× Masala Dosa</div>
                          <div className="text-[9px] text-slate-400">Crispy butter roast</div>
                        </div>
                        <span className="font-mono font-bold text-slate-900 text-[11px]">₹140</span>
                      </div>

                      <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
                        <div>
                          <div className="font-bold text-[11px] text-slate-800">2× Filter Coffee</div>
                          <div className="text-[9px] text-slate-400">South Indian brew</div>
                        </div>
                        <span className="font-mono font-bold text-slate-900 text-[11px]">₹80</span>
                      </div>

                      <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
                        <div>
                          <div className="font-bold text-[11px] text-slate-800">1× Paneer Tikka</div>
                          <div className="text-[9px] text-slate-400">Tandoor roasted</div>
                        </div>
                        <span className="font-mono font-bold text-slate-900 text-[11px]">₹220</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-100 space-y-2">
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="text-slate-500">Subtotal + 5% GST</span>
                        <span className="font-bold font-mono text-slate-900">₹462</span>
                      </div>

                      <button
                        onClick={triggerReprint}
                        className="w-full bg-[#FF5A00] hover:bg-[#E65100] text-white py-2 rounded-xl text-center font-bold text-[11px] flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        <span>Print Thermal Bill</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Animated Paper Bill Component */}
                <div className="sm:col-span-6 relative mt-4 sm:mt-0">
                  <div className="receipt-slot mx-3" />

                  <div key={printKey} className="feed shadow-2xl mx-1">
                    <div className="paper-receipt animate-print-receipt p-5 text-slate-900 shadow-xl rounded-b-sm border-x border-slate-200">
                      
                      <div className="text-center pb-2 border-b-2 border-dashed border-slate-800">
                        <div className="font-bold text-base tracking-tight text-slate-950 font-sans">
                          Udupi Tiffins
                        </div>
                        <div className="text-[10px] text-slate-600 mt-0.5">
                          Table 6 · Bill #1042 · Dine In
                        </div>
                        <div className="text-[9px] text-slate-500 font-mono">
                          Cloud Backup: #PB-8942
                        </div>
                      </div>

                      <div className="py-2.5 space-y-1.5 text-xs border-b-2 border-dashed border-slate-800">
                        <div className="flex justify-between">
                          <span>2× Masala Dosa</span>
                          <span className="font-bold">₹140</span>
                        </div>
                        <div className="flex justify-between">
                          <span>2× Filter Coffee</span>
                          <span className="font-bold">₹80</span>
                        </div>
                        <div className="flex justify-between">
                          <span>1× Paneer Tikka</span>
                          <span className="font-bold">₹220</span>
                        </div>
                      </div>

                      <div className="py-2 space-y-1 text-xs border-b-2 border-dashed border-slate-800">
                        <div className="flex justify-between text-slate-600 text-[11px]">
                          <span>Subtotal</span>
                          <span>₹440</span>
                        </div>
                        <div className="flex justify-between text-slate-600 text-[11px]">
                          <span>GST 5%</span>
                          <span>₹22</span>
                        </div>
                        <div className="flex justify-between font-extrabold text-sm text-slate-950 pt-1">
                          <span>TOTAL</span>
                          <span>₹462</span>
                        </div>
                      </div>

                      <div className="pt-2 text-center text-[10px] text-slate-600 space-y-1.5">
                        <div>Scan to pay by UPI</div>
                        <div 
                          className="h-7 w-full my-1 rounded-xs"
                          style={{
                            background: 'repeating-linear-gradient(90deg, #0F172A 0 2px, transparent 2px 4px, #0F172A 4px 6px, transparent 6px 9px, #0F172A 9px 12px, transparent 12px 14px)'
                          }}
                        />
                        <div className="text-[8px] text-slate-400 font-mono">
                          POWERED BY PAPBILL · CLOUD
                        </div>
                      </div>

                      <div className="animate-stamp absolute right-4 bottom-14 border-[3px] border-[#FF5A00] text-[#FF5A00] font-mono font-extrabold text-xs px-2 py-0.5 rounded tracking-wider shadow-xs">
                        PAID ✓
                      </div>

                    </div>
                  </div>

                  <div className="text-center mt-3">
                    <button
                      onClick={triggerReprint}
                      className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 hover:text-[#FF5A00] transition-colors"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Re-print receipt animation</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
