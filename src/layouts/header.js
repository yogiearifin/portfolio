import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/styles/header.scss"
import { Button, Row, Col } from 'reactstrap';


const Header = () => {
    return (
        <>
            <Col className="header">
                <Row className="header-row">
                    <Col className="header-name">
                        <h1>YA</h1>
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