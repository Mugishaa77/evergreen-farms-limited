import React from 'react';
import './Checkout.css';


export default function StepTwo () {
    return (
        <div className="step-two">
            <h1>Order Summary Receipt</h1>

      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Product 1</td>
            <td>2</td>
            <td>$10</td>
            <td>$20</td>
          </tr>
          <tr>
            <td>Product 2</td>
            <td>1</td>
            <td>$15</td>
            <td>$15</td>
          </tr>
          <tr>
            <td colSpan="3"><strong>Grand Total</strong></td>
            <td><strong>$35</strong></td>
          </tr>
        </tbody>
      </table>
  
            
            
        </div>
    );
}