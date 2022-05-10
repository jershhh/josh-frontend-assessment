import React from "react";
import "./GiphyList.css";
import GiphyItem from "./GiphyItem";
import ErrorMsg from "./ErrorMsg";

const GiphyList = props => {
  const results = props.data; 
  let gifList;
  if (results.length > 0) {

    gifList = results.map(gif => 
      <GiphyItem img={gif.images.fixed_height.url} date={gif.trending_datetime} key={gif.url} title={gif.title} link={gif.images.fixed_height.url} />
     );
    console.log(props);
  } else {
    gifList = <ErrorMsg />
  }
  
  return (
    <div className="results-container">
    <ul className="results-list">
        {gifList}
    </ul>
    </div>
  );
}

export default GiphyList;