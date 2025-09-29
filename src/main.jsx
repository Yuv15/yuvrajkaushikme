// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'; 
import './globals.css'; 

// Remove the ! (non-null assertion) if it's still there
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)