import React from "react";
import PropTypes from 'prop-types';
import { Container, Row, Col } from "../Grid";
import { Link } from "react-router-dom";

const DogList = (props) => (
  <Container>
    <Row>
      <div>
        {props.dogs.map(item => (
          <div key={item._id}>
            <Col size="xs-4 sm-4">
              <div>
                <Link to={`/adoptionpets/${item._id}`}><img src={item.image || "https://placehold.it/300x300"} width="350px" height="262.5px" /></Link>
                <h3><center>{item.pet_name}</center></h3>
              </div>
            </Col>
          </div>
        ))}
      </div>
    </Row>
  </Container>

);

DogList.propTypes = {
  dogs: PropTypes.array.isRequired
}

export default DogList;



