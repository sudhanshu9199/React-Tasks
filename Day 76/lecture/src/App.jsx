// Day 76 React lecture start
import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";
const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: "todo kaam kar", isCompleted: false },
  ]);
  console.log(todos);
  return (
    <>
      <Create todos={todos} settodos={settodos}/>
      <hr />
      <Read todos={todos} settodos={settodos}/>
    </>
  );
};

export default App;
