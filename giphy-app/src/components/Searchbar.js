import React, { useState } from "react";
import "./Searchbar.css";


function Searchbar(props) {
const [searchText, setSearchText] = useState('');

const searchChangeQuery = (e) => setSearchText(e.target.value);

const handleSubmit = (e) => {
  e.preventDefault();
  props.onSearch(searchText);
}
        return (
            <div className="search-container" onSubmit={handleSubmit}>
              <form className="search-form">
                <input type="text" placeholder="Search here" onChange={searchChangeQuery} />
                <button type="submit" >Search</button>
              </form>
            </div> 
       );
};

export default Searchbar;