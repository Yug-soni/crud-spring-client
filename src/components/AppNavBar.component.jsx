import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { Link } from "react-router-dom";

export class AppNavBar extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggle = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    return (
      <Navbar color="dark" dark expand="md">
        <NavbarBrand tag={Link} to="/">
          Home
        </NavbarBrand>
      </Navbar>
    );
  }
}

export default AppNavBar;
