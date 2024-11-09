import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './comononets/header/Header';
import Main from './leyout/Main';
import Home from './comononets/home/Home';
import Login from './comononets/login/Login';
import Register from './comononets/register/Register';
import Signup from './comononets/signup/Signup';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[{
      path:"/",
      element:<Home></Home>
    },
    {
      path:"/login",
      element:<Login></Login>
    },

    {
      path:"/register",
      element:<Register></Register>
    },
    {
      path:"/signup",
      element:<Signup></Signup>
    }
  
  
  ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
