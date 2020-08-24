import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Home } from './components/home/Home';
import { MainLayout } from './components/layout/MainLayout';
import { Resume } from './components/resume/Resume';
import About from './components/about/About';
import { toast } from 'react-toastify'

const App = () => {
  const { isAuthenticated, error, user } = useAuth0();

  if (error) {
    toast.error(`Oops... ${error.message}`, { 
      position: toast.POSITION.BOTTOM_CENTER, 
      hideProgressBar: true
    })
  }
  if (isAuthenticated) {
    toast.success(`Login successfully!`, { 
      position: toast.POSITION.BOTTOM_CENTER, 
      hideProgressBar: true,
      autoClose: 1500
    })
    toast.info(`Hello, ${user.name}, New features will coming soon`, { 
      position: toast.POSITION.BOTTOM_CENTER, 
      hideProgressBar: true
    })
  }
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/dev" component={Experiment} /> */}
          <Route exact path="/about" component={About} />
          <Route exact path="/resume" component={Resume} />
          <Redirect from="*" to="/" />
        </Switch>
      </MainLayout>
    </Router>
  );
};

export default App;
