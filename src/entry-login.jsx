import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import EntryWrapper from './EntryWrapper'
import Login from './pages/Login'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EntryWrapper>
      <Login />
    </EntryWrapper>
  </StrictMode>,
)
