import React, { useEffect, useState,useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchContext from '../context/SearchContext';


function RestaurantSearch() {
  const context = useContext(SearchContext);
  const {locality, setLocality} = context;
  // const [locality, setLocality] = useState('');
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
    // if(locality==''){
    //     return alert("Empty locality...");
    // }else{
        
    // }
    
    const filteredResults = data.filter((item) =>
      item.Locality.toLowerCase().includes(locality.toLowerCase())
    );
    setLocality(filteredResults);
    console.log(filteredResults);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for any location"
        value={locality}
        onChange={(e) => setLocality(e.target.value)}
      />
      <Link to={"/search-results"}><button onClick={handleSearch}>Search</button></Link>

      {/* <div>
        {searchResults.map((result, index) => (
          <div key={index}>
            <h3>{result.Restaurant_Name}</h3>
            <p>Locality: {result.Locality}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default RestaurantSearch;
