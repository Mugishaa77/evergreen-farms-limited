import { useState } from "react";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import Category from "./pages/Category";
import ProductDisplay from "./pages/ProductDisplay";
import About from "./pages/About";
import Footer from "./pages/Footer";
import sagaa from './produce/sagaa.jpg';
import springOnions from './produce/spring-onions.jpg';
import tomatoes from './produce/tomatoes.jpg';
import redOnions from './produce/red-onions.jpg';
import garlic from './produce/garlic.jpg';


const products = [
  {name: 'Tomatoes',
   image: tomatoes,
   price: 'Ksh 10.00'},
  {
    name: 'Garlic',
    image: garlic,
    price: 'Ksh 10.00'
  },
  {
    name: 'Red Onions',
    image: redOnions,
    price: 'Ksh 10.00'
  },
  {
    name: 'Sagaa',
    image: sagaa,
    price: 'Ksh 10.00'
  },
  {
    name: 'Spring Onions',
    image: springOnions,
    price: 'Ksh 10.00'
  }
  
];


function App() {
  const [basketItems, setBasketItems] = useState([]);

  const handleAddToBasket = (product) => {
    setBasketItems([...basketItems, product]);
  };

  const handleRemoveFromBasket = (product) => {
    setBasketItems(basketItems.filter((item) => item !== product));
  };

  return (
    <div className="App">
      <Navbar basketItems={basketItems} />
      <Hero />
      <div className="row">
        <Category />
        <ProductDisplay
          products={products}
          basketItems={basketItems}
          handleAddToBasket={handleAddToBasket}
          handleRemoveFromBasket={handleRemoveFromBasket}
        />
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default App;
