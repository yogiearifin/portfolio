import React from 'react';
import { Provider } from "react-redux"
import store from "./store"
import './App.css';
import { BrowserRouter } from "react-router-dom"
import Routers from "./router/router"

function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
      <Routers />
      </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
