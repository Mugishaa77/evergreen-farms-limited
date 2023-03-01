import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Basket from './pages/Basket';
import NotFound from './pages/NotFound';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import BasketOne from './pages/BasketOne';

function App () {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer/>
      <Navbar />

      <Routes>
          <Route path="/" exact element={<Basket/>} />
          <Route path="/basket-one" exact element={<BasketOne />} />
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
