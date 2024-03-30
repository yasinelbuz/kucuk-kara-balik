import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import SiteProvider from './store/context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <SiteProvider>
      <App />
    </SiteProvider>
  </React.StrictMode>,
)
