import React from "react"
import { useSelector } from 'react-redux';
import { Container, Row, Col} from 'reactstrap';
import "../assets/styles/testimony.scss"

const Testimony = () => {
    const cards = useSelector(state => state.testi.cards)
    return(
        <React.Fragment>
            <Container className="testimony">
                <h1>What they say about Yogie</h1>
                {cards && cards.map (cards => 
                    <Row className="testimony-row">
                        <Col className="testimony-pic">
                            <img src={cards.picture} alt={cards.id} />
                        </Col>
                        <Col className="testimony-text">
                            <a href={cards.link} target="_blank" rel="noopener noreferrer"><h5>{cards.name}</h5></a>
                            <p>{cards.testi}</p>
                        </Col>
                    </Row>
                    )}
            </Container>
        </React.Fragment>
    )
}

export default Testimony
