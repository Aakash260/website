import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './context/productcontext.jsx'
import { FilterProvider } from './context/filtercontext.jsx'
import { CartProvider } from './context/cart_context.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
 
 
const root=ReactDOM.createRoot(document.getElementById('root'))
 
 const DOMAIN= import.meta.env.VITE_API_AUTH_DOMAIN
const CLIENT=import.meta.env.VITE_API_AUTH_CLIENT
root.render(
 
    <Auth0Provider
    domain={DOMAIN}
    clientId={CLIENT}
     
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    
  >
  <React.StrictMode>

    <AppProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </AppProvider>
  </React.StrictMode>
    </Auth0Provider>
)
