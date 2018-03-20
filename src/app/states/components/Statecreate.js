
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export default class Statecreate extends PureComponent {
    constructor(props) {
        super(props);
        
        this.state={
            stateDetails:{
                code:'',
                name:''
            }
        }
        this.changeValue = this.changeValue.bind(this);

        
    }
    
    componentWillMount() {
        
    }

    changeValue = (e) => {
        const { value, name } = e.target;

        // let mystate = this.props.viewState || [];

        this.state.stateDetails = Object.assign({}, this.state.stateDetails , {[name]: value}) 

        // this.props.updateState(mystate);

        // this.setState({
        //     stateView : Object.assign({}, this.state.stateView , {[name]: value}) 
        // });
    }

    saveState= ()=>{
        this.props.saveNewDetails(this.state.stateDetails);
        alert("Created successfully");
        
    }
    
    render() {
        // const { id, code, name } = this.props.viewState;
        return (
            <div>
                <table className="stateView">
                    <th>Create New State</th>
                    <th></th>
                    <tr>
                        <td>State Name:</td>
                        <td>
                            <input name="name" type="text" required
                            onChange= {(e) => this.changeValue(e)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>State Code:</td>
                        <td>
                            <input name="code" type="text" required
                            onChange= {(e) => this.changeValue(e)}/>
                        </td>
                    </tr>
                </table>
                <center>
                    <button className="button" style={{background: '#88427c'}} onClick={this.saveState}> 
                            Submit 
                    </button>
                </center>
            </div>
        )
    }
} 


Statecreate.defaultProps = {
    
}

Statecreate.propTypes = {
    
}