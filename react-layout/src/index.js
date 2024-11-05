import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './css/index.css';
import Layout from "./Layout";
import About from './pages/About';
import Admin from './pages/Admin';
import Home from "./pages/Home";
import Transaction from './pages/Transaction';
import Upload from './pages/Upload';
const root = ReactDOM.createRoot(document.getElementById('root'));
const App = () => {
  return (
<BrowserRouter basename={process.env.PUBLIC_URL}>

<Routes>

      <Route path="/" element={(<Layout />)} >
      <Route index element={(<Home />)} />  
      <Route path="About" element={(<About />)} />  
      <Route path="upload" element={(<Upload />)} />  
      <Route path="transaction" element={(<Transaction />)} />  
      <Route path="admin" element={(<Admin />)} />  

      <Route path="admin" elements={(<Admin />)} />

    </Route>
    </Routes>
    </BrowserRouter>
  );
};


root.render(
  <App />
);
