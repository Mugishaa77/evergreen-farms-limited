import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
},
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
  <Link to="/main-display" className="back-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
</svg>Back
            </Link> 
      
      
       
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <button
                type="button"
                className="btn btn-success rounded-5"
                onClick={() => handleCategoryClick(category)}
              >
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

      
    </div>
  
);
}




