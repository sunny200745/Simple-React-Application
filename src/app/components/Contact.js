
import React, {Component} from "react";
import PropTypes from "prop-types";
import Address from "./Address";

export default class Contact extends Component {
    constructor(props) {
        super(props);

        this.state={
            headOffice:{
                street:'612, BPTP Park Centra',
                state:'Haryana',
                city:'Gurugram',
                pincode:'122001',
                phoneNumber: '+91-9557632784'
            },
            branchOffice:{
                street:'3rd Floor wing A, Indiqube Alpha, Panathur junction, Marathahalli -Sarjapur outer ring road',
                state:'Karnataka',
                city:'Bengaluru',
                pincode:'560103',
                phoneNumber: '+91-9557632784'
            }
        }
    } 
    componentDidMount() {
        
    }
    
    render() {
        return (
            <div> 
            <h2 style={{display: 'flex', justifyContent: 'center'}}>Contact Details</h2>
            <Address headOffice={this.state.headOffice} branchOffice={this.state.branchOffice}/>
            </div>
        )
    }
} 


Contact.defaultProps = {
    
}

Contact.propTypes = {
    
}