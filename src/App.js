import React from 'react';
import './App.css';
import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import Footer from './pages/Footer';
import Category from './pages/Category';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="row">
       <Category />
       <Products />
       </div>
       <Footer />
     
      
    </div>
  );
}

export default App;
