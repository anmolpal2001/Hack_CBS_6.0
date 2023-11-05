import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import { setAllRes } from '../Features/allRes';
import Card from '../components/card/Card';
import Layout from '../components/layout/Layout';
import "./SearchResult.css"
import SearchContext from '../context/SearchContext';

function SearchResult() {
  const dispatch= useDispatch();
  const context = useContext(SearchContext);
    const [locality, setLocality] = useState([]);
    const [data, setData] = useState([]);
  
    useEffect(() => {
      axios
        .get('http://localhost:3000/api/data')
        .then((response) => {
          // setData(response.data[0]);
          console.log("Old Data : ",response.data)

          let updatedData=response.data.sort((a,b)=>a.Dining_Rating>b.Dining_Rating);
          updatedData=updatedData.slice(0,100);
          console.log("New Data : ",updatedData)
          dispatch(setAllRes(updatedData));
          setLocality(updatedData)

        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
    console.log("locality : ",locality)
  
    // const handleSearch = () => {
    //   // Filter the data based on the entered locality
    //   const filteredResults = data.filter((item) =>
    //     item.Locality.toLowerCase().includes(locality.toLowerCase())
    //   );
    //   setSearchResults(filteredResults);
    // };
  return (
    <Layout>
      <div className='searchResult'>
      <h2>Search Results for {locality[0]?.Locality}</h2>
      {locality==[] && <div>adsa</div>}
      <div>
        {/* {locality?.size()==0 && <div>Please visit the search bar page.</div>} */}
        {/* {typeof locality} */}
        {/* {locality?.size()>0 &&  locality?.map((result, index) => ( */}
        {/* <div className="card-container"> */}
        {locality?.map((result, index) => (
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
    // </div>
  );
}

export default SearchResult;
