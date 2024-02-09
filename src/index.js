import React from 'react';
import './index.css'; // Custom styles
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import App from './App';
import {createRoot} from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
    <App />
);