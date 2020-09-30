import React, { Component } from 'react'

export default class Ex_one extends Component {
    constructor(){
        super();
        this.state = ({ cities:["hyd","blr","chennai"]});
    }
    render() {
        return (
            <ul>
                {this.state.cities.map(function(city){
                    return <li>{city}</li>
                })}
            </ul>
        )
    }
}
