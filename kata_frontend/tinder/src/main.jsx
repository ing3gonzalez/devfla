import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import Navbar from './components/Navbar';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>
    ,
    children: [
      {
        path: "about",
        element: <div>Página de información de la empresa</div>,
      },
      {
        path: "contact",
        element: <div>Página de contacto de la empresa</div>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)