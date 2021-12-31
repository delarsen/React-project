import React, { Component } from "react";
import {
  NavDropdown,
  Nav,
  Container,
  Navbar,
  FormControl,
  Form,
} from "react-bootstrap";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg" sticky="bottom" className="mt-20">
          <Container>
            <Navbar.Collapse className="justify-content-end">
              <div className="footer-copyright text-center py-3">
                © 2020 Copyright:
                <a
                  href="https://github.com/delarsen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  ArsenSuperGood.com
                </a>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
