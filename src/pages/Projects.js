import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Row, Col, Button } from "reactstrap";
import { FaGlobe, FaGitlab, FaArrowLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/swiper-bundle.css";
import "../assets/styles/projectsList.scss";

SwiperCore.use([Navigation, Pagination]);

const Projects = () => {
  let { name } = useParams();

  const data = useSelector((state) => state.projects[name]);
  return (
    <>
      <Col className="projects-container">
        <Row className="projects">
          <Col className="projects-title">
            <h1>{data.name}</h1>
            <h6>{data.tagline}</h6>
            <Button
              href={`${data.link}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGlobe /> Live Website
            </Button>
            <Button
              href={`${data.repo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="project-repo"
            >
              <FaGitlab /> Repository
            </Button>
          </Col>
        </Row>
        <Row className="projects-content">
          <Col className="projects-content-slide">
            <Swiper slidesPerView={1} navigation pagination>
              {data.img.map((images, index) => {
                return (
                  <SwiperSlide>
                    <img src={images} alt={`${data.name}-${index}`} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Col>
          <Col className="projects-content-text">
            <p>
              {data.desc_head} <br /> <br />
              {data.desc}
            </p>
          </Col>
        </Row>
        <Row className="projects-return">
          <Button href="/">
            <FaArrowLeft /> Return to home
          </Button>
        </Row>
      </Col>
    </>
  );
};

export default Projects;
