import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import IraqFlagIcon from '../icons/IraqFlagIcon';

interface HeaderProps {
  currentLang: 'ar' | 'en' | 'ku';
  onLangChange: (lang: 'ar' | 'en' | 'ku') => void;
}

const Header: React.FC<HeaderProps> = ({ currentLang, onLangChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClasses = "text-lg font-semibold text-gray-700 hover:text-[#007a3d] transition-colors";
  const activeLinkClasses = "text-[#007a3d]";

  const navLinks = [
      { to: "/", text: "الرئيسية" },
      { to: "/election-hub", text: "المركز الإرشادي" },
      { to: "/integrity-hub", text: "مركز النزاهة" },
      { to: "/parties", text: "بوابة الأحزاب" },
      { to: "/pricing", text: "الأسعار" },
      { to: "/main-dashboard", text: "لوحة التحكم" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
              <IraqFlagIcon className="h-8 w-auto" />
              <span className="text-xl font-bold text-gray-800">صوت العراق ۲۰۲٥</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8 rtl:space-x-reverse">
            {navLinks.map(link => (
                <NavLink 
                    key={link.to} 
                    to={link.to}
                    className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}
                >
                    {link.text}
                </NavLink>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <LanguageSelector currentLang={currentLang} onLangChange={onLangChange} />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
             <LanguageSelector currentLang={currentLang} onLangChange={onLangChange} />
             <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-4 rtl:mr-4 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#007a3d]"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => (
                 <NavLink 
                    key={link.to} 
                    to={link.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-green-50 text-[#007a3d]' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`}
                >
                    {link.text}
                </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
