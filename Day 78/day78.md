# Day 78: React - React Hook Form, Toastify, Context API & HOC

---

## 1. React Hook Form

**What is React Hook Form?**  
- A library for managing forms in React using hooks.
- Simplifies form validation, state management, and submission.

**Why use it?**  
- Less code, better performance, easy validation, and integrates well with React's functional components.

**How to use?**  
- Import `useForm` from `react-hook-form`.
- Use `register` to connect inputs, `handleSubmit` for form submission, and `errors` for validation feedback.

**Example:**
```jsx
import { useForm } from "react-hook-form";
const { register, handleSubmit, reset, formState: { errors } } = useForm();

<form onSubmit={handleSubmit(SubmitHandler)}>
  <input {...register("title", { required: "title can't be empty" })} />
  <small>{errors?.title?.message}</small>
  <button>Create</button>
</form>
```

**Resources:**  
- [React Hook Form Docs](https://react-hook-form.com/get-started)

---

## 2. React Toastify

**What is React Toastify?**  
- A library for showing toast notifications in React apps.

**Why use it?**  
- Easy to show feedback messages (success, error, info) to users.

**How to use?**  
- Import `ToastContainer` and `toast` from `react-toastify`.
- Place `<ToastContainer />` in your app (usually at root).
- Call `toast.success()` or `toast.error()` to show notifications.

**Example:**
```jsx
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.success('Successfully added!');
toast.error('Todo deleted!');

// In main.jsx
<ToastContainer position="top-center" />
```

**Resources:**  
- [React Toastify Docs](https://fkhadra.github.io/react-toastify/introduction/)

---

## 3. Context API

**What is Context API?**  
- A React feature for sharing data globally across components without prop drilling.

**Why use it?**  
- Avoids passing props through many layers (prop drilling).
- Makes global state management easier.

**How does it work?**  
- Create a context using `React.createContext()`.
- Wrap your app with a Provider component.
- Consume context data in any child component using `useContext`.

**Diagram:**
```
App
 ├── Provider (Context)
 │    ├── ChildA (can access context)
 │    └── ChildB (can access context)
```

**Example:**
```jsx
import { createContext, useContext } from 'react';
const TodoContext = createContext();

<TodoContext.Provider value={{ todos, settodos }}>
  <Create />
  <Read />
</TodoContext.Provider>

// In child component
const { todos, settodos } = useContext(TodoContext);
```

---

## 4. Higher Order Components (HOC)

**What is a HOC?**  
- A function that takes a component as an argument and returns a new component.
- Used for code reuse and logic sharing.

**Example:**
```jsx
const Wrapper = (props) => props.App;
```
- In this project, `Wrapper.jsx` is a simple HOC that renders the passed component.

---

## 5. Component Structure & Styling

- **Component Structure:**  
  - Split logic into `Create` (form), `Read` (list), and `App` (state management).
- **Styling:**  
  - Used Tailwind CSS classes for modern, utility-first styling.
  - Imported global styles via `index.css`.

---

## Quick Revision

- Use **React Hook Form** for easy form management and validation.
- Use **React Toastify** for user notifications.
- Use **Context API** to avoid prop drilling and share state globally.
- Understand **HOC** for advanced component patterns.
- Organize code into logical components and use modern CSS (Tailwind).

---

**Practice:**  
- Build a todo app using React Hook Form and Toastify.
- Refactor state management using Context API.
- Try creating your own HOC for reusable logic.

---

<!-- Day 78 in react -->
<!-- We get to know what is 'React Hook'? what is the uses? when to use ? how many ways we can use ? how Reack hook replace the two-way binding? the link of React hook (https://react-hook-form.com/get-started) -->
<!-- We get to know React toastify how to use react-toastify? how many way use it ? React-tostify link (https://fkhadra.github.io/react-toastify/introduction/) -->
<!-- Introduction of context API in react. What context API do? Purpose of the React context API How this context API replace the props drilling? How context API its work ? What 'context API' works on is called HOF(Higher Order Components).
- Component rither take props as a Component or return Component is HOF. -->