import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Galeria } from './pages/galeria/galeria.jsx'
import { ContextFotoProvider } from './contextFoto/ContextFoto.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextFotoProvider>
      <Galeria />
    </ContextFotoProvider>
  </React.StrictMode>,
)
