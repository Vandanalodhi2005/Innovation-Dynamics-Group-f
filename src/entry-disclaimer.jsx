import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import EntryWrapper from './EntryWrapper'
import Disclaimer from './pages/Disclaimer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EntryWrapper>
      <Disclaimer />
    </EntryWrapper>
  </StrictMode>,
)
