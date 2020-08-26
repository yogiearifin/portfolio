import React from "react"
import Header from "../layouts/header"
import { Row, Col, Button } from 'reactstrap';
import { FaGlobe, FaGithub, FaArrowLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css';
import "../assets/styles/hackernews.scss"
import Fade from 'react-reveal/Fade';
import Footer from "../layouts/footer"

SwiperCore.use([Navigation, Pagination]);

const Hackernews = () => {
    return(
        <>
            <Header />
            <Fade bottom delay={500}>
                <Row className="hackernews">
                    <Col className="hackernews-title">
                        <h1>Hackernews</h1>
                        <h6>Hacked your newsfeed since 2020</h6>
                        <Button href="https://hackernews-lite.netlify.app/" target="_blank" rel="noopener noreferrer"><FaGlobe /> Live Website</Button>
                        <Button href="https://github.com/yogiearifin/hackernews" target="_blank" rel="noopener noreferrer" className="project-repo"><FaGithub /> Repository</Button>
                    </Col>
                </Row>
            </Fade>
            <Fade bottom delay={500}>
                <Row className="hackernews-content">
                    <Col className="hackernews-content-slide">
                    <Swiper
                    slidesPerView={1}
                    navigation
                    pagination
                    >
                        <SwiperSlide><img src={require("../assets/images/hn1.png")} alt="hackernews1" /></SwiperSlide>
                        <SwiperSlide><img src={require("../assets/images/hn2.png")} alt="hackernews2" /></SwiperSlide>
                        <SwiperSlide><img src={require("../assets/images/hn3.png")} alt="hackernews3" /></SwiperSlide>
                    </Swiper>
                    </Col>
                    <Col className="hackernews-content-text">
                        <p>
                            Hackernews Lite is a simple news reader that use Hackernews API.
                            <br />
                            <br />
                            The API get the news from many website and store the contents and links into their database.
                            This site is created by Yogie to practice fetching data from API 
                            and filtering data using querry.
                            The API is public and can be used by everyone.
                            In this site, Yogie specifically filtered the data so that it only shows
                            latest news, news that has many views, and job vacancy news.
                            He also limit the news to show the maximum of 20 news.
                        </p>
                    </Col>
                </Row>
            </Fade>
            <Fade>
                <Row className="hackernews-return">
                    <Button href="/"><FaArrowLeft /> Return to home</Button>
                </Row>
            </Fade>
            <Footer />
        </>
    )
}

export default Hackernews