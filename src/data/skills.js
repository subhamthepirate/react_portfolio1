import React, { Component } from "react"
import {Container, Row, Col} from 'react-bootstrap'



export default class Skills extends Component{
    render(){
        return(
        <div>
            <Container>
                <br></br>
            <Row>
            <Col><hr style={{height: "1px", backgroundColor: "grey"}}/></Col>
            <Col><p class="text-center">SKILLS</p></Col>
            <Col><hr style={{height: "1px", backgroundColor: "grey"}}/></Col>
            </Row>
            <Row>
                    <Col className="text-left" md={4}  xs={4}>
                        <p className="font-weight-bold text-secondary">Languages</p>
                    </Col>
                    <Col md={6} xs={6} >
                        <p className="text-left">C, Java, Python, JavaScript</p>
                    </Col>
            </Row>
            <Row>
                    <Col className="text-left" md={4}  xs={4}>
                        <p className="font-weight-bold text-secondary">Database</p>
                    </Col>
                    <Col md={6} xs={6} >
                        <p className="text-left">MySQL</p>
                    </Col>
            </Row>
            <Row>
                    <Col className="text-left" md={4}  xs={4}>
                        <p className="font-weight-bold text-secondary">Web Technology</p>
                    </Col>
                    <Col md={6} xs={6} >
                        <p className="text-left">HTML, CSS, React.js, Bootstrap4</p>
                    </Col>
            </Row>
            <Row>
                    <Col className="text-left" md={4}  xs={4}>
                        <p className="font-weight-bold text-secondary">Tools</p>
                    </Col>
                    <Col md={6} xs={6} >
                        <p className="text-left">VS Code, Anaconda, MySQL Workbench</p>
                    </Col>
            </Row>
            </Container>
        </div>
        )
    }

}