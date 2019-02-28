import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Jumbo from './Jumbo.js'
import Header from './Header.js'
import ACA from './ACA.js'
import Skills from './Skills.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
        </header> */}
       
        <Header/>
        <Jumbo/>
        <div className="acaBackG">
          <Skills/>
          <ACA/>
        </div>
      </div>
    );
  }
}

export default App;
