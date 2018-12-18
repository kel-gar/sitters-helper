import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './User.css';

class User extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     user: null
  //   };
  // }

  signInWithPopup() {
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup(provider).then((result) => {
      this.props.setUser(result.user);
      console.log(result.user);
    }).catch((err) => {
      console.log(err);
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

  signOut() {
    // const {setUser} = this.props;
    // const {activeUser} = this.props;

    this.props.firebase.auth().signOut();
    this.props.setUser({});
  }

  // componentDidMount() {
  //   this.props.firebase.auth().onAuthStateChanged(user => {
  //     this.props.setUser(user);
  //   });
  // }





  render() {
    const {activeUser} = this.props;

    return (
      <div className="User">
        <div>
          <section>
            <Button color="primary" size="lg" onClick={(e) => this.signInWithPopup(e)}>Sign In</Button>
          </section>
          <section>
            <Button color="secondary" size="lg" onClick={(e) => this.signOut(e)}>Sign Out</Button>
          </section>
          <p>Current User: {activeUser && activeUser.displayName}</p>
        </div>
      </div>
    );
  }
}

export default User;
