import React, { Component } from 'react';
import {
  // Button,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // UncontrolledDropdown,
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

  // signInWithPopup() {
  //   const provider = new this.props.firebase.auth.GoogleAuthProvider();
  //   this.props.firebase.auth().signInWithPopup( provider );
  //   }

  // signOut() {
  //   this.props.firebase.auth().signOut();
  //   this.props.setUser({ displayName: "Please Log In" });
  // }

  // componentDidMount() {
  //   this.props.firebase.auth().onAuthStateChanged(user => {
  //     this.props.setUser(user);
  //   });
  // }


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