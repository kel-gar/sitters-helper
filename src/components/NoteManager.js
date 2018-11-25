import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NoteManager.css';
import { Badge, Button, NavItem, NavLink } from 'reactstrap';
import MyHome from './MyHome';

class NoteManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      contact: '',
      medical: '',
      houseInfo: '',
      activities: ''
    };

    this.sitternotesRef = this.props.firebase.database().ref('sitternotes');
    this.handleChangeContact = this.handleChangeContact.bind(this);
    this.handleChangeMedical = this.handleChangeMedical.bind(this);
    this.handleChangeActivities = this.handleChangeActivities.bind(this);
    this.handleChangeHouseInfo = this.handleChangeHouseInfo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  createSitterNote(sitternote) {
    this.sitternotesRef.push({
      contact: this.state.contact,
      medical: this.state.medical,
      houseInfo: this.state.houseInfo,
      activities: this.state.activities
    });
  }

  handleChangeContact(e) {
    this.setState({ contact: e.target.value })
  }

  handleChangeMedical(e) {
    this.setState({ medical: e.target.value })
  }

  handleChangeHouseInfo(e) {
    this.setState({ houseInfo: e.target.value })
  }

  handleChangeActivities(e) {
    this.setState({ activities: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.createSitterNote(this.state.value);
    this.setState({
      contact: '',
      medical: '',
      houseInfo: '',
      activities: ''
    });
  }

  render() {
    return (

      <div className='notemanager'>
        <div id="sitternotes-submit">
          <h2><Badge color="light">Create Sitter Note:</Badge></h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              Contact:
              <textarea type="text" value={this.state.contact} onChange={this.handleChangeContact} />
            </label>
          </form>
          <form onSubmit={this.handleSubmit}>
            <label>
              Medical:
              <textarea type="text" value={this.state.medical} onChange={this.handleChangeMedical} />
            </label>
          </form>
          <form onSubmit={this.handleSubmit}>
            <label>
              House Info:
              <textarea type="text" value={this.state.houseInfo} onChange={this.handleChangeHouseInfo} />
            </label>
          </form>
          <form onSubmit={this.handleSubmit}>
            <label>
              Activities:
              <textarea type="text" value={this.state.activities} onChange={this.handleChangeActivities} />
            </label>
            <div>
              <Button color="primary" size="lg" input type="submit" value="submit">Submit</Button>
            </div>
          </form>
        </div>
        <div id='sitternote-list'>
          {/* // when I click on this link i only see the latest note i added not the whole table */}
          {/* <Link to="/MyHome/">
            <Button color="secondary" size="lg" input type="submit" value= "submit">Sitter Note List</Button>
          </Link> */}
          {/* THIS IS WORKING ALTHOUGH NOT STYLED RIGHT, JUST NEED TO GET IT WORKING */}
          <NavItem>
            <NavLink href="/MyHome/">Sitter Note List</NavLink>
          </NavItem>
        </div>
      </div>
    );
  }
}

export default NoteManager;