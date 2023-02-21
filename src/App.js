import React from 'react';
import { BrowserRouter, Route, Routes, Redirect } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import Basket from './pages/Basket';
import Category from './pages/Category';
import ProductDisplay from './pages/ProductDisplay';
import About from './pages/About';
import Footer from './pages/Footer';

function App () {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/basket" component={Basket} />
        <Route path="/hero" component={Hero} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
