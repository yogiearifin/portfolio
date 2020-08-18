import React from "react"
import "../assets/styles/projects.scss"
import 'swiper/swiper.scss';
import { Row, Col, Button} from 'reactstrap';
import { FaGlobe, FaGitlab, FaSass, FaReact } from "react-icons/fa";
import { AiOutlineAntDesign } from "react-icons/ai";
import { DiHeroku } from "react-icons/di";

const Projects = () => {
    return (
        <React.Fragment>
            <Col className="project">
                <h1>Yogie's Latest Project</h1>
                <Row className="project-row">
                    <Col className="project-img">
                        <img src={require("../assets/images/Sayembara.png")} alt="sayembara" />
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
            </Col>
        </React.Fragment>
    )
}

export default Projects