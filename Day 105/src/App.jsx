import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const App = () => {
  const [add, setadd] = useState(0);
  const [sub, setsub] = useState(99);

  const MYH1 = styled.h1({
    color: "pink",
    fontSize: "90px",
    backgroundColor: "red",
    fontWeight: 700
  });

  const product = useMemo(() => {
    console.log('product runned');
    
    return add * 2;
  }, [add]);
  return (
    <div className='p-2 bg-amber-800 h-screen'>
      <MYH1>Here is GOOD One</MYH1>
      <h1>{product}</h1>
      <div>
        <button onClick={() => setadd(add + 1)} className='text-5xl p-3 bg-blue-500'>+</button>
        <span className='text-5xl font-bold ml-3.5'>{add}</span>
        <br />
        <br />
        <button onClick={() => setsub(sub - 1)} className='text-5xl p-3 bg-emerald-500'>-</button>
        <span className='text-5xl font-bold ml-3.5'>{sub}</span>
      </div>
    </div>
  )
}

export default App