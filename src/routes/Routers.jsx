// define routes

import { Navigate, useRoutes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Layout } from "../components/Layout";
import path from "../utils/path";

const Routers = () => {
  const routes = useRoutes([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          element: <Navigate to={`${path.HOME}`} />,
          index: true,
        },
        {
          path: `${path.HOME}`,
          element: <Home />,
        },
        {
          path: `${path.SERVICE}`,
          element: <Home />,
        },
        {
          path: `${path.RESUME}`,
          element: <Home />,
        },
        {
          path: `${path.WORK}`,
          element: <Home />,
        },
        {
          path: `${path.CONTACT}`,
          element: <Home />,
        },
      ],
    },
  ]);

  return routes;
};

export default Routers;
