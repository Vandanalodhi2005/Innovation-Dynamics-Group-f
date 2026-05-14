import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import EntryWrapper from './EntryWrapper'
import Resources from './pages/Resources'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EntryWrapper>
      <Resources />
    </EntryWrapper>
  </StrictMode>,
)
