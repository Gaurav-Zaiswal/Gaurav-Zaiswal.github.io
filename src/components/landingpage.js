import React, { Component } from 'react';
// import { Footer, FooterSection, FooterLinkList } from 'react-mdl';
import Typer from './typewritereffect';
// import Resume from './resume';
// import MainFooter from './main-footer';



class Landing extends Component{
    render(){
        return(
            
            <div className="landing-container">
                <img src="./images/mypic.jpg" alt="Gaurav's avatar"/>
                <div class="name">
                    <span class="fname">Gaurav</span>
                    <span class="lname">Jaiswal</span>

                    {/* span for typer  */}
                    <span className="typer-text">
                        <Typer
                            dataText={["Student","Web Developer", "Python Developer", "React Developer"]} 
                        />
                    </span>
                </div>

               
            </div>
            
        )
    };
}

export default Landing;
