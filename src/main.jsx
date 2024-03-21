import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { NavProvider } from './Contexts/NavContext';
import { UserProvider } from './Contexts/UserContext';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { FormProvider } from './Contexts/FormContext';
import { BrowserRouter } from 'react-router-dom';
import { AddPlaceProvider } from './Contexts/AddPlaceContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId="386505745375-hcja7e078e4pjh9phsq5brjf8aen92an.apps.googleusercontent.com">
        <NavProvider>
          <FormProvider>
            <UserProvider>
              <AddPlaceProvider>
                <App />
              </AddPlaceProvider>
            </UserProvider>
          </FormProvider>
        </NavProvider>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
