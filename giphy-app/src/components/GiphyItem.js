import React from "react";
import "./GiphyItem.css";

const GiphyItem = props => {

  function copyGiphyLink(e) {
    e.preventDefault();
    navigator.clipboard.writeText(props.link);
  }

  return (
    <li className="gif-wrap">
      <img src={props.img} alt={props.title} />
      <div className="gif-url-section">
        <div className="gif-url-info">
            <p><span>Name:</span> {props.title}</p>
            <p><span>Date:</span> {props.date}</p>
           
        </div>
        <button className="gif-url-button" onClick={copyGiphyLink}>Copy Giphy</button>
      </div>
    </li>
    )
  };
  

  export default GiphyItem;
