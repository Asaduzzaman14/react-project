import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../Layout/layout";
import { StateProvider } from "../context/myContext";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <StateProvider>
        <Layout />,
      </StateProvider>
    ),
    children: [
      {
        path: "/",
        element: (
          <div>
            <App />
          </div>
        ),
      },
      {
        path: "/about",
        element: (
          <div>
            <p>This is about page</p>
          </div>
        ),
      },
    ],
  },
]);
