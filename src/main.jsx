import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ClassRoom from './components/ClassRoom.jsx';
import Login from './components/Login.jsx';
import Sidebar from './components/Sidebar.jsx';
import Header from './components/Header.jsx';
import Register from './components/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/Register",
    element:<><Register/></>
  },
  {
    path: "/Login",
    element:<> <Header></Header><Login /> </>,
  },
  {
    path: "/Home",
    element: <App />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/classroom/:classname',
    element: <> <Header></Header>  <ClassRoom /></>,
  },
]);
// Pass the router to the provider so that the router is available to the entire app
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);