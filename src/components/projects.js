import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, 
    CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
// import { render } from '@testing-library/react';


class Project extends Component{
    constructor(props){
        super(props)
        this.state = { activeTab: 0 };     // ref: https://tleunen.github.io/react-mdl/components/tabs/ 
    }

    
    toogleProjectTabs(){ 
        // toogle among projects tabs based on activeTab value 
        if (this.state.activeTab === 0){

            // web related projects
            return (
                <div className="projects-list">
                    {/* project1 */}
                    <div className="project-card" styles={{marginBottom: '120%'}}>
                        <Card  shadow={4}>
                            <CardTitle style={{color: '#202020', height: '140px', 
                                background: 'url() center / cover'}}
                                >     
                            </CardTitle>

                            <CardText>
                                <h4><center>e-Commerce</center></h4>
                                An e-commerce website build using HTML, CSS, Bootstrap, Django, 
                                and Sqlite3
                            </CardText>
                            <CardActions border>
                                
                            <form style={{display: "inline"}} action="https://github.com/Gaurav-Zaiswal/ecomb" method="get">
                                <Button colored >GitHub</Button>
                            </form>
                                {/* <Button colored ripple >GitHub</Button> */}
                                
                                <Button colored ripple>Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>


                    {/* project 2*/}
                    <div className="project-card">
                        <Card  shadow={4}>
                            <CardTitle style={{color: '#202020', height: '140px', 
                            background: 'url() center / cover'}}
                            ></CardTitle>
                                <CardText>
                                    <h4><center>Polling App</center></h4>
                                    A pollig website build using HTML, CSS, Django, 
                                and Sqlite3
                                </CardText>
                                <CardActions border>
                                <form style={{display: "inline"}} action="https://github.com/Gaurav-Zaiswal/mysite" method="get">
                                    <Button colored >GitHub</Button>
                                </form>
                                    <Button colored ripple>Demo</Button>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                        </Card> 
                    </div>
                   

                    {/* project 3 */}
                    <div className="project-card">
                        <Card className="project-card" shadow={4}>
                            <CardTitle style={{color: '#202020', height: '140px', 
                            background: 'url() center / cover'}}
                            ></CardTitle>
                                <CardText>
                                    <h4><center>Snippet Highlighting</center></h4>
                                    RESTAPI for syntax Highlighting build in using Django, Django rest_framework, 
                                and Sqlite3
                                </CardText>
                                <CardActions border>
                                <form style={{display: "inline"}} action="https://github.com/Gaurav-Zaiswal/Snippet-RESTAPI" method="get">
                                    <Button colored >GitHub</Button>
                                </form>
                                    <Button colored ipple>Demo</Button>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                        </Card>
                    </div>
                    
                </div>
            )
        }

        if (this.state.activeTab === 1){
            return (
                 <div className="projects-list">
                    {/* project1 */}
                    <div className="project-scrapping-card1">
                        <Card  shadow={4} >
                            <CardTitle style={{color: '#202020', height: '140px', 
                            background: 'url() center / cover'}}
                            ></CardTitle>
                                <CardText>
                                    <h4><center>Movie Rating</center></h4>
                                    Python script which scraps Imdb website to get Movie name, release date, and it's ratings.
                                </CardText>
                                <CardActions border>
                                <form style={{display: "inline"}} action="https://github.com/Gaurav-Zaiswal/WebScraping_IMDb_ratings" method="get">
                                    <Button colored >GitHub</Button>
                                </form>
                                    <Button colored ripple>Demo</Button>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                        </Card>
                    </div>
                </div>
            )
        }

        if (this.state.activeTab === 2){
            return (
                <div>
                    {/* <p>this tab contains other projects</p> */}
                </div>
            )
        }
    }

    render(){
        return(
            <div className="projects-tabs">
                {/* initially tabid is 0 which is set for activetab, now change the activetab value by its tabid, 
                ripple is a css effect */}
                <Tabs
                style={{ position: 'sticky', top:'0', zIndex: '2', background: '#fff'}}
                activeTab={this.state.activeTab} 
                onChange={(tabId) => this.setState({ activeTab: tabId })}
                ripple
                >
                    <Tab>Web</Tab>
                    <Tab>Web Scrapping</Tab>
                    <Tab>Other</Tab>
                </Tabs>

                <section className="projects-grid">
                    <Grid>
                        <Cell col={12}>
                          {this.toogleProjectTabs()}
                        </Cell>
                    </Grid>

                </section>
            </div>
        )
    };
}

export default Project;