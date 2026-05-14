import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import EntryWrapper from './EntryWrapper'
import ReturnExchange from './pages/ReturnExchange'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EntryWrapper>
      <ReturnExchange />
    </EntryWrapper>
  </StrictMode>,
)
