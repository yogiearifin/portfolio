import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/styles/header.scss"
import { Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <>
            <Col className="header">
                <Row className="header-row">
                    <Col className="header-name">
                        <Link to="/"><h1>YA</h1></Link>
                    </Col>
                    <Col className="header-button">
                        <Button href="/#projects">
                            Project
                        </Button>
                        <Button href="/#testimonies">
                            Testimonies
                        </Button>
                        <Button className="resume" href="https://drive.google.com/file/d/11bH-x69arN59nDrYLC9SUtkm24ouSRaA/view" target="_blank" rel="noopener noreferrer">
                            Resume
                        </Button>
                    </Col>
                </Row>
            </Col>
        </>
    )
}

export default Header;