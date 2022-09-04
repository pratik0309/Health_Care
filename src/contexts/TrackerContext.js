import React, { useContext, useState, useEffect } from 'react'
const TrackerContext = React.createContext()

export function useTracker() {
  return useContext(TrackerContext)
}

export function TrackerProvider({ children }) {
  const [info, setInfo] = useState({
    weight: 58,
    blood: 12,
    sugar: 24,
  })
  const [loading, setLoading] = useState(true)

  const updateInfo = async (weight, blood, sugar) => {
    setInfo({
      weight,
      blood,
      sugar,
    })
  }

  const value = { info, updateInfo }

  return (
    <TrackerContext.Provider value={value}>{children}</TrackerContext.Provider>
  )
}
