import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div >
                <div style={{display:'flex',justifyContent:'center'}}>
                <label style={{display: 'flex', justifyContent: 'center', fontSize: '50px', fontStyle: 'italic'}}>{this.props.appName}</label>
                <img src="/assets/sunny.png" style={{height: '60px',width: '60px',marginTop:'5px',marginLeft:'10px'}} />
                </div>
                
                <header style={{display: 'flex', justifyContent:'space-evenly', backgroundColor:'#6c1d5f',color:'white'}}>
                <NavLink  to="/"  exact className="button" activeClassName="success" >
                     Home
                </NavLink> 
                <NavLink to="/about"  exact className="button" activeClassName="success" >
                     About
                </NavLink> 
                <NavLink to="/contact"  exact className="button" activeClassName="success" >
                     Contact
                </NavLink> 
                <NavLink to="/statelist"  exact className="button" activeClassName="success" >
                     List of States
                </NavLink>
                <NavLink to="/statelist/create"  exact className="button" activeClassName="success" >
                     Create a new State
                </NavLink>  
                </header>
            </div>
        )
    }
}