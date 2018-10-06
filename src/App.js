import React, { Component } from 'react';
import './App.css';
import Profile from './components/profile/Profile';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Profile/>
        </header>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
