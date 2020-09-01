import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar, Container, Nav, } from 'react-bootstrap';
import logo from './logo192.png';
import Home from '../Pages/Home';
import AddCar from '../Pages/AddCar';
import SortCar from '../Pages/SortCar';


const Headers = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/" > Home</Nav.Link>
                            <Nav.Link href="/SortCar" > Sort Cars</Nav.Link>
                            <Nav.Link href="/addcar" > Add Cars</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/SortCar" component={SortCar} />
                    <Route exact path="/addcar" component={AddCar} />
                </Switch>
            </Router>
        </>
    );
}

export default Headers;
