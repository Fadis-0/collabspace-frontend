import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { 
  createBrowserRouter,
  RouterProvider, 
} from 'react-router-dom';

import Layout from './components/Layout';

import App from './App.tsx';

import Login from './pages/Login';

import Dashboard from './pages/Dashboard';
import Chat from './pages/Chat';
import Calendar from './pages/Calendar';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/dashboard",
    element: <Layout><Dashboard /></Layout>
  },
  {
    path: "/chat",
    element: <Layout><Chat /></Layout>
  },
  {
    path: "/calendar",
    element: <Layout><Calendar /></Layout>
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
