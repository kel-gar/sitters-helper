import React, { Component } from 'react';
import './Landing.css';
import { Card,  CardImg, CardTitle, CardText, CardDeck, CardBody} from 'reactstrap';


class Landing extends Component {
  
  render() {
    return (
  <section className="landing">
    <h1 className="hero-title">All of your important household Info in 1 place</h1>
      <CardDeck>
      <Card>
        <CardImg top width="100%" src={process.env.PUBLIC_URL + '/family.jpg'} alt="logo" />
        <CardBody>
          <CardTitle>SHARE</CardTitle>
          <CardText>With all your children's sitters and family members</CardText>
          <CardText>House Info, Emergency Contact Info, Medical Info, FUN Info!</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={process.env.PUBLIC_URL + '/stickys.jpg'} alt="logo" />
        <CardBody>
          <CardTitle>NO MORE STICKY NOTES!</CardTitle>
          <CardText>Stop writing notes for every sitter, everytime</CardText>
          <CardText>Don't worry if you forgot anything, it's all online :)</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={process.env.PUBLIC_URL + '/computer.jpg'} alt="logo" />
        <CardBody>
          <CardTitle>Save Time!</CardTitle>
          <CardText>Add or Edit sitter notes, anytime</CardText>
          <CardText>All from your desktop or mobile device</CardText>
        </CardBody>
      </Card>
    </CardDeck>

    <footer>*All of your data is secure with sittershelper.com</footer>

  </section>

      );
    }
}   

export default Landing;