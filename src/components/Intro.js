import React from "react"
import { Row, Col, Button} from 'reactstrap';
import "../assets/styles/intro.scss"
import { FaLinkedinIn } from "react-icons/fa";

const Intro = () => {
    return (
        <React.Fragment>
            <Col className="intro">
            <h1>Who is Yogie?</h1>
                <Row className="intro-row">
                    <Col className="intro-text">
                        <p>Yogie Arifin is a junior front-end
                            developer that recently graduated 
                            from Glints Academy. During the 
                            academy, he learned many things such as HTML, 
                            CSS, Javascript, React Js, Git, Agile methodologies, and many more.</p>
                            <Button href="https://www.linkedin.com/in/yogie-arifin" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /> Connect with Yogie</Button>
                    </Col>
                    {/* <Col className="intro-img">
                        <img src={require("../assets/images/yogie.jpg")} alt="icon" />
                    </Col> */}
                </Row>
            </Col>
        </React.Fragment>
    )
}

export default Intro