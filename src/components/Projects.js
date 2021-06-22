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
          <ProjectCard
            name={"movieapp"}
            video={false}
            react={true}
            bootstrap={true}
            heroku={true}
          />
          <ProjectCard
            name={"sayembara"}
            video={true}
            react={true}
            sass={true}
            antd={true}
            heroku={true}
          />
          <ProjectCard
            name={"hackernews"}
            video={false}
            react={true}
            sass={true}
            bootstrap={true}
          />
        </Col>
      </Row>
    </>
  );
};

export default Projects;
