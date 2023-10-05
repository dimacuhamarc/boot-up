import React from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { About } from "./components/About/About";

const RouteData = [
  {
    path: "/",
    component: () => <Home />,
    exact: true
  },
  {
    path: "*",
    component: () => <NotFound />,
    exact: true
  },
  {
    path: "/about",
    component: () => <About />,
    exact: true
  },
  {
    path: "/contact",
    component: () => <div>Contact</div>,
    exact: true
  }
];

export default RouteData;