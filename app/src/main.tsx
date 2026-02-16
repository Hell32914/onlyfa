import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import PrivacyPage from './pages/PrivacyPage'
import DisclaimerPage from './pages/DisclaimerPage'
import AboutPage from './pages/AboutPage'
import ContactsPage from './pages/ContactsPage'
import CookiePolicyPage from './pages/CookiePolicyPage'
import TermsPage from './pages/TermsPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/cookies" element={<CookiePolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
