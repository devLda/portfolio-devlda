// define routes

import { Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Skills } from "../pages/Skills";
import { Experience } from "../pages/Experience";
import { Projects } from "../pages/Projects";
import { Contact } from "../pages/Contact";

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
        path: `${path.SKILLS}`,
        element: <Skills />,
      },
      {
        path: `${path.EXPERIENCE}`,
        element: <Experience />,
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
