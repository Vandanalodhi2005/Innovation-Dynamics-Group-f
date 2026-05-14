import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import EntryWrapper from './EntryWrapper'
import ShippingPolicy from './pages/ShippingPolicy'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EntryWrapper>
      <ShippingPolicy />
    </EntryWrapper>
  </StrictMode>,
)
