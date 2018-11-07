import React, { Component } from 'react';
import { Table } from 'reactstrap';

class SitterNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sitternotes: [],
      contact: '',
      general: '',
      medical: '',
      other: ''
    };
    this.sitternotesRef = this.props.firebase.database().ref('sitternotes');
    this.handleChange = this.handleChange.bind(this);
    // this.handleChangeGeneral = this.handleChangeGeneral.bind(this);
    // this.handleChangeMedical = this.handleChangeMedical.bind(this);
    // this.handleChangeOther = this.handleChangeOther.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleSubmitGeneral = this.handleSubmitGeneral.bind(this);
    // this.handleSubmitMedical = this.handleSubmitMedical.bind(this);
    // this.handleSubmitOther = this.handleSubmitOther.bind(this);
  }

  componentDidMount() {
     this.sitternotesRef.on('child_added', snapshot => {
       const sitternote = snapshot.val();
       sitternote.key = snapshot.key;
       this.setState({ sitternotes: this.state.sitternotes.concat( sitternote ) });
     });
   }

   createSitterNote (sitternote) {
     this.sitternotesRef.push({     
       contact: this.state.contact,
       general: this.state.general,
       medical: this.state.medical,
       other: this.state.other
      // contact: sitternote,
      // general: sitternote,
      // medical: sitternote,
      // other: sitternote
     });
   }

   handleChange(e) {
    this.setState({ value: e.target.value})
    // this.setState({ [e.target.name]: e.target.value });
  }

   handleSubmit(e) {
     e.preventDefault();
     this.createSitterNote(this.state.value);
    //  this.createSitterNote(this.state.general);
    //  this.createSitterNote(this.state.medical);
    //  this.createSitterNote(this.state.other);
    this.setState({ value: '' });
   }

  // handleChangeContact(e) {
  //   this.setState({ value: e.target.value})
  // }

  // handleChangeGeneral(e) {
  //   this.setState({ value: e.target.value})
  // }

  // handleChangeMedical(e) {
  //   this.setState({ value: e.target.value})
  // }

  // handleChangeOther(e) {
  //   this.setState({ value: e.target.value})
  // }

  //  handleSubmitContact(e) {     
  //    e.preventDefault();
  //    this.createSitterNote(this.state.contact);
  //    this.setState({ contact: ''});
  //  }

  //  handleSubmitGeneral(e) {     
  //   e.preventDefault();
  //   this.createSitterNote(this.state.general);
  //   this.setState({ general: ''});
  //  }
   
  //   handleSubmitMedical(e) {     
  //     e.preventDefault();
  //   this.createSitterNote(this.state.medical);
  //   this.setState({ medical: ''});
  //   }

  //   handleSubmitOther(e) {     
  //     e.preventDefault();
  //   this.createSitterNote(this.state.other);
  //   this.setState({ other: ''});
  //   }


    render() {
      return (
        <div id="sitternotelist">
          <h3>Sitter Notes:</h3>
        <ul>
          {this.state.sitternotes
            .map( (sitternote, key) => (
            <li key={sitternote.key}>
              {sitternote.contact}-
              {sitternote.general}-
              {sitternote.medical}-
              {sitternote.other}
            </li>
          ))}
        </ul>  
          <form onSubmit={ this.handleSubmit }>
            <label>
              Create Sitter Note:
              <input type="text" name={ this.state.contact } onChange={ this.handleChange } />
              <input type="text" name={ this.state.general } onChange={ this.handleChange } />
              <input type="text" name={ this.state.medical } onChange={ this.handleChange } />
              <input type="text" name={ this.state.other } onChange={ this.handleChange } />
            </label>
              <input type="submit" value="Submit" />
          </form>
        </div>

     );
   }
 }

export default SitterNotes;
