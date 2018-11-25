import React, { Component } from 'react';
import User from './User';
import './SignIn.css';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUser: props.activeUser
    };
  }

  render() {
    return (
      <div className="SignIn">
        <main>
          <User
            firebase={this.props.firebase}
            setUser={this.props.setUser}
            activeUser={this.props.activeUser}
          />
        </main>
      </div>
    );
  }
}

export default SignIn;