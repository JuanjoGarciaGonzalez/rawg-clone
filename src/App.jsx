import './App.css'
import { Layout } from './components/Layout'
import { BrowserRouter } from 'react-router-dom'
import { useState, createContext } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth"
import firebaseApp from './firebase/FirebaseApp'

const auth = getAuth(firebaseApp)

export const UserContext = createContext(null)

function App() {
  const [user, setUser] = useState(null)

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user)
    } else {
      setUser(null)
    }
  })

  return (
    <BrowserRouter>
      <UserContext.Provider value={user}>
        <main>
          <Layout />
        </main>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App
