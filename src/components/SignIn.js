import React, { Component } from 'react';
import User from './User';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state= {
      activeUser: "Guest"
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
        </main>
        
   
      </div>
    );
  }
}

export default SignIn;