import React from "react";
import "../assets/styles/projects.scss";
import { Row, Col, Button } from "reactstrap";
import { FaArrowRight } from "react-icons/fa";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProjectCard = ({ ...props }) => {
  const { name } = props;
  const data = useSelector((state) => state.projects[name]);

  return (
    <Zoom>
      <Row className="project-row">
        <Col className="project-wrapper">
          <Col>
            <h2>{data.name}</h2>
            <p>{data.desc_short}</p>
          </Col>
          <Col>
            <Link to={`/projects/${data.slug}`}>
              <Button>
                <FaArrowRight /> Learn More{" "}
              </Button>
            </Link>
          </Col>
        </Col>
      </Row>
    </Zoom>
  );
};

export default ProjectCard;
