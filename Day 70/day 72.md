
# Day 72: React - Rendering Data Types, Objects, Arrays & State

## 1. Rendering Data Types in React

- **Numbers & Strings:**  
  - Can be directly shown in JSX.  
    ```jsx
    <h2>Number: {n}</h2>
    <h2>String: {s}</h2>
    ```
- **Boolean, null, undefined:**  
  - Cannot be directly rendered in the browser view.
  - Use conditional rendering for booleans:
    ```jsx
    <h2>Boolean: {b ? 'Hello' : 'Not Hello'}</h2>
    ```
  - `null` and `undefined` will not display anything.

## 2. Arrays in React

- Arrays can be rendered in JSX.
- Arrays can contain elements, numbers, strings, etc.
  ```jsx
  let arr = [<h1>Hey</h1>, 12, 'hello', null, true, undefined, 'there'];
  <h2>arr: {arr}</h2>
  ```
- **Note:**  
  - Boolean, null, undefined inside arrays will not be visible.

## 3. Rendering Objects

- **Objects cannot be rendered directly.**
  - You must access and display individual properties.
    ```jsx
    let obj = {name: 'John', age: 89};
    <h2>obj: {obj.name} | {obj.age}</h2>
    ```

## 4. Rendering Array of Objects (JSON)

- You cannot render an array of objects directly.
- Use `.map()` to transform each object into JSX.
  ```jsx
  const profile = [
    {name: 'Sarthak', age: 12},
    {name: 'Ankur', age: 54},
    {name: 'Akarsh', age: 18},
  ];

  const updatedP = profile.map((profile, index) => (
    <li key={index}>
      <span>Name: {profile.name}</span>
      <small>Age: {profile.age}</small>
    </li>
  ));

  <ol>{updatedP}</ol>
  ```
- **Why use `.map()`?**  
  - Converts each object into a React element for display.

## 5. State Management with useState

- **useState** allows you to manage and update data in your component.
- Example:
  ```jsx
  import { useState } from "react";

  const [names, setnames] = useState('Sarthak');

  const ChangeHandler = () => {
    setnames('Harsh');
  };

  <h2>{names}</h2>
  <button onClick={ChangeHandler}>Change Name</button>
  ```
- **Why use state?**  
  - To make your UI interactive and update data dynamically.

---

## Quick Revision

- Numbers & strings are visible in JSX.
- Boolean, null, undefined are not directly visible.
- Arrays can be rendered; objects need to be broken down.
- Use `.map()` for rendering array of objects.
- Use `useState` for dynamic data and interactivity.

---

**Practice:**  
- Try rendering different data types in JSX.
- Use `.map()` to display a list of objects.
- Create a button to change state and update the view.
<!-- Day 72 React lecture -->
<!-- in react get to know about number, string are visible in view and boolean, null, undefined are not visible in view directly. -->

<!-- in react we use array, in array we can also put the tags also. -->

<!-- in react we can't show the objects direct fully we need to break it first. -->

<!-- In react we can't show the arrays object directly, we need to use map for showing the array of Object in view. -->