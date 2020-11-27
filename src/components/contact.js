import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Profile from './images/portfolio pic.png';
import Email from './images/email-icon.png';
import Github from './images/github-icon.png';
import Linkedin from './images/linkedin-icon.png';
import Instagram from './images/instagram.png';
import '../App.css';


class Contact extends Component {
    render() {
        return(
    
        <div className="contact-grid">
                <h2>CONTACT ME</h2>
              
    
                <div className="contact-list">
       

                  <div className="banner-contact">
                      <a className="icon-name" href="#">
                            <img className="icon" src={Email} alt="email-icon"/>
                            <p className="link-text">diwawardak1@gmail.com</p>
                        </a>
                        <a className="icon-name" href="https://linkedin.com/in/diwawardak">
                            <img className="icon" src={Linkedin} alt="linkedin-icon"/>
                            <p className="link-text">https://linkedin.com/in/diwawardak</p>
                        </a>
                        <a className="icon-name" href="https://github.com/Diwawardak">
                            <img className="icon" src={Github} alt="github-icon"/>
                            <p className="link-text">https://github.com/Diwawardak</p>
                        </a>
                        <a className="icon-name" href="https://www.instagram.com/dwardakart/">
                            <img className="icon" src={Instagram} alt="instagram-icon"/>
                            <p className="link-text">@dwardakart</p>
                        </a>
                     </div>
                  </div>
               </div>
                   
        )
    }
}
export default Contact;