# 📘 Day-105 React Optimization Notes: `useMemo`, `React.memo`, `useCallback`

## 🔹 1. Why Optimization in React?

- React apps **re-render** whenever state or props change.

- Sometimes re-renders are **unnecessary** → they slow down apps.

- Hooks & utilities like `useMemo`, `useCallback`, and `React.memo` help us **optimize performance** by avoiding unnecessary recalculations or re-renders.

## 🔹 2. `useMemo` Hook
### ✅ What is it?

- `useMemo` **remembers (memoizes)** the result of an expensive calculation.

- It **recomputes only when dependencies change**.

### 🔑 Syntax:
```jsx
const memoizedValue = useMemo(() => {
  return expensiveCalculation(num);
}, [num]);
```

### 📍 When to use?

- When you have **heavy calculations** (sorting, filtering, loops, API parsing).

- When calculation output does not need to change on every render.

### Example:
```jsx
import React, { useMemo, useState } from "react";

function ExpensiveComponent() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  // Heavy calculation (e.g., factorial)
  const factorial = (n) => {
    console.log("Calculating...");
    return n <= 1 ? 1 : n * factorial(n - 1);
  };

  // Memoized calculation
  const result = useMemo(() => factorial(number), [number]);

  return (
    <div>
      <h3>Factorial of {number}: {result}</h3>
      <button onClick={() => setCount(count + 1)}>Increase Count: {count}</button>
      <button onClick={() => setNumber(number + 1)}>Increase Number</button>
    </div>
  );
}
```

👉 Without `useMemo`, factorial recalculates on every render.
👉 With `useMemo`, it recalculates only when `number` changes.

## 🔹 3. React.memo (Higher-Order Component)
### ✅ What is it?

- A **wrapper** that makes a **component re-render only if its props change.**

Think of it as **PureComponent for functional components.**

### 🔑 Syntax:
```jsx
const Child = React.memo((props) => {
  console.log("Child rendered!");
  return <h3>{props.value}</h3>;
});
```

### 📍 When to use?

- When child components receive **same props repeatedly.**

- To avoid unnecessary re-render of child components.

### 💡 Example:

```jsx
import React, { useState } from "react";

const Child = React.memo(({ value }) => {
  console.log("Child rendered!");
  return <h3>Value: {value}</h3>;
});

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Child value="Hello React" />
      <button onClick={() => setCount(count + 1)}>Increase Count: {count}</button>
    </div>
  );
}
```

👉 Here, even if `Parent` re-renders,
👉 `Child` will **not re-render** because its prop `value` never changes.

## 🔹 4. useCallback Hook
### ✅ What is it?

- `useCallback` **remembers a function** definition between renders.

- It only changes when dependencies change.

### 🔑 Syntax:

```jsx
const memoizedFunction = useCallback(() => {
  doSomething();
}, [dependencies]);
```

### 📍 When to use?

- When you pass **functions as props** to child components.

- To avoid **new function** creation on every render.

### 💡 Example:

```jsx
import React, { useState, useCallback } from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child rendered!");
  return <button onClick={onClick}>Click Me</button>;
});

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []); // function is memoized

  return (
    <div>
      <Child onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Increase Count: {count}</button>
    </div>
  );
}
```
👉 Without `useCallback`, a **new function** is created on every render → causing `Child` to re-render unnecessarily.
👉 With `useCallback`, the function reference is **stable**.

## 🔹 5. Difference Between Them (Interview Q)
| Feature    | `useMemo` 🧮                   | `React.memo` 📦                  | `useCallback` 🔗           |
| ---------- | ------------------------------ | -------------------------------- | -------------------------- |
| Purpose    | Memoizes **value/calculation** | Memoizes **component rendering** | Memoizes **function**      |
| Returns    | A **value**                    | A **component**                  | A **function**             |
| Usage      | Heavy calculations             | Prevent child re-render          | Stable function references |
| Dependency | `[deps]`                       | Props                            | `[deps]`                   |


## 🔹 6. Where to Use Which One?

- **useMemo** → Expensive calculations (avoid re-calculating).

- **React.memo** → Child components (avoid re-render).

- **useCallback** → Functions passed as props (avoid new function reference).

## 🔹 7. Interview Pointers

- ### ❓ Why use useMemo?
    👉 To cache heavy calculations, improve performance.

- ### ❓ Why use React.memo?
    👉 To stop child re-render when props don’t change.

- ### ❓ Why use useCallback?
    👉 To avoid function re-creation causing child re-render.

- ### ❓ Difference between useMemo & useCallback?
    👉 `useMemo` returns value; `useCallback` returns function.

## 🔹 8. Real-World Use Cases

- **useMemo** → Search filters, sorting large arrays, expensive math.

- **React.memo** → Reusable components (buttons, cards, lists).

- **useCallback** → Passing event handlers to memoized children.

### ✨ Final Flow in Mind:

1. First try normal code → see unnecessary renders.

2. Add `React.memo` → child stops re-render.

3. Add `useCallback` → event handlers don’t cause re-renders.

4. Add `useMemo` → heavy calculations optimized.


# 📒 Day-106 ReactJS Notes: Styled Components & useRef

## 🔹 1. Styled Components
### ✅ What is Styled Components?

- A **CSS-in-JS library** for styling React components.

- Instead of writing CSS in separate `.css` files, you write styles **inside JavaScrip**t using template literals.

- Each styled component is a **React component with its own scoped CSS.**

👉 No global class conflicts → styles apply only to that component.

### ✅ Why use Styled Components?

- Avoids **class name conflict**s (every styled component is unique).

- Styles are **dynamic** → can change using props.

- **Reusable** and **readable** (your style and logic live together).

- Great for **theming** (dark/light mode).

### ✅ When to use Styled Components?

- When your project requires:

    - **Dynamic styles** based on props.

    - **Scoped styles** (not leaking to other components).

    - Easy **component-based styling.**

### ✅ How to use Styled Components?

#### Step 1: Install
```bash
npm install styled-components
```
#### Step 2: Import & Create Styled Component
```jsx
import styled from "styled-components";

const Button = styled.button`
  background: blue;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
`;
```

#### Step 3: Use in JSX
```jsx
function App() {
  return <Button>Click Me</Button>;
}
```

### ✅ Taking Props in Styled Components

#### Syntax:
```jsx
const Button = styled.button`
  background: ${(props) => (props.primary ? "blue" : "gray")};
  color: white;
  padding: 10px;
`;
```
#### Usage:
```jsx
function App() {
  return (
    <>
      <Button primary>Primary Button</Button>
      <Button>Default Button</Button>
    </>
  );
}
```
👉 Here `props.primary` decides the background color.

### 📝 Interview Pointers (Styled Components)

- "Why styled-components over CSS/SCSS?" → Scoped, dynamic, no class conflict.

- "How to pass props?" → Example with conditional styling.

- "When NOT to use?" → Very small apps where plain CSS is enough.

---

## 🔹 2. useRef Hook
### ✅ What is useRef?

- A **React Hook** that returns a **mutable object** `{ current: value }`.

- It **does not re-render** the component when updated.

- Think of it as a **“box” to hold a value or DOM reference.**

### ✅ Why use useRef?

- To **access/manipulate DOM elements** directly (e.g., focus input, play/pause video).

- To **store values** that persist across renders **without causing re-renders** (like a variable outside React).

- To hold **previous values** or counters.

### ✅ When to use useRef?

- When you need a **DOM reference** (input, div, video, etc.).

- When you need a **value to persist** but don’t want re-renders (unlike useState).

- Example: Stopwatch timer, storing interval ID, remembering previous count.

### ✅ How to use useRef?

#### 1. Accessing DOM Element
```jsx
import { useRef } from "react";

function App() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus(); // Access DOM node
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}
```

---

#### 2. Storing a Value without Re-render
```jsx
import { useRef, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  renderCount.current = renderCount.current + 1;

  return (
    <>
      <p>Count: {count}</p>
      <p>Renders: {renderCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
```
👉 `renderCount.current` persists but doesn’t trigger re-render.

### 📝 Interview Pointers (useRef)

- "Difference between useRef and useState?"

- `useState` → re-renders component when updated.

- `useRef` → persists value but no re-render.

- "When to use useRef instead of querySelector?"

    - Always prefer `useRef` in React (React way).

### 🔹 3. Styled Components vs useRef
| Feature          | Styled Components               | useRef                              |
| ---------------- | ------------------------------- | ----------------------------------- |
| Purpose          | Styling React components        | Access DOM / store mutable values   |
| Dynamic behavior | Changes style using props       | Changes values without re-render    |
| Usage            | CSS-in-JS                       | Hook in React                       |
| Example use      | Dark mode toggle, button themes | Focus input, stopwatch, DOM control |

### 🔹 4. Mini Project Example (Combining Both)

**Task:** Input field with dynamic styled button & focus feature.

```jsx
import { useRef, useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => (props.active ? "green" : "red")};
  color: white;
  padding: 10px;
`;

function App() {
  const inputRef = useRef();
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    inputRef.current.focus(); // useRef to focus input
  };

  return (
    <>
      <input ref={inputRef} type="text" placeholder="Type here..." />
      <Button active={active} onClick={handleClick}>
        {active ? "Active" : "Inactive"}
      </Button>
    </>
  );
}
```
👉 Here we used:

- **Styled Components** → Button changes color based on props.

- **useRef** → Automatically focuses input when button is clicked.

### 🔹 5. Quick Flow Recap

#### 1. Styled Components

- Install → import → create styled → use in JSX.

- Props help in dynamic styling.

#### 2. useRef

- Create ref → attach to element → access via `.current`.

- Stores values without re-render.

#### 3. When to use what?

- Styling → use Styled Components.

- DOM access / persisting values → use useRef.


# Optimization: 1. Lazy (dynamic imports), Suspense fallback 2.useMemo, React.memo, useCallback 3. useEffect 4. Relevent Routes (dynamic imports) 5. <img loading = 'lazy' /> in react  6. lighthouse

# SEO: 1. react helmet