import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class AddToDo extends Component{
    state={
        title : ''
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title : ''});
    }

    onChange = (e) => this.setState({[e.target.name]:e.target.value});
    

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <AppBar position="static">
        <Toolbar>
          <IconButton edge="start"  color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            To Do List
          </Typography>
        </Toolbar>
      </AppBar>
                <TextField id="standard-basic" type="text" name="title" label="List Name" value={this.state.title} onChange={this.onChange} />
                <Fab size="medium" color="secondary" aria-label="add" type="submit">
                 <AddIcon />
                </Fab>
            </form>
        )
    }
}
export default AddToDo;