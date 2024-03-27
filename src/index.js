import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ToggleProvider } from './components/extra/ToggleContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ToggleProvider> 
        <App />
    </ToggleProvider>
);