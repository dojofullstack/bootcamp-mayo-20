import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CreateStoreView from './views/CreateStoreView'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CreateStoreView/>
  </StrictMode>,
)
