import type { RouteObject } from "react-router";
import App from "./App";
import About from "./components/About/About";
import Contact, { loader as contactLoader, ErrorBoundary } from "./components/Contact/Contact";
import type { CrumbHandle } from "./types/types";
import Layout from "./components/Layout/Layout";
import Contact2, {
  loader as contact2Loader,
  ErrorBoundary as ErrorBoundary2,
} from "./components/Contact2/Contact2";

export const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
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
                loader: contactLoader,
                handle: {
                  crumb: () => ({ label: "Contact", path: "contact" }),
                } satisfies CrumbHandle,
                errorElement: <ErrorBoundary />,
              },
              {
                path: "contact2",
                element: <Contact2 />,
                loader: contact2Loader,
                handle: {
                  crumb: () => ({ label: "Contact2", path: "contact2" }),
                } satisfies CrumbHandle,
                errorElement: <ErrorBoundary2 />,
              },
            ],
          },
        ],
      },
      /* {
        path: "about",
        element: <About />,
        handle: {
          crumb: () => ({ label: "About", path: "about" }),
        } satisfies CrumbHandle,
      },
      {
        path: "about/contact",
        element: <Contact />,
        loader: contactLoader,
        handle: {
          crumb: () => ({ label: "Contact", path: "contact" }),
        } satisfies CrumbHandle,
        errorElement: <ErrorBoundary />,
      }, */
    ],
  },
];
