import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Welcome to Sitter's Helper <i class="fas fa-child"></i></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={!this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/User/">Sign In</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Sitternotes/">My Home</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;