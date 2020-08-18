import React from 'react';
import { Provider } from "react-redux"
import store from "./store"
import './App.css';
import Header from "./layouts/header"
import Intro from "./components/Intro"
import Projects from "./components/Projects"
import Testimony from "./components/Testimony"

function App() {
  return (
    <>
    <Provider store={store}>
      <Header />
      <Intro />
      <Projects />
      <Testimony />
    </Provider>
    </>
  );
}

export default App;
