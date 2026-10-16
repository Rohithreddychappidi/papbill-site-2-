import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, HelpCircle } from 'lucide-react';
import { SEO } from '../components/SEO';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] bg-[#F6F8FB] flex items-center justify-center py-20 px-4">
      <SEO
        title="404 - Page Not Found | PapBill Restaurant POS"
        description="The page you are looking for does not exist."
        noindex={true}
      />
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-12 border border-[#E5E9EF] shadow-xl text-center space-y-6">
        <div className="w-16 h-16 rounded-3xl bg-[#FFF2ED] text-[#FF571F] flex items-center justify-center mx-auto text-2xl font-black">
          404
        </div>
        
        <div className="space-y-2">
          <h1 className="text-2xl font-extrabold text-[#17212D]">
            Page Not Found
          </h1>
          <p className="text-xs text-[#667085] leading-relaxed">
            The page or route you are looking for does not exist or has been moved.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FF571F] hover:bg-[#E04612] text-white text-xs font-bold transition-all shadow-xs"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>

          <Link
            to="/features"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-[#17212D] text-xs font-bold transition-all"
          >
            Explore Features
          </Link>
        </div>
      </div>
    </div>
  );
};
