import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { NavProvider } from './Contexts/NavContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavProvider>
        <App />
      </NavProvider>
    </BrowserRouter>
  </React.StrictMode>
);
