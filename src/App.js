import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './Home.js'
import Header from './Header.js'
import ACA from './ACA.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
        </header> */}
       
        <Header />
        <Home />
        <div className="acaBackG">
          <ACA />
        </div>
      </div>
    );
  }
}

export default App;
