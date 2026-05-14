import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import EntryWrapper from './EntryWrapper'
import TermsConditions from './pages/TermsConditions'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EntryWrapper>
      <TermsConditions />
    </EntryWrapper>
  </StrictMode>,
)
