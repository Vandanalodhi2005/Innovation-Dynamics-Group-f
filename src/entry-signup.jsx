import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import EntryWrapper from './EntryWrapper'
import Signup from './pages/Signup'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EntryWrapper>
      <Signup />
    </EntryWrapper>
  </StrictMode>,
)
