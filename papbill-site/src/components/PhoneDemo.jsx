import React, { useState, useRef } from 'react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { 
  Video, 
  Smartphone, 
  ChefHat, 
  Receipt, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Plus, 
  Check, 
  Clock, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function PhoneDemo() {
  const [activeTab, setActiveTab] = useState('video'); // 'video' | 'menu' | 'kot' | 'bill'
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [cartCount, setCartCount] = useState(2);
  const [videoError, setVideoError] = useState(false);

  const videoRef = useRef(null);
  const bookDemoUrl = getWhatsAppUrl('Hi PapBill, I watched the interactive phone demo and want to schedule a 15-day free trial walkthrough.');

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section id="demo" className="py-20 bg-white border-t border-slate-100 w-full relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-100/35 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 max-w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/70 text-[#FF5A00] text-xs font-semibold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Mobile Experience
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            See PapBill in Action
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Switch between the video walkthrough, customer QR ordering menu, live kitchen ticket, and instant digital bill.
          </p>

          {/* Interactive Screen Selector Tabs */}
          <div className="mt-6 inline-flex p-1 rounded-xl glass-panel bg-white/90 border border-slate-200">
            <button
              onClick={() => setActiveTab('video')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'video'
                  ? 'bg-[#FF5A00] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>Video Demo</span>
            </button>

            <button
              onClick={() => setActiveTab('menu')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'menu'
                  ? 'bg-[#FF5A00] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>QR Menu</span>
            </button>

            <button
              onClick={() => setActiveTab('kot')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'kot'
                  ? 'bg-[#FF5A00] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <ChefHat className="w-3.5 h-3.5" />
              <span>Live KOT</span>
            </button>

            <button
              onClick={() => setActiveTab('bill')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'bill'
                  ? 'bg-[#FF5A00] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <Receipt className="w-3.5 h-3.5" />
              <span>Digital Bill</span>
            </button>
          </div>
        </div>

        {/* Realistic Smartphone Mockup Frame */}
        <div className="flex justify-center">
          <div className="relative w-[300px] sm:w-[325px] aspect-[9/19] rounded-[48px] bg-slate-950 p-3 shadow-2xl border-[4px] border-slate-800 ring-1 ring-slate-900/50">
            
            <div className="absolute -left-[7px] top-24 w-[3px] h-8 bg-slate-700 rounded-l" />
            <div className="absolute -left-[7px] top-36 w-[3px] h-12 bg-slate-700 rounded-l" />
            <div className="absolute -left-[7px] top-52 w-[3px] h-12 bg-slate-700 rounded-l" />
            <div className="absolute -right-[7px] top-32 w-[3px] h-16 bg-slate-700 rounded-r" />

            <div className="relative w-full h-full rounded-[40px] overflow-hidden bg-white flex flex-col justify-between select-none">
              
              {/* Dynamic Island */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 w-24 h-5 bg-black rounded-full flex items-center justify-between px-2 shadow-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-900" />
                <div className="w-2 h-2 rounded-full bg-slate-800" />
              </div>

              {/* Top Status Bar */}
              <div className="pt-3 px-6 pb-1 flex justify-between items-center text-[10px] font-semibold text-slate-800 z-20">
                <span>9:41</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-[9px] font-bold">5G</span>
                  <div className="w-4 h-2 rounded-sm border border-slate-700 p-0.5 flex items-center">
                    <div className="w-2.5 h-full bg-slate-800 rounded-2xs" />
                  </div>
                </div>
              </div>

              {/* Screen Content based on Active Tab */}
              <div className="flex-1 overflow-y-auto px-4 py-2 relative flex flex-col">
                
                {/* 1. Video Demo Tab */}
                {activeTab === 'video' && (
                  <div className="relative w-full h-full flex flex-col items-center justify-center rounded-2xl overflow-hidden bg-slate-950 text-white">
                    <video
                      ref={videoRef}
                      className="absolute inset-0 w-full h-full object-cover"
                      playsInline
                      loop
                      muted={isMuted}
                      preload="metadata"
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      onError={() => setVideoError(true)}
                    >
                      <source src="/videos/papbill-demo.mp4" type="video/mp4" />
                    </video>

                    {videoError ? (
                      <div className="relative z-10 text-center p-6 space-y-3">
                        <div className="w-12 h-12 rounded-full bg-[#FF5A00]/20 border border-orange-500/40 flex items-center justify-center text-[#FF5A00] mx-auto animate-pulse">
                          <Video className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-sm text-slate-100">PapBill Demo Video</h4>
                        <p className="text-[11px] text-slate-400 leading-normal">
                          Ready for your demo clip: place <code className="text-orange-400 bg-slate-900 px-1 py-0.5 rounded">papbill-demo.mp4</code> into the <code className="text-orange-400 bg-slate-900 px-1 py-0.5 rounded">videos/</code> folder!
                        </p>
                        <a
                          href={bookDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-2 px-3 py-1.5 rounded-lg bg-[#FF5A00] text-white text-[11px] font-semibold"
                        >
                          Request Walkthrough on WhatsApp
                        </a>
                      </div>
                    ) : (
                      <div className="absolute bottom-4 left-3 right-3 z-20 flex items-center justify-between p-2 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-800">
                        <button
                          onClick={togglePlay}
                          className="w-8 h-8 rounded-lg bg-[#FF5A00] text-white flex items-center justify-center"
                          aria-label={isPlaying ? 'Pause video' : 'Play video'}
                        >
                          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5 fill-current" />}
                        </button>
                        <div className="text-[10px] text-slate-300 font-medium">PapBill Walkthrough</div>
                        <button
                          onClick={toggleMute}
                          className="w-7 h-7 rounded-lg bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center"
                          aria-label={isMuted ? 'Unmute' : 'Mute'}
                        >
                          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* 2. QR Menu Tab */}
                {activeTab === 'menu' && (
                  <div className="space-y-3 pt-1 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <div>
                        <div className="font-bold text-xs text-slate-900">Udupi Tiffins</div>
                        <div className="text-[10px] text-slate-500">Table 6 · Table QR Menu</div>
                      </div>
                      <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-semibold rounded-full border border-emerald-200">
                        Active
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 rounded-xl border border-slate-200 bg-white hover:border-orange-500/30 transition-colors flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-1.5 font-semibold text-slate-900 text-[11px]">
                            <span className="w-2.5 h-2.5 rounded-xs border border-emerald-600 p-0.5 flex items-center justify-center">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                            </span>
                            <span>Paneer Butter Masala</span>
                          </div>
                          <div className="text-[10px] text-slate-500 mt-0.5">Rich cashew gravy</div>
                          <div className="font-bold text-slate-900 text-[11px] mt-1">₹220</div>
                        </div>
                        <button
                          onClick={() => setCartCount((c) => c + 1)}
                          className="w-7 h-7 rounded-lg bg-orange-50 text-[#FF5A00] border border-orange-200 hover:bg-[#FF5A00] hover:text-white flex items-center justify-center transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="p-2.5 rounded-xl border border-slate-200 bg-white hover:border-orange-500/30 transition-colors flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-1.5 font-semibold text-slate-900 text-[11px]">
                            <span className="w-2.5 h-2.5 rounded-xs border border-emerald-600 p-0.5 flex items-center justify-center">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                            </span>
                            <span>Crispy Masala Dosa</span>
                          </div>
                          <div className="text-[10px] text-slate-500 mt-0.5">Golden roasted with chutney</div>
                          <div className="font-bold text-slate-900 text-[11px] mt-1">₹70</div>
                        </div>
                        <button
                          onClick={() => setCartCount((c) => c + 1)}
                          className="w-7 h-7 rounded-lg bg-orange-50 text-[#FF5A00] border border-orange-200 hover:bg-[#FF5A00] hover:text-white flex items-center justify-center transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="p-2.5 rounded-xl border border-slate-200 bg-white hover:border-orange-500/30 transition-colors flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-1.5 font-semibold text-slate-900 text-[11px]">
                            <span className="w-2.5 h-2.5 rounded-xs border border-emerald-600 p-0.5 flex items-center justify-center">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                            </span>
                            <span>Filter Coffee</span>
                          </div>
                          <div className="text-[10px] text-slate-500 mt-0.5">Hot decoction brew</div>
                          <div className="font-bold text-slate-900 text-[11px] mt-1">₹40</div>
                        </div>
                        <button
                          onClick={() => setCartCount((c) => c + 1)}
                          className="w-7 h-7 rounded-lg bg-orange-50 text-[#FF5A00] border border-orange-200 hover:bg-[#FF5A00] hover:text-white flex items-center justify-center transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-auto pt-2">
                      <div className="p-2.5 rounded-xl bg-[#FF5A00] text-white flex items-center justify-between text-xs font-semibold shadow-md">
                        <div className="flex items-center gap-1.5">
                          <span className="w-5 h-5 rounded-full bg-white text-[#FF5A00] flex items-center justify-center text-[10px] font-bold">
                            {cartCount}
                          </span>
                          <span>Items in Cart</span>
                        </div>
                        <span className="font-mono">Place Order →</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. Live KOT Tab */}
                {activeTab === 'kot' && (
                  <div className="space-y-3 pt-1 animate-in fade-in duration-200">
                    <div className="p-2.5 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <ChefHat className="w-4 h-4 text-[#FF5A00]" />
                        <div>
                          <div className="text-[11px] font-bold text-slate-900">Kitchen Display (KDS)</div>
                          <div className="text-[9px] text-slate-500">KOT #1042 · Table 6</div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-500 text-white text-[9px] font-bold animate-pulse">
                        COOKING
                      </span>
                    </div>

                    <div className="space-y-2 text-[11px] font-mono">
                      <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex justify-between items-center">
                        <div>
                          <div className="font-bold text-slate-900">2× Masala Dosa</div>
                          <div className="text-[9px] text-orange-600 font-sans">Note: Extra crispy</div>
                        </div>
                        <Check className="w-4 h-4 text-emerald-600" />
                      </div>

                      <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex justify-between items-center">
                        <div>
                          <div className="font-bold text-slate-900">1× Paneer Tikka</div>
                          <div className="text-[9px] text-slate-500 font-sans">Tandoor queue #2</div>
                        </div>
                        <Clock className="w-3.5 h-3.5 text-amber-500" />
                      </div>

                      <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex justify-between items-center">
                        <div>
                          <div className="font-bold text-slate-900">2× Filter Coffee</div>
                          <div className="text-[9px] text-slate-500 font-sans">Serve after dosa</div>
                        </div>
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-100 text-center text-[10px] text-slate-600">
                      Elapsed time: <span className="font-bold text-slate-900">3 mins 45 secs</span>
                    </div>
                  </div>
                )}

                {/* 4. Digital Bill Tab */}
                {activeTab === 'bill' && (
                  <div className="space-y-2.5 pt-1 animate-in fade-in duration-200">
                    <div className="border border-dashed border-slate-300 rounded-xl p-3 bg-white font-mono text-[10px] text-slate-800 shadow-sm">
                      <div className="text-center pb-2 border-b border-dashed border-slate-200">
                        <div className="font-bold text-xs text-slate-900">UDUPI TIFFINS</div>
                        <div className="text-[9px] text-slate-500">Table 6 · Bill #1042</div>
                      </div>

                      <div className="space-y-1 py-2 border-b border-dashed border-slate-200">
                        <div className="flex justify-between">
                          <span>2× Masala Dosa</span>
                          <span>₹140.00</span>
                        </div>
                        <div className="flex justify-between">
                          <span>2× Filter Coffee</span>
                          <span>₹80.00</span>
                        </div>
                        <div className="flex justify-between">
                          <span>1× Paneer Tikka</span>
                          <span>₹220.00</span>
                        </div>
                      </div>

                      <div className="py-1.5 space-y-0.5 border-b border-dashed border-slate-200">
                        <div className="flex justify-between text-slate-500">
                          <span>Subtotal</span>
                          <span>₹440.00</span>
                        </div>
                        <div className="flex justify-between text-slate-500">
                          <span>GST (5%)</span>
                          <span>₹22.00</span>
                        </div>
                        <div className="flex justify-between font-bold text-slate-900 text-xs pt-1">
                          <span>TOTAL</span>
                          <span className="text-[#FF5A00]">₹462.00</span>
                        </div>
                      </div>

                      <div className="text-center pt-2">
                        <div className="inline-block px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 font-bold text-[10px] border border-emerald-200">
                          ✓ CLOUD SYNCED & PAID
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              <div className="pb-2 pt-1 flex justify-center">
                <div className="w-24 h-1 bg-slate-300 rounded-full" />
              </div>

            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href={bookDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs sm:text-sm py-2.5 px-6 inline-flex items-center gap-2 shadow-md group"
          >
            <span>Book a 1-on-1 WhatsApp Live Demo</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
