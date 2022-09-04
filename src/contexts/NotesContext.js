import React, { useContext, useState } from 'react'
import { auth, db } from '../firebase.js'

const NotesContext = React.createContext()

export function useNotes() {
  return useContext(NotesContext)
}

export function NotesProvider({ children }) {
  const [notes, setNotes] = useState([
    {
      title: 'i am good',
      description: ' ia m amd fdkfdnakhfdknkhifhdsasnfdklncdoihf anlkdifhdc ',
    },
    {
      title: 'i am good',
      description: ' ia m amd fdkfdnakhfdknkhifhdsasnfdklncdoihf anlkdifhdc ',
    },
    {
      title: 'i am good',
      description: ' ia m amd fdkfdnakhfdknkhifhdsasnfdklncdoihf anlkdifhdc ',
    },
    {
      title: 'i am good',
      description: ' ia m amd fdkfdnakhfdknkhifhdsasnfdklncdoihf anlkdifhdc ',
    },
  ])
  const [loading, setLoading] = useState(true)

  const saveNote = async (title, description) => {
    const info = {
      user_id: auth.currentUser.uid,
      title,
      description,
      date: Date.now(),
    }
    return await db.collection('notes').add(info)
  }
  const getNotes = () => {
    // const newNotes = []
    // const queryRef = db
    //   .collection('notes')
    //   .where('user_id', '==', auth.currentUser.uid)
    // return queryRef.get()

    return notes
  }

  const value = { notes, saveNote, getNotes }

  return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
}
