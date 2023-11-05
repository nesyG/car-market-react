import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId="891616031579-bs06kk55jr4dtgp8h59brh2dhchlgh8n.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
    </BrowserRouter>    
  </React.StrictMode>
)
