import React, { Component } from 'react';

class TodoItem extends Component{
    getStyle = () =>{
        return {
            textDecoration : this.props.todo.completed ? 'line-through' : 'none'
        }
       
    }
    render(){
        const {id,title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>{' '}
                    {title}
                    <button style={btnStyle} onClick={this.props.getDelete.bind(this,id)}>X</button>
                </p>
            </div>
        )
    }
}
const btnStyle = {
    background : '#ff0000',
    color : '#fff',
    border : 'none',
    padding : '5px 10px',
    borderRadius : '50%',
    cursor : 'pointer',
    float : 'right'
}
export default TodoItem;