import React, { useContext, useState, useEffect } from 'react'
import { auth, db } from '../firebase.js'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  const signup = async (name, email, password) => {
    const cred = await auth.createUserWithEmailAndPassword(email, password)
    return db.collection('users').doc(cred.user.uid).set({
      name: name,
      email,
    })
  }
  const signin = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password)
  }
  const logout = () => {
    return auth.signOut()
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
      setLoading(false)
    })
    return unsubscribe
  }, [currentUser])

  const value = { currentUser, signup, signin, logout }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
