import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import React from 'react';
import "./Todo.css"

function Todo(props) {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemText primary={props.todo} secondary="Dummy dealine ⏰" />
      </ListItem>
    </List >
  );
}

export default Todo;