import './bootstrap';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './Pages/Home/Home';
import ContactUs from './Pages/ContactUs/ContactUs';
import About from './Pages/AboutUs/About';
import OurWorks from './Pages/OurWorks/OurWorks';
import Curve from './components/Curve/Index';
import Navbar from './components/Navbar/Index';
import Footer from './components/Footer/Footer'
import PremiumCorporateSolutions from './Pages/CaseStudy/PremiumCorporateSolutions/index'
import KoghCloud from './Pages/CaseStudy/KoghCloud/index'
import VerticalTalentSolutions from './Pages/CaseStudy/VerticalTalentSolutions/index'
import Waitlist from './Pages/Waitlist/Waitlist'
import NotFound from './Pages/NotFound/NotFound';

function Layout() {
  const location = useLocation();

  const APP_VERSION = import.meta.env.VITE_APP_VERSION;

  const isPrelaunch = APP_VERSION === "prelaunch";

  return (
    <>
      {isPrelaunch ? (
        <AnimatedRoutes />
      ) : (
        <>
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </>
      )}

    </>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  const APP_VERSION = import.meta.env.VITE_APP_VERSION;

  const isPrelaunch = APP_VERSION === "prelaunch";

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

        {/* PRELAUNCH MODE */}
        {isPrelaunch ? (
          <>
            {/* Only allow waitlist */}
            <Route path="/" element={<Waitlist />} />

            {/* Redirect everything else */}
            <Route path="*" element={<Navigate to="/waitlist" replace />} />
          </>
        ) : (
          <>
            {/* NORMAL LAUNCHED ROUTES */}

            <Route path="/" element={<Curve><Home /></Curve>} />
            <Route path="/contact" element={<Curve><ContactUs /></Curve>} />
            <Route path="/about" element={<Curve><About /></Curve>} />
            <Route path="/our-works" element={<Curve><OurWorks /></Curve>} />

            <Route path="/case-study/premium-corporate-solutions"
              element={<Curve><PremiumCorporateSolutions /></Curve>}
            />

            <Route path="/case-study/kogh-cloud"
              element={<Curve><KoghCloud /></Curve>}
            />

            <Route path="/case-study/vertical-talent-solutions"
              element={<Curve><VerticalTalentSolutions /></Curve>}
            />

            <Route path="*" element={<Curve><NotFound /></Curve>} />
          </>
        )}

      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout />
      </AuthProvider>
    </BrowserRouter>
  );
}

const container = document.getElementById('app');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}