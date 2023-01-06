import React, {Component} from "react";
export default class Ccomponent extends Component{
    constructor(props){
        super(props);
        this.state= {
            name : "Click Here!"
        }
        this.handleClick = this.handleClick.bind(this);

    }
    handleClick(){
        this.setState({
            name: 'Bon Apetito!'
        }
        )

    }
    render(){
        return(
            <div>
                <h1> {this.state.name}</h1>
                <button onClick={this.handleClick}>Surprice</button>
            </div>
        );
    }
}
Ccomponent.defaultProps = {name: 'Click There!'}