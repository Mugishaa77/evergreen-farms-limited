import React, { useState } from 'react';
import './Category.css';

export default function Category() {
  const [categories, setCategories] = useState([
    {
      name: 'Vegetables',
      subcategories: [
        { name: 'Sukuma-wiki' },
        { name: 'Cabbage' },
        { name: 'Spinach' },
      ],
    },
    {
      name: 'Fruits',
      subcategories: [
        { name: 'Mangoes' },
        { name: 'Oranges' },
        { name: 'Bananas' },
      ],
    },
    {
      name: 'Vegetables',
      subcategories: [
        { name: 'Sukuma-wiki' },
        { name: 'Cabbage' },
        { name: 'Spinach' },
      ],
    },
    {
      name: 'Fruits',
      subcategories: [
        { name: 'Mangoes' },
        { name: 'Oranges' },
        { name: 'Bananas' },
      ],
    }
  ]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showSubcategories, setShowSubcategories] = useState(false);

  const handleCategoryClick = (category) => {
    if (category === selectedCategory) {
      setShowSubcategories(!showSubcategories);
    } else {
      setSelectedCategory(category);
      setShowSubcategories(true);
    }
  };

  return (
    <div className="category">
      <div className="container">
        <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <span class="navbar-brand">
        <h1 >Categories</h1></span>
  </div>
</nav>
        
        <div className="row">
          <div className="col">
            <h3>Find by category</h3>
             <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <button type="button" class="btn btn-success rounded-5"
              onClick={() => handleCategoryClick(category)}>
                {category.name}
              </button>
              {selectedCategory === category && showSubcategories && (
                <ul>
                  {category.subcategories.map((subcategory, index) => (
                    <li key={index}>{subcategory.name}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
          </div>
          <div className="col-4">
            <h3>Find by....</h3>
          </div>
          <div className="col-4">
            <h3>Find by....</h3>
          </div>
        </div>
        
        
        
       
      </div>
    </div>
  );
}