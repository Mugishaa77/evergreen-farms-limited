import React, { usestate} from 'react';



export default function Checkout () {

  const Checkout = ({ products }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  const totalPrice = cart.reduce((total, product) => total + product.price, 0);


  return (
    <div>
      <h2>Cart</h2>
      {cart.length > 0 ? (
        <div>
          {cart.map((product, index) => (
            <div key={index}>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
          <h4>Total price: {totalPrice}</h4>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
      <h2>Products</h2>
      {products.map((product, index) => (
        <div className="display" key={index}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
};


  

}