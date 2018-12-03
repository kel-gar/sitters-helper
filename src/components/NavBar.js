import React, { Component } from 'react';
import {
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
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
          <NavbarBrand href="/">Welcome to Sitter's Helper</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Sign In/Out
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <section>
                      <Button color="primary" size="lg" onClick={(e) => this.signInWithPopup(e)}>Sign In</Button>
                    </section>
                  </DropdownItem>
                  <DropdownItem>
                    <section>
                      <Button color="secondary" size="lg" onClick={(e) => this.signOut(e)}>Sign Out</Button>
                    </section>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <p>Current User: {this.props.activeUser}</p>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
              <NavItem>
                <NavLink href="/User/">Sign In/Out</NavLink>
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