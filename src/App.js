import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing.js';
import MyHome from './components/MyHome';
import SignIn from './components/SignIn';
import NoteManager from './components/NoteManager';
import NavBar from './components/NavBar';
// import SitterNotes from './components/SitterNotes';


class App extends Component {

  render() {
    return (
      <div className="App">
          <NavBar />
        <body>
         <main>
          <Route exact path="/" component={Landing} />
          <Route path="/MyHome" component={MyHome} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/NoteManager" component={NoteManager} />
        </main>
        </body>
      </div>
    );
  }
}

export default App;