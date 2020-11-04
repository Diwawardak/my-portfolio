import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Profile from './images/portfolio pic.png';
import Email from './images/email-icon.png'
import Github from './images/github-icon.png'
import Linkedin from './images/linkedin-icon.png'


class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}></Cell>
                    <img src={Profile} alt="profile-pic" className="profile-pic"/>
                    <div className="banner-text">
                        <h1>Junior Software Developer</h1>
                    
                    <hr/>

                    <p>HTML/CSS  |  JavaScript  |  React  |  NodeJS  |  Express  |  SQL  |  MongoDB </p>
                    
                    <div className="social-links">
                        <a href="https://linkedin.com/in/diwawardak">
                            <img className="icon" src={Linkedin} alt="linkedin-icon"/>
                        </a>
                        <a href="https://github.com/Diwawardak">
                            <img className="icon" src={Github} alt="github-icon"/>
                        </a>
                        <a href="#">
                            <img className="icon" src={Email} alt="email-icon"/>
                        </a>
                    </div>
                    </div>
                </Grid>
            </div>
        )
    }
}
export default Landing;