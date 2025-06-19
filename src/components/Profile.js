import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './profile.css';

const Profile = ({ userId }) => {
    const [userStats, setUserStats] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMessage, setPasswordMessage] = useState({ text: '', type: '' });
    const [newName, setNewName] = useState('');
    const [message, setMessage] = useState({ text: '', type: '' });
    const navigate = useNavigate();

    useEffect(() => {
        let didCancel = false;
        const fetchWithTimeout = async () => {
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 7000); // 7s timeout
            try {
                const response = await fetch('http://localhost:5000/api/user-stats', {
                    headers: { 'user-id': userId },
                    signal: controller.signal
                });
                clearTimeout(timeout);
                const data = await response.json();
                if (!didCancel) {
                    if (response.ok) {
                        setUserStats(data);
                        setNewName(data.name);
                    } else {
                        setMessage({ text: 'Failed to fetch user stats', type: 'error' });
                    }
                }
            } catch (error) {
                if (!didCancel) {
                    setMessage({ text: 'Error connecting to server', type: 'error' });
                }
            }
        };
        fetchWithTimeout();
        return () => { didCancel = true; };
    }, [userId]);

    const handleUpdateProfile = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/update-profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'user-id': userId
                },
                body: JSON.stringify({ name: newName })
            });
            const data = await response.json();
            if (response.ok) {
                setUserStats(data.user);
                setIsEditing(false);
                setMessage({ text: 'Profile updated successfully', type: 'success' });
            } else {
                setMessage({ text: data.error, type: 'error' });
            }
        } catch (error) {
            setMessage({ text: 'Error updating profile', type: 'error' });
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('userId');
        navigate('/');
    };

    const handleChangePassword = async (e) => {
        e.preventDefault();
        setPasswordMessage({ text: '', type: '' });
        if (!oldPassword || !newPassword || !confirmPassword) {
            setPasswordMessage({ text: 'All fields are required.', type: 'error' });
            return;
        }
        if (newPassword !== confirmPassword) {
            setPasswordMessage({ text: 'New passwords do not match.', type: 'error' });
            return;
        }
        try {
            const response = await fetch('http://localhost:5000/api/change-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'user-id': userId
                },
                body: JSON.stringify({ oldPassword, newPassword })
            });
            const data = await response.json();
            if (response.ok) {
                setPasswordMessage({ text: 'Password changed successfully!', type: 'success' });
                setOldPassword('');
                setNewPassword('');
                setConfirmPassword('');
                setTimeout(() => setShowPasswordModal(false), 1200);
            } else {
                setPasswordMessage({ text: data.error || 'Failed to change password.', type: 'error' });
            }
        } catch (error) {
            setPasswordMessage({ text: 'Error changing password.', type: 'error' });
        }
    };

    if (!userStats) {
        return <div className="loading">Loading profile...</div>;
    }

    return (
        <div className="profile-container">
            <div className="profile-header">
                <h1>Profile</h1>
                <div className="header-buttons">
                    <button className="logout-button" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </div>

            {showPasswordModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Change Password</h2>
                        <form onSubmit={handleChangePassword} className="password-form">
                            <input
                                type="password"
                                placeholder="Old Password"
                                value={oldPassword}
                                onChange={e => setOldPassword(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                placeholder="New Password"
                                value={newPassword}
                                onChange={e => setNewPassword(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Confirm New Password"
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                                required
                            />
                            {passwordMessage.text && (
                                <div className={`message ${passwordMessage.type}`}>{passwordMessage.text}</div>
                            )}
                            <div className="modal-actions">
                                <button type="submit" className="save-button">Change</button>
                                <button type="button" className="cancel-button" onClick={() => setShowPasswordModal(false)}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {message.text && (
                <div className={`message ${message.type}`}>
                    {message.text}
                </div>
            )}

            <div className="profile-content">
                <div className="profile-section">
                    <h2>Personal Information</h2>
                    <div className="info-field">
                        <div style={{ display: 'flex', flex: 1 }}>
                            <div className="info-col">
                                <div className="info-row">
                                    <span className="info-label">Name:</span>
                                    <span className="info-value">{userStats.name}</span>
                                </div>
                            </div>
                            <div className="info-col">
                                <div className="info-row">
                                    <span className="info-label">User ID:</span>
                                    <span className="info-value">{userStats.userId}</span>
                                </div>
                            </div>
                        </div>
                        <div className="info-actions-row">
                            <button className="edit-button" onClick={() => setIsEditing(true)}>
                                Edit Profile
                            </button>
                            <button className="edit-button" onClick={() => setShowPasswordModal(true)}>
                                Change Password
                            </button>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h2>Statistics</h2>
                    <div className="stats-grid">
                        <div className="stat-card">
                            <h3>Total Solved</h3>
                            <p>{userStats.totalProblemsSolved || 0}</p>
                        </div>
                        <div className="stat-card">
                            <h3>Easy</h3>
                            <p>{userStats.easySolved || 0}</p>
                        </div>
                        <div className="stat-card">
                            <h3>Medium</h3>
                            <p>{userStats.mediumSolved || 0}</p>
                        </div>
                        <div className="stat-card">
                            <h3>Hard</h3>
                            <p>{userStats.hardSolved || 0}</p>
                        </div>
                        <div className="completion-rate">
                            <h3>Completion Rate</h3>
                            <div className="progress-bar">
                                <div
                                    className="progress-fill"
                                    style={{ width: `${userStats.completionRate || 0}%` }}
                                />
                                <span>{(parseFloat(userStats.completionRate) || 0).toFixed(1)}%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h2>Recent Activity</h2>
                    <div className="recent-activity">
                        <p>Last Solved Problem: {userStats.lastSolved || 'None'}</p>
                        <p>Total Problems Attempted: {userStats.solvedProblemIds ? userStats.solvedProblemIds.length : 0}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile; 