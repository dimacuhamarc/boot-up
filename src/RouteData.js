import React from "react";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound";

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
    component: () => <div>About</div>,
    exact: true
  },
  {
    path: "/contact",
    component: () => <div>Contact</div>,
    exact: true
  }
];

export default RouteData;