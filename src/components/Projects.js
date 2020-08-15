import React from "react"
import "../assets/styles/projects.scss"
import 'swiper/swiper.scss';
import { Container, Row, Col, Button} from 'reactstrap';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaGlobe, FaGitlab, FaSass, FaReact } from "react-icons/fa";
import { AiOutlineAntDesign } from "react-icons/ai";
import { DiHeroku } from "react-icons/di";

const Projects = () => {
    SwiperCore.use([Autoplay]);
    return (
        <React.Fragment>
            <Container className="project">
                <h1>Yogie's Latest Project</h1>
                <Row className="project-row">
                    <Col className="project-img">
                        <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        autoplay
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide><img src={require("../assets/images/Sayembara.png")} alt="sayembara" /></SwiperSlide>
                            <SwiperSlide><img src={require("../assets/images/Sayembara2.png")} alt="sayembara" /></SwiperSlide>
                            <SwiperSlide><img src={require("../assets/images/Sayembara3.png")} alt="sayembara" /></SwiperSlide>
                            <SwiperSlide><img src={require("../assets/images/Sayembara4.png")} alt="sayembara" /></SwiperSlide>
                            <SwiperSlide><img src={require("../assets/images/Sayembara5.png")} alt="sayembara" /></SwiperSlide>   
                        </Swiper>
                    </Col>
                    <Col className="project-text">
                        <h2>Sayembara</h2>
                        <p>An online platform for graphic design contest.</p>
                        <Row>
                            <Col>
                                <Button href="https://sayembara-ga6.herokuapp.com/" target="_blank" rel="noopener noreferrer"><FaGlobe /> Live Website</Button>
                                <Button href="https://gitlab.com/glints-academy-6/team-e/front-end" target="_blank" rel="noopener noreferrer" className="project-repo"><FaGitlab /> Repository</Button>
                            </Col>
                            <Col className="project-icons">
                                <h3>
                                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><FaReact /></a>
                                <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer"><FaSass /></a>
                                <a href="https://ant.design/" target="_blank" rel="noopener noreferrer"><AiOutlineAntDesign /></a>
                                <a href="https://www.heroku.com" target="_blank" rel="noopener noreferrer"><DiHeroku /></a>
                                </h3>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Projects