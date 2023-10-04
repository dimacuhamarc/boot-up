import React from "react";
import Home from "./pages/Home/Home";

const RouteData = [
  {
    path: "/",
    component: () => <Home />,
    exact: true
  },
  {
    path: "*",
    component: () => <div>404</div>,
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