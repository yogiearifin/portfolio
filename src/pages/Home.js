import React from "react";
import "../App.css";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Testimony from "../components/Testimony";

const Home = () => {
  return (
    <>
      <Intro />
      <Projects />
      <Testimony />
    </>
  );
};

export default Home;
