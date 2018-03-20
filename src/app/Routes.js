// route configuration
import React from "react";
import {
       BrowserRouter as Router,  
       Route, 
        Switch,
        } from "react-router-dom";   
import {App} 
        from "./App";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Statelist from "./states/containers/Statelist";
import StateView from "./states/containers/Stateview";
import StateEdit from "./states/containers/StateEdit";
import Statecreate from "./states/containers/Statecreate";

export default function Routes(props) {
    return (
        <Router>
            <App>
                <Switch>
                    <Route path="/" exact  component={Home} />
                    <Route path="/about" exact  component={About} />
                    <Route path="/contact" exact  component={Contact} />
                    <Route path="/statelist" exact  component={Statelist} />
                    <Route path="/statelist/view/:id" exact  component={StateView} />
                    <Route path="/statelist/edit/:id" exact  component={StateEdit} />
                    <Route path="/statelist/create" exact component={Statecreate}/>
                </Switch>
            </App>
        </Router>
    )
}
