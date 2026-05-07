import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import EntryWrapper from './EntryWrapper'
import About from './pages/About'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EntryWrapper>
      <About />
    </EntryWrapper>
  </StrictMode>,
)
