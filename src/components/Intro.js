import React from "react";
import { Row, Col, Button } from "reactstrap";
import "../assets/styles/intro.scss";
import { FaLinkedinIn } from "react-icons/fa";
import Slide from "react-reveal/Slide";

const Intro = () => {
  return (
    <React.Fragment>
      <Row className="intro-container">
        <Slide left delay={500}>
          <Col className="intro">
            <h2>Yogie Arifin</h2>
            <h1>Front End Developer</h1>
            <Row className="intro-row">
              <Col className="intro-text">
                <p>
                  Yogie Arifin is a junior front-end developer that recently
                  graduated from Glints Academy. During the academy, he learned
                  many things such as HTML, CSS, Javascript, React Js, Git,
                  Agile methodologies, and many more.
                </p>
                <Button
                  href="https://www.linkedin.com/in/yogie-arifin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn /> Connect with Yogie
                </Button>
              </Col>
            </Row>
          </Col>
        </Slide>
      </Row>
    </React.Fragment>
  );
};

export default Intro;
