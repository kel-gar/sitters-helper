import React, { Component } from 'react';
import User from './User';
import './SignIn.css';
// import NoteManager from './NoteManager';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state= {
      activeUser: null
    };
}

setUser(user) {
  this.setState( { activeUser: user.displayName } )
}

  render() {
    return (
      <div className="SignIn">
         <main>
         <User
            firebase={this.props.firebase}
            setUser={(user) => this.setUser(user)}
            activeUser={this.state.activeUser}
          />
          {/* <NoteManager
            firebase={this.props.firebase}
            setUser={(user) => this.setUser(user)}
            activeUser={this.state.activeUser}
          /> */}
        </main>
      </div>
    );
  }
}

export default SignIn;