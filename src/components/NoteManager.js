import React, { Component } from 'react';
import './NoteManager.css';
import { Badge, Button, NavLink } from 'reactstrap';
import SitterNotes from './SitterNotes';

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
    this.handleSubmitContact = this.handleSubmitContact.bind(this);
    this.handleSubmitMedical = this.handleSubmitMedical.bind(this);
    this.handleSubmitHouse = this.handleSubmitHouse.bind(this);
    this.handleSubmitActivities = this.handleSubmitActivities.bind(this);
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

  // createSitterNote(sitternote) {
  //   this.sitternotesRef.push({
  //     contact: this.state.contact,
  //     medical: this.state.medical,
  //     houseInfo: this.state.houseInfo,
  //     activities: this.state.activities,
  //     username: this.props.activeUser.uid
  //   });
  // }

  createContactNote(sitternote) {
    this.sitternotesRef.push({
      contact: this.state.contact,
      username: this.props.activeUser.uid
    });
  }

  createMedicalNote(sitternote) {
    this.sitternotesRef.push({
      medical: this.state.medical,
      username: this.props.activeUser.uid
    });
  }

  createHouseInfoNote(sitternote) {
    this.sitternotesRef.push({
      houseInfo: this.state.houseInfo,
      username: this.props.activeUser.uid
    });
  }

  createActivitiesNote(sitternote) {
    this.sitternotesRef.push({
      activities: this.state.activities,
      username: this.props.activeUser.uid
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

  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.createSitterNote(this.state.value);
  //   this.setState({
  //     contact: '',
  //     medical: '',
  //     houseInfo: '',
  //     activities: ''
  //   });
  // }

  handleSubmitContact(e) {
    e.preventDefault();
    this.createContactNote(this.state.value);
    this.setState({
      contact: ''
    });
  }

  handleSubmitMedical(e) {
    e.preventDefault();
    this.createMedicalNote(this.state.value);
    this.setState({
      medical: ''
    });
  }

  handleSubmitHouse(e) {
    e.preventDefault();
    this.createHouseInfoNote(this.state.value);
    this.setState({
      houseInfo: ''
    });
  }

  handleSubmitActivities(e) {
    e.preventDefault();
    this.createActivitiesNote(this.state.value);
    this.setState({
      activities: ''
    });
  }

  render() {
    const {activeUser} = this.props;

    return (
      <div className='notemanager'>
        <div id="sitternotes-submit">
          <h2><Badge color="light">Create Sitter Note for {activeUser.displayName}</Badge></h2>
          <form onSubmit={this.handleSubmitContact}>
            <label>
              Contact:
              <textarea type="text" value={this.state.contact} onChange={this.handleChangeContact} />
              <Button color="primary" size="sm" input type="submit" value="submit">Submit</Button>
            </label>
          </form>
          <form onSubmit={this.handleSubmitMedical}>
            <label>
              Medical:
              <textarea type="text" value={this.state.medical} onChange={this.handleChangeMedical} />
              <Button color="primary" size="sm" input type="submit" value="submit">Submit</Button>
            </label>
          </form>
          <form onSubmit={this.handleSubmitHouse}>
            <label>
              House Info:
              <textarea type="text" value={this.state.houseInfo} onChange={this.handleChangeHouseInfo} />
              <Button color="primary" size="sm" input type="submit" value="submit">Submit</Button>
            </label>
          </form>
          <form onSubmit={this.handleSubmitActivities}>
            <label>
              Activities:
              <textarea type="text" value={this.state.activities} onChange={this.handleChangeActivities} />
              <Button color="primary" size="sm" input type="submit" value="submit">Submit</Button>
            </label>
            {/* <div>
              <Button color="primary" size="lg" input type="submit" value="submit">Submit</Button>
            </div> */}
          </form>
        </div>
            <NavLink href="/SitterNotes/"><Button color="secondary" size="lg">Sitter Note List</Button></NavLink>
      </div>
    );
  }
}

export default NoteManager;
