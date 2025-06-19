import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Add a global Axios request interceptor to always send user-id header if present
axios.interceptors.request.use((config) => {
  const userId = localStorage.getItem('userId');
  if (userId) {
    config.headers['user-id'] = userId;
    console.log('Adding user-id header:', userId);
  } else {
    console.log('No userId found in localStorage');
  }
  return config;
}, (error) => Promise.reject(error));

reportWebVitals();
