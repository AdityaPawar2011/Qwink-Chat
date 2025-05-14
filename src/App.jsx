import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Home from './assets/Componenets/Home/Home';
import About from './assets/Componenets/About/About';
import Blog from './assets/Componenets/Blog/Blog';
import Support from './assets/Componenets/Support/Support';
import Profile from './assets/Componenets/Profile/Profile';
import TermsAndCondotions from './assets/Componenets/TermsAndCondition/TermsAndCondotions';
import PrivacyPolicy from './assets/Componenets/PrivacyPolicy/PrivacyPolicy';
import ContactUs from './assets/Componenets/ContactUs/ContactUs';
import CommunityGuidelines from './assets/Componenets/CommunityGuidelines/CommunityGuidelines';
import Header from './assets/Componenets/Home/Header/Header';
import Footer from './assets/Componenets/Home/Footer/Footer';

import './App.css';
import ScrollToTop from './assets/contexts/ScrollToTop';

function AppContent() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  // List of paths where Header/Footer should be hidden
  const hideLayoutRoutes = ['/profile'];
  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      {!shouldHideLayout && (
        <div className={`header-h ${isScrolled ? 'scrolled' : ''}`}>
          <Header />
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/support" element={<Support />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/termsAndConditions" element={<TermsAndCondotions />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/community-guidelines" element={<CommunityGuidelines />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>

      {!shouldHideLayout && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
