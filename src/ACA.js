import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class ACA extends React.Component {
  render() {
    return (
      <Container>
        <Row>
            <Col><h3>Overview of my Austin Coding Academy learning experience</h3></Col>
        </Row>
        <Row>
            <Col className="acaCards">
                <h1>Web 101</h1>
                <p>buttbuttbuttbutt</p>
                <p>buttbuttbuttbutt</p>
                <p>buttbuttbuttbutt</p>
                <p>buttbuttbuttbutt</p>
            </Col>
            <Col className="acaCards">
                <h1>JS 211</h1>
                <p>buttbuttbuttbutt</p>
                <p>buttbuttbuttbutt</p>
                <p>buttbuttbuttbutt</p>
                <p>buttbuttbuttbutt</p>
            </Col>
            <Col className="acaCards">
                <h1>JS 311</h1>
                <p>buttbuttbuttbutt</p>
                <p>buttbuttbuttbutt</p>
                <p>buttbuttbuttbutt</p>
                <p>buttbuttbuttbutt</p>
            </Col>
        </Row>
        <Row>
            <Col></Col>
        </Row>
      </Container>
    );
  }
}