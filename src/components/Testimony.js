import React from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "reactstrap";
import "../assets/styles/testimony.scss";
import Fade from "react-reveal/Fade";

const Testimony = () => {
  const cards = useSelector((state) => state.testi.cards);

  return (
    <>
      <Row id="testimonies">
        <Col className="testimony">
          <h1 className="testimony-head">What they say about Yogie</h1>
          {cards &&
            cards.map((cards, index) => (
              <Fade key={index}>
                <Row className="testimony-row">
                  <Col className="testimony-pic">
                    <img src={cards.picture} alt={cards.id} />
                  </Col>
                  <Col className="testimony-text">
                    <Row className="testimony-text-container">
                      <h4>{cards.name}</h4>
                      <h6>{cards.relation}</h6>
                    </Row>
                    <p>{cards.testi}</p>
                  </Col>
                </Row>
              </Fade>
            ))}
        </Col>
      </Row>
    </>
  );
};

export default Testimony;
