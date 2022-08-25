import React from "react";
import "../assets/styles/projects.scss";
import { Row, Col, Button } from "reactstrap";
import { FaSass, FaReact, FaBootstrap, FaArrowRight } from "react-icons/fa";
import { AiOutlineAntDesign } from "react-icons/ai";
import { DiHeroku } from "react-icons/di";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProjectCard = ({ ...props }) => {
  const { name, video, react, sass, antd, heroku, bootstrap } = props;
  const data = useSelector((state) => state.projects[name]);

  return (
    <Zoom>
      <Row className="project-row">
        <Col className="project-img">
          {video ? (
            <iframe
              src={data.video_link}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={`${data.slug} video`}
            />
          ) : (
            <img src={data?.img[0]} alt={`${data?.name} image`} />
          )}
        </Col>
        <Col className="project-text">
          <h2>{data.name}</h2>
          <p>{data.desc_short}</p>
          <Row>
            <Col>
              <Link to={`/projects/${data.slug}`}>
                <Button>
                  <FaArrowRight /> Learn More{" "}
                </Button>
              </Link>
            </Col>
            <Col className="project-icons">
              <h3>
                {react ? (
                  <a
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaReact />
                  </a>
                ) : null}
                {sass ? (
                  <a
                    href="https://sass-lang.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaSass />
                  </a>
                ) : null}
                {antd ? (
                  <a
                    href="https://ant.design/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineAntDesign />
                  </a>
                ) : null}
                {heroku ? (
                  <a
                    href="https://www.heroku.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <DiHeroku />
                  </a>
                ) : null}
                {bootstrap ? (
                  <a
                    href="https://reactstrap.github.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaBootstrap />
                  </a>
                ) : null}
              </h3>
            </Col>
          </Row>
        </Col>
      </Row>
    </Zoom>
  );
};

export default ProjectCard;
