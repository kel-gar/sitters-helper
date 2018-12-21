import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SitterNotes.css';
import { Table } from 'reactstrap';
import { Badge } from 'reactstrap';
import { Button } from 'reactstrap';
import NoteManager from './NoteManager';


class SitterNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sitternotes: [],
      value: ''
    };

    this.sitternotesRef = this.props.firebase.database().ref('sitternotes');
  }

  componentDidMount() {
    this.sitternotesRef.on('child_added', snapshot => {
      const sitternote = snapshot.val();
      sitternote.key = snapshot.key;
      this.setState({ sitternotes: this.state.sitternotes.concat(sitternote) });
    });
  }

  render() {
    const {activeUser} = this.props;

    return (
      <section className="sitternotes">
        <div id="sitternotes-list">
          <h2><Badge color="primary">Welcome Back {activeUser.displayName}!</Badge></h2>
          <Table>
            <thead>
              <tr>
                <th>Contacts</th>
                <th>Medical Info</th>
                <th>House Info</th>
                <th>Activities and Food</th>
              </tr>
            </thead>
            {/* <tbody>
              {this.state.sitternotes
                .filter(sitternote => sitternote.username === activeUser.uid)
                .map((sitternote, key) => (
                  <tr key={sitternote.key}>
                    <td>{sitternote.contact}</td>
                    <td>{sitternote.medical}</td>
                    <td>{sitternote.houseInfo}</td>
                    <td>{sitternote.activities}</td>
                  </tr>
                ))}
            </tbody> */}
            <React.Fragment>
              {this.state.sitternotes
                .filter(sitternote => sitternote.username === activeUser.uid)
                .map((sitternote, key) => (
                  <tr key={sitternote.key}>
                    <td>{sitternote.contact}</td>
                    <td>{sitternote.medical}</td>
                    <td>{sitternote.houseInfo}</td>
                    <td>{sitternote.activities}</td>
                  </tr>
                ))}
            </React.Fragment>           
          </Table>
          
        </div>
        <section id='add-note'>
          <Link to="/NoteManager">
            <Button color="secondary" size="lg"><i className="fas fa-plus fa-1x">ADD NOTE</i></Button>
            {/* <Button color="secondary" size="lg"><i className="fas fa-plus fa-1x">ADD NOTE</i></Button>
            <Button color="secondary" size="lg"><i className="fas fa-plus fa-1x">ADD NOTE</i></Button>
            <Button color="secondary" size="lg"><i className="fas fa-plus fa-1x">ADD NOTE</i></Button> */}
          </Link>
        </section>
        {/* <NoteManager /> */}
      </section>
    );
  }
}

export default SitterNotes;
