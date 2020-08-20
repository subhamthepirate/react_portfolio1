import React, { Component } from "react"
import {Container, Row, Col, Image} from 'react-bootstrap'
import github from './github.png'
import twitter from './twitter.png'
import linkdn from './linkdn.png'

export default class Contact extends Component{
    render(){
        return(
            <div>
                <Container>
                <br></br>
            <Row>
            <Col><hr style={{height: "2px", backgroundColor: "grey"}}/></Col>
            <Col><p className="text-center">CONTACT</p></Col>
            <Col><hr style={{height: "2px", backgroundColor: "grey"}}/></Col>
            </Row>
            <Row>
            <Col> </Col>
            <Col> <a href={"https://github.com/subhamthepirate"}><Image src={github} style={{height:"30px"}}/></a>&nbsp;
                  <a href={"https://twitter.com/home"}><Image src={twitter} style={{height:"20px"}}/></a>&nbsp;&nbsp;
                  <a href={"https://www.linkedin.com/in/subham-patra-0480b0166/"}><Image src={linkdn} style={{height:"20px"}}/></a>
            </Col>
            <Col></Col>
            </Row>
            <br/>
            
            </Container>
            </div>
        )
    }

}