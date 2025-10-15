import { Link, useMatches } from "react-router";
import type { CrumbHandle } from "../../types/types";

const Breadcrumbs = () => {
  const matches = useMatches() as Array<{
    handle?: CrumbHandle;
    data?: any;
    pathname: string;
  }>;

  const crumbs = matches
    .filter((match) => match.handle?.crumb)
    .map((match) => {
      const crumb = match.handle!.crumb!(match.data);
      return { ...crumb, path: match.pathname };
    });

  return (
    <nav>
      {crumbs.map((crumb, i) => (
        <span key={crumb.path}>
          <Link to={crumb.path}>{crumb.label}</Link>
          {i < crumbs.length - 1 && " / "}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
