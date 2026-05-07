import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import EntryWrapper from './EntryWrapper'
import Printers from './components/Printers'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EntryWrapper>
      <Printers />
    </EntryWrapper>
  </StrictMode>,
)
