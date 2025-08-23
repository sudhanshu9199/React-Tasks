# Day 75: React - Two-Way Binding, Form Submission, Prop Drilling & Component Structure

## 1. Two-Way Binding in React

**What is it?**  
- Two-way binding means the form input value is controlled by React state, and any change in the input updates the state.

**Why use it?**  
- Keeps your UI and data in sync.
- Essential for forms where you want to read and update user input.

**How to implement?**  
- Use `value` and `onChange` props on input elements.
- Example:
  ```jsx
  const [fullName, setfullName] = useState("");
  <input
    value={fullName}
    onChange={(e) => setfullName(e.target.value)}
    type="text"
    placeholder="Full Name"
  />
  ```

## 2. Form Submission in React

**Process:**  
- Use a `<form>` element and handle submission with `onSubmit`.
- Prevent default browser behavior using `e.preventDefault()`.
- Collect data from state and process it.

**Example:**
```jsx
const submitHandler = (e) => {
  e.preventDefault();
  const newUser = { fullName, age };
  // Add newUser to users array
};
<form onSubmit={submitHandler}>
  {/* inputs */}
  <button type="submit">Submit</button>
</form>
```

## 3. Event Handling

- `onClick`: Handles button clicks.
- `onSubmit`: Handles form submission.
- `value`: Controls input value for two-way binding.

## 4. Prop Drilling

**What is it?**  
- Passing data from parent to child components via props.

**Why use it?**  
- Needed when multiple child components need access to the same data or functions.

**When to use?**  
- If two or more child components need the same data, store it in the parent and pass it down.

**How does data flow?**  
- Data flows in one direction: parent → child.

**Example:**
```jsx
<Read user={users} setuser={setusers} />
```

## 5. Breaking Components (Component Structure)

**Why break components?**  
- Makes code modular, reusable, and easier to manage.

**How to break?**  
- Create separate files for each logical part (e.g., `Create.jsx`, `Read.jsx`).
- Keep configuration and main logic in `App.js`.

**Naming Convention:**  
- Component file names should start with a capital letter (e.g., `Create.jsx`, `Read.jsx`).

---

## Quick Revision

- Two-way binding keeps input and state in sync.
- Use `onSubmit` for form handling and prevent default behavior.
- Pass data/functions via props for prop drilling.
- Break UI into components for better structure.
- Always start component file names with a capital letter.

---

**Practice:**  
- Create a form with two-way binding and submit handler.
- Pass state and update functions to child components using props.
- Organize your code by breaking it into logical components.

<!-- Day 75 react lecture -->
<!-- two way binding when to use, why to use, what is this? -->
<!-- form submition -->
<!-- onClick, onSubmit, value -->
<!--  prop drilling: what is ?, when to use, why to use, where to use. in case both child need same data then store the data in the parent, The data flow in unidirectional parent to child -->
<!-- Components (files) are breaking -->
<!-- on what basis should the component be broken?, what is the need to break it?, how to keep the flow of data? -->
<!-- In App.js file contain the configure codes -->
<!-- Also need to write Components file name start with Capital letter -->