// Day 76 React lecture start
import { useState } from "react"
import {nanoid} from 'nanoid';

const App = () => {
  const [todos, settodos] = useState([
    {id: 1, title: 'todo kaam kar', isCompleted: false},
  ]);

  console.log(todos);
  

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

    settitle('');
  }

  const renderTodos = todos.map(todo => {
    return <li key={todo.id}>{todo.title}</li>
  });
  return (
    <>
    <h1>Create Todos</h1>
    <form onClick={submitHandler}>
      <input onChange={(e) => settitle(e.target.value)} value={title} type="text" placeholder="task name"/>

      <br /> <br />
      
      <button>Create Todo</button>
    </form>
    <hr />
    <h1>Data Rendering</h1>
    <ol>{renderTodos}</ol>
    </>
  )
}

export default App