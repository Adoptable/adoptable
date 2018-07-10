import React from "react";
import "./Jumbotron.css";
import { Row, Col } from "../Grid";

const Jumbotron = props => (
  <div className="jumbotron" style={{ backgroundImage: `url(${props.backgroundImage})` }}>   
    <Row size="12">
        <Col size="xs-9 sm-4">
          <h1 className="homepage">Available Pets</h1>
          <h2 className="homepage">It's Never Too Late to Fall In Love!</h2>
        </Col>
    </Row>
  </div>
);

export default Jumbotron;
