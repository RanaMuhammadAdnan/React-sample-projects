import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import Post_Container from './Post_Container';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />

        <Post_Container />

        <Footer />
        
      </div>
    );
  }
}

export default App;
