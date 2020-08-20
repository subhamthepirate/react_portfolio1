import React, { Component } from "react"
import {Container, Row, Col} from 'react-bootstrap'

export default class Project extends Component{
    render(){
        return(
            <div>
                <Container>
                <br></br>
            <Row>
            <Col><hr style={{height: "1px", backgroundColor: "grey"}}/></Col>
            <Col><p className="text-center">PROJECTS</p></Col>
            <Col><hr style={{height: "1px", backgroundColor: "grey"}}/></Col>
            </Row>
            <Row>
            <Col className="text-left" md={4}  xs={4}>
                <p className="font-weight-bold text-secondary">Notes</p>
            </Col>
            <Col md={8} xs={8}>
                <p className="text-left">
                   Built using PHP, HTML, CSS, JS where people can store notes and see then on next page.
                   It has login and signup functionality. User can create, read, update and delete notes.  
                </p>
            </Col>
            </Row>
            <Row>
            <Col className="text-left" md={4}  xs={4}>
                <p className="font-weight-bold text-secondary">Portfolio</p>
            </Col>
            <Col md={8} xs={8}>
                <p className="text-left">
                This is my personal portfolio site. Built using HTML, CSS, Nodejs and Bootstrap4.  
                </p>
            </Col>
            </Row>
            <Row>
            <Col className="text-left" md={4}  xs={4}>
                <p className="font-weight-bold text-secondary">Content Management System</p>
            </Col>
            <Col md={8} xs={8}>
                <p className="text-left">
                Wordpress like software where person can choose and start editing it.
                After all the changes the template can be made live.
                 Built using HTML, CSS, PHP and Bootstrap4.  
                </p>
            </Col>
            </Row>
            <Row>
            <Col className="text-left" md={4}  xs={4}>
                <p className="font-weight-bold text-secondary">Bird Shooting</p>
            </Col>
            <Col md={8} xs={8}>
                <p className="text-left">
                Simple shooting game where player has to shoot at birds flying on the screen.
                Built using HTML, CSS and JavaScript.  
                </p>
            </Col>
            </Row>
            </Container>
            </div>
        )
    }

}