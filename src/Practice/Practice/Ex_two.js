import React, { Component } from 'react'

export default class Ex_two extends Component {
    constructor(props){
        super(props);
        this.state = ({ count : 0 })

    }
    incCount = () => {
        this.setState({count: this.state.count + 1})
    }
    //componentWillMount(){
        
   // }
    render() {
       let countVal = this.state.count;
        console.log(countVal);   
        return (
            <div>
                <button onclick={this.incCount}>Increase Count</button>
        
            </div>
        )
    }
}
