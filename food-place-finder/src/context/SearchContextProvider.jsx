import React,{useState} from "react";
import SearchContext from "./SearchContext";

const SearchContextProvider = ({children}) => {
    const [searchCat, setSearchCat] = useState([]);
    const [locality, setLocality] = useState("");

    return(
        <SearchContext.Provider value={{searchCat,setSearchCat,locality,setLocality}}>
            {children}
        </SearchContext.Provider>
    )
};

export default SearchContextProvider;