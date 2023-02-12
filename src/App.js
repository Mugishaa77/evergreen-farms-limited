import React from 'react';
import './App.css';
import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import Footer from './pages/Footer';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="row">
      <Footer />
       </div>
     
      
    </div>
  );
}

export default App;
