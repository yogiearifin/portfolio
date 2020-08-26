import React from 'react';
import '../App.css';
import Header from "../layouts/header"
import Intro from "../components/Intro"
import Projects from "../components/Projects"
import Testimony from "../components/Testimony"
import Footer from "../layouts/footer"

const Home = () => {
  return (
    <>
      <Header />
      <Intro />
      <Projects />
      <Testimony />
      <Footer />
    </>
  );
}

export default Home;
