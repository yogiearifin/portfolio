import React from "react"
import "../assets/styles/projects.scss"
import { Row, Col, Button} from 'reactstrap';
import { FaSass, FaReact, FaBootstrap, FaArrowRight } from "react-icons/fa";
import { AiOutlineAntDesign } from "react-icons/ai";
import { DiHeroku } from "react-icons/di";
import Zoom from 'react-reveal/Zoom';
import { Link } from "react-router-dom"

const Projects = () => {
    return (
        <>
            <Row id="projects">
                <Col className="project">
                    <h1>Yogie's Latest Project</h1>
                    <Zoom>
                        <Row className="project-row">
                            <Col className="project-img">
                                <iframe src="https://www.youtube.com/embed/xCECMFUDp70" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="sayembara video" />
                            </Col>
                            <Col className="project-text">
                                <h2>Sayembara</h2>
                                <p>An online platform for graphic design contest.</p>
                                <Row>
                                    <Col>
                                        <Link to="/sayembara"><Button><FaArrowRight /> Learn More </Button></Link>
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
                    </Zoom>
                    <Zoom>
                        <Row className="project-row">
                            <Col className="project-img">
                                <iframe src="https://hackernews-lite.netlify.app/" frameborder="0" title="sayembara video" />
                            </Col>
                            <Col className="project-text">
                                <h2>Hackernews Lite</h2>
                                <p>A simple newsreader using Hackernews API.</p>
                                <Row>
                                    <Col>
                                        <Link to="/hackernews"><Button><FaArrowRight /> Learn More</Button></Link>
                                    </Col>
                                    <Col className="project-icons">
                                        <h3>
                                        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><FaReact /></a>
                                        <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer"><FaSass /></a>
                                        <a href="https://reactstrap.github.io/" target="_blank" rel="noopener noreferrer"><FaBootstrap /></a>
                                        {/* <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer"><SiNetlify /></a> */}
                                        </h3>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Zoom>
                </Col>
            </Row>
        </>
    )
}

export default Projects