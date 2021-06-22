import React from "react";
import { Route, Switch, Router} from "react-router-dom";
import history from "./history";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Header from "../layouts/header";
import Footer from "../layouts/footer";

const Routers = () => {
  return (
    <>
      <Header />
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects/:name" exact component={Projects} />
          <Route path="*" component={Home} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
};

export default Routers;
