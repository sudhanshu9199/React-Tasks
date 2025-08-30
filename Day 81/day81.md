# Day 81: React - Context API, useState vs useContext, React Router, Link, Routing Types & Nav Links

---

## 1. useState vs useContext

**useState**
- Used for local state management inside a single component.
- Each component using `useState` manages its own data independently.

**useContext**
- Used for global state sharing across multiple components.
- Requires creating a context (`createContext`) and wrapping components with a Provider.
- Any child component can access and update shared state using `useContext`.

**When to use which?**
- Use `useState` for data only needed in one component.
- Use `useContext` when multiple components need to access or update the same data (e.g., todos list).

**Diagram:**
```
App
 ├── Wrapper (todoContext.Provider)
 │    ├── Create (uses useContext)
 │    ├── Read (uses useContext)
 │    └── ...other components
```

---

## 2. React Router (`react-router-dom`)

**What is it?**
- A library for client-side routing in React applications.
- Allows navigation between different views/pages without reloading the browser.

**Why use it?**
- Enables SPA (Single Page Application) behavior.
- Lets you organize your app into multiple routes/pages.

**How to use it?**
- Install: `npm install react-router-dom`
- Wrap your app with `<BrowserRouter>` in `main.jsx`.
- Use `<Routes>` and `<Route>` to define paths and components in `App.jsx`.

**Example:**
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/product" element={<Product />} />
    <Route path="/service" element={<Service />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>
```

---

## 3. Link vs Anchor Tag

**Why not use `<a>`?**
- `<a>` tag reloads the page, breaking SPA behavior.
- Loses React state and context on navigation.

**Why use `<Link>`?**
- `<Link>` from `react-router-dom` enables client-side navigation.
- Keeps app state and context intact.
- Provides better performance and user experience.

**Example:**
```jsx
import { Link } from 'react-router-dom';

<Link to="/">Home</Link>
<Link to="/product">Product</Link>
```

**Where to use `<Link>`?**
- Anywhere you want to navigate between routes in your React app.

---

## 4. Dynamic Routing vs Child Routing

**Dynamic Routing**
- Routes that change based on parameters (e.g., `/product/:id`).
- Used for detail pages, user profiles, etc.

**Child Routing**
- Nested routes inside a parent route.
- Used for layouts or sections with sub-pages.

**Differences**
- Dynamic: Path changes with data (e.g., `/user/123`).
- Child: Path is nested (e.g., `/dashboard/settings`).

**When to use?**
- Dynamic: When you need to show details for specific items.
- Child: When you want to organize related pages under a parent.

---

## 5. Nav Links

**What are Nav Links?**
- Navigation links for moving between different routes/pages.
- Usually placed in a navigation bar.

**How to use?**
- Use `<Link>` or `<NavLink>` from `react-router-dom`.
- `<NavLink>` can style the active link.

**Example:**
```jsx
import { Link } from 'react-router-dom';

<div className='flex gap-52'>
  <Link to="/">Home</Link>
  <Link to="/product">Product</Link>
  <Link to="/service">Service</Link>
  <Link to="/about">About</Link>
</div>
```

---

## Quick Revision

- Use `useState` for local state, `useContext` for global/shared state.
- Use `react-router-dom` for SPA routing.
- Use `<Link>` instead of `<a>` for navigation.
- Dynamic routing uses parameters; child routing uses nested routes.
- Nav links help users navigate your app.

---

**Practice:**  
- Refactor a component to use context for shared state.
- Add new routes and navigation links using `react-router-dom`.
- Try dynamic and child routes in your app.

<!-- Day 81 with React -->
<!-- What is Wrapper? Why to use it ? When to use it ? what is childern in wrapper ? how to return the props.children in wrapper ? what the reasion to add Wrapper ? What is the difference between HOF & HOC ? How to put context API in wrapper ? Why use Wrapper to put context API not in any other.  -->

<!-- HOC: is a components which takes component as a props and return same component but with extra functionality.-->
<!-- Use Wrapper - to put the data wrapper then we will just pass the data to the children. -->

<!-- What is createContext ? when to use it ? why to use it ? how to write it ? then what is .Provider ? how to write it .Provider ? -->

<!-- what is this line mean 'export const todoContext = createContext(null);' why we export it in first line 'export const todoContext = createContext(null);' -->

<!-- What is the difference between useState and useContext ? where to use which one? -->

<!-- What is react-router-dom ? why we need this react-router-dom? how to use it react-router-dom ? How to set it react-router-dom ? -->

<!-- In React we don't use anchone tag (<a/>) use <Link><Link/> why ? what are the benifits ? where and where we can use it Link tag ? -->

<!-- what is dynamic routing ? what is child routing ? then what are the difference between them and when to use which one ? -->
<!-- what is Nav Links ? with full detailed the work, so on... -->