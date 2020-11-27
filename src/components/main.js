import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './Landingpage';
import AboutMe from './Aboutme';
import Contact from './Contact';
import Projects from './Projects';

const Main = () => (
    <Switch>
        <Route exact path="/my-portfolio" component={LandingPage} />
        {/* <Route path="/aboutme" component={AboutMe} /> */}
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
    </Switch>
)

export default Main;