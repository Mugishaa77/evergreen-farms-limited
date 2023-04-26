import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// pages
import Navbar from './pages/Navbar';
import Basket from './pages/Basket';
import Hero from './pages/Hero';
import NotFound from './pages/NotFound';
import BasketOne from './pages/BasketOne';
import About from './pages/About';
import Footer from './pages/Footer';
import Display from './pages/Display';
import Category from './pages/Category';
import Wholesale from './pages/Wholesale';
import Retail from './pages/Retail';
import Checkout from './pages/Checkout';


// login
import Login from './login/Login';

// toastify
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// grocer-UI
import GrocerProfile from './grocer-ui/GrocerProfile';
import GrocerCreateProduct from './grocer-ui/GrocerCreateProduct';
import GrocerProducts from './grocer-ui/GrocerProducts';
import GrocerSummary from './grocer-ui/GrocerSummary';
import GrocerDashboard from './grocer-ui/GrocerDashboard';

// farmer-UI
import FarmerProfile from './farmer-UI/FarmerProfile';
import FarmerDashboard from './farmer-UI/FarmerDashboard';
import FarmerProducts from './farmer-UI/FarmerProducts';
import Summary from './farmer-UI/Summary';
import CreateProduct from './farmer-UI/CreateProduct';

// customer-form
import SignUp from './customer-form/SignUp';

// stalls
import StallDisplay from './stalls/StallDisplay';
import StallLayout from './stalls/StallLayout';

// register
import Register from './registration/Register';




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
          <Route path="/about" exact element={<About/>} />
          <Route path="/contact-us" exact element={<Footer/>}/>
          <Route path="/main-display" exact element={<Display/>}/>
          <Route path="/category" exact element = {<Category/>}/>
          <Route path="/wholesale" exact element= {<Wholesale/>}/>
          <Route path="/retail" exact element={<Retail/>}/>
          <Route path="/stall" exact element={<StallDisplay/>}/>
          <Route path="/checkout" exact element={<Checkout/>}/>
          <Route path="/register" exact element={<Register/>}/>
          

          <Route path = "/farmer-dashboard" exact element={<FarmerDashboard/>}>

            <Route path="farmer-profile" exact element = {<FarmerProfile/>}/>
            <Route path="summary" exact element={<Summary/>}/>
            <Route path="farmer-products" exact element={<FarmerProducts/>}>
              <Route path="create-product" exact element={<CreateProduct/>}/>
            </Route>
            </Route>

            <Route path = "/grocer-dashboard" exact element={<GrocerDashboard/>}>

            <Route path="grocer-profile" exact element = {<GrocerProfile/>}/>
            <Route path="grocer-summary" exact element={<GrocerSummary/>}/>
            <Route path="stall-layout" exact element={<StallLayout/>}/>
            <Route path="grocer-products" exact element={<GrocerProducts/>}>
              <Route path="grocer-create-product" exact element={<GrocerCreateProduct/>}/>
            </Route>
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
