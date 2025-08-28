import React from 'react'
import '/src/index.css';
import Create from './components/Create';
import Read from './components/Read';
import { useState } from 'react';
const App = () => {
  const [todos, settodos] = useState([
    {
      id: 1,
      title: 'God their',
      isComplete: false
    }

  ]);
  return (
    <div className='p-15 flex justify-between'>
      <Create todos={todos} settodos={settodos}/>
      <Read todos={todos} settodos={settodos}/>
    </div>
  )
}

export default App