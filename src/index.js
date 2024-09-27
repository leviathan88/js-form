import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
const root = document.getElementById('root')
ReactDOM.createRoot(root).render(
  <BrowserRouter><App /></BrowserRouter>
);

// controlled uncontrolled difference
// example usestate useref
// state batching
// event loop
// promise
// function, arrow function
// recursion and stack
// try catch
