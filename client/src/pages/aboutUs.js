import React, { Component } from "react";
import Hero from "../components/Hero";
import { Row, Col } from "../components/Grid";
import Nav from "../components/Nav";
import Team from "../components/Team";

class aboutUs extends Component {
  
  render() {
    return (
      <div>
        <Nav />
        <Hero backgroundImage="https://s-i.huffpost.com/gen/3437614/images/o-DOG-SHELTER-facebook.jpg">
          <Row>
            <Col size="md-12">
              <h2 className="aboutPar">About Us</h2>
                <h3>Approximately 6.5 million companion animals enter U.S. animal shelters nationwide every year.</h3>
                <h3>Of that, 1.5 million are euthanized.</h3>
                <h3>In Orange County alone, there are dozens of animal shelters. How can you be sure you are finding the right pet?</h3>
                <h3>At Adoptable, we aggregate all of the dogs in the area so that you can make a better choice.</h3>
            </Col>
          </Row>
        </Hero>
        <Team />
      </div>
    ); 
  }
}
export default aboutUs;