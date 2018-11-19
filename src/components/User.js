import React, { Component } from 'react';

class User extends Component {

  signInWithPopup() {
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup(provider).then( (result) => {
      this.props.setUser(result.user);
    }).catch( (err) => {
      console.log(err);
    });
  }

  signOut() {
    this.props.firebase.auth().signOut();
    this.props.setUser({ displayName: "Please Log In" });
  }

  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged(user => {
      this.props.setUser(user);
    });
  }

  getActiveUser() {
    console.log(`Current User: ${this.props.activeUser}\n`);
    return this.props.activeUser;
  }

  getUserName() {
    let usr = this.props.activeUser;
    return usr ? this.props.activeUser.displayName : "Guest";
  }

  render() {
    return (
      <div className="User">
        <div>
          <button onClick={(e) => this.signInWithPopup(e)}>Sign In</button>
          <button onClick={(e) => this.signOut(e)}>Sign Out</button>
          <p>Current User: {this.getUserName()}</p>
          {/* <h3>Welcome Back {this.props.activeUser} !</h3> */}
        </div>
      </div>
    );
  }
}

export default User;