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
import login from "../../images/login-icon.jpg";
import LoginButton from "./login-button";
export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: !!localStorage.getItem("isLoggedIn"),
      user: !!localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : {},
    };

    this.checkIsUserLoggedIn = this.checkIsUserLoggedIn.bind(this);
  }
  componentDidMount() {
    window.addEventListener("storage", this.checkIsUserLoggedIn);
  }

  componentWillUnmount() {
    window.removeEventListener("storage", this.checkIsUserLoggedIn);
  }

  checkIsUserLoggedIn(e) {
    if (e.key === "isLoggedIn") {
      this.setState({ isLoggedIn: e.newValue });
    }

    if (e.key === "user") {
      this.setState({ user: JSON.parse(e.newValue) });
    }
  }

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg" className="h-14">
          <Container>
            <Navbar.Brand href="/">Animal search</Navbar.Brand>
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
                    <NavDropdown.Item href="/reportlostpet">
                      Report lost pet
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/reportfoundpet">
                      Register found pet
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/viewpets">
                      View pets
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <LoginButton
                  isLoggedIn={this.state.isLoggedIn}
                  user={this.state.user}
                />
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}