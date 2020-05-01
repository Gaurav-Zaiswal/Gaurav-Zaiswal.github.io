import React, { Component } from 'react';
// import { render } from '@testing-library/react';
import {List, ListItem, ListItemContent } from 'react-mdl';
import { Link } from "react-router-dom";



class Resume extends Component{
    render(){
        return(
            <div className="resume-container">
                {/* <!-- section-aoutme --> */}

                <section id="section-aboutme" className="aboutme-grid">
                    <img 
                    src="./images/undraw_Hello_qnas.svg" 
                    alt=""
                    />
                    <div class="content-wrap">
                        <h4>Gaurav Jaiswal</h4>
                                <p>I am a young energetic <strong>Student</strong>, currently, pursuing
                            my Bachelor's degree (2017 AD - 2021 AD) in Software Engineering at Nepal College of Information Technology (affiliated to 
                            <strong> Pokhara University</strong>).</p>   
                    </div>
                </section>

{/* <!-- section-Experience  --> */}
<section id="section-exp" class="exp-grid">
    <img
     
    src="https://image.freepik.com/free-vector/group-people-working-together_52683-28615.jpg" 
 
    alt=""
    />
    <div class="content-wrap">
        <h4>Experience</h4>
                <p>I have done several personal projects of various domains, you can find them 
                <a 
                style={{textDecoration: 'none'}}
                href="https://github.com/gaurav-zaiswal"> here</a>.
                Overall, I have working experience on following fields: 
            </p>
        <List className="exp-list">
            <ListItem>
                <ListItemContent className='experience-list'>
                    <i className="fas fa-quidditch" />UI Design
                </ListItemContent>
            </ListItem>

            <ListItem>
                <ListItemContent className='experience-list'>
                    <i className="fas fa-database" /><span style={{fontWeight: 'bold'}}>Backend Design</span>
                </ListItemContent>
            </ListItem>

            <ListItem>
                <ListItemContent className='experience-list'>
                    <i className="fas fa-file-code" /><span style={{fontWeight: 'bold'}}>Frontend Design</span>
                </ListItemContent>
            </ListItem>

            <ListItem>
                <ListItemContent className='experience-list'>
                    <i className="fab fa-searchengin" />Web Scrapping
                </ListItemContent>
            </ListItem>

            <ListItem>
                <ListItemContent className='experience-list'>
                    <i className="fas fa-link" /><span style={{fontWeight: 'bold'}}>Blockchain Design</span>
                </ListItemContent>
            </ListItem>
        </List>
    </div>
</section>


{/* <!-- section-Education  --> */}
<section id="section-edu" class="edu-grid">
    <img
    src="https://media.istockphoto.com/vectors/book-festival-concept-a-group-of-tiny-people-reading-a-huge-open-book-vector-id1058389100?k=6&m=1058389100&s=612x612&w=0&h=FG9EgbrkTKfKMX_Yj7hmjtsegdmSjJENFos5e8O8Djw=" 
    alt="educaton"
    />
    <div class="education-grid">
        <h4>Education</h4>
        {/* <h6 class="level">College <span style={{fontSize: "10px"}}>(2017 AD - 2021 AD)</span></h6>
        <div>
            <p class="institute">Nepal College of Information Technology, Lalitpur, Nepal.</p>
            <ul>
                <li>Bachelor of Engineering in Software Engineering</li>
                <li>Affiliated to Pokhara University</li>
            </ul>
        </div>
        <h6 class="level">High School</h6>
        <div>
            <p class="institute">Rajarshi Janak Higher Secondary Residential School, Janakpurdham, Nepal.</p>
            <ul>
                <li>Major in Science</li>
            </ul>
        </div>
        <h6 class="level">School</h6>
        <div>
            <p class="institute">Annapurna Secondary Residential School, Janakpurdham, Nepal.</p>
        </div> */}

        <ul>
            <h6 className="level"><li>College<span style={{fontSize: "10px"}}> <strong>(2017 AD - 2021 AD)</strong></span>:</li></h6>
            <ul>
                <li class="institute">Nepal College of Information Technology, Lalitpur, Nepal.</li>
                <ul>
                    <li>Affiliated to <strong>Pokhara University</strong></li>
                    <li>Bachelor of Engineering in Software Engineering</li>    
                </ul>
            </ul>
            <h6 className="level"><li>High School:</li></h6>
            <ul>
                <li class="institute">Rajarshi Janak Higher Secondary Residential School, Janakpurdham, Nepal.</li>
                <ul>
                    <li>Major in <strong>Science</strong></li>
                </ul>
            </ul>
            <h6 className="level"><li>School:</li></h6>
            <ul>
                <li class="institute">Annapurna Secondary Residential School, Janakpurdham, Nepal.</li>
            </ul>
        </ul>
    </div>
</section>


{/* <!-- section-more known as section-d --> */}

<section id="section-more" class="flex">
    <img
    class="resume-illustration"
    src="./images/undraw_people_search_wctu.svg" 
    alt=""
    />

    <div class="content-wrap">
        <h4>Something's missing?</h4>
            <p>In case, you are looking for something more or you want to know more about me, please, 
                feel free to contact me.</p>  
            <Link to="/contact">
                <div class="button">Contact me</div>
            </Link>
    </div>
</section>    
            </div>
        )
    };
}

export default Resume;