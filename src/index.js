import React from 'react';
import ReactDOM  from 'react-dom/client';

import App from './App';
import './index.css';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-ptzx4m5lm5not750.us.auth0.com"
    clientId="bnl6zre3b9G48IxtPCNEoq4MdnC9qM9j"
    redirectUri={window.location.origin}
  >
      <App/>
  </Auth0Provider>
)