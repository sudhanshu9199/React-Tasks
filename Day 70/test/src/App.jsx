// import React from 'react'




// const App = () => {
//   // function catched() { // non-parameter
//   //   alert('You run');
//   // }
//   function runn(name) {
//     alert(`He ${name} runned`);
//   }
//   // const arrow = 
//   return (
//     <>
//     <div>App</div>
//     {/* <button onClick={catched}>Click</button> */}
//     <button onClick={() => runn('reta')}>Runed</button>
//     </>
//   )
// }

// export default App;
// export const x = 'hello';
// export const z = 'Wello';


// Day 72 lecture start
// import React from 'react'

// const App = () => {
//   let n = 12; // number
//   let s = 'hellow world' // string
//   let b = true; // boolean  -> we can't see the boolean 'values' direct in the browser view
//   let nu = null;
//   let un = undefined;
//   // boolean, null, undefined are reserved keyword of programming language that's the reason we can't print it browser view.
//   let arr = [<h1>Hey</h1> ,12, 'hello', null, true, undefined, 'there'];

//   let obj = {name: 'John', age: 89};
//   return (
//     <>
//       <h1>Datatypes</h1>
//       <h2>Number: {n}</h2>
//       <h2>String: {s}</h2>
//       <h2>Boolean: {b}</h2>
//       <h2>Boolean: {b ? 'Hello' : 'Not Hello'}</h2>
//       <h2>null: {nu}</h2>
//       <h2>Undefined: {un}</h2>
//       <h2>arr: {arr}</h2>
//       {/* we can't directly show the object by like this: `obj: {obj}` so we show the obj. into a simpler format*/}
//       <h2>obj: {obj.name} | {obj.age}</h2>
//     </>
//   )
// }

// export default App;



// const App = () => {
//   const profile = [
//     {name: 'Sarthak', age: 12},
//     {name: 'Ankur', age: 54},
//     {name: 'Akarsh', age: 18},
//   ];

//   const updatedP = profile.map((profile, index) => {
//     return (
//     <li key={index}>
//       <span>Name: {profile.name}</span>
//       <small>Age: {profile.age}</small>
//     </li>
//     );
//   });
//   console.log(updatedP);
  
//   // profile.forEach((profile, index) => {})
//   return (
//     <div>
//       <h1>Rendering Json</h1>
//       {/* {profile[0].name} */}
//       <ol>{updatedP}</ol>
//     </div>
//   )
// }

// export default App


// import { useState } from "react";

// const App = () => {
//   const [names, setnames] = useState('Sarthak');

//   const ChangeHandler = () => {
//     setnames('Harsh')
//     console.log(names);
//   };

//   return (
//     <div>
//       <h1>Username</h1>
//       <h2>{names}</h2>
//       <button onClick={ChangeHandler}>Change Name</button>
//     </div>
//   )
// }

// export default App

// Day 72 lecture end


// Day 75 Start

// import { useState } from "react";
// const App = () => {
//   const [users, setusers] = useState([
//     {name:'John', age: 12},
//     {name:'Ramm', age: 58},
//     {name: 'Ayush', age: 22}
//   ]);

//   const renderuser = users.map((user, idx) => {
//     return (
//       <li key={idx}>{user.name}</li>
//     )
//   })
//   return (
//     <div>
//       <ol>{renderuser}</ol>
//     </div>
//   )
// }

// export default App


// Two-way binding is only aplicable for form elements.

import { useState } from "react";
import Create from './components/Create'
import Read from "./components/Read";

const App = () => {
  
  const [users, setusers] = useState([
    {name:'John', age: 12},
    {name:'Ramm', age: 58},
    {name: 'Ayush', age: 22}
  ]);

  return (
    <div>
      <Create />
      <hr />
      <Read user = {users} setuser = {setusers}/>
    </div>
  )
}

export default App


// prop drilling

// Day 75 end