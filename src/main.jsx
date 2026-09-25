import React from 'react'
import { createRoot } from 'react-dom/client'
// HashRouter works on any host with no server rewrites. To use clean URLs,
// swap it for BrowserRouter and add the rewrite rules shown in README.md.
import { HashRouter } from 'react-router-dom'
import App from './App'
import { CartProvider } from './context/CartContext'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </HashRouter>
  </React.StrictMode>,
)
