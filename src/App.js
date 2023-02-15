import React from 'react';
import './App.css';
import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import Footer from './pages/Footer';
import Products from './pages/Products';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="row">
      <Products />
       </div>
       <Footer />
     
      
    </div>
  );
}

export default App;
