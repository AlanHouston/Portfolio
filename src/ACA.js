import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class ACA extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col><h2><i className="aleFont">Austin Coding Academy</i></h2></Col>
        </Row>
        <Row>
          <Col>
            <p>
              I had a wonderful experience learning at the Austin Coding Academy. My instructors were all very excited
              to share their knowledge and experiences from their differing careers.
            </p>
            <p>
              The Web 101 course served as an introduction to web design as we learned the basics of HTML and CSS. We 
              were also given our first glance into JavaScript, but really got into it in JS211. We sharpened our 
              skills by creating games and completing challenges. JS 311 wrapped up the program with back end development. 
              It all came together for me in this final course as I completed my first solo web app from scratch.
            </p>
          </Col>
        </Row>
        <Row>
          <Col><h2><i className="aleFont">Course Material</i></h2></Col>
        </Row>
        <br/>
        <Row>
            <Col>
                <h2 className="aleFont">Web 101</h2>
                <p>HTML/CSS</p>
                <p>Media Queries</p>
                <p>UI, UX &amp; Wireframes</p>
                <p>CSS Grid</p>
                <p>Flexbox</p>
                <p>Box Model</p>
                <p>CSS Animation</p>
                <p>jQuery</p>
                <p>Basic JS</p>
            </Col>
            <Col>
                <h2 className="aleFont">JS 211</h2>
                <p>Functions &amp; Conditionals</p>
                <p>Objects &amp; Arrays</p>
                <p>Methods</p>
                <p>Higher Order Functions</p>
                <p>OOP</p>
                <p>React</p>
                <p>Reactstrap</p>
                <p>Fetch API</p>
                <p>Algorithms</p>
            </Col>
            <Col>
                <h2 className="aleFont">JS 311</h2>
                <p>JS Modules</p>
                <p>Debugging</p>
                <p>NPM</p>
                <p>Express</p>
                <p>MongoDB &amp; Mongoose</p>
                <p>React / Redux</p>
                <p>Webpack</p>
                <p>Redux</p>
                <p>Authentication</p>
                <p>Deployment</p>
            </Col>
        </Row>
        <Row>
            <Col></Col>
        </Row>
      </Container>
    );
  }
}