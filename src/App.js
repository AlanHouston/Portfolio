import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Jumbo from './Jumbo.js'
import Header from './Header.js'
import Footer from './Footer.js'
import ACA from './ACA.js'
import Skills from './Skills.js'
import Contact from './Contact.js'
import { BrowserRouter as Router, Route } from "react-router-dom"

const MainPage=()=><div><Jumbo/><Skills/></div>

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route path="/" exact component={MainPage}/>
          <Route path="/ACA" exact component={ACA}/>
          <Route path="/Contact" exact component={Contact}/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
