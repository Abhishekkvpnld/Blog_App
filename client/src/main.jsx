import { createContext, StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { UserProvider } from './context/userContext.jsx'

export const context = createContext({ isAuthenticated: false });

export const AppWrapper = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState({});

  return (
    <context.Provider value={{
      isAuthenticated, setIsAuthenticated, userData,
      setUserData
    }}>
      <App />
    </context.Provider>
  )

}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>,
)
