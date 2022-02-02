import React, { Component } from "react";
import { Container, Navbar } from "react-bootstrap";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg" sticky="bottom" className="h-16">
          <Container className="">
            <div className="navbar-collapse flex justify-end ">
              <div className="footer-copyright text-center py-3 ">
                © 2020 Copyright:
                <a
                  href="https://github.com/delarsen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline "
                >
                  GithubPage
                </a>
              </div>
            </div>
          </Container>
        </Navbar>
      </div>
    );
  }
}
