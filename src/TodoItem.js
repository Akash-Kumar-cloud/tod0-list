import React, { Component } from 'react';

class TodoItem extends Component{
    getStyle = () =>{
        return {
            textAlign : 'left',
            width :'30%',
            background : '#f4f4f4',
            padding : '10px',
            margin : '8px',
            borderBottom : '1px #ccc',
            border : '20px #33C4D9',
            textDecoration : this.props.todo.completed ? 'line-through' : 'none'
        }
       
    }
    render(){
        const {id,title} = this.props.todo;
        return (
           <center><div style={this.getStyle()}>
                
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>{' '}
                    {title}
                    <button style={btnStyle} onClick={this.props.getDelete.bind(this,id)}>X</button>
                </p>
            </div>
            </center>
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