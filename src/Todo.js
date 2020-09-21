import { Button, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import React from 'react';
import "./Todo.css"
import db from './firebase';

function Todo(props) {

  const onDeleteTodo = (id) => {
    db.collection('todos').doc(id).delete();
  }

  return (
    <List className="todo__list">
      <ListItem>
        <ListItemText primary={props.todo.todo} secondary="Dummy dealine ⏰" />
      </ListItem>
      <Button onClick={() => onDeleteTodo(props.todo.id)}>❌ DELETE ME</Button>
    </List >
  );
}

export default Todo;