import React, { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      try {
        const response = await fetch('/api/products');
        console.log(response);
        const data = await response.json();

        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  return (
    <div>
      <h2>Products</h2>

      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <h3>{product.name}</h3>
            <p>{product.info}</p>
            <p>{product.category}</p>
            <p>{product.price}</p>
            <img src={product.image} alt={product.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
