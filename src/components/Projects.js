import React from "react";
import "../assets/styles/projects.scss";
import { Row, Col } from "reactstrap";
import ProjectCard from "./projectCard";

const Projects = () => {
  return (
    <>
      <Row id="projects">
        <Col className="project">
          <h1>Yogie's Latest Project</h1>
          <ProjectCard name={"movieapp"} />
          <ProjectCard name={"sayembara"} />
          <ProjectCard name={"hackernews"} />
        </Col>
      </Row>
    </>
  );
};

export default Projects;
