import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './NoteManager.css';


class NoteManager extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      contact: '',
      general: '',
      medical: '',
      other: ''
    };

    this.sitternotesRef = this.props.firebase.database().ref('sitternotes');

    this.handleChangeContact = this.handleChangeContact.bind(this);
    this.handleChangeGeneral = this.handleChangeGeneral.bind(this);
    this.handleChangeMedical = this.handleChangeMedical.bind(this);
    this.handleChangeOther = this.handleChangeOther.bind(this);
    // this.handleChangeActiveUser = this.handleChangeActiveUser.bind(this);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  createSitterNote (sitternote) {
    this.sitternotesRef.push({     
      contact: this.state.contact,
      general: this.state.general,
      medical: this.state.medical,
      other: this.state.other,
      user_Id: this.props.activeUser
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

  // handleChangeActiveUser(e) {
  //   this.setState({ activeUser: this.props.activeUser })
  // }

  handleSubmit(e) {
    e.preventDefault();
    this.createSitterNote(this.state.value);
    this.setState({
      contact: '',
      general: '',
      medical: '',
      other: ''
      // user_Id: this.props.activeUser
    });
  }

  render() {
   return ( 

     <div className='notemanager'>
      <div id="sitternotes-submit">
        <h3>Create Sitter Note:</h3>
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
      </div>
      
      
    );
  }
}

export default NoteManager;