import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CourseSales from './CourseSales';

class App extends Component {
  

  render() {

    var courses = [
    {name:"FrontEnd Course",price:100},
    {name:"BackEnd Course",price:200},
    {name:"Angular Course",price:300}
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome To our SPurchase React App
          </p>

        </header>
        <CourseSales items={courses}/>
      </div>
    );
  }
}

export default App;
