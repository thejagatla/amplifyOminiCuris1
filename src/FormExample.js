import React from 'react';
import axios from 'axios';
   
export default class FormExample extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
        name: '',
        age:''
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      }




      handleSubmit(event) {
          //alert(this.state.name);
       //  alert(this.state);
         console.log({values:this.state.name,ages:this.state.age});
        // axios.post('/create',{values:this.state.name,ages:this.state.age})
        // .then(function(response){
        //   console.log(response);
        // })
      }

      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
            </label>
            <label>
              Age:
              <input type="text" value={this.state.age} onChange={e => this.setState({ age: e.target.value })} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
    }
