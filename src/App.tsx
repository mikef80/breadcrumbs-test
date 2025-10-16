import { Outlet, useMatch } from "react-router";
import "./App.scss";

function App() {
  const isExactMatch = useMatch("/");

  if (!isExactMatch) {
    return <Outlet />;
  }
  return <p>App</p>;
}

export default App;
