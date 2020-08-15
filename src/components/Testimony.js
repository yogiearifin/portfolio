import React from "react"
import { useSelector } from 'react-redux';
import { Container, Row, Col} from 'reactstrap';
import SwiperCore, { Navigation, EffectFlip} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/swiper.scss';
import "../assets/styles/testimony.scss"
import 'swiper/components/effect-flip/effect-flip.scss'

const Testimony = () => {
    const cards = useSelector(state => state.testi.cards)
    SwiperCore.use([ Navigation, EffectFlip ]);

    // window.addEventListener('keydown', (e) => {
    //     if (e.keyCode === 38) {
    //         Swiper.prevEl()
    //     }
    //     if (e.keyCode === 40) {
    //         Swiper.nextEl()
    //     }
    //   });

    return(
        <React.Fragment>
            <h1 className="testimony-head">What they say about Yogie</h1>
            <Container className="testimony">
                <Swiper
                spaceBetween={50}
                slidesPerView={1}
                direction="vertical"
                effect="flip"
                navigation
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                        {cards && cards.map (cards => 
                            <SwiperSlide>
                            <Row className="testimony-row">
                                <Col className="testimony-pic">
                                    <img src={cards.picture} alt={cards.id} />
                                </Col>
                                <Col className="testimony-text">
                                    <h2>{cards.name}</h2>
                                    <p>{cards.testi}</p>
                                </Col>
                            </Row>
                            </SwiperSlide>
                        )}
                </Swiper>
            </Container>
        </React.Fragment>
    )
}

export default Testimony
