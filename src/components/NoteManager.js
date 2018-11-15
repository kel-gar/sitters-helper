import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './NoteManager.css';


class NoteManager extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      // contact: '',
      // general: '',
      // medical: '',
      // other: '',
      // userId: ''
    };

    this.sitternotesRef = this.props.firebase.database().ref('sitternotes');
    this.handleChangeContact = this.handleChangeContact.bind(this);
    this.handleChangeGeneral = this.handleChangeGeneral.bind(this);
    this.handleChangeMedical = this.handleChangeMedical.bind(this);
    this.handleChangeOther = this.handleChangeOther.bind(this);
    this.handleChangeUserId = this.handleChangeUserId.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  createSitterNote (sitternote) {
    this.sitternotesRef.push({     
      contact: this.state.contact,
      general: this.state.general,
      medical: this.state.medical,
      other: this.state.other
      // userId: this.props.activeUser
    });
  }

  handleChangeContact(e) {
    this.setState({ contact: e.target.value})
  }

  handleChangeGeneral(e) {
    this.setState({ general: e.target.value})
  }

  handleChangeMedical(e) {
    this.setState({ medical: e.target.value})
  }

  handleChangeOther(e) {
    this.setState({ other: e.target.value})
  }

  handleChangeUserId(e) {
    this.setState({ userId: this.props.activeUser })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.createSitterNote(this.state.value);
    this.setState({
      contact: '',
      general: '',
      medical: '',
      other: ''
    });
  }


  render() {
   return ( 

     <div className='notemanager'>

      <div id="sitternotes-submit">
        <h3>Create Sitter Note:</h3>
        {/* <p>Current User: {this.props.activeUser} </p> */}
          <form onSubmit={ this.handleSubmit }>
            <label>
              Contact:
              <textarea type="text" value={ this.state.contact } onChange={ this.handleChangeContact } />
            </label>
          </form>
          <form onSubmit={ this.handleSubmit }>
            <label>
              General:
              <textarea type="text" value={ this.state.general } onChange={ this.handleChangeGeneral } />
            </label>
          </form>
          <form onSubmit={ this.handleSubmit }>
            <label>
              Medical:
              <textarea type="text" value={ this.state.medical } onChange={ this.handleChangeMedical } />
            </label>
          </form>
          <form onSubmit={ this.handleSubmit }>
            <label>
              Other:
              <textarea type="text" value={ this.state.other } onChange={ this.handleChangeOther } />
            </label>
            <div>
              <input type="submit" value="Submit" />
            </div>
          </form>     
        </div>

      <section id='sitternote-list'>
        <Link to="/MyHome">
          <button type="button">
            Sitter Note List
          </button>
        </Link>
      </section>        

       {/* My Note Manager Page will go here
       <i class="fas fa-edit fa-3x"></i>
       EDIT NOTE
       <i class="fas fa-plus fa-3x"></i>
       ADD NOTE
       <i class="fas fa-minus fa-3x"></i>
       DELETE NOTE
       <i class="fas fa-undo fa-3x"></i>
       UNDO LAST  */}
      
      </div>
      
      
    );
  }
}

export default NoteManager;