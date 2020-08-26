import React from "react"
import { Row, Col } from 'reactstrap';
import "../assets/styles/footer.scss"
import { FaGithub, FaGitlab } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from 'react-router-dom'

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
                        <Link to="https://github.com/yogiearifin"><FaGithub /></Link>
                        <Link to="https://gitlab.com/yogiearifin"><FaGitlab /></Link>
                        <a href="mailto:yogiearifin@yahoo.co.id"><AiOutlineMail /></a>
                    </h1>
                </Col>
            </Row>
        </>
    )
}

export default Footer