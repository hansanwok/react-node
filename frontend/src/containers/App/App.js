import React, { Component } from 'react';
import logo from './logo.svg';
import { Link } from'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
         <Link to="/a">Go to Page A</Link>
        </p>
      </div>
    );
  }
}

export default App;
