import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        userId: '',
        password: ''
    });
    const [message, setMessage] = useState({ text: '', type: '' });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage({ text: '', type: '' });

        try {
            const endpoint = isLogin ? '/api/validate-user' : '/api/register';
            const response = await fetch(`http://localhost:5000${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                if (isLogin) {
                    if (data.valid) {
                        // Store user info in localStorage
                        localStorage.setItem('userId', data.user.userId);
                        localStorage.setItem('user', JSON.stringify(data.user));
                        navigate('/problems');
                    } else {
                        setMessage({ text: 'Invalid credentials', type: 'error' });
                    }
                } else {
                    setMessage({ text: 'Registration successful! Please login.', type: 'success' });
                    setIsLogin(true);
                    // Clear form after successful registration
                    setFormData({
                        name: '',
                        userId: '',
                        password: ''
                    });
                }
            } else {
                setMessage({ text: data.error || 'Something went wrong', type: 'error' });
            }
        } catch (error) {
            setMessage({ text: 'Error connecting to server', type: 'error' });
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <div className="auth-header">
                    <h1>{isLogin ? 'Welcome Back!' : 'Create Account'}</h1>
                    <p>{isLogin ? 'Sign in to continue' : 'Join us to start coding'}</p>
                </div>

                {message.text && (
                    <div className={`message ${message.type}`}>
                        {message.text}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="auth-form">
                    {!isLogin && (
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="userId">User ID</label>
                        <input
                            type="text"
                            id="userId"
                            name="userId"
                            value={formData.userId}
                            onChange={handleInputChange}
                            placeholder="Enter your user ID"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <button type="submit" className="auth-button">
                        {isLogin ? 'Sign In' : 'Register'}
                    </button>
                </form>

                <div className="auth-footer">
                    <p>
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                        <button
                            className="toggle-auth"
                            onClick={() => {
                                setIsLogin(!isLogin);
                                setMessage({ text: '', type: '' });
                                // Clear form when switching modes
                                setFormData({
                                    name: '',
                                    userId: '',
                                    password: ''
                                });
                            }}
                        >
                            {isLogin ? 'Register' : 'Sign In'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Auth; 