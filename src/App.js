import React from 'react';
import './App.css';
import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import Footer from './pages/Footer';
import Category from './pages/Category';
import About from './pages/About';
import ProductDisplay from './pages/ProductDisplay'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="row">
       <Category />
       <ProductDisplay />
       <About />
       </div>
       <Footer />
    </div>
  );
}

export default App;
