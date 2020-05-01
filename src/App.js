import React from 'react';
import './App.css';
import { Header, Navigation, Layout, Drawer, Content, } from 'react-mdl';
import Main from './components/main';
import MainFooter from './components/main-footer';
import { Link } from "react-router-dom";


function App() {
  return (
<div className="demo-big-content">
    <Layout>
        <Header className="header-color"
            title
            style={{ backgroundColor:'white' }} seamed fixedTabs
            >
            <Navigation style={{ float:'right' }}>
                <Link to="/" style={{ color:'black' }}>Home</Link>
                <Link to="/projects" style={{ color:'black' }}>Recent Projects</Link>
                <Link to="/resume" style={{ color:'black' }}>My resume</Link>
                <Link to="/contact" style={{ color:'black' }}>Contact Me</Link>
            </Navigation>
        </Header>
        
        <Drawer title={
            <img 
            style={{margin: '1em auto 0 -2%'}}
            src="./images/undraw_navigator_a479.svg" 
            alt="Gaurav's avatar"
            />}
            >

            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/projects">Recent Projects</Link>
                <Link to="/resume">My resume</Link>
                <Link to="/contact">Contact Me</Link>
            </Navigation>

            {/* footer for Drawer */}
            {/* <Footer 
                className="drawer-footer"
                size="mini"
                >
                <FooterSection type="middle" >
                    <FooterLinkList style={{fontSize: '35px',}}>
                        <a href= "https://www.linkedin.com/in/gaurav-jaiswal-b4542815a/" rel="noopener noreferrer" target="_blank">
                            <i class="fab fa-linkedin"></i></a> 
                        <a href= "https://www.facebook.com/gauravzaiswal" rel="noopener noreferrer" target="_blank">
                            <i class="fab fa-facebook"></i></a>
                        <a href= "https://www.instagram.com/gauravzaiswal" rel="noopener noreferrer" target="_blank">
                            <i class="fab fa-instagram"></i></a>
                        <a href= "https://www.github.com/gaurav-zaiswal" rel="noopener noreferrer" target="_blank">
                            <i class="fab fa-github"></i></a>
                    </FooterLinkList>
                </FooterSection>
            </Footer> */}
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
        
        <MainFooter />
        
        {/* <Footer 
        size="mini" 
        // style={{backgroundColor: 'white', padding: '0 0 0 1%', color: 'black', opacity: '0.7' }}
        >
            <FooterSection className="main-footer">
                <FooterLinkList>
                    <a href="https://www.github.com/gaurav-zaiswal" rel="noopener noreferrer" target="_blank">
                    GitHub</a>
                    <a href="https://www.instagram.com/gauravzaiswal" rel="noopener noreferrer" target="_blank">
                    Instagram</a>
                    <a href= "https://www.linkedin.com/in/gaurav-jaiswal-b4542815a/" rel="noopener noreferrer" target="_blank">
                    LinkedIn</a>
                </FooterLinkList>
            </FooterSection>
        </Footer> */}
    </Layout>
    
</div>
  );
}

export default App;
