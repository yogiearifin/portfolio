import React from "react"
import { Row, Col } from 'reactstrap';
import "../assets/styles/footer.scss"
import { FaGithub, FaGitlab } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
    return(
        <>
            <Row className="footer">
                <Col className="footer-title">
                    <h6>2020 © Yogie Arifin</h6>
                </Col>
                <Col className="footer-icons">
                    <p>Find Yogie</p>
                    <hr />
                    <h1>
                        <a href="https://github.com/yogiearifin" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://gitlab.com/yogiearifin" target="_blank" rel="noopener noreferrer"><FaGitlab /></a>
                        <a href="mailto:yogiearifin@yahoo.co.id"><AiOutlineMail /></a>
                    </h1>
                </Col>
            </Row>
        </>
    )
}

export default Footer