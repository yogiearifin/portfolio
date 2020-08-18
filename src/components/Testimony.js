import React from "react"
import { useSelector } from 'react-redux';
import {  Row, Col} from 'reactstrap';
import 'swiper/swiper-bundle.css';
import 'swiper/swiper.scss';
import "../assets/styles/testimony.scss"
import 'swiper/components/effect-flip/effect-flip.scss'

const Testimony = () => {
    const cards = useSelector(state => state.testi.cards)

    return(
        <React.Fragment>
            <h1 className="testimony-head">What they say about Yogie</h1>
            <Col className="testimony">
                {cards && cards.map (cards => 
                    <Row className="testimony-row">
                        <Col className="testimony-pic">
                            <img src={cards.picture} alt={cards.id} />
                        </Col>
                        <Col className="testimony-text">
                            <h2>{cards.name}</h2>
                            <p>{cards.testi}</p>
                        </Col>
                    </Row>
                )}
            </Col>
        </React.Fragment>
    )
}

export default Testimony
