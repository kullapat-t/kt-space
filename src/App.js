import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import { Home } from './components/home/Home'
import { MainLayout } from './components/layout/MainLayout'
import { Resume } from './components/resume/Resume'
import About from './components/about/About'
import { toast } from 'react-toastify'

const App = () => {
  const { isAuthenticated, error, user } = useAuth0()

  if (error) {
    toast.error(`Oops... ${error.message}`, { 
      position: "bottom-center",
      hideProgressBar: true
    })
  }
  if (isAuthenticated) {
    toast.success(`Login successfully!`, {
      position: "bottom-center",
      hideProgressBar: true,
      autoClose: 1500
    })
    toast.info(`Hello, ${user.name}, New features will coming soon`, {
      position: "bottom-center",
      hideProgressBar: true
    })
  }
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route exact path="/" element={ <Home/> } />
          {/* <Route exact path="/dev" component={ <Experiment/> } /> */}
          <Route exact path="/about" element={ <About/> } />
          <Route exact path="/resume" element={ <Resume/> } />
          <Route path='*' element={<Navigate replace={true} to="/" />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
