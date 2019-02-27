import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Home = () => {
  return (
    <div>
      <Jumbotron id="jumbo">
        <h1 className="display-3">Greetings!</h1>
        <p className="lead">I'm Alan, a burgeoning, full-stack web developer</p>
        <hr className="my-2" />
        <p>I began my journey in the summer of 2018 by enrolling in Colt Steele's 
          web developer bootcamp to find out if coding was something I could get into.
          <br/>
          I immediately took a liking and decided to enroll in an in-person bootcamp with Austin Coding Academy.
          <br/>With all of the knowledge I've gained, I'm now ready to pursue a full-time career in **web development**!  
        </p>
        
        <p className="lead">
          <Button id="theButton" href="mailto:alanhouston5000@gmail.com">Contact Me!</Button>
        </p>
      </Jumbotron>
      
    </div>
  );
};

export default Home;