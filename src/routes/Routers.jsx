// define routes

import { Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects";
import { Contact } from "../pages/Contact";
import { Resume } from "../pages/Resume";

import { Layout } from "../components/Layout";
import path from "../utils/path";

export const Routers = [
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
        path: `${path.RESUME}`,
        element: <Resume />,
      },
      {
        path: `${path.PROJECTS}`,
        element: <Projects />,
      },
      {
        path: `${path.CONTACT}`,
        element: <Contact />,
      },
    ],
  },
];
