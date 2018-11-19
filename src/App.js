import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing.js';
import MyHome from './components/MyHome';
import SignIn from './components/SignIn';
import NoteManager from './components/NoteManager';
import NavBar from './components/NavBar';
import SitterNotes from './components/SitterNotes';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDmBKuRdX5yOaynmGty3WgU9m8QYSteM74",
  authDomain: "sitters-helper-b772a.firebaseapp.com",
  databaseURL: "https://sitters-helper-b772a.firebaseio.com",
  projectId: "sitters-helper-b772a",
  storageBucket: "sitters-helper-b772a.appspot.com",
  messagingSenderId: "239965885555"
};
firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      activeUser: null
    };  
}

setUser(user) {
  console.log(user);
  this.setState( { activeUser: user.displayName } )
}

  render() {
    return (
      <div className="App">
        <NavBar />
        <body>
          <main>
            <Route exact path="/" component={Landing} />
            <Route path="/MyHome" component={MyHome} />
            <Route
              path="/SignIn"
              render={(routeProps) => (
                <SignIn {...routeProps} firebase={firebase} setUser= {(user) => this.setUser(user)} />
              )}
            />          
            <Route 
              path="/NoteManager" 
              render={(routeProps) => (
                // WORK ON THIS activeUser part of line 53
                <NoteManager {...routeProps} firebase={firebase} activeUser={this.props.activeUser} />
              )}
            />
            <Route
               path="/SitterNotes"
              render={(routeProps) => (
                <SitterNotes {...routeProps} firebase={firebase}/>
              )}
            />            
          </main>
        </body>
      </div>
    );
  }
}

export default App;