import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import HelloSection from './composants/HelloSection'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App/>
   <HelloSection/>
  </StrictMode>,
)
