import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/pricing',
    element: <Pricing />,
  },
]);

export default () => {
  return (
    <StylesProvider>
      <RouterProvider router={router} />
    </StylesProvider>
  );
};
