import React from 'react';
import { Link } from 'react-router-dom';
import './Display.css';



export default function Display (){
    return(
        <div className="main-display ">
            <div className="container">
             <Link to="/" className="back-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
</svg>Back
            </Link>
            <Link to="/" className="next-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"/>
                </svg> Next
            </Link>
            <h3>Welcome to Evergreen!</h3>
            <p>Find what you are looking for <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></p>
<input type="text" placeholder="Search Here"></input><button>Search</button>

<div className="right-nav">
    <Link  to ="/basket" className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
            }
           ><p>View Products in Fresh Market</p></Link>

            <Link  to ="/category" className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
            }
           ><p>Sort by Category</p></Link>

            <Link to ="/wholesale" className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
            }
            ><p>Wholesale Products</p></Link>

            <Link to ="/retail" className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
            }
            ><p>Retail Products</p></Link>
 
</div>

    
            </div>
            </div>
            
             
    );

}