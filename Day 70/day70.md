# Day 70: Introduction to React

## Topics Covered

### 1. Installing React

- We learned how to set up a new React project using **Create React App**.
- Command used:
  ```
  npx create-react-app my-app
  cd my-app
  npm start
  ```
- This creates a boilerplate React application and starts the development server.

### 2. Boilerplate Overview

- We explored the default folder structure:
  - `src/` contains the main code files.
  - `public/` contains static assets.
- Key files:
  - `App.js`: Main component.
  - `index.js`: Entry point for rendering the app.

### 3. The useState Hook

- We discussed how to manage state in functional components using the `useState` hook.
- Example usage:
  ```javascript
  import React, { useState } from 'react';

  function Counter() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }
  ```
- `useState` lets us add state to functional components.

---

**Summary:**  
Today's class covered the basics of starting with React, understanding the project structure, and using the `useState` hook for state management in components.
``