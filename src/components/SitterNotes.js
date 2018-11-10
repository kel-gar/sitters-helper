import React, { Component } from 'react';
// import { Table } from 'reactstrap';

class SitterNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sitternotes: [],
      value: ''
      // contact: '',
      // general: '',
      // medical: '',
      // other: ''
    };
    this.sitternotesRef = this.props.firebase.database().ref('sitternotes');
    // this.handleChange = this.handleChange.bind(this);
    this.handleChangeContact = this.handleChangeContact.bind(this);
    this.handleChangeGeneral = this.handleChangeGeneral.bind(this);
    this.handleChangeMedical = this.handleChangeMedical.bind(this);
    this.handleChangeOther = this.handleChangeOther.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
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
     });
   }

  //  handleChange(e) {
  // //   this.setState({ value: e.target.value})
  //   this.setState({ [e.target.name]: e.target.value });
  // }

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

  handleSubmit(e) {
    e.preventDefault();
    this.createSitterNote(this.state.value);
    this.setState({ value: '' });
   }  

    
    render() {
      return (
        <div id="sitternotelist">
        
          <h3>Sitter Notes:</h3>
        <ul>
          {this.state.sitternotes
            .map( (sitternote, key) => (
            <ul key={sitternote.key}>
              {sitternote.contact}-
              {sitternote.general}-
              {sitternote.medical}-
              {sitternote.other}
            </ul>
          ))}
        </ul>  
        
          <form onSubmit={ this.handleSubmit }>
            <label>
              Contact:
              <input type="text" value={ this.state.contact } onChange={ this.handleChangeContact } />
            </label>
          </form>
          <form onSubmit={ this.handleSubmit }>
            <label>
              General:
              <input type="text" value={ this.state.general } onChange={ this.handleChangeGeneral } />
            </label>
          </form>
          <form onSubmit={ this.handleSubmit }>
            <label>
              Medical:
              <input type="text" value={ this.state.medical } onChange={ this.handleChangeMedical } />
            </label>
          </form>
          <form onSubmit={ this.handleSubmit }>
            <label>
              Other:
              <input type="text" value={ this.state.other } onChange={ this.handleChangeOther } />
            </label>

              <input type="submit" value="Submit" />
          </form>
        </div>

     );
   }
 }

export default SitterNotes;
