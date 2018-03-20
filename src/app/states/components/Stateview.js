import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import {NavLink} from 'react-router-dom';
// import BootstrapTable from 'reactjs-bootstrap-table';

export default class Stateview extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.fetchStateById(id);
        console.log("state: "+this.props.viewState.name);
    }

    render() {
        let state = this.props.viewState || null;
        let status = this.props.status;
        let error = this.props.error;

        
        return (
            <div id="stateView">
                <table className="stateView">
                    <th>State Details</th>
                    <th></th>
                    <tr>
                        <td>State ID:</td>
                        <td>{state.id}</td>
                    </tr>
                    <tr>
                        <td>State Name:</td>
                        <td>{state.name}</td>
                    </tr>
                    <tr>
                        <td>State Code:</td>
                        <td>{state.code}</td>
                    </tr>
                </table>
            </div>
              
        )
    }
}
