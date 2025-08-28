import React from 'react'
import { useState } from 'react'
import '/src/index.css';
import { toast } from 'react-toastify';
const Read = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;

  const DeleteHandler = (id) => {
    console.log(id);
    const filteredTodo = todos.filter((todo) => todo.id !== id);
    settodos(filteredTodo);
    toast.error('Todo deleted!')
  }

  const rendertodos = todos.map(todo => {
    return <li key={todo.id} className='bg-indigo-700 px-5 py-2 text-3xl font-medium text-amber-50 flex justify-between items-center'>{todo.title} <span onClick={() => DeleteHandler(todo.id)} className='bg-red-700 px-5 py-2 text-2xl cursor-pointer active:scale-95'>Delete</span></li>
  })
  return (
    <div className='mr-80'>
      <h1 className='text-6xl font-bold mb-8'>Todos <span className='text-pink-700'>Pending</span> List</h1>
      <ol className='flex flex-col gap-3'>{rendertodos}</ol>
    </div>
  )
}

export default Read