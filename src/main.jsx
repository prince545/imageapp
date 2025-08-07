import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { AppContextProvider } from './context/AppContext'     // <-- import provider
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppContextProvider>        {/* <-- wrap the App here */}
        <App />
      </AppContextProvider>
    </BrowserRouter>
  </StrictMode>
)
