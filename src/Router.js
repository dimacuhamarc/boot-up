import { Route, Routes } from 'react-router-dom';
import PagesData from './RouteData';
import React from 'react';

const Router = () => {
  return (
    <Routes>
      {PagesData.map((page, index) => (
        <Route
          key={index}
          path={page.path}
          element={page.component()}
          exact={page.exact}
        />
      ))}
    </Routes>
  );
}


export default Router;