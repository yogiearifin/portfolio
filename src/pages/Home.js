import React from 'react';
import '../App.css';
import Header from "../layouts/header"
import Intro from "../components/Intro"
import Projects from "../components/Projects"
import Testimony from "../components/Testimony"

const Home = () => {
  return (
    <>
      <Header />
      <Intro />
      <Projects />
      <Testimony />
    </>
  );
}

export default Home;
