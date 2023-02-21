import React from 'react';
import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import Category from './pages/Category';
import ProductDisplay from './pages/ProductDisplay';
import About from './pages/About';
import Footer from './pages/Footer';

function App () {

  return (
    <div className="App">
      <Navbar basketItems={basketItems} />
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
