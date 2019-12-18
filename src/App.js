import React, { Component } from 'react';
import Todos from './Todos';
import './App.css';
import AddToDo from './AddToDo';

class App extends Component {
  state = {
    todos : [
      {
        id : 1,
        title : 'Three Mistake of my life',
        completed : false
      },
      {
        id : 2,
        title : 'Code Sleep Eat Repeat',
        completed : true
      },
      {
        id : 3,
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
  render(){
    return (
      <div className="App">
        <Todos todos = {this.state.todos} markComplete={this.markComplete} getDelete={this.getDelete}/>
        <AddToDo />
      </div>
    );
  }
 
}

export default App;
