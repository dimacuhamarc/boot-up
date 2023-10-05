import React from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Pricing from "./pages/Pricing";

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
  },
  {
    path: "/pricing",
    component: () => <Pricing/>,
    exact: true
  }
];

export default RouteData;