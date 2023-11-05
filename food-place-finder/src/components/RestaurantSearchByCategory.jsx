import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link  } from 'react-router-dom';
import SearchContext from '../context/SearchContext';

function RestaurantSearchByCategory() {
  const context = useContext(SearchContext)
  const {searchCat,setSearchCat}=context;
  const [category, setCategory] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/data') 
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSearch = () => {
    const filteredResults = data.filter((item) =>
      item.Category.toLowerCase().includes(category.toLowerCase())
    );
    setSearchResults(filteredResults);
    console.log(filteredResults);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for any category of food"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <Link to="search-result-category">
        <button onClick={handleSearch}>Search</button>
      </Link>
    </div>
  );
}

export default RestaurantSearchByCategory;
