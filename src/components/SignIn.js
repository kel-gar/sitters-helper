import * as firebase from 'firebase';
import React, { Component } from 'react';
import User from './User';

var config = {
  apiKey: "AIzaSyA0vSJ8afb7QswWZEPmixCMxojSFgRVKaY",
  authDomain: "sitters-helper.firebaseapp.com",
  databaseURL: "https://sitters-helper.firebaseio.com",
  projectId: "sitters-helper",
  storageBucket: "sitters-helper.appspot.com",
  messagingSenderId: "703268562821"
};
firebase.initializeApp(config);


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
            firebase={firebase}
            setUser={(user) => this.setUser(user)}
            activeUser={this.state.activeUser}
          />
        </main>
        
   
      </div>
    );
  }
}

export default SignIn;