import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import App from './App';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Details from './pages/Details/Details';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/details/:id' element={<Details/>}/>

    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

