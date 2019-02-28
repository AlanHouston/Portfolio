import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

// Jumbo is main

const Jumbo = () => {
  return (
    <div>
      <Jumbotron id="jumbo">
        <h1 className="display-3">Greetings!</h1>
        <p className="lead">I'm Alan, a burgeoning, full-stack web developer</p>
        <hr className="my-2" />
        <p>My journey began in the summer of 2018 as I enrolled in Colt Steele's 
          web developer bootcamp to find out if coding was something I could get into.
          <br/>
          I immediately took a liking and decided to go deeper with an in-person bootcamp at Austin Coding Academy.
          <br/>
          As I made my way through the program, I developed a passion for coding.
          <br/>
          Learning JavaScript was both challenging and rewarding. I was fortunate not only to have great instructors, but  .However, my peak of appreciation hit when we got into React.
          <br/>
          As my current schedule allows, 
          <br/>With all of the knowledge I've gained, I'm now ready to pursue a full-time career in web development!  
        </p>
        
        <p className="lead">
          <Button id="theButton" href="mailto:alanhouston5000@gmail.com">Email Me!</Button>
        </p>
      </Jumbotron>
      
    </div>
  );
};

export default Jumbo;