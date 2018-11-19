import React, { Component } from 'react';

class User extends Component {

  signInWithPopup() {
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup( provider );
    }

  signOut() {
      this.props.firebase.auth().signOut();
      this.props.setUser( {displayName: "Please Log In"} );
    }

  componentDidMount() {
      this.props.firebase.auth().onAuthStateChanged( user => {
      this.props.setUser(user);
      });
    }

    render() {
      return (
        <div className="User">
          <div>
            <button onClick={ (e) => this.signInWithPopup(e) }>Sign In</button>
            <button onClick={ (e) => this.signOut(e) }>Sign Out</button>
            <p>Current User: {this.props.activeUser}</p>
          </div>
        </div>
        );
      }
    }

export default User;