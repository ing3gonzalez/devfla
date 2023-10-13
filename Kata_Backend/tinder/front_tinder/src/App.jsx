import React from 'react';
import ReactDOM from 'react-dom'; // Librería react-dom 
import { HashRouter as Router, Route } from 'react-router-dom'; // Librería react-router-dom
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout';
import Talentos from './views/talentos';
import Empresas from './views/empresas';
import Home from './views/home';

function App() {
 

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "talentos",
          element: <Talentos></Talentos>,
        },
        {
          path: "empresas",
          element: <Empresas></Empresas>,
        },
      ],
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>,
  )
}
/*
  return (
    <>
<div>
        <a href={Empresas} >Empresas</a>
               
        </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}*/

export default App
