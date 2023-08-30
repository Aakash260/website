import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './context/productcontext.jsx'
import { FilterProvider } from './context/filtercontext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <FilterProvider>
    <App />
    </FilterProvider>
    </AppProvider>
  </React.StrictMode>,
)
