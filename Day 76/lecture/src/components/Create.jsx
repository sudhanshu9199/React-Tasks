import React, { useState } from "react";
import {nanoid} from 'nanoid';

const Create = (props) => {
    const todos = props.todos;
    const settodos = props.settodos;
      const [title, settitle] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();

    const newTodo = {
      id: nanoid(),
      title: title,
      isCompleted: false,
    };
    console.log(newTodo);

    // let store = [...todos];
    // store.push(newTodo);
    // settodos(store); // or
    settodos([...todos, newTodo]);

    settitle("");
  };
  return (
    <>
      <h1>Create Todos</h1>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="text"
          placeholder="task name"
        />
        <br /> <br />
        <button>Create Todo</button>
      </form>
    </>
  );
};

export default Create;
