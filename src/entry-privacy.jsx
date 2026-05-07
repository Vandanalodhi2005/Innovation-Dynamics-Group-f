import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import EntryWrapper from './EntryWrapper'
import PrivacyPolicy from './pages/PrivacyPolicy'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EntryWrapper>
      <PrivacyPolicy />
    </EntryWrapper>
  </StrictMode>,
)
