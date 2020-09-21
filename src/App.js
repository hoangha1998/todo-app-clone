import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './App.css';
import db from './firebase';
import firebase from 'firebase'
import Todo from './Todo';

function App() {
  const [todos, setTodos] = useState(['Learn English', 'Go to School']);
  const [input, setInput] = useState('');

  // When the app load,  we need to listen to the database and fetch new todos as they get added/removed

  useEffect(() => {
    // this code here ... fires when the app.js loads

    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      // console.log(snapshot.docs.map(doc => doc.data().todo));
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo })))
    })
  }, []);

  const addTodo = (e) => {
    // this will fire off when we click the button
    e.preventDefault(); // will stio the REFRESH

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    console.log('Add Todo');
    setTodos([...todos, input]);
    setInput(''); // lear up the input after clicking add todo button
  }


  return (
    <div className="App">
      <h1>Hello Clever Programmers🚀 !</h1>

      <form>

        <FormControl>
          <InputLabel>✅ Write a Todo</InputLabel>
          <Input value={input} onChange={e => setInput(e.target.value)} />
        </FormControl>

        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add Todo
        </Button>
        {/* <button type="submit" onClick={addTodo} >Add Todo</button> */}
      </form>

      <ul>
        {
          todos.map((item, index) =>
            <Todo key={index} todo={item} />
          )
        }
      </ul>
    </div>
  );
}

export default App;
