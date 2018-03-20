import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import {NavLink} from 'react-router-dom';
// import BootstrapTable from 'reactjs-bootstrap-table';

export default class Statelist extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchStates();
    }

    render() {
        let states = this.props.states || [];
        let status = this.props.status;
        let error = this.props.error;

        if (status) {
            return (
                <div>
                <center>
                    <h2>Loading ... </h2>
                    <img src="/assets/loading.gif" />
                </center>
                </div>
            )
        }

        return (

            
            <div className="statelisttable" style={{display: 'flex', justifyContent: 'center'}} >
                <table>
                    <th>ID</th>
                    <th>name</th>
                    <th>Code</th>
                    <th>View</th>
                    <th>Edit</th>
                    <tbody>
                    {
                        states.map(state => (
                            <tr key={state.id}>
                                <td>{state.id} </td>
                                <td>{state.name} </td>
                                <td>{state.code} </td>
                                <td>
                                    <NavLink className="button" style={{color: '#6c1d5f', padding: '0'}} to={`/statelist/view/${state.id}`}>
                                        View
                                    </NavLink>
                                </td>
                                <td>
                                    <NavLink className="button" style={{color: '#6c1d5f', padding: '0'}} to={`/statelist/edit/${state.id}`}>
                                        Edit
                                    </NavLink>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
                    
              
        )
    }
}


Statelist.defaultProps = {

}

Statelist.propTypes = {

}