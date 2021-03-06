import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'reactstrap';
import './User.css';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      // redirect: false,
      redirect2: false
    };
  }

  signInWithPopup() {
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup( provider );
    }

  signOut() {
    this.props.firebase.auth().signOut();
    this.props.setUser("Please Log In");
  }

  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged(user => {
      this.props.setUser(user);
    });
  }

  setRedirect2 = () => {
    this.setState({
      redirect2: true
    })
  }
  
  renderRedirect2 = () => {
    if (this.state.redirect2) {
      return <Redirect to='/' />
    }
  }  

  render() {
    const {activeUser} = this.props;

    return (
      <div className="User">
        <div>
          <h4>Sign in to your account</h4>
          <section>
            <div>
            <Button color="primary" size="lg" onClick={(e) => this.signInWithPopup(e)}>Continue with Google</Button>
            </div>
          </section>
          <section>
            <div>
            {this.renderRedirect2()}
            <Button color="secondary" size="lg" onClick={(e) => {this.signOut(e); this.setRedirect2(e)}}>Sign Out</Button>
            </div>
          </section>
          <p>Current User: {activeUser && activeUser.displayName}</p>
        </div>
      </div>
    );
  }
}

export default User;