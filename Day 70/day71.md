# Day 71: React Function Components, Events & Handlers

## Key Concepts

### 1. Function Components

- In React, a **function component** always returns HTML (JSX).
- **Rules for return:**
  - Nothing can be written after `return`.
  - Only a single value/entity can be returned.
  - There must be a single `return` statement, and it should be the last statement.
- **Wrapper:**  
  - Multiple elements must be wrapped using a fragment (`<>...</>`) or a `<div>...</div>`.

### 2. Writing Logic in Components

- Any JavaScript logic (variables, functions, etc.) should be written **above the return statement**.

### 3. Components

- Components are small, reusable chunks of code.
- They help break the UI into smaller, manageable parts.

### 4. Event Listeners & Event Handlers

- **Event Listener:** Listens for user actions (e.g., clicks).
- **Event Handler:** Function that runs when the event occurs.

#### Example: Non-Parameterized Function

```js
const handleClick = () => {
  alert("Button Clicked!");
};
<button onClick={handleClick}>Click</button>
```

#### Example: Parameterized Function

```js
function runn(name) {
  alert(`He ${name} runned`);
}
<button onClick={() => runn('reta')}>Runed</button>
```

- For parameterized functions, use an arrow function inside `onClick`.
- **Never call the function directly in `onClick`** (e.g., `onClick={runn('reta')}`), as it will run immediately.

### 5. Exporting Variables

- You can export variables/constants from a component file:
  ```js
  export const x = 'hello';
  export const z = 'Wello';
  ```
- Import them in other files as needed.

---

## Quick Revision

- Function components return JSX.
- Only one return, and it must be last.
- Wrap multiple elements in a fragment or div.
- Write logic above return.
- Use event listeners (`onClick`) and handlers.
- For parameterized handlers, use arrow functions.
- Export/import variables for reuse.

---

**Practice:**  
Try creating a button that shows an alert with your

<!-- React -> Day 71 taught -->
<!-- function call is replaced by it's return value. -->

<!-- a function component will always return HTML -->
<!-- 1. We can't write anything after return
2. we can only return single data/entity/variable/value
3. there must be single return in a function and that must be the last statement. -->
<!-- get to know about 'wrapper': we can use fregment/empty tag (<></>)/<div></div> to wrap the tags in return. -->
<!-- create anything like: (js logic, function,so on..) above the return. -->

<!-- Components: mean is chuncks, codes in a small-small parts -->
<!-- Event listeners & Event Handlers -->
<!-- get to know 'onClick' just his work is listening, and when we put any reference in the curli-bracket({}) he runned it without thinking anything, that way we don't call the function manually in it just put the reference of that function only. -->

```js
// non-parameterized function
const handleclick = () => {
alert("Button Clicked!");
};
```
<!-- in parameterized function -->
```js
  function runn(name) {
    alert(`He ${name} runned`);
  }
  // const arrow = () => runn('reta');
  return (
    <>
    <div>App</div>
    {/* <button onClick={catched}>Click</button> */}
    <button onClick={() => runn('reta')}>Runed</button>
    </>
  )
```