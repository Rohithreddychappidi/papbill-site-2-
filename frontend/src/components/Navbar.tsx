import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown, PhoneCall } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Mobile App', path: '/mobile-app' },
    { name: 'Solutions', path: '/solutions', hasDropdown: true },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
  ];

  const isHomePage = location.pathname === '/';
  const showOpaque = scrolled || !isHomePage || isOpen;

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        showOpaque 
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#E5E9EF]' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `inline-flex items-center text-sm font-semibold transition-colors duration-150 py-1 ${
                    isActive
                      ? 'text-[#FF571F]'
                      : 'text-[#17212D] hover:text-[#FF571F]'
                  }`
                }
              >
                <span>{link.name}</span>
                {link.hasDropdown && (
                  <ChevronDown className="w-3.5 h-3.5 ml-1 text-gray-400 group-hover:text-[#FF571F]" />
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Buttons matching reference image */}
          <div className="hidden md:flex items-center space-x-3.5">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-[#17212D] bg-white hover:bg-gray-50 border border-gray-300 rounded-full transition-all duration-150 shadow-2xs hover:shadow-xs"
            >
              Contact Sales
            </Link>
            <Link
              to="/get-started"
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-white bg-[#FF571F] hover:bg-[#E04612] rounded-full transition-all duration-150 shadow-xs hover:shadow-md"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#17212D] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF571F]"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-[#E5E9EF] bg-white px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-lg text-base font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#FFF2ED] text-[#FF571F]'
                      : 'text-[#17212D] hover:bg-gray-50'
                  }`
                }
              >
                <span>{link.name}</span>
                {link.hasDropdown && <ChevronDown className="w-4 h-4 text-gray-400" />}
              </NavLink>
            ))}
          </nav>

          <div className="pt-4 border-t border-gray-100 flex flex-col gap-2.5">
            <Link
              to="/contact"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full text-sm font-semibold text-[#17212D] bg-white border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-gray-500" />
              Contact Sales
            </Link>
            <Link
              to="/get-started"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full text-sm font-semibold text-white bg-[#FF571F] hover:bg-[#E04612] transition-colors shadow-xs"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
