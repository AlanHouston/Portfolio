import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

export default class Skills extends React.Component {
    render() {
        return (
            <Container className="light">
                <Row>
                    <Col>
                        <p>
                            I recently completed the Full-Stack Web Developer Course at Austin Coding Academy, and I love spending time writing code!
                            If you know of a super cool company looking for a super cool coder like myself, please reach out!
                            The bulk of my experience is in the MERN stack, so I would love to work on a team developing in React, however I have explored other frameworks, 
                            so I'm eager to learn new things and explore any and every opportunity! 
                        </p>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col><h1><i className="aleFont">The Armstrong App</i></h1></Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <p>
                            The Armstrong App is my first full-stack application. It is a tracker for a pull-up program I have been 
                            working with on and off over the last six months. I created the app in order to facilitate comparing current 
                            session data with past results. It is currently built for one user, but please take a moment to check out the app and source code!
                        </p>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <Button id="theButton" href="https://armstrongprogram.herokuapp.com/" target="_blank">Armstrong App</Button>
                        <br/>
                        <br/>
                        <Button id="theButton" href="https://github.com/AlanHouston/ArmstrongProgram" target="_blank">Source Code</Button>
                    </Col>
                </Row>
                <br/>
                <br/>        
                <Row>
                    <Col><h1><i className="aleFont">Skillset</i></h1></Col>
                </Row>
                <br/>
                <Row>
                    <Col><h4>JavaScript • React • NodeJs • Redux • MongoDB • Mongoose • Express • Bootstrap</h4></Col>
                </Row>
                <Row>
                    <Col><h4>Git • jQuery • Angular • WordPress • CSS • HTML</h4></Col>
                </Row>
                <Row>
                    <Col><h4>Conversational Spanish</h4></Col>
                </Row>
                <Row className="skillsBottom">
                    <Col><h4>...excited and ready to learn new things!</h4></Col>
                </Row>
                <br/>
            </Container>
        )
    }
}
