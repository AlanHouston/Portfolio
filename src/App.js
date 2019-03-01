import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Jumbo from './Jumbo.js'
import Header from './Header.js'
import Footer from './Footer.js'
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
        <div className="skillsBackGround">
          <Skills/>
        </div>
        <div className="acaBackGround">
          <ACA/>
        </div>
          <Footer/>
      </div>
    );
  }
}

export default App;
