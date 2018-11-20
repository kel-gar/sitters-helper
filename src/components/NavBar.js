import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem 
} from 'reactstrap';

export default class Example extends React.Component {
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
  // handleAuthentication() {
  //   if (this.props.activeUser) {
  //     return <NavLink href="/SignOut/">Log In</NavLink>
  //   } else {
  //     return <NavLink href="/SignIn/">Login</NavLink>
  //   }
  // }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Welcome to Sitter's Helper</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
              <NavLink href="/SignIn/">Sign In Page</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/MyHome/">My Home</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink >My Account</NavLink>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}