import React, { Component } from "react";
import Button from 'react-bootstrap/lib/Button';
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Input from "../components/Input";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import { Link } from "react-router-dom";

class Adoption extends Component {
  state = {
    pets: [],
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    pet_name: "",
    gender: "",
    age: "",
    weight: "",
    breed: "",
    link: ""
  };
  

  handleInputChange = event => {

    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log("Handle change", event.target);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    
      API.savePet({
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        phone: this.state.phone,
        pet_name: this.state.pet_name,
        gender: this.state.gender,
        age: this.state.age,
        weight: this.state.weight,
        breed: this.state.breed,
        
      })    
  };

  render() {
    return (
      <div>
        <Nav />
        <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
          <Row>
            <Col size="xs-9 sm-4">
              <h1>Pet Adoptions</h1>
              <h2>Find Your Friend a Forever Home</h2>
            </Col>
          </Row>
        </Hero>
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                  <h3>Submit your pets information here and we will find them a forever home:</h3>
                    <Col size="md-4">
                    <Input
                        name="first_name"
                        value={this.state.first_name}
                        onChange={this.handleInputChange}
                        placeholder="First Name"
                      />
                      <Input
                        name="last_name"
                        value={this.state.last_name}
                        onChange={this.handleInputChange}
                        placeholder="Last Name"
                      />
                      <Input
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        placeholder="Email"
                      />
                      <Input
                        name="phone"
                        value={this.state.phone}
                        onChange={this.handleInputChange}
                        placeholder="Phone"
                      />
                      <Input
                        name="pet_name"
                        value={this.state.pet_name}
                        onChange={this.handleInputChange}
                        placeholder="Pet Name"
                      />
                      
                      <Input
                        name="age"
                        value={this.state.age}
                        onChange={this.handleInputChange}
                        placeholder="Age"
                      />
                      <Input
                        name="weight"
                        value={this.state.weight}
                        onChange={this.handleInputChange}
                        placeholder="Weight"
                      />
                      <select className="adoptionPgSelect"
                      name="gender"
                      value={this.state.gender}
                      onChange={this.handleInputChange}
                    >
                      <option value="M">Male</option>
                      <option value="S">Female</option>
                      
                    </select>
                    <select className="adoptionPgSelect"
                      name="breed"
                      value={this.state.breed}
                      onChange={this.handleInputChange}
                    >
                    
                    <option value="Chihuahua SH MIX">Chihuahua</option>
                    <option value="GERM SHEPHERD MIX">German Shepherd</option>
                    <option value="PIT BULL">Pitbull </option>
                    <option value="POMERANIAN">Pomeranian</option>
                    <option value="YORKSHIRE TERR">Yorkshire Terrier</option>
                      
                    </select>
                      <Button className="submitBtn"
                        title="Submit"
                        onClick={this.handleFormSubmit}
                        type="success"
                      ><Link to="/thankyouPage" className="linkage">Submit</Link>
                      </Button>
                  
                    </Col>
                    <Col size="md-4"></Col>
                    <Col size="md-4">
                      <iframe width="420" height="345" src="https://www.youtube.com/embed/08SLFf7mrwQ?autoplay=1">
                      </iframe>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    ); 
  }
}
// disabled={!(this.state.first_name && this.state.last_name && this.state.email && this.statethis.state.pet_name && this.state.breed && this.state.gender && this.state.age && this.state.weight)}
export default Adoption;