import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '../icons/FacebookIcon';
import TwitterIcon from '../icons/TwitterIcon';
import TelegramIcon from '../icons/TelegramIcon';
import WhatsAppIcon from '../icons/WhatsAppIcon';
import IhecQuickLinks from '../IhecQuickLinks';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    
                    {/* About */}
                    <div className="md:col-span-1">
                        <h3 className="text-xl font-bold mb-4">صوت العراق ۲۰۲۵</h3>
                        <p className="text-gray-400">
                            منصة رقمية لتعزيز الشفافية والمشاركة في الانتخابات العراقية. نحو حملات نظيفة ووعي انتخابي أكبر.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
                        <ul className="space-y-2">
                            <li><Link to="/election-hub" className="text-gray-400 hover:text-white">المركز الإرشادي</Link></li>
                            <li><Link to="/integrity-hub" className="text-gray-400 hover:text-white">مركز النزاهة</Link></li>
                            <li><Link to="/pricing" className="text-gray-400 hover:text-white">الأسعار</Link></li>
                             <li><Link to="/parties" className="text-gray-400 hover:text-white">بوابة الأحزاب</Link></li>
                        </ul>
                    </div>

                    {/* IHEC Links */}
                    <div className="md:col-span-1">
                       <IhecQuickLinks />
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">تابعنا</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white"><FacebookIcon className="w-6 h-6" /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><TwitterIcon className="w-6 h-6" /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><TelegramIcon className="w-6 h-6" /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><WhatsAppIcon className="w-6 h-6" /></a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} صوت العراق. جميع الحقوق محفوظة.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;