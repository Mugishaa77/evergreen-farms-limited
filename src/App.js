import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Basket from './pages/Basket';
import Hero from './pages/Hero';
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
          <Route path="/" exact element={<Hero />} />
          <Route path="/basket" exact element={<Basket/>} />
          <Route path="/basket-one" exact element={<BasketOne />} />
          <Navigate to="/not-found" exact element={<NotFound />} />

      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
