import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import EntryWrapper from './EntryWrapper'
import Checkout from './pages/Checkout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EntryWrapper>
      <Checkout />
    </EntryWrapper>
  </StrictMode>,
)
