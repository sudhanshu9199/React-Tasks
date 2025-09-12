import { useEffect } from "react";
import Nav from "../components/Nav";
import Mainroutes from "./routes/MainRoutes";
import { asyncCurrentUser } from "./store/actions/UserActions";
import { useDispatch } from "react-redux";
import { asyncLoadProducts } from "./store/actions/productActions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncLoadProducts());
    dispatch(asyncCurrentUser());
  }, []);
  return (
    <div className="w-screen h-screen p-2 bg-[#1A1A1A] text-[#fff]">
      <Nav />
      <Mainroutes />
    </div>
  );
};

export default App;
