import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Join from './components/Join';
import Root from './routes/root';
import SubFrequencies from './components/SubFrequencies';
import reportWebVitals from './reportWebVitals';
import Error from './components/Error';

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "join",
        element: <Join />
      },
      {
        path: "subfrequencies",
        element: <SubFrequencies />
      }
    ],
    errorElement: <Error/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
