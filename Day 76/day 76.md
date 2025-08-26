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


# Day 76: React - State Management, Component Structure & Styling

## 1. State Management with useState

**What is State?**  
- State is data managed by React inside a component.
- We used `useState` to manage a list of todos and input values.

**Why use useState?**  
- Allows components to remember and update data as users interact with the UI.

**Example:**
```jsx
const [todos, settodos] = useState([
  { id: 1, title: "todo kaam kar", isCompleted: false },
]);
```

---

## 2. Breaking Functionality into Components

**Why break into components?**  
- Keeps code organized, reusable, and easier to manage.
- Each component handles a specific part of the UI.

**How was it done?**  
- `App.jsx` manages state and passes data/functions to child components.
- `Create.jsx` handles adding new todos.
- `Read.jsx` handles displaying the todo list.

**Example:**
```jsx
<Create todos={todos} settodos={settodos} />
<Read todos={todos} settodos={settodos} />
```

---

## 3. Creating Todos (Form Controls & Two-Way Binding)

**What is Two-Way Binding?**  
- The input field value is controlled by React state, and any change updates the state.

**How to implement?**  
- Use `value` and `onChange` on the input.
- On form submit, create a new todo and update the state using the spread operator (`...todos`).

**Example:**
```jsx
<input
  onChange={(e) => settitle(e.target.value)}
  value={title}
  type="text"
  placeholder="task name"
/>
<button>Create Todo</button>
```
```jsx
const submitHandler = (e) => {
  e.preventDefault();
  const newTodo = {
    id: nanoid(),
    title: title,
    isCompleted: false,
  };
  settodos([...todos, newTodo]);
  settitle("");
};
```

---

## 4. Unique IDs with nanoid

**What is nanoid?**  
- A library to generate unique IDs for each todo item.

**Why use nanoid?**  
- Ensures each todo has a unique `id`, important for React's rendering and key management.

---

## 5. Rendering Data

**How to render todos?**  
- Use `.map()` to convert each todo object into a list item.
- Use the unique `id` as the key for each item.

**Example:**
```jsx
const renderTodos = todos.map((todo) => (
  <li key={todo.id}>{todo.title}</li>
));
<ol>{renderTodos}</ol>
```

---

## 6. Styling in React

**Types of Styling:**
- **Inline Styling:**  
  Directly in the JSX using the `style` prop.
  ```jsx
  <div style={{ color: "red", fontSize: "20px" }}>Hello</div>
  ```
- **Internal CSS:**  
  Write CSS in a `<style>` tag inside your component (less common in React).
- **External CSS:**  
  Create a `.css` file and import it into your component.
  ```jsx
  import './App.css';
  ```
- **Modern CSS Libraries:**  
  Use frameworks like Tailwind CSS for utility-first styling.

**When to use which?**
- Inline: For quick, component-specific styles.
- External: For reusable, global styles.
- Tailwind/Modern CSS: For rapid development and consistent design.

---

## Quick Revision

- Manage state with `useState` for lists and input fields.
- Break UI into logical components (`Create`, `Read`).
- Use two-way binding for controlled inputs.
- Add new items using the spread operator and update state.
- Generate unique IDs with nanoid for each item.
- Render lists using `.map()` and unique keys.
- Style components using inline, internal, external, or modern CSS.

---

**Practice:**  
- Create a todo app with add and display functionality.
- Organize code into separate components.
- Try different styling methods (inline, external, Tailwind).
<!-- Day 76 react lecture -->
<!-- the use of 'nanoid'. the use of '...todos' when to use. rendering the data -->
<!-- put the the different funcanalitys code in the different components. like read, create -->
<!-- in react two styling in-line styling, internal css how to write these there to use when to use. also external css how to use how to link it, modern css, tailwind css -->