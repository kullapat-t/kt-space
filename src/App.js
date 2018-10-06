import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from './components/home/Home';
import Experiment from './components/experiment/Experiment';
import MainLayout from './components/MainLayout';
import { Resume } from './components/resume/Resume';

class App extends Component {
  render() {
    return (
      <Router>
        <MainLayout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dev" component={Experiment} />
            <Route exact path="/resume" component={Resume} />
            <Redirect from="*" to="/" />
          </Switch>
        </MainLayout>
      </Router>
    );
  }
}

export default App;
