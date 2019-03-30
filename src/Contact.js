import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Contact extends React.Component{
    render(){
        return(
            <div>
                <Container>
                    <Row>
                        <Col className="contactStyle"><h2><a href="mailto:alanhouston5000@gmail.com" className="darkFont">alanhouston5000@gmail.com</a></h2></Col>
                    </Row>
                    <Row>
                        <Col className="contactStyle"><h2><a href="https://linkedin.com/in/alan-houston-austin/" target="_blank" className="darkFont">LinkedIn</a></h2></Col>
                    </Row>
                    <Row>
                        <Col className="contactStyle"><h2>512.993.6800</h2></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}