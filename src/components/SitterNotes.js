import React, { Component } from 'react';
import './SitterNotes.css';
import { Table } from 'reactstrap';

class SitterNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sitternotes: [],
      value: '',
      contact: '',
      general: '',
      medical: '',
      other: ''
    };

  this.sitternotesRef = this.props.firebase.database().ref('sitternotes');
  }

  componentDidMount() {
     this.sitternotesRef.on('child_added', snapshot => {
       const sitternote = snapshot.val();
       sitternote.key = snapshot.key;
       this.setState({ sitternotes: this.state.sitternotes.concat( sitternote ) });
     });
   }
    
    render() {
      return (
        <section className="sitternotes">
          <div id="sitternotes-list">
            <h3>Sitter Notes:</h3>
          <Table>
          <thead>
            <tr>
              <th>General</th>
              <th>Contact</th>
              <th>Medical</th>
              <th>Other</th>
              {/* <th>User</th> */}
            </tr>
          </thead>

          <tbody>
            {this.state.sitternotes
              .map( (sitternote, key) => (
              <tr key={sitternote.key}>
              <td>{sitternote.general}</td>
              <td>{sitternote.contact}</td>
              <td>{sitternote.medical}</td>
              <td>{sitternote.other}</td>
              {/* <td>{sitternote.userId}</td> */}
              </tr>
              ))}
          </tbody>
          </Table> 

          </div>      
        </section>  

      );
    }
 }

export default SitterNotes;
