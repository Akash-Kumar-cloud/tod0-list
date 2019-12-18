import React, { Component } from 'react';
import Todos from './Todos';
import './App.css';
import AddToDo from './AddToDo';
import uuid from 'uuid';

class App extends Component {
  state = {
    todos : [
      {
        id : uuid.v4(),
        title : 'Three Mistake of my life',
        completed : false
      },
      {
        id : uuid.v4(),
        title : 'Code Sleep Eat Repeat',
        completed : true
      },
      {
        id : uuid.v4(),
        title : 'Untold Story of NIT Calicut',
        completed : false
      }
    ]
  }

  markComplete = (id) =>{
    this.setState({
      todos : this.state.todos.map(todo =>{
        if(todo.id===id){
          todo.completed=!todo.completed
        }
        return todo;
      })
    });
  }

  getDelete = (id) =>{
    this.setState({
      todos : [...this.state.todos.filter(todo => todo.id!==id)]
    });
  }

  addTodo = (title) =>{
    console.log(title);
    const newTodo = {
      id : uuid.v4(),
      title : title,
      completed : false
    }
    this.setState({ todos : [...this.state.todos, newTodo]});
  }
  render(){
    return (
      <div className="App">
        <Todos todos = {this.state.todos} markComplete={this.markComplete} getDelete={this.getDelete}/>
        <AddToDo addTodo={this.addTodo}/>
      </div>
    );
  }
 
}

export default App;
