import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';
import './index.css';
import Home from './screens/Home';
import Security_Privacy from './screens/Security_Privacy';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Terms_Conditions from './screens/Terms_Conditions';
import Cookie_Policy from './screens/Cookie_Policy';
import I18nInitializer from './i18n';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/Security_Privacy',
    element: <Security_Privacy />
  },
  {
    path: '/Terms_Conditions',
    element: <Terms_Conditions />
  },
  {
    path: '/Cookie_Policy',
    element: <Cookie_Policy />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <I18nInitializer />
    <RouterProvider router={router} />
  </React.StrictMode>
);

