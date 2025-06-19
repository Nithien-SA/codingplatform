import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {
    const location = useLocation();

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h1>CodingCoder</h1>
                <p>Master DSA with us</p>
            </div>
            <nav className="nav-links">
                <Link 
                    to="/" 
                    className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                >
                    <i className="fas fa-list"></i>
                    Problems
                </Link>
                <Link 
                    to="/profile" 
                    className={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`}
                >
                    <i className="fas fa-user"></i>
                    Profile
                </Link>
                {/* ... other navigation links ... */}
            </nav>
        </div>
    );
};

export default Sidebar; 