import React, { useState } from "react";
// import './Read.css'; // global css applyed in this way, it is a behaviour of react.
import style from './Read.module.css'; // simplar as css
const Read = (props) => {
    console.log(style);
    
        const todos = props.todos;
    const settodos = props.settodos;

    let DeleteHandler = (id) => {
        console.log(id);
        const filteredTodo = todos.filter((todo) => todo.id !== id);
        settodos(filteredTodo);
    }



  const renderTodos = todos.map((todo) => {
    return <li key={todo.id}>{todo.title} | <span onClick={() => DeleteHandler(todo.id)}>Delete</span></li>;
  });
  return (
    <>
      <h1 className={style.read_list_heading}>Data Rendering</h1>
      <ol>{renderTodos}</ol>
    </>
  );
};

export default Read;
