import React, { useState, useEffect } from 'react';
import "./App.css";
import axios from 'axios';
import Searchbar from "./components/Searchbar";
import GiphyList from "./components/GiphyList"; 

function App() {
   const [data, setData] = useState([]);
   const [query, setQuery] = useState('squirtle');
 
   const search = (value) => setQuery(value);

  useEffect(() => {

    axios(`https://api.giphy.com/v1/gifs/search?q=${query}&limit=10&api_key=4hbFOPdn6QvIJZQdvO0vyxRmM7Nflgtc`)
      .then(response => setData(response.data.data))
      .catch(error => console.log('ERROR FETCHING', error));
  }, [query]);

  return (
    <div className="app">
      <div className="main">
        <h1>Giphy Search</h1>
        <Searchbar onSearch={search} />
        <GiphyList data={data} />
      </div>
    </div>
  );
}

export default App;
