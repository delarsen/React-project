import React, { Component } from "react";
import { Dropdown, Image } from "react-bootstrap";
import login from "../../images/login-icon.jpg";

const CustomToggle = React.forwardRef(({ onClick }, ref) => {
  return (
    <Image
      src={login}
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className="w-9 min-w-fit h-9 ml-5 cursor-pointer"
      roundedCircle
    />
  );
});

export default class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.renderDropdownMenu = this.renderDropdownMenu.bind(this);
  }

  renderDropdownMenu() {
    if (this.props.isLoggedIn) {
      return (
        <Dropdown.Menu>
          <Dropdown.Item eventKey="1">Account</Dropdown.Item>
          <Dropdown.Item eventKey="2">Log out</Dropdown.Item>
        </Dropdown.Menu>
      );
    }
    return (
      <Dropdown.Menu>
        <Dropdown.Item eventKey="1">Log in</Dropdown.Item>
      </Dropdown.Menu>
    );
  }
  render() {
    return (
      <>
        <Dropdown>
          <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" />
          {this.renderDropdownMenu()}
        </Dropdown>
      </>
    );
  }
}
