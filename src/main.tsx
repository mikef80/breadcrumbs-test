import { createRoot } from "react-dom/client";
import "./index.scss";
import { RouterProvider } from "react-router/dom";
import { routes } from "./routes.tsx";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
