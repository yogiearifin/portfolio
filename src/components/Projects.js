import React from "react"
import "../assets/styles/projects.scss"
import 'swiper/swiper.scss';
import { Container, Row, Col, Button} from 'reactstrap';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

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
                        <h1>Sayembara</h1>
                        <p>An online platform for graphic design contest.</p>
                        <p>Made by using React, Redux, and SASS</p>
                        <Button href="https://sayembara-ga6.herokuapp.com/" target="_blank">Live Website</Button>
                        <Button href="https://gitlab.com/glints-academy-6/team-e/front-end" target="_blank" className="project-repo">Repository</Button>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Projects