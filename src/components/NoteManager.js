import React, { Component } from 'react';
import './NoteManager.css';
import { Badge, Button, NavLink } from 'reactstrap';

class NoteManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sitternotes: [],
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

  componentDidMount() {
    // this.props.firebase.auth().onAuthStateChanged(user => {
    //   this.props.setUser(user);
    // });
    this.sitternotesRef.on('child_added', snapshot => {
      const sitternote = snapshot.val();
      sitternote.key = snapshot.key;
      this.setState({ sitternotes: this.state.sitternotes.concat(sitternote) });
    });
  }

  createSitterNote(sitternote) {
    this.sitternotesRef.push({
      contact: this.state.contact,
      medical: this.state.medical,
      houseInfo: this.state.houseInfo,
      activities: this.state.activities,
      username: this.props.activeUser
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
    const {activeUser} = this.props;

    return (
      <div className='notemanager'>
        <div id="sitternotes-submit">
          <h2><Badge color="light">Create Sitter Note for {activeUser.displayName}</Badge></h2>
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
            <NavLink href="/SitterNotes/"><Button color="secondary" size="lg">Sitter Note List</Button></NavLink>
      </div>
    );
  }
}

export default NoteManager;
