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
import looking from "../../images/looking.png";

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
        <Navbar collapseOnSelect bg="light" expand="lg">
          <Container>
            <img src={looking} className="h-12 w-12 mr-2 hidden lg:flex" />
            <Navbar.Brand href="/React-project/">Animal search</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end z-50 "
            >
              <Form className="md:d-flex ">
                <Nav>
                  <Nav.Link
                    href="/React-project/reportlostpet"
                    className="text-center font-bold md:font-normal"
                  >
                    Report lost pet
                  </Nav.Link>
                  <Nav.Link
                    href="/React-project/reportfoundpet"
                    className="md:ml-8 text-center font-bold md:font-normal"
                  >
                    Register found pet
                  </Nav.Link>
                  <Nav.Link
                    href="/React-project/viewpets"
                    className="md:ml-8 mr-0 md:mr-4 text-center font-bold md:font-normal"
                  >
                    View pets
                  </Nav.Link>
                  <LoginButton
                    isLoggedIn={this.state.isLoggedIn}
                    user={this.state.user}
                  />
                </Nav>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
