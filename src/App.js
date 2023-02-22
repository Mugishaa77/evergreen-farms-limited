import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Basket from './pages/Basket';
import NotFound from './pages/NotFound';


function App () {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />

      <Routes>
          <Route path="/" exact element={<Basket/>} />
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
