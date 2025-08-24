# Day 76: React - State Management & Form Controls

## 1. State Management in React

**What is State?**  
- State is data managed by React inside a component.
- State management means controlling and updating this data as users interact with the UI.

**How is State Managed?**  
- In React, state is managed using the `useState` hook (for function components).

**Why use function components and hooks?**  
- Function components are simpler and more readable than class components.
- Hooks like `useState` make state management easy and direct.

**Example:**
```jsx
const [todos, settodos] = useState([
  {id: 1, title: 'todo kaam kar', isCompleted: false},
]);
```

**Why use useState?**  
- Allows components to remember and update data as users interact with the UI.

**Example:**
```jsx
const [todos, settodos] = useState([
  {id: 1, title: 'todo kaam kar', isCompleted: false},
]);
const [title, settitle] = useState('');
```

---

## 2. Form Controls & Two-Way Binding

**What is Two-Way Binding?**  
- Two-way binding means the form input value is controlled by React state, and any change in the input updates the state.

**Why use it?**  
- Keeps your UI and data in sync.
- Essential for interactive forms.

**How to implement?**  
- Use `value` and `onChange` props for each input.

**Example:**
```jsx
<input
  value={title}
  onChange={(e) => settitle(e.target.value)}
  type="text"
  placeholder="task name"
/>
```

---

## 3. Handling Different Form Inputs

- **Text Input:**  
  Controlled by state and updated with `onChange`.
- **Radio Buttons:**  
  Use `checked` and `onChange` to select gender.
  ```jsx
  <input type="radio" checked={gender === 'male'} value="male" onChange={(e) => setgender(e.target.value)} /> male
  <input type="radio" checked={gender === 'female'} value="female" onChange={(e) => setgender(e.target.value)} /> female
  ```
- **Checkbox:**  
  Use `checked` and `onChange` for boolean values.
  ```jsx
  <input type="checkbox" checked={completed} onChange={(e) => setcompleted(e.target.checked)} /> Completed
  ```
- **Select Dropdown:**  
  Use `value` and `onChange` for selection.
  ```jsx
  <select value={selecte} onChange={(e) => setselecte(e.target.value)}>
    <option value="agra">agra</option>
    <option value="bihar">bihar</option>
    ...
  </select>
  ```


## 4. Adding New Todos (Form Submission)

**Process:**  
- When the form is submitted, a new todo is created and added to the list.
- Prevent default form behavior with `e.preventDefault()`.

**Why use `[...todos, newTodo]`?**  
- The spread operator (`...todos`) copies the existing todos.
- Adding `newTodo` creates a new array, which updates the state and triggers a re-render.

**Example:**
```jsx
const submitHandler = (e) => {
  e.preventDefault();
  const newTodo = {
    id: nanoid(),
    title: title,
    isCompleted: false,
  };
  settodos([...todos, newTodo]);
  settitle('');
}
```


---

## 5. Unique IDs with nanoid

**What is nanoid?**  
- A library to generate unique IDs for each todo item.

**Why use nanoid?**  
- Ensures each todo has a unique `id`, which is important for React's rendering and key management.

**Example:**
```jsx
import { nanoid } from 'nanoid';
const newTodo = { id: nanoid(), ... }
```

## 5. Rendering Data

**How to render todos?**  
- Use `.map()` to convert each todo object into a list item.
- Use the unique `id` as the key for each item.

**Example:**
```jsx
const renderTodos = todos.map(todo => (
  <li key={todo.id}>{todo.title}</li>
));
<ol>{renderTodos}</ol>
```


---

## 4. Summary of Today's Process

- Use `useState` to manage all form data.
- Bind each input to its state variable for two-way binding.
- Update state on every user interaction.
- This approach keeps the UI and data always in sync.

---
## Quick Revision

- Manage state with `useState` for lists and input fields.
- Use two-way binding for controlled inputs.
- Add new items using the spread operator and update state.
- Generate unique IDs with nanoid for each item.
- Render lists using `.map()` and unique keys.

---

## Quick Revision

- State management in React is done using hooks (`useState`).
- Two-way binding is essential for interactive forms.
- Always use `value` and `onChange` for controlled inputs.
- Handle radio, checkbox, and select inputs with state for dynamic forms.

---

**Practice:**  
- Create a form with text, radio, checkbox, and select inputs.
- Bind each input to state and update the state on change.
- Try adding new todos to the list using the form.
- Create a todo app with add functionality.
- Use nanoid for unique IDs.
- Render the todo list dynamically.

<!-- Day 76 react lecture -->
<!-- the use of 'nanoid'. the use of '...todos' when to use. rendering the data -->