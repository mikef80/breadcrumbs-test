import type { RouteObject } from "react-router";
import App from "./App";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import type { CrumbHandle } from "./types/types";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    handle: { crumb: () => ({ label: "Home", path: "/" }) } satisfies CrumbHandle,
    children: [
      {
        path: "about",
        element: <About />,
        handle: { crumb: () => ({ label: "About", path: "about" }) } satisfies CrumbHandle,
        children: [
          {
            path: "contact",
            element: <Contact />,
            handle: {
              crumb: () => ({ label: "Contact", path: "contact" }),
            } satisfies CrumbHandle,
          },
        ],
      },
    ],
  },
];
