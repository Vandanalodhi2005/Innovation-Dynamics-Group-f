import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import EntryWrapper from './EntryWrapper'
import BuyingGuide from './pages/BuyingGuide'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EntryWrapper>
      <BuyingGuide />
    </EntryWrapper>
  </StrictMode>,
)
