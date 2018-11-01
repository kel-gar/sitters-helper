import * as firebase from 'firebase';
import React, { Component } from 'react';
import User from './User';

var config = {
  apiKey: "AIzaSyDmBKuRdX5yOaynmGty3WgU9m8QYSteM74",
  authDomain: "sitters-helper-b772a.firebaseapp.com",
  databaseURL: "https://sitters-helper-b772a.firebaseio.com",
  projectId: "sitters-helper-b772a",
  storageBucket: "",
  messagingSenderId: "239965885555"
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