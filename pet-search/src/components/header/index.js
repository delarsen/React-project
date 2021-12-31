import React, { Component } from "react";
import {
  NavDropdown,
  Nav,
  Container,
  Navbar,
  FormControl,
  Form,
  Image,
} from "react-bootstrap";
import login from "../img/login-icon.jpg";
export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Animal search</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Form className="d-flex ">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2 "
                  aria-label="Search"
                />

                <Nav className="me-auto">
                  <NavDropdown
                    title="Menu"
                    id="basic-nav-dropdown"
                    className="ml-12"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Report pet
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2">
                      Register pet
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.3">
                      View pets
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>

                <Image src={login} className="w-9 h-9 ml-5" roundedCircle />
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
