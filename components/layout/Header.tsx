// FIX: Replaced placeholder content with a functional Header component.
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import Button from '../ui/Button';

const NavLinkItem: React.FC<{ to: string, children: React.ReactNode }> = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `block md:inline-block py-2 md:py-0 px-3 md:px-0 text-lg font-semibold transition-colors ${isActive ? 'text-[#007a3d]' : 'text-gray-600 hover:text-[#007a3d]'}`
            }
        >
            {children}
        </NavLink>
    );
};

const Header: React.FC<{ currentLang: 'ar' | 'en' | 'ku', onLangChange: (lang: 'ar' | 'en' | 'ku') => void }> = ({ currentLang, onLangChange }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const taglines = {
        ar: "حملك الذكي",
        en: "Smart Election",
        ku: "ھەڵبژاردنی زیرەک"
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex flex-col">
                           <span className="text-2xl font-bold text-gray-800">HamlatAI</span>
                           <span className="text-sm text-gray-500">{taglines[currentLang]}</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
                        <NavLinkItem to="/">الرئيسية</NavLinkItem>
                        <NavLinkItem to="/digital-dashboard">لوحة التحكم</NavLinkItem>
                        <NavLinkItem to="/election-hub">المركز الإرشادي</NavLinkItem>
                        <NavLinkItem to="/integrity-hub">مركز النزاهة</NavLinkItem>
                        <NavLinkItem to="/pricing">الأسعار</NavLinkItem>
                    </nav>

                    <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
                        <LanguageSelector currentLang={currentLang} onLangChange={onLangChange} />
                        <Link to="/dashboard">
                            <Button variant="primary">بوابة المرشح</Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                         <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Icon for menu */}
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                 <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
                        <NavLinkItem to="/">الرئيسية</NavLinkItem>
                        <NavLinkItem to="/digital-dashboard">لوحة التحكم</NavLinkItem>
                        <NavLinkItem to="/election-hub">المركز الإرشادي</NavLinkItem>
                        <NavLinkItem to="/integrity-hub">مركز النزاهة</NavLinkItem>
                        <NavLinkItem to="/pricing">الأسعار</NavLinkItem>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                             <Link to="/dashboard">
                                <Button variant="primary" className="w-full">بوابة المرشح</Button>
                            </Link>
                            <div className="mt-4 flex justify-center">
                                <LanguageSelector currentLang={currentLang} onLangChange={onLangChange} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;