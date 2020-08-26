import React from "react"
import Header from "../layouts/header"
import { Row, Col, Button } from 'reactstrap';
import { FaGlobe, FaGitlab, FaArrowLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css';
import "../assets/styles/sayembara.scss"
import Fade from 'react-reveal/Fade';
import Footer from "../layouts/footer"

SwiperCore.use([Navigation, Pagination]);

const Sayembara = () => {
    return(
        <>
            <Header />
            <Fade bottom delay={500}>
                <Row className="sayembara">
                    <Col className="sayembara-title">
                        <h1>Sayembara</h1>
                        <h6>Find the Perfect Contest for You!</h6>
                        <Button href="https://sayembara-ga6.herokuapp.com/" target="_blank" rel="noopener noreferrer"><FaGlobe /> Live Website</Button>
                        <Button href="https://gitlab.com/glints-academy-6/team-e/front-end" target="_blank" rel="noopener noreferrer" className="project-repo"><FaGitlab /> Repository</Button>
                    </Col>
                </Row>
            </Fade>
            <Fade bottom delay={500}>
                <Row className="sayembara-content">
                    <Col className="sayembara-content-slide">
                        <Swiper
                        slidesPerView={1}
                        navigation
                        pagination
                        >
                            <SwiperSlide><img src={require("../assets/images/sayembara1.png")} alt="sayembara1" /></SwiperSlide>
                            <SwiperSlide><img src={require("../assets/images/sayembara2.png")} alt="sayembara2" /></SwiperSlide>
                            <SwiperSlide><img src={require("../assets/images/sayembara3.png")} alt="sayembara3" /></SwiperSlide>
                            <SwiperSlide><img src={require("../assets/images/sayembara4.png")} alt="sayembara4" /></SwiperSlide>
                            <SwiperSlide><img src={require("../assets/images/sayembara5.png")} alt="sayembara5" /></SwiperSlide>
                            <SwiperSlide><img src={require("../assets/images/sayembara6.png")} alt="sayembara6" /></SwiperSlide>
                        </Swiper>
                    </Col>
                    <Col className="sayembara-content-text">
                        <p>Sayembara is an online platform for creating and joining graphic 
                            design contest. <br /> <br /> 
                            In Sayembara, users are divided into two roles. 
                            The first role is provider.
                            Providers can create contest that suits their needs.
                            They set how much the prize
                            money, due date, announcement date, and criteria of the contest. 
                            The second role is participant. 
                            Participants can join contests that providers create. 
                            They may submit up to three works per contest.
                            The providers may pick them as a winner and if they do win, 
                            they can receive the prize money.
                        </p>
                    </Col>
                </Row>
            </Fade>
            <Fade>
                <Row className="sayembara-return">
                    <Button href="/"><FaArrowLeft /> Return to home</Button>
                </Row>
            </Fade>
            <Footer />
        </>
    )
}

export default Sayembara