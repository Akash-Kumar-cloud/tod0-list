import React, { Component } from 'react';

class AddToDo extends Component{
    state={
        title : ''
    }
   

    onChange = (e) => this.setState({[e.target.name]:e.target.value});

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <input type="text" name="title" value={this.state.title} placeholder="Add List Item" onChange={this.onChange}></input>
                <input type="submit" value="Submit" className="btn"/>
            </form>
        )
    }
}
export default AddToDo;