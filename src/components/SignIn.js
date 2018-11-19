import React, { Component } from 'react';
import User from './User';
import './SignIn.css';

class SignIn extends Component {
  constructor(props) {
    // console.log(`DEBUG: SignIn ActiveUser - \n${JSON.stringify(props.activeUser)}`)
    super(props);
    this.state = {
      activeUser: props.activeUser
    };
  }

  // setUser(user) {
  //   console.log(user);
  //   this.setState( { activeUser: user.displayName } )
  // }

  render() {
    return (
      <div className="SignIn">
        <main>
          <User
            firebase={this.props.firebase}
            // setUser={(user) => this.setUser(user)}
            setUser={this.props.setUser}
            activeUser={this.props.activeUser}
          />
          {/* <img className="img-user" src={this.props.activeUser.photoURL}/> */}
        </main>
      </div>
    );
  }
}

export default SignIn;