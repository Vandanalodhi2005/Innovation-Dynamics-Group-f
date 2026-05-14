import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import EntryWrapper from './EntryWrapper'
import FAQs from './pages/FAQs'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EntryWrapper>
      <FAQs />
    </EntryWrapper>
  </StrictMode>,
)
