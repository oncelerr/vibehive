import './bootstrap';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './Pages/Home/Home';
import ContactUs from './Pages/Home/ContactUs/ContactUs';
import Curve from './components/Curve';
import Navbar from './components/Navbar/Index';
import Footer from './components/Footer/Footer'

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={
                    <Curve>
                        <Home />
                    </Curve>
                } />
                <Route 
                    path="/contact" 
                    element={
                        <Curve>
                            <ContactUs />
                        </Curve>
                    } 
                />
            </Routes>
        </AnimatePresence>
    );
}

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Navbar />
                <AnimatedRoutes />
                <Footer />
            </AuthProvider>
        </BrowserRouter>
    );
}

const container = document.getElementById('app');
if (container) {
    const root = createRoot(container);
    root.render(<App />);
}