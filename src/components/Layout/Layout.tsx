import { Outlet } from "react-router";
import Header from '../Header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* The current route renders here */}
      </main>
    </>
  );
};

export default Layout;
