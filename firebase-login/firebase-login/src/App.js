import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Authen from './Authen';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <p>
            Welcom To React
          </p>
        </header>

        <Authen />
      </div>
    );
  }
}

export default App;
