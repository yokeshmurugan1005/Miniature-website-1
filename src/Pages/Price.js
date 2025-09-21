import React from 'react';
import '../Style/Price.css';

function Price() {
  return (
    <div className="price-container">
      <h2>Pricing Based on Complexity & Material</h2>
      <table className="price-table">
        <thead>
          <tr>
            <th>Material Weight (g)</th>
            <th>Complexity</th>
            <th>Price (INR)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>50g</td>
            <td>Simple</td>
            <td>200 - 500</td>
          </tr>
          <tr>
            <td>100g</td>
            <td>Moderate</td>
            <td>500 - 1000</td>
          </tr>
          <tr>
            <td>200g</td>
            <td>Complex</td>
            <td>1000 - 2000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Price;
