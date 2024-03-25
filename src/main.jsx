import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { NavProvider } from './Contexts/NavContext';
import { UserProvider } from './Contexts/UserContext';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { FormProvider } from './Contexts/FormContext';
import { BrowserRouter } from 'react-router-dom';
import { CommentProvider } from './Contexts/CommentContext';
import { AlertProvider } from './Contexts/AlertContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId="386505745375-hcja7e078e4pjh9phsq5brjf8aen92an.apps.googleusercontent.com">
        <NavProvider>
          <FormProvider>
            <CommentProvider>
              <UserProvider>
                <AlertProvider>
                  <App />
                </AlertProvider>
              </UserProvider>
            </CommentProvider>
          </FormProvider>
        </NavProvider>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
