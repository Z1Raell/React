import React from 'react';
import { Container, Tab, Row, Col, Nav } from 'react-bootstrap';
import ColorSort from '../Component/ColorSort';

const About = () => {
    return (
        <Container>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column mt-3">
                            <Nav.Item>
                                <Nav.Link eventKey="first">
                                    Price
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">
                                    Color
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">
                                    Manufacturer
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth">
                                    Year of issue
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fifth">
                                    volume
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content className="mt-3">
                            <Tab.Pane eventKey="first">
                                <ColorSort />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">

                            </Tab.Pane>
                            <Tab.Pane eventKey="third">

                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">

                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth">

                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>

            </Tab.Container>
        </Container>
    );
}

export default About;
