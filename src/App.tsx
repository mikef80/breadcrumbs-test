import { Outlet } from "react-router";
import "./App.scss";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      App
      <Outlet />
    </>
  );
}

export default App;
