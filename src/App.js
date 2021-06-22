import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routers from "./router/router";
import { Container } from "reactstrap";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Container className="container">
            <Routers />
          </Container>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
