import React, { Component } from "react";
import { Dropdown, Image } from "react-bootstrap";
import login from "../../images/login-icon.jpg";
import quit from "../../images/quit.png";

const CustomToggle = React.forwardRef(({ onClick }, ref) => {
  return (
    <Image
      src={login}
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className="w-7 md:w-9 min-w-fit h-7 md:h-9 ml-5 cursor-pointer  "
      roundedCircle
    />
  );
});
const CustomToggleQuit = React.forwardRef(({ onClick }, ref) => {
  return (
    <Image
      src={quit}
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className="w-7 md:w-9 min-w-fit h-7 md:h-9 ml-5 cursor-pointer "
      roundedCircle
    />
  );
});

export default class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.renderDropdownMenu = this.renderDropdownMenu.bind(this);
  }

  logOut() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    window.location.href = "/React-project/";
  }

  renderDropdownMenu() {
    if (this.props.isLoggedIn) {
      return (
        <Dropdown.Menu>
          <Dropdown.Item eventKey="1" href={`/React-project/account`}>
            Account: {this.props.user?.name}
          </Dropdown.Item>
          <Dropdown.Item eventKey="2" onClick={() => this.logOut()}>
            Log out
          </Dropdown.Item>
        </Dropdown.Menu>
      );
    }
    return (
      <Dropdown.Menu>
        <Dropdown.Item
          eventKey="1"
          href="/React-project/login"
          onClick={() => this.logIn()}
        >
          Log in
        </Dropdown.Item>
      </Dropdown.Menu>
    );
  }
  render() {
    return (
      <>
        <Dropdown className="self-center mr-4 custom-dropdown">
          <Dropdown.Toggle
            as={this.props.isLoggedIn ? CustomToggle : CustomToggleQuit}
            id="dropdown-custom-components"
          />
          {this.renderDropdownMenu()}
        </Dropdown>
      </>
    );
  }
}
