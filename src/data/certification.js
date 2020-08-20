import React, { Component } from "react"
import {Container, Row, Col} from 'react-bootstrap'

export default class Certification extends Component{
    render(){
        return(
            <div>
                <Container>
                <br></br>
            <Row>
            <Col><hr style={{height: "1px", backgroundColor: "grey"}}/></Col>
            <Col><p className="text-center">CERTIFICATION</p></Col>
            <Col><hr style={{height: "1px", backgroundColor: "grey"}}/></Col>
            </Row>
            <Row>
            <Col className="text-left" md={4}  xs={4}>
                <p className="font-weight-bold text-secondary">UDEMY</p>
            </Col>
            <Col md={6} xs={6}>
                <p className="text-left">
                   Complete Web development 2019  
                </p>
                <p className="text-left">
                   Complete Excel Guide 2020  
                </p>
                <p className="text-left">
                   Python 3 Guide for Beginners 
                </p>
            </Col>
            <Col></Col>
            </Row>
            </Container>
            </div>
        )
    }

}