// FIX: Replaced placeholder content with a functional App component that sets up React Router for the application.
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
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

const AppLayout: React.FC<{ language: 'ar' | 'en' | 'ku', setLanguage: (lang: 'ar' | 'en' | 'ku') => void }> = ({ language, setLanguage }) => {
    
    useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.dir = language === 'ar' || language === 'ku' ? 'rtl' : 'ltr';
    }, [language]);

    return (
      <div>
        <Header currentLang={language} onLangChange={setLanguage} />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    );
};

const App: React.FC = () => {
    const [language, setLanguage] = useState<'ar' | 'en' | 'ku'>('ar');

    return (
        <Router>
            <Routes>
                <Route element={<AppLayout language={language} setLanguage={setLanguage} />}>
                    <Route path="/" element={<LandingPage language={language} />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/integrity-hub" element={<IntegrityHubPage />} />
                    <Route path="/governorate/:name" element={<GovernoratePage />} />
                    <Route path="/international-portal" element={<InternationalPortalPage />} />
                    <Route path="/party/:id" element={<PoliticalPartyPage />} />
                    <Route path="/parties" element={<PoliticalPartyPortalPage />} />
                    <Route path="/pricing" element={<PricingPage />} />
                    <Route path="/election-hub" element={<ElectionHubPage />} />
                    <Route path="/information-portal" element={<InformationPortalPage language={language} />} />
                    <Route path="/digital-transparency" element={<DigitalTransparencyPlatformPage />} />
                    <Route path="/election-information-platform" element={<ElectionInformationPlatformPage />} />
                    <Route path="/digital-dashboard" element={<DigitalDashboardPage language={language} setLanguage={setLanguage} />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;