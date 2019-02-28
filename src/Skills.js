import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Skills extends React.Component {
    render() {
        return (
            <Container>
                {/* <Row>
                    <Col><h2>Skills</h2></Col>
                </Row> */}
                <Row>
                    <Col><h4>JavaScript • React • Redux • NodeJs • MongoDB • Bootstrap • jQuery</h4></Col>
                </Row>
                <Row>
                    <Col><h4>Git • Angular • Vue • WordPress • CSS • HTML</h4></Col>
                </Row>
                <br/>
                <Row>
                    <Col><h4>Word • Excel • Powerpoint</h4></Col>
                </Row>
                <Row>
                    <Col><h4>Conversational Spanish</h4></Col>
                </Row>
                <br/>
            </Container>
        )
    }
}
