import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProblemList from './components/ProblemList';
import ProblemDetail from './components/ProblemDetail';
import Profile from './components/Profile';
import Auth from './components/Auth';
import './App.css';

// Protected Route component
const ProtectedRoute = ({ children }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
        return <Navigate to="/" replace />;
    }
    return children;
};

function App() {
    return (
        <Router basename="/">
            <div className="app-container" style={{ display: 'block' }}>
                <div className="main-content" style={{ marginLeft: 0, width: '100%' }}>
                    <header className="app-header">
                    </header>
                    <main className="app-main">
                        <Routes>
                            <Route path="/" element={<Auth />} />
                            <Route path="/problems" element={<ProtectedRoute><ProblemList /></ProtectedRoute>} />
                            <Route path="/problem/:id" element={<ProtectedRoute><ProblemDetail /></ProtectedRoute>} />
                            <Route path="/profile" element={<ProtectedRoute><Profile userId={JSON.parse(localStorage.getItem('user'))?.userId} /></ProtectedRoute>} />
                        </Routes>
                    </main>
                </div>
            </div>
        </Router>
    );
}

export default App;
