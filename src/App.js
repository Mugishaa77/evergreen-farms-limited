import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import Category from './pages/Category';
import ProductDisplay from './pages/ProductDisplay';
import About from './pages/About';
import Footer from './pages/Footer';

function App () {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/basket" component={Basket} />
        <Route path="/hero" component={Hero} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
