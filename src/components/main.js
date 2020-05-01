// here we will have no state so we will use functional component

import React from "react";
import { Route, Switch } from "react-router-dom";
import landingPage from "./landingpage";
// import Aboutme from "./aboutme";
import Contactme from "./contact";
import Myprojects from "./projects";
import Myresume from "./resume";


const Main = () => (
    <Switch>
        {/* default path ma matrai exact lekhanu parxa */}
        <Route exact path ="/" component={ landingPage } />
        {/* <Route exact path ="/about" component={ Aboutme } /> */}
        <Route exact path ="/contact" component={ Contactme } />
        <Route exact path ="/projects" component={ Myprojects } />
        <Route exact path ="/resume" component={ Myresume } />
    </Switch>
)

export default Main;