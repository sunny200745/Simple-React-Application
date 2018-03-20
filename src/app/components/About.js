
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class About extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                    <div style={{padding: '20px'}}>
                    <center><h1><u>Profile</u></h1></center>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div>
                            <img src="/assets/sunny.png"
                                style={{
                                    height: '250px',
                                    width: '250px',
                                }} />
                        </div>
                        <div style={{paddingLeft: '20px', width: '800px'}}>
                        <div><b><u>Designation:</u></b> Senior Consultant</div>
                        <div>
                            Sunny has multiple years of professional experience in end-to-end development of software products from requirement analysis to system study, designing, coding, testing(sanity) and debugging. <br/><br/>Sunny has worked in all the phases of software development life cycle and has worked in the capacity of developer & consultant. 
                            He has an understanding of agile methodologies and practices Test Driven Development (TDD).
                            He has knowledge on Javascript(core and advanced) also has in-depth understanding of design patterns like MVC, MVVM, MVW with extensive uasge of framework like AngularJS, KnockoutJS, JMVC, Backbone. He also has hands on experience in front end development using Javascript altogether with HTML5, CSS3 along with responsive css Twitter-Bootstrap.
                        </div>
                        </div>
                        </div>
                    </div>
            </div>
        )
    }
}


About.defaultProps = {

}

About.propTypes = {

}