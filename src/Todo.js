import { Button, Input, List, ListItem, ListItemAvatar, ListItemText, Modal } from '@material-ui/core';
import React, { useState } from 'react';
import "./Todo.css"
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import { Translate } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const onDeleteTodo = (id) => {
    db.collection('todos').doc(id).delete();
  }

  const updateTodo = (id) => {
    if (!input) {
      setOpen(false);
      return false;
    }
    db.collection('todos').doc(id).set({
      todo: input,
    }, { merge: true });
    setOpen(false);
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <h1>Edit Task</h1>
          <div className="d-flex">
            <Input placeholder={props.todo.todo} value={input} onChange={e => setInput(e.target.value)}></Input>
            <Button onClick={() => updateTodo(props.todo.id)}>Update Todo</Button>
          </div>
        </div>
      </Modal>
      <List className="todo__list">
        <ListItem>
          <ListItemText primary={props.todo.todo} secondary="Dummy dealine ⏰" />
        </ListItem>
        <EditIcon onClick={handleOpen}></EditIcon>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <DeleteForeverIcon onClick={() => onDeleteTodo(props.todo.id)}></DeleteForeverIcon>
      </List >
    </>

  );
}

export default Todo;