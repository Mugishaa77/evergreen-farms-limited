import React from 'react';
import './App.css';
import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import Footer from './pages/Footer';
import Products from './pages/Products';
import Category from './pages/Category';



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
