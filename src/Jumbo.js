import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

// Jumbo is main

const Jumbo = () => {
  return (
    <div>
      <Jumbotron id="jumbo">
        <h1 className="display-3">Greetings!</h1>
        <h3 className="lead"><i>I'm Alan, a burgeoning, full-stack web developer</i></h3>
        <hr className="my-2" />
        <p>My journey began in the summer of 2018 as I enrolled in Colt Steele's 
          Web Developer Bootcamp to find out if coding was something I could get into.
          <br/>
          I immediately took a liking and decided to go deeper with an in-person bootcamp at Austin Coding Academy.
          <br/>
          As I made my way through the program, I developed a passion for coding.
          <br/>
          Learning JavaScript was both challenging and rewarding. I was fortunate not only to have great instructors, but
          to be surrounded by a small group of creative students with whom I have shared my exciting coding journey. 
          <br/>
          I experienced the peak of my appreciation a couple of weeks into learning React. Having not 
          experienced writing code prior to the development of React, I consider myself lucky to have 
          this tool at my disposal from the get-go!
          <br/> 
          I now love coding. I especially love coding in React. 
          <br/>
          As my current schedule allows, I code between two and six hours a day, and am very much looking forward to 
          enjoying a full-time career in web development!
        </p>
        
        <p className="lead">
          <Button id="theButton" href="mailto:alanhouston5000@gmail.com">Email Me!</Button>
        </p>
      </Jumbotron>
      
    </div>
  );
};

export default Jumbo;