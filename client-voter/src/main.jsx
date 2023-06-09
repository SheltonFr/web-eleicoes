import React from 'react'
import ReactDOM from 'react-dom/client'
import 'semantic-ui-css/semantic.min.css'
import App from './App.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { DarkModeContextProvider } from './context/darkModeContext.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthContextProvider>
        <DarkModeContextProvider>
            <App />
        </DarkModeContextProvider>
      </AuthContextProvider>
  
  </React.StrictMode>,
)
