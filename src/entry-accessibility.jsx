import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import EntryWrapper from './EntryWrapper'
import Accessibility from './pages/Accessibility'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EntryWrapper>
      <Accessibility />
    </EntryWrapper>
  </StrictMode>,
)
