import React from 'react'

const App = () => {
  // function catched() { // non-parameter
  //   alert('You run');
  // }
  function runn(name) {
    alert(`He ${name} runned`);
  }
  // const arrow = 
  return (
    <>
    <div>App</div>
    {/* <button onClick={catched}>Click</button> */}
    <button onClick={() => runn('reta')}>Runed</button>
    </>
  )
}

export default App;
export const x = 'hello';
export const z = 'Wello';