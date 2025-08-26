import React, { useState } from "react";

const Read = (props) => {

    const todos = props.todos;
    const settodos = props.settodos;

  const renderTodos = todos.map((todo) => {
    return <li key={todo.id}>{todo.title}</li>;
  });
  return (
    <>
      <h1>Data Rendering</h1>
      <ol>{renderTodos}</ol>
    </>
  );
};

export default Read;
