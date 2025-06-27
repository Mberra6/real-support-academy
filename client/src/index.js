import React from "react";
import ReactDOM from 'react-dom/client';
// import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './AuthProvider';
import App from "./App";
import "./index.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthProvider> {/* AuthProvider wraps the App to provide authentication state via context to all child components. */}
      <App /> {/* App is the main component that contains the structured layout and routing of the entire application. */}
    </AuthProvider>
  </BrowserRouter>

);

