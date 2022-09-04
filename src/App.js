import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './screens/Home'
import Signup from './screens/Signup'
import Signin from './screens/Signin'
import Notes from './screens/Notes'
import Tracker from './screens/Tracker'
import Appointment from './screens/Appointment'

import { AuthProvider } from './contexts/AuthContext'
import PrivateRoute from './components/PrivateRoute'
import { NotesProvider } from './contexts/NotesContext'
import { TrackerProvider } from './contexts/TrackerContext'
function App() {
  return (
    <AuthProvider>
      <TrackerProvider>
        <NotesProvider>
          <BrowserRouter>
            <div className='App'>
              <Header />
              <Routes>
                <Route exact path='/' element={<Home />}></Route>

                <Route
                  exact
                  path='/notes'
                  element={
                    <PrivateRoute>
                      <Notes />
                    </PrivateRoute>
                  }
                ></Route>
                <Route
                  exact
                  path='/appointment'
                  element={
                    <PrivateRoute>
                      <Appointment />
                    </PrivateRoute>
                  }
                ></Route>
                <Route
                  exact
                  path='/Tracker'
                  element={
                    <PrivateRoute>
                      <Tracker />
                    </PrivateRoute>
                  }
                ></Route>

                <Route path='/signin' element={<Signin />} />
                <Route path='/signup' element={<Signup />} />
              </Routes>
            </div>
          </BrowserRouter>
        </NotesProvider>
      </TrackerProvider>
    </AuthProvider>
  )
}

export default App
