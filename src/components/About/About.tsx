import { Link, Outlet, useMatch } from "react-router";

const About = () => {
  const isExactMatch = useMatch("/about");

  if (!isExactMatch) {
    return <Outlet />;
  }

  return <p>This is the About page</p>;
};

export default About;
