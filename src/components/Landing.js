import React, { Component } from 'react';
import './Landing.css';
import { Button, Card,  CardImg, CardTitle, CardText, CardDeck, CardBody} from 'reactstrap';


class Landing extends Component {
  
  render() {
    return (
  <section className="landing">
    <h1 className="hero-title">All of your important household Info in 1 place</h1>
      <CardDeck>
      <Card>
        <CardImg top width="100%" src={process.env.PUBLIC_URL + '/family.jpg'} alt="family at the lake" />
        <CardBody>
          <CardTitle>SHARE <i class="fab fa-slideshare"></i></CardTitle>
          <CardText>With all your children's sitters and family members</CardText>
          <CardText>House Info, Emergency Contact Info, Medical Info, FUN Info!</CardText>
          {/* <Button>Button</Button> */}
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={process.env.PUBLIC_URL + '/stickys.jpg'} alt="picture of many sticky notes" />
        <CardBody>
          <CardTitle>NO MORE STICKY NOTES! <i class="far fa-sticky-note"></i></CardTitle>
          <CardText>Stop writing notes for every sitter, everytime</CardText>
          <CardText>Don't worry if you forgot anything, it's all online :)</CardText>
          {/* <Button>Button</Button> */}
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={process.env.PUBLIC_URL + '/computer.jpg'} alt="desktop with keyboard and mouse" />
        <CardBody>
          <CardTitle>SAVE TIME <i class="far fa-clock"></i></CardTitle>
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