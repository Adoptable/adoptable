import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./Team.css";

const Team = () => (

  <div>
  	<Container>
          <Row>
          <h1>The Dream Team</h1>
            <Col size="md-3">
            <img className="andrewteamimg" src={require("../../assets/images/andrewdog.jpg")} alt='Andrew'/>
            <h1>Andrew</h1>
            <p>Andrew Nguyen is a Full Stack Developer with a passion both for technology and animals. As a child, he loved spending his free time visiting animal shelters and imagining ways that he could bring bring them all home. Unfortunalty, that was an impossibility.</p>

<p>Now, as an experienced developer and engineer, the ability to help these animals is well within his abilities. </p>

<p>Andrew is the proud father of Ava, a 2 year old Lab/ Pitt rescue. On their free time, Ava and Andrew enjoy the outdoors often going to the park to play fetch and chase squirrels.</p>
            <a href="https://www.linkedin.com/in/andrewnguyen14/" target="_blank"><img className="icons" src={require("../../assets/images/linkedin.png")} /></a>
            <a href="https://github.com/andrewnguyen14" target="_blank"><img className="icons" src={require("../../assets/images/github.png")} /></a>
            </Col>
            <Col size="md-3">
           <img className="toriteamimg" src={require("../../assets/images/toridog.jpg")} alt='Tori'/>
            <h1>Tori</h1>
            <p>Tori White is a full stack developer with curious mind and a love for learning. She has always enjoyed solving problems and is constantly looking for new ways to challenge herself.</p>
            <p>Tori is the proud owner of two dogs; a boxer/pitbull named Oliver (shown above) and a chihuahua/weiner dog named Charlie. Both dogs were rescued from the OC Animal Shelter.</p>
            <a href="https://www.linkedin.com/in/tori-white22/" target="_blank"><img className="icons" src={require("../../assets/images/linkedin.png")} /></a>
            <a href="https://github.com/toriw22" target="_blank"><img className="icons" src={require("../../assets/images/github.png")} /></a>
            </Col>
            <Col size="md-3">
            <img className="peterteamimg" src={require("../../assets/images/astro.png")} alt='Peter'/>
            <h1>Peter</h1>
            <p>Peter was most recently working in sales at a SaaS marketing analytics company. Here was where he gained most of his exposure and curiosity for technology and web development. </p>

            <p>Peter is the proud father of a terrier mix named Astro. Astro lives with Peter and his family where his mom feeds him fresh chicken, ground beef, and Costco hotdogs every day.</p>

            <a href="https://www.linkedin.com/in/ppham0203/" target="_blank"><img className="icons" src={require("../../assets/images/linkedin.png")} /></a>
            <a href="https://github.com/ppham0203" target="_blank"><img className="icons" src={require("../../assets/images/github.png")} /></a>
            </Col>
            <Col size="md-3">
            <img className="ianteamimg" src={require("../../assets/images/iandog.png")} alt='Ian'/>
            <h1>Ian</h1>
            <p>Ian Powell is a full-stack developer with an eye for detail and a passion for solving difficult problems. Formerly, Ian worked in logistics and speaks five languages through his travels through Asia. When he's not coding, you'll see him enjoying craft cocktails and meeting new people.</p>

<p>Ian is a big brother to Hunter, a fierce chihuahua-terrier. Hunter stays in Monrovia with their two parents. They both travel together on the hunt for a free lunch.</p>
            <a href="https://www.linkedin.com/in/ian-powell/" target="_blank"><img className="icons" src={require("../../assets/images/linkedin.png")} /></a>
            <a href="https://github.com/powi442" target="_blank"><img className="icons" src={require("../../assets/images/github.png")} /></a>
            </Col>
          </Row>
        </Container>
  </div>
);

export default Team;
