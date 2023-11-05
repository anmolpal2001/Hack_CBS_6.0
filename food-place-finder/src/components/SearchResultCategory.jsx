import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useSelector,useDispatch} from 'react-redux';
import { setAllSearchRes } from '../Features/allRes';
import Layout from './layout/Layout';
import Card from './card/Card';

function SearchResultCategory() {
    const dispatch = useDispatch();
    const [searchResults, setSearchResults] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/data') // Replace with your API endpoint
      .then((response) => {
        let updatedData=response.data.sort((a,b)=>a.Dining_Rating>b.Dining_Rating);
          updatedData=updatedData.slice(0,100);
          console.log("New Data : ",updatedData)
          dispatch(setAllSearchRes(updatedData));
          setSearchResults(updatedData)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Layout>
      <div className='searchResult'>
      <h2>Search Results for {searchResults[0]?.Restaurant_Name
}</h2>
      <div>
        {searchResults.map((result, index) => (
          <div className='restro' key={index}>
            <Card
          Restaurant_Name={result.Restaurant_Name}
          Category={result.Category}
          Locality={result.Locality}
          Website={result.Website}
          Delivery_Rating={result.Delivery_Rating}
          Phone_No={result.Phone_No}
        />
            </div>
        ))}
      </div>
    </div>
    </Layout>
  );
}

export default SearchResultCategory;
