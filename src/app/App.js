import React, {Component} from "react";
import Header from "./components/Header";
 
export class App extends Component {
    
    render() {
        return(
            <div>
                 <Header appName="Assignment by Sunny S"/> 
                 <div>
                    {this.props.children}
                </div>
            </div>
        )
    } 
    
}