import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import IntegrityHubPage from './pages/IntegrityHubPage';
import GovernoratePage from './pages/GovernoratePage';
import InternationalPortalPage from './pages/InternationalPortalPage';
import PoliticalPartyPage from './pages/PoliticalPartyPage';
import PoliticalPartyPortalPage from './pages/PoliticalPartyPortalPage';
import PricingPage from './pages/PricingPage';
import ElectionHubPage from './pages/ElectionHubPage';
import InformationPortalPage from './pages/InformationPortalPage';
import DigitalTransparencyPlatformPage from './pages/DigitalTransparencyPlatformPage';
import ElectionInformationPlatformPage from './pages/ElectionInformationPlatformPage';
import DigitalDashboardPage from './pages/DigitalDashboardPage';
import MainDashboardPage from './pages/MainDashboardPage';
import PlatformHomePage from './pages/PlatformHomePage';

type Language = 'ar' | 'en' | 'ku';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('ar');

  const handleLangChange = (lang: Language) => {
    setLanguage(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' || lang === 'ku' ? 'rtl' : 'ltr';
  };

  useEffect(() => {
    handleLangChange('ar'); // Set initial language and direction
  }, []);


  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header currentLang={language} onLangChange={handleLangChange} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage language={language} />} />
            <Route path="/main-dashboard" element={<MainDashboardPage />} />
            <Route path="/candidate-dashboard" element={<DashboardPage />} />
            <Route path="/integrity-hub" element={<IntegrityHubPage />} />
            <Route path="/governorate/:name" element={<GovernoratePage />} />
            <Route path="/international-portal" element={<InternationalPortalPage />} />
            <Route path="/party/:id" element={<PoliticalPartyPage />} />
            <Route path="/parties" element={<PoliticalPartyPortalPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/election-hub" element={<ElectionHubPage />} />
            <Route path="/information-portal" element={<InformationPortalPage language={language} />} />
            <Route path="/digital-transparency" element={<DigitalTransparencyPlatformPage />} />
            <Route path="/election-info" element={<ElectionInformationPlatformPage />} />
            <Route path="/digital-dashboard" element={<DigitalDashboardPage language={language} setLanguage={setLanguage} />} />
            <Route path="/platform-home" element={<PlatformHomePage />} />
            {/* Redirect legacy dashboard route to main-dashboard */}
            <Route path="/dashboard" element={<MainDashboardPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
