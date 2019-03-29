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
                        I code in the MERN stack, so I would love to work on a team developing in React, however I have explored Angular and Vue, 
                        so an opportunity with either would be excellent! 
                    </p>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col><h1><i className="aleFont">The Armstrong App</i></h1></Col>
                </Row>
                <br/>
                <Row>
                    <Col>The Armstrong App is the first full-stack application I built on my own. I created the app so I could 
                    facilitate comparing current session data with past results. Please take a moment to check out the app and its source code!
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <Button id="theButton" href="http://www.southparkstudios.com" target="_blank">Armstrong App</Button>
                        <br/>
                        <br/>
                        <Button id="theButton" href="https://github.com/AlanHouston/ArmstrongProgram" target="_blank">Source Code</Button>
                    </Col>
                </Row>
                <br/>        
                <Row>
                    <Col><h1><i className="aleFont">Skillset</i></h1></Col>
                </Row>
                <br/>
                <Row>
                    <Col><h4>JavaScript • React • NodeJs • Redux • MongoDB • Mongoose • Express • Bootstrap</h4></Col>
                </Row>
                <Row>
                    <Col><h4>Git • jQuery • Angular • Vue • WordPress • CSS • HTML</h4></Col>
                </Row>
                <Row>
                    <Col><h4>Conversational Spanish</h4></Col>
                </Row>
                <Row>
                    <Col><h4>...excited and ready to learn new things!</h4></Col>
                </Row>
                <br/>
            </Container>
        )
    }
}
