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
import { Experience } from './components/experience/Experience'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import { toast } from 'react-toastify'
import {AuthLogin} from "./components/experiment/AuthLogin";

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
          <Route exact path="/about" element={ <About/> } />
          <Route exact path="/experience" element={ <Experience/> } />
          <Route exact path="/projects" element={ <Projects/> } />
          <Route exact path="/contact" element={ <Contact/> } />
          <Route exact path="/login" element={ <AuthLogin/> } />
          <Route path='*' element={<Navigate replace={true} to="/" />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
