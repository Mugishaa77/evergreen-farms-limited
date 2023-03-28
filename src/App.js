import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Basket from './pages/Basket';
import Hero from './pages/Hero';
import NotFound from './pages/NotFound';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import BasketOne from './pages/BasketOne';
import Login from './login/Login';
import SignUp from './customer-form/SignUp';
import FarmerProfile from './farmer-UI/FarmerProfile';
import ProductDisplay from './farmer-UI/ProductDisplay';
import Product from './farmer-UI/Product';
import AddProduct from './farmer-UI/AddProduct';
import Dashboard from './farmer-UI/Dashboard';

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
          <Route path="/login" exact element={<Login/>} />
          <Route path="/sign-up" exact element={<SignUp/>} />
          <Route path="/farmer-ui" exact element={<FarmerProfile/>} />
          <Route path="/product-display" exact element={<ProductDisplay/>} />
          
          
          <Route path="/add-product" exact element={<AddProduct/>}/>
          <Route path="/dashboard" exact element={<Dashboard/>}>
             <Route path="product" exact element={<Product/>} />
          </Route>

          

           
          {/* Redirect to /not-found for all other routes */}
          <Route path="*" element={<Navigate to="/not-found" />} />
          <Route path="/not-found" element={<NotFound />} />
          

      </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
