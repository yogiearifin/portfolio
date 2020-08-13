import React from 'react';
import { Provider } from "react-redux"
import store from "./store"
import './App.css';
import SwiperCore, { Navigation, EffectCube, Keyboard} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';
import 'swiper/swiper.scss';
import Header from "./layouts/header"
import Intro from "./components/Intro"
import Projects from "./components/Projects"
import Testimony from "./components/Testimony"

function App() {
  SwiperCore.use([Navigation, EffectCube, Keyboard]);
  return (
    <>
    <Provider store={store}>
      <Header />
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        effect="cube"
        keyboard
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide><Intro /></SwiperSlide>
        <SwiperSlide><Projects /></SwiperSlide>
        <SwiperSlide><Testimony /></SwiperSlide>
        </Swiper>
      </Provider>
    </>
  );
}

export default App;
