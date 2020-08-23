import React from "react"
import { Row, Col, Button} from 'reactstrap';
import "../assets/styles/intro.scss"
import { FaLinkedinIn } from "react-icons/fa";

const Intro = () => {
    return (
        <React.Fragment>
            <Col className="intro">
                <h5>Yogie Arifin</h5>
                <h1>Junior Front End Developer</h1>
                <Row className="intro-row">
                    <Col className="intro-text">
                        <p> Yogie Arifin is a junior front-end
                            developer that recently graduated 
                            from Glints Academy. During the 
                            academy, he learned many things such as HTML, 
                            CSS, Javascript, React Js, Git, Agile methodologies, and many more.</p>
                            <Button href="https://www.linkedin.com/in/yogie-arifin" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /> Connect with Yogie</Button>
                    </Col>
                </Row>
            </Col>
        </React.Fragment>
    )
}

export default Intro