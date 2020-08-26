import React from "react"
import { Route, Switch, Router } from "react-router-dom"
import history from './history';
import Home from "../pages/Home"
import Sayembara from "../pages/Sayembara"
import Hackernews from "../pages/Hackernews"

const Routers = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/sayembara" exact component={Sayembara} />
                <Route path="/hackernews" exact component={Hackernews} />
            </Switch>
        </Router>
    )
}

export default Routers