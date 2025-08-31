# 📘 Day 82 – React Router Deep Dive

## 1. 🌐 What is Routing in React?
Routing is the process of navigating between different pages/components in a **Single Page Application (SPA)** without refreshing the entire page.

---

## 🔑 Key Components in React Router

### 1. **BrowserRouter**
- Works as the wrapper around the whole app.  
- Uses the browser’s **History API** for navigation.  
- Must wrap `<App/>` at the root.  

---

### 2. **Routes**
- Acts as a **container** for all `<Route>` components.  
- Matches the **URL** with defined routes and renders the correct component.  

---

### 3. **Route**
- Defines a **path → component** mapping.  
- **Example:**
  ```jsx
  <Route path="/about" element={<About />} />
  ```
## ✅ Where & When to use?

- Use **`BrowserRouter`** once in **`main.jsx`** (root).  
- Inside **`App.jsx`**, define **`<Routes>`** & **`<Route>`** to map paths.  

---

## 🔗 Anchor `<a>` vs `<Link>` vs `<NavLink>`

| Feature        | `<a>` 🚫 | `<Link>` ✅ | `<NavLink>` ✅ |
|----------------|----------|-------------|----------------|
| **Page Reload** | ❌ Causes full reload | ✅ No reload (SPA) | ✅ No reload (SPA) |
| **Performance** | ❌ Slow (refresh) | ✅ Fast | ✅ Fast |
| **Active Styling** | ❌ Not supported | ❌ Not supported | ✅ Built-in `isActive` prop |
| **Use Case**   | External links | Internal navigation | Internal + highlight active route |

---

👉 **Best practice**: Always use **`<Link>` / `<NavLink>`** for internal navigation in React.
- **Example:**
```jsx
<NavLink to="/about" className={e => e.isActive ? "active" : ""}>About</NavLink>
```

### 3. 🧩 Child Route vs Nested Route  

**Child Route**  
- Defined inside another route but **does not render** automatically inside the parent.  

**Nested Route**  
- A child route that **renders inside the parent** using `<Outlet />`.  

#### Example:  

```jsx
<Route path="/service" element={<Service />}>
   <Route path="detail" element={<ServiceDetails />} />
   <Route path="update" element={<ServiceUpdate />} />
</Route>
```

### Explanation:

- Service → Parent component

- ServiceDetails & ServiceUpdate → Nested routes

- They render inside <Outlet /> written in Service.jsx.

✅ **Use Nested Route** when you want to show sub-pages inside a parent component’s layout.

## 4. 🔄 Dynamic Routing

### Dynamic Routing

- Routes with variables (params).

- Example: /user/:id where :id is dynamic.
```jsx
<Route path="/product/detail/:name" element={<ProductDetails />} />
```
- `:name` = dynamic param.

- `useParams()` → to read it.
```jsx
const { name } = useParams();
console.log(name); // "product 1"
```

### ✅ When to use?

- Product details page  
- User profile pages (`/user/:id`)  

---

### 🚀 Navigation – `useNavigate` vs `<Link>`

- **`<Link>` / `<NavLink>`**: Used in JSX for **static navigation**.  
- **`useNavigate`**: Hook for **programmatic navigation** (inside functions/events).  

**Example:**
```jsx
import { useNavigate } from "react-router-dom";

const MyComponent = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate('/about')}>Go About</button>
  );
};
```


### 🌀 Navigate with History
- navigate(-1) → go back one step

- navigate(-2) → go back two steps

- navigate(+1) → forward one step

👉 Works exactly like **browser back/forward buttons.**


## 6. 🎯 useParams  

A hook to access dynamic parameters from the URL.  

### Example:
```jsx
const { name } = useParams();
console.log(name); // product 1, product 2...
```
- ✅ **Use when** a route contains `:params`.
- ❌ **Don’t use** if the route has no dynamic part.

## 7. 🪟 Outlet

A placeholder component to render nested child routes.

### Example:
```jsx
const Service = () => {
  return (
    <div>
      <h1>Service Page</h1>
      <Outlet />
    </div>
  )
}
```
- ✅ Use inside parent route.
- ✅ Can be used multiple times in different parent components.
- ❌ Don’t use without defining nested routes.

## 8. 📂 File Structure Recap

```pgsql
Day 82_Router/
│── src/
│   ├── App.jsx         # Main App wrapper
│   ├── main.jsx        # Entry file with BrowserRouter
│   ├── components/     # Components
│   │   ├── Home.jsx
│   │   ├── Product.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Service.jsx
│   │   ├── ServiceDetails.jsx
│   │   ├── ServiceUpdate.jsx
│   │   ├── About.jsx
│   │   └── Nav.jsx
│   └── routes/
│       └── MainRoutes.jsx  # All routes defined here
```

## 9. 📊 Diagram – How Routing Works
```bash
BrowserRouter
   └── App
       ├── Nav (with NavLink)
       └── Routes
            ├── / → Home
            ├── /about → About
            ├── /product → Product
            │     └── /product/detail/:name → ProductDetails
            └── /service → Service
                   ├── /service/detail → ServiceDetails
                   └── /service/update → ServiceUpdate
```

## 10. ✅ Key Takeaways

- Use `BrowserRouter` at root to enable routing.

- Prefer `<Link>/<NavLink>` over `<a>` for SPA navigation.

- Use nested routes with `<Outlet>` for sub-pages inside parent.

- Dynamic routing with `useParams` is essential for details pages.

- `useNavigate` allows programmatic navigation (back, forward, specific route).

<!-- DAY 82 in React Route -->

<!-- What is Route, Routes, BrowserRouter ? how is all work ? when to use where to use how to use ? -->

<!-- What are the diffrence and benifits, disadvantage between anchore tag(<a/>), <Link><Link/>, <NavLink><NavLink/> -->

<!-- What is child route and nested route when to use which one what are the differences ? -->
<!-- What is dynamic routing ?-->
<!-- why we use useNavigate from react-router? what if I can use Link tag in place of useNavigate what happen? In navigate we use (-1) to go back so tell me how can it is possible, also can we use the -2, -3, +1, +2 like too in the navigate? -->

<!-- What is useParams params ? why we use params ? How it is works params ? when we need params ? -->

<!-- what is Outlet ? when to use where to write how many times I use Outlet in one component file ? -->