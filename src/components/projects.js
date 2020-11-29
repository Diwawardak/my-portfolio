import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText  } from 'react-mdl';
import Jidi from './images/Jidi.jpg';
import Amnesia from './images/Amnesia.jpg';
import Calc from './images/Calc.jpg';
import Animation from './images/Animation.png';
import './Projects.css';
import { Link } from 'react-router-dom';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
        } 

        toggleCategories() {

            if (this.state.activeTab === 0){
                return(
                <div className="projects-grid">



                    
                    {/* PROJECT 1 */}
                    <div className="project">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <img src={Jidi} alt="jidi" style={{height: 300, width: 335}}/>
                        <CardTitle>E-commerce Store</CardTitle>
                        <CardText> A Full-stack project using React, Node.js, Express and MSSQL. </CardText>
                    <CardActions border>
                    <Button colored href="https://makereacctwork.herokuapp.com/">Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        {/* <IconButton name="share" /> */}
                    </CardMenu>
                    </Card>
                    </div>


                    {/* PROJECT 2 */}
                    <div className="project">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <img src={Calc} alt="calc-app" style={{height: 300, width: 335}}/>
                        <CardTitle>React Calculator App</CardTitle>
                        <CardText> Calculator app inspired by the iPhone calculator, created using React. </CardText>
                    <CardActions border>
                    <Button colored href="https://diwawardak.github.io/react-calculator/">Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        {/* <IconButton name="share" /> */}
                    </CardMenu>
                    </Card>
                    </div>



                    {/* PROJECT 3 */}
                    <div className="project">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <img src={Amnesia} alt="amnesia-game" style={{height: 300, width: 335}}/>
                        <CardTitle>Amnesia Game</CardTitle>
                        <CardText> This is a text based RPG game I helped create using JavaScript.</CardText>
                    <CardActions border>
                    <Button colored href="https://diwawardak.github.io/amnesia-rpg-game/">Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        {/* <IconButton name="share" /> */}
                    </CardMenu>
                    </Card>
                    </div>


                    {/* PROJECT 4 */}
                    <div className="project">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <img src={Animation} alt="animation-site" style={{height: 300, width: 335}}/>
                        <CardTitle>Animation Portfolio</CardTitle>
                        <CardText> This is an animation portfolio I created using JavaScript, HTML and CSS using my own art.</CardText>
                    <CardActions border>
                    <Button colored href="https://diwawardak.github.io/art/index.html">Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        {/* <IconButton name="share" /> */}
                    </CardMenu>
                    </Card>
                    </div>


                </div>
                )


            } else if(this.state.activeTab === 1) {
                return (
                    <div><h1>Animation Projects</h1></div>
                )
            }
        }


    render() {
        return(
            <div className="projects-grid">
                <h1>PROJECTS</h1> 
                {/* <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Projects</Tab> 
                </Tabs> */}

                    <Grid className="grid">
                        <Cell col={12}>
                            <div className="content"> {this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
            
            
            </div>
        )
    }
}

export default Projects;