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
    <h1 className="hero-title">All your Household Info in 1 place!</h1>
      <CardDeck>
      <Card>
        <CardImg top width="100%" src={process.env.PUBLIC_URL + '/family.jpg'} alt="logo" />
        <CardBody>
          <CardTitle>SHARE</CardTitle>
          {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
          <CardText>With Sitters and Family</CardText>
          {/* <Button>Button</Button> */}
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={process.env.PUBLIC_URL + '/stickys.jpg'} alt="logo" />
        <CardBody>
          <CardTitle>STOP</CardTitle>
          {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
          <CardText>Writing notes for every sitter, everytime</CardText>
          {/* <Button>Button</Button> */}
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={process.env.PUBLIC_URL + '/computer.jpg'} alt="logo" />
        <CardBody>
          <CardTitle>Save Time!</CardTitle>
          {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
          <CardText>Add or Change anything, anytime</CardText>
          {/* <Button>Button</Button> */}
        </CardBody>
      </Card>
    </CardDeck>

  </section>
    // <div>
    //    <i class="fas fa-child fa-7x"></i>
    // <i class="fas fa-home fa-7x"></i>
    // </div>


  // <section className="landing">
  //   <h1 className="hero-title">All your Household Info in 1 place!</h1>
  //   <section className="selling-points row">
  //     <div className="point col-md-4">
  //       <h2 className="point-title">SHARE</h2>
  //       <p className="point-description">With Sitters and Family</p>
       
  //     </div>
  //     <div className="point col-md-4">
  //       <h2 className="point-title">STOP</h2>
  //       <p className="point-description">Writing notes for every sitter, everytime</p>
        
  //     </div>
  //     <div className="point col-md-4">
  //       <h2 className="point-title">Save Time!</h2>
  //       <p className="point-description">Add or Change anything, anytime</p>
    
  //     </div>
  //   </section>
    
  //   <i class="fas fa-child fa-7x"></i>
  //   <i class="fas fa-home fa-7x"></i>
    

  //   </section>
      );
    }
}   

export default Landing;