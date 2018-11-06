import React, { Component } from 'react';

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

   handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

   handleSubmit(e) {     
     e.preventDefault();
     this.createSitterNote(
        (this.state.contact),
        (this.state.general),
        (this.state.medical),
        (this.state.other)
     );
    // this.createSitterNote(this.state.contact);
    // this.setState({ [e.target.name]: e.target.value })
    // // this.createSitterNote(this.state.contact);
    // // this.setState({ contact: ''});
    // // this.createSitterNote(this.state.general);
    // // this.setState({ general: ''});
    // // this.createSitterNote(this.state.medical);
    // // this.setState({ medical: ''});
    // // this.createSitterNote(this.state.other);
    // // this.setState({ other: ''});
     this.state = {
      contact: '',
      general: '',
      medical: '',
      other: ''
    };

   }

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
              <input type="text" contact={ this.state.contact } onChange={ this.handleChange } />
              <input type="text" general={ this.state.general } onChange={ this.handleChange } />
              <input type="text" medical={ this.state.medical } onChange={ this.handleChange } />
              <input type="text" other={ this.state.other } onChange={ this.handleChange } />
            </label>
              <input type="submit" value="Submit" />
          </form>
        </div>

     );
   }
 }

export default SitterNotes;
