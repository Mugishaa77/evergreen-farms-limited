import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import ProductDisplay from "./components/ProductDisplay";
import About from "./components/About";
import Footer from "./components/Footer";

const products = [
  {
    name: "Tomatoes",
    image: tomatoes,
    price: "Ksh 10.00",
  },
  {
    name: "Garlic",
    image: garlic,
    price: "Ksh 10.00",
  },
  {
    name: "Red Onions",
    image: redOnions,
    price: "Ksh 10.00",
  },
  {
    name: "Sagaa",
    image: sagaa,
    price: "Ksh 10.00",
  },
  {
    name: "Spring Onions",
    image: springOnions,
    price: "Ksh 10.00",
  },
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
