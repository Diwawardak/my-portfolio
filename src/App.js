import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main';
import { Link } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="MY PORTFOLIO" scroll>
            <Navigation>
                {/* <Link to="/aboutme">About Me</Link> */}
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer className="nav-color" title="Title">
            <Navigation>
                {/* <Link to="/aboutme">About Me</Link> */}
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content"/>
            <Main/>
        </Content>
    </Layout>
</div>
    
      );
    }
  }
  

export default App;