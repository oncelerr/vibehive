import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };

    return (
        <div style={{ 
            color: 'white', 
            textAlign: 'center', 
            padding: '50px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px'
        }}>
            <h1>Welcome to Hive Core Dashboard</h1>
            <p>You are successfully logged in!</p>
            {user && <p>Hello, {user.name}!</p>}
            
            <button 
                onClick={handleLogout}
                style={{
                    background: '#A617F8',
                    color: '#FFF',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '12px 24px',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    marginTop: '20px',
                    transition: 'background 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.background = '#8A14D1'}
                onMouseOut={(e) => e.target.style.background = '#A617F8'}
            >
                Logout
            </button>
        </div>
    );
};

export default Dashboard;
