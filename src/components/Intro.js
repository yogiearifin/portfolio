import React from "react"
import { Container, Row, Col, Button} from 'reactstrap';
import "../assets/styles/intro.scss"

const Intro = () => {
    return (
        <React.Fragment>
            <Container className="intro">
            <h1>Welcome to Yogie Arifin's site!</h1>
                <Row className="intro-row">
                    <Col className="intro-text">
                        <p>Yogie Arifin is a junior front-end 
                            developer that recently graduated 
                            from Glints Academy. During the 
                            academy, he learned many things such as HTML, 
                            CSS, Javascript, React Js, Git, and Agile methodologies. <br/>
                            <br/>
                            Swipe to learn more about him.</p>
                            <Button href="https://www.linkedin.com/in/yogie-arifin" target="_blank">Connect with Yogie</Button>
                    </Col>
                    {/* <Col className="intro-img">
                        <img src={require("../assets/images/yogie.jpg")} alt="icon" />
                    </Col> */}
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Intro