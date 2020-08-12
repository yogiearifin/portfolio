import React from 'react';
import './App.css';
import SwiperCore, { Navigation, EffectCube, Keyboard} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';
import 'swiper/swiper.scss';
import Header from "./layouts/header"
import Intro from "./components/Intro"
import Projects from "./components/Projects"

function App() {
  SwiperCore.use([Navigation, EffectCube, Keyboard]);
  return (
    <>
    <Header />
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      effect="cube"
      navigation
      keyboard
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      >
      <SwiperSlide><Intro /></SwiperSlide>
      <SwiperSlide><Projects /></SwiperSlide>
      </Swiper>
    </>
  );
}

export default App;
