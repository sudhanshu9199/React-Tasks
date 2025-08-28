import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Wrapper from "./Wrapper.jsx";

createRoot(document.getElementById("root")).render(
  <>
  <Wrapper App={<App />}/>
    {/* <App />
    <ToastContainer position="top-center" /> */}
  </>
);
