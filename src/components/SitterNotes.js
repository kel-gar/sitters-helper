import React, { Component } from 'react';
import * as firebase from 'firebase';

class SitterNotes extends Component {
  constructor() {
    super();
    this.state = {
     generalinfo: '',
     contactinfo: '',
     medicalinfo: '',
     otherinfo: ''
    };
  }  

    // addSitterNotes = e => {
    //   e.preventDefault();
    //   const db = firebase.firestore();
    //   db.settings({
    //     timestampsInSnapshots: true
    //   });
    //   const sitterNotesRef = db.collection('sitternotes').add({
    //     generalinfo: this.state.generalinfo,
    //     contactinfo: this.state.contactinfo,
    //     medicalinfo: this.state.medicalinfo,
    //     otherinfo: this.state.otherinfo
    //   });        
    //   this.setState({
    //     generalinfo: '',
    //     contactinfo: '',
    //     medicalinfo: '',
    //     otherinfo: ''
    //   });
    // }
    
    // updateInput = e => {
    //   this.setState({
    //     [e.target.name]: e.target.value
    //   });
    // }     
    
    

    render() {
      return (
        <div className="SitterNotes">

        {/* <div>
        <form onSubmit={this.addSitterNotes}>
          <input
            type="text"
            name="generalinfo"
            placeholder="General Info"
            onChange={this.updateInput}
            value={this.state.generalinfo}
          />
          <input
            type="text"
            name="contactinfo"
            placeholder="Contact Info"
            onChange={this.updateInput}
            value={this.state.contactinfo}
          />
          <input
            type="text"
            name="medicalinfo"
            placeholder="Medical Info"
            onChange={this.updateInput}
            value={this.state.medicalinfo}
          />
          <input
            type="text"
            name="otherinfo"
            placeholder="Other Info"
            onChange={this.updateInput}
            value={this.state.otherinfo}
          />                    
          <button type="submit">Submit</button>
        </form>
        </div> */}
        
        </div>
        
        );
      }
    }

export default SitterNotes;