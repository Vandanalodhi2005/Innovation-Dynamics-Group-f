import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import EntryWrapper from './EntryWrapper'
import CookiePolicy from './pages/CookiePolicy'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EntryWrapper>
      <CookiePolicy />
    </EntryWrapper>
  </StrictMode>,
)
