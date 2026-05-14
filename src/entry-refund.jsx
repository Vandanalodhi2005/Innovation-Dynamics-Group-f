import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import EntryWrapper from './EntryWrapper'
import RefundPolicy from './pages/RefundPolicy'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EntryWrapper>
      <RefundPolicy />
    </EntryWrapper>
  </StrictMode>,
)
