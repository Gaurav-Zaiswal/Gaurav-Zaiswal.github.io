import React, { Component } from 'react';
import {  List, ListItem, ListItemContent } from 'react-mdl';
// import { render } from '@testing-library/react';
// import MainFooter from './main-footer';



class Contact extends Component{
    render(){
        return(
            <div id="contact-container" className='flex'>
                <img 
                    className="contact-img-flex"
                    src="/images/undraw_High_five_u364.svg" 
                    alt="illustration"
                />

                {/* contact-section */}    
                <div className='contact-sec-flex'>
                    <h2 style ={{textAlign: 'center', marginBottom:'0'}}>Contact Me</h2>
                            {/* <hr/> */}

                    <div className="list-of-contact-details">
                        <List>
                            <ListItem>
                                <ListItemContent className='contact-list'>
                                    <i class="fas fa-phone-square-alt" />(+977) 9816807906
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent className='contact-list'>
                                    <i class="fas fa-envelope" />jr.gaurav2015@gmail.com 
                                </ListItemContent>
                            </ListItem>
                        </List>
                    </div>

                    {/* social-media-links */}
                    <div className="contact-social-link">
                        <h4 style={{fontFamily: 'Anton'}}>Catch me on:</h4>
                        <a href= "https://www.linkedin.com/in/gaurav-jaiswal-b4542815a/" rel="noopener noreferrer" target="_blank">
                            <i class="fab fa-linkedin"></i></a> 
                        <a href= "https://www.facebook.com/gauravzaiswal" rel="noopener noreferrer" target="_blank">
                            <i class="fab fa-facebook"></i></a>
                        <a href= "https://www.instagram.com/gauravzaiswal" rel="noopener noreferrer" target="_blank">
                            <i class="fab fa-instagram"></i></a>
                    </div>
                </div>   
            </div>
        )
    };
}

export default Contact;