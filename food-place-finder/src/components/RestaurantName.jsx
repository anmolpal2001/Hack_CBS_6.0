import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RestaurantName() {
  const [restaurantName, setRestaurantName] = useState('');

  useEffect(() => {
    // Make an API request to get the restaurant name
    axios.get('http://localhost:3000/api/data')
      .then(response => {
        // Assuming your JSON structure is an array, you may need to access the first element
        console.log('API Response:', response.data);
        const firstRestaurant = response.data[0];
        const name = firstRestaurant.Restaurant_Name;
        setRestaurantName(name);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Restaurant Name: {restaurantName}</h1>
    </div>
  );
}

export default RestaurantName;
