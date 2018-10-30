import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './Landing.css';
// import SignIn from './SignIn';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody } from 'reactstrap';



class Landing extends Component {
  
  render() {
    return (
  <section className="landing">
    {/* <h1 className="hero-title">Sitter's Helper will save you time!</h1> */}
    <h1 className="hero-title">All of your important household Info in 1 place</h1>
      <CardDeck>
      <Card>
        <CardImg top width="100%" src={process.env.PUBLIC_URL + '/family.jpg'} alt="logo" />
        <CardBody>
          <CardTitle>SHARE</CardTitle>
          {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
          <CardText>With all your children's sitters and family members</CardText>
          <CardText>House Info, Emergency Contact Info, Medical Info, FUN Info!</CardText>
          {/* <Button>Button</Button> */}
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={process.env.PUBLIC_URL + '/stickys.jpg'} alt="logo" />
        <CardBody>
          <CardTitle>NO MORE STICKY NOTES!</CardTitle>
          {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
          <CardText>Stop writing notes for every sitter, everytime</CardText>
          <CardText>Don't worry if you forgot anything, it's all online :)</CardText>
          {/* <Button>Button</Button> */}
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={process.env.PUBLIC_URL + '/computer.jpg'} alt="logo" />
        <CardBody>
          <CardTitle>Save Time!</CardTitle>
          {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
          <CardText>Add or Edit sitter notes, anytime</CardText>
          <CardText>All from your desktop or mobile device</CardText>
          {/* <Button>Button</Button> */}
        </CardBody>
      </Card>
    </CardDeck>

    <footer>*All of your data is secure with sittershelper.com</footer>

  </section>

      );
    }
}   

export default Landing;