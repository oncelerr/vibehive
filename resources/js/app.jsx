import './bootstrap';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import CMSLayout from './components/CMSLayout/CMSLayout';


function App() {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            
            {/* Protected Route with CMS Layout */}
            <Route path="/" element={<Home />} />
        </Routes>
    );
}

// Mount React app with routing
const container = document.getElementById('app');
if (container) {
    const root = createRoot(container);
    root.render(
        <BrowserRouter>
            <AuthProvider>
                <App />
            </AuthProvider>
        </BrowserRouter>
    );
}
