import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import Dashboard from './views/Dashboard';
import Seccion1 from './componentes/Seccion1';
import Seccion2 from './componentes/Seccion2';
import Seccion3 from './componentes/Seccion3';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
      
  },
  {
    path: "/dashboard",
    element: <Dashboard />, 
      
  },
  {
    path: "/dashboard/seccion1",
    element: <Seccion1 />, 
      
  },
  {
    path: "/dashboard/seccion2",
    element: <Seccion2 />, 
      
  },
  {
    path: "/dashboard/seccion3",
    element: <Seccion3 />, 
      
  },
  
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

