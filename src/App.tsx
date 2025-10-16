import { Link, Outlet, useMatch } from "react-router";
import "./App.scss";

function App() {
  const isExactMatch = useMatch("/");

  if (!isExactMatch) {
    return <Outlet />;
  }
  return (
    <>
      <Link to='about'>About</Link>
      <p>App</p>
    </>
  );
}

export default App;
