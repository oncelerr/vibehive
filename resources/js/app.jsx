import './bootstrap';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './Pages/Login/Login';
import Inner from './components/Inner/Inner';
import Dashboard from './components/Dashboard';


// Component to handle animated route transitions
function AnimatedRoutes() {
    const location = useLocation();

    const ExternalRedirect = ({ url }) => {
        React.useEffect(() => {
            window.location.href = url;
        }, [url]);

        return <div>Redirecting...</div>;
    };

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={
                    <ProtectedRoute>
                        <Inner>
                            <Dashboard />
                        </Inner>
                    </ProtectedRoute>
                } />
            </Routes>
        </AnimatePresence>
    );
}

// Mount React app with routing
const container = document.getElementById('app');
if (container) {
    const root = createRoot(container);
    root.render(
        <BrowserRouter>
            <AuthProvider>
                <AnimatedRoutes />
            </AuthProvider>
        </BrowserRouter>
    );
}
