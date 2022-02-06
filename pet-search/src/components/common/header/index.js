import React, { Component } from "react";
import { Nav, Container, Navbar, Form } from "react-bootstrap";
import LoginButton from "./login-button";
import looking from "../../../images/looking.png";

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
            <a href="/React-project/">
              <img
                src={looking}
                alt=""
                className="h-12 w-12 mr-2 hidden lg:flex"
              />
            </a>
            <Navbar.Brand href="/React-project/">Pet search</Navbar.Brand>
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
                    Report found pet
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
