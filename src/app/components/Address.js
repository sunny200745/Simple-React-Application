
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Address extends Component {
    constructor(props) {
        super(props);

       
    }
    
    componentDidMount(props) {
        
    }

    render() {
        return (
            <div id="address" style={{textAlign: 'center', margin: 'auto', width: '500px'}}> 
                        <b><u>Head Office Address:</u></b><br />
                            {this.props.headOffice.street}<br/>
                            {this.props.headOffice.state}<br/>
                            {this.props.headOffice.city}<br/>
                            {this.props.headOffice.pincode}<br/>
                            {this.props.headOffice.phoneNumber}<br /><br />

                        <b><u>Branch Office Address:</u></b><br />
                            {this.props.branchOffice.street}<br/>
                            {this.props.branchOffice.state}<br/>
                            {this.props.branchOffice.city}<br/>
                            {this.props.branchOffice.pincode}<br/>
                            {this.props.branchOffice.phoneNumber}

            </div>
        )
    }
} 


Address.defaultProps = {
    
}

Address.propTypes = {
    
}