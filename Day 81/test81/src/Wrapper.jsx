import React, {createContext} from 'react'
import { useState } from 'react';

export const todoContext = createContext(null);

const Wrapper = (props) => {
    console.log(props);
    const [todo, settodo] = useState([]);
    
  return (
    // <div className='w-screen h-screen bg-cyan-800 text-cyan-100 text-3xl font-medium'>
    //     {props.children}
    // </div>
    <todoContext.Provider value = {[todo, settodo]}>
        {props.children}
    </todoContext.Provider>
  )
}

export default Wrapper