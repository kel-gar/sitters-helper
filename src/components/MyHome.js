import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SitterNotes from './SitterNotes';
import * as firebase from 'firebase';
import './MyHome.css';
import { Button } from 'reactstrap';


class MyHome extends Component { 

  render() {
    return (

    <div className='myhome'>

      <section id='table'>
       <SitterNotes 
          firebase= {firebase}
       />
      </section>
    
      <section id='add-note'>
        <Link to="/NoteManager">
          {/* <button type="button">
            <i className="fas fa-plus fa-1x">ADD NOTE</i>
          </button> */}
          <Button color="secondary" size="lg" input type="submit"><i className="fas fa-plus fa-1x">ADD NOTE</i></Button>
        </Link>
      </section>

    </div>

    );
  }
}

export default MyHome;