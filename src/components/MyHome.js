import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import SitterNotes from './SitterNotes';
import * as firebase from 'firebase';
import './MyHome.css';


class MyHome extends Component { 

  render() {
    return (

    <section className='myhome'>

      <section id='table'>
       <SitterNotes 
          firebase= {firebase}
       />
      </section>
    
      <section id='add-note'>
        <Link to="/NoteManager">
          <button type="button">
            <i class="fas fa-plus fa-1x">ADD NOTE</i>
          </button>
        </Link>
      </section>

    </section>

    );
  }
}

export default MyHome;