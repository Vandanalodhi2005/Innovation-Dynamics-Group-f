import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import EntryWrapper from './EntryWrapper'
import DoNotSell from './pages/DoNotSell'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EntryWrapper>
      <DoNotSell />
    </EntryWrapper>
  </StrictMode>,
)
