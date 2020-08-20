import React,{  Component } from "react"
import Skills from "./skills"
import Hobby from "./hobby"
import Education from "./education"
import Project from "./projects"
import Certification from "./certification"
import Contact from "./contact"
import {Container, Row, Col, Card, Image} from 'react-bootstrap'
import profile_pic from './profile_pic.jpg'
import github from './github.png'
import twitter from './twitter.png'
import linkdn from './linkdn.png'

export default class MyComp extends Component{
    render(){
        return(
            <div>
                <Row>
                    <Col md={{span:8}}  xs={8} style={{paddingLeft:'20rem'}}>
                <h2 style={{paddingTop:'5rem'}}><b>Resume</b></h2>
                <h4 className="font-weight-normal text-center text-secondary">Subham Patra</h4>
                <Skills/>
                <Hobby/>
                <Education/>
                <Project/>
                <Certification/>
                <Contact/>
                </Col>
                <Col md={4}  xs={4} style={{paddingTop:'5rem'}}>
                
                <Card className={'border-primary'}style={{ width: '20rem', height: '29rem' }}>
    <Card.Img variant="top" src={profile_pic} style={{maxHeight:'20rem'}}/>
    <Card.Body>
      <Card.Title>Subham Patra<br/><p class="font-weight-normal text-center text-secondary">Student Developer</p></Card.Title>
    </Card.Body>
    <Card.Footer>
                  <a href={"https://github.com/subhamthepirate"}><Image src={github} style={{height:"30px"}}/></a>&nbsp;&nbsp;
                  <a href={"https://twitter.com/home"}><Image src={twitter} style={{height:"20px"}}/></a>&nbsp;&nbsp;&nbsp;
                  <a href={"https://www.linkedin.com/in/subham-patra-0480b0166/"}><Image src={linkdn} style={{height:"20px"}}/></a>
    </Card.Footer>
  </Card>
                </Col>
                </Row>
            </div>
        )
    }
}