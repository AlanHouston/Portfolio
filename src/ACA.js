import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class ACA extends React.Component {
  render() {
    return (
      <Container>
        <Row>
            <Col><h3><i>Austin Coding Academy course material</i></h3></Col>
        </Row>
        <br/>
        <Row>
            <Col className="acaCards">
                <h1>Web 101</h1>
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
            <Col className="acaCards">
                <h1>JS 211</h1>
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
            <Col className="acaCards">
                <h1>JS 311</h1>
                <p>JS Modules</p>
                <p>Debugging</p>
                <p>NPM</p>
                <p>Express</p>
                <p>MongoDB &amp; Mongoose</p>
                {/* <p>Mongoose</p> */}
                <p>React / Redux</p>
                <p>Webpack</p>
                {/* <p>Redux</p> */}
                {/* <p>Thunk</p> */}
                <p>Authentication</p>
                <p>Heroku</p>
            </Col>
        </Row>
        <Row>
            <Col></Col>
        </Row>
      </Container>
    );
  }
}