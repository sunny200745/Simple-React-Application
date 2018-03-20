
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export default class StateEdit extends PureComponent {
    constructor(props) {
        super(props);

        this.changeValue = this.changeValue.bind(this);

        
    }
    
    componentWillMount() {
        let id = this.props.match.params.id;
        this.props.fetchStateById(id);
    }

    changeValue = (e) => {
        const { value, name } = e.target;

        let mystate = this.props.viewState;

        mystate = Object.assign({}, mystate , {[name]: value}) 

        this.props.updateState(mystate);

    }

    saveState= ()=>{
        this.props.saveStateDetails(this.props.viewState);
        alert("updated successfully");
        
    }
    
    render() {
        const { id, code, name } = this.props.viewState;
        return (
            <div>
                <table className="stateView">
                    <th>Name</th>
                    <th>Details</th>
                    <tr>
                        <td>State ID:</td>
                        <td>{id}</td>
                    </tr>
                    <tr>
                        <td>State Name:</td>
                        <td>
                            <input name="name" type="text" value={name}
                            onChange= {(e) => this.changeValue(e)} required/>
                        </td>
                    </tr>
                    <tr>
                        <td>State Code:</td>
                        <td>
                            <input name="code" type="text" value={code}
                            onChange= {(e) => this.changeValue(e)} required/>
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


StateEdit.defaultProps = {
    
}

StateEdit.propTypes = {
    
}