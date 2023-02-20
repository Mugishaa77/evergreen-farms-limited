import { useState } from 'react';
import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import Category from './pages/Category';
import ProductDisplay from './pages/ProductDisplay';
import About from './pages/About';
import Footer from './pages/Footer';
import Basket from './pages/Basket';
import products from './ProductData';

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
        <Basket
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
