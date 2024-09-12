import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import FontSize from './font-size';
import Welcom_2 from './com_welcom/welcom_2';
import Welcom_3 from './com_welcom/welcom_3';
import AddProject from './addProject';
import Project_1 from './project_1';
import DeleteProject from './deleteProject';
import Add_2 from './add_2';
import Add_2_project from './add_2_project';
import Add_2_delete from './add_2_delete';
import Add_3 from './add_3';
import Add_3_plus from './add_3_+plus';
import Add_3_delete from './add_3_delete';
import Add_4 from './add_4';
import Add_4_data from './add_4_data';
import Add_5 from './add_5';
import Add_5_rol from './add_5_rol';
import Add_5_delete from './add_5_delete';
import Add_6 from './add_6';
import Add_6_plus from './add_6_plus';
import Add_6_delete from './add_6_delete';
import Add_7 from './add_7';
import Add_7_delete from './add_7_delete';
import Add_7_plus from './add_7_plus';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createHashRouter([
  {
    path: "/",
    element: <div><App /></div>,
  },{
    path: "/Welcom_2",
    element: <div><Welcom_2 /></div>,
  },{
    path: "/Welcom_3",
    element: <div><Welcom_3 /></div>,
  },{
    path: "/FontSize",
    element: <div><FontSize /></div>,
  },{
    path: "/AddProject",
    element: <div><AddProject /></div>,
  },{
    path: "/Project_1",
    element: <div><Project_1 /></div>,
  },{
    path: "/DeleteProject",
    element: <div><DeleteProject /></div>,
  },{
    path: "/Add_2",
    element: <div><Add_2 /></div>,
  },{
    path: "/Add_2_project",
    element: <div><Add_2_project /></div>,
  },{
    path: "/Add_2_delete",
    element: <div><Add_2_delete /></div>,
  },{
    path: "/Add_3",
    element: <div><Add_3 /></div>,
  },{
    path: "/Add_3_plus",
    element: <div><Add_3_plus /></div>,
  },{
    path: "/Add_3_delete",
    element: <div><Add_3_delete /></div>,
  },{
    path: "/Add_4",
    element: <div><Add_4 /></div>,
  },{
    path: "/Add_4_data",
    element: <div><Add_4_data /></div>,
  },{
    path: "/Add_5",
    element: <div><Add_5 /></div>,
  },{
    path: "/Add_5_rol",
    element: <div><Add_5_rol /></div>,
  },{
    path: "/Add_5_delete",
    element: <div><Add_5_delete /></div>,
  },{
    path: "/Add_6",
    element: <div><Add_6 /></div>,
  },{
    path: "/Add_6_plus",
    element: <div><Add_6_plus /></div>,
  },{
    path: "/Add_6_delete",
    element: <div><Add_6_delete /></div>,
  },{
    path: "/Add_7",
    element: <div><Add_7 /></div>,
  },{
    path: "/Add_7_delete",
    element: <div><Add_7_delete /></div>,
  },{
    path: "/Add_7_plus",
    element: <div><Add_7_plus /></div>,
  },

]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);