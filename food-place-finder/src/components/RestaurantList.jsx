import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState('0-500');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    // Make an API request to get the list of restaurants
    axios.get('http://localhost:3000/api/data')
      .then(response => {
        setRestaurants(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    // Filter the restaurants based on the selected price range
    const [minPrice, maxPrice] = selectedPriceRange.split('-').map(Number);
    const filtered = restaurants.filter(restaurant => {
      const pricingFor2 = restaurant.Pricing_for_2;
      return pricingFor2 >= minPrice && pricingFor2 <= maxPrice;
    });
    setFilteredRestaurants(filtered);
  }, [selectedPriceRange, restaurants]);

  return (
    <div>
      <h1>Filter by Price Range:</h1>
      <select onChange={(e) => setSelectedPriceRange(e.target.value)}>
        <option value="0-500">0-500</option>
        <option value="500-1000">500-1000</option>
        <option value="1000-1500">1000-1500</option>
        <option value="1500-2000">1500-2000</option>
        <option value="2000+">2000+</option>
      </select>

      <h2>Filtered Restaurants:</h2>
      <ul>
        {filteredRestaurants.map((restaurant, index) => (
          <li key={index}>{restaurant.Restaurant_Name}</li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantList;
