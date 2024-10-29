import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './css/index.css';
import Layout from "./Layout";
import About from './pages/About'; // Adjust the path if necessary
import Home from "./pages/Home";
import Transaction from './pages/Transaction';
import Upload from './pages/Upload';
const root = ReactDOM.createRoot(document.getElementById('root'));
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={(<Layout />)} >
      <Route index element={(<Home />)} />  
      <Route path="about" element={(About)} />
      <Route path="upload" element={(<Upload />)} />  
      <Route path="transaction" element={(<Transaction />)} />  

    </Route>
    </Routes>
    </BrowserRouter>
  );
};


root.render(
  <App />
);

