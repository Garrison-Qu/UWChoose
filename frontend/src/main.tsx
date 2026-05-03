import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import { CatalogProvider } from './components/CatalogProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CatalogProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CatalogProvider>
  </StrictMode>,
)
