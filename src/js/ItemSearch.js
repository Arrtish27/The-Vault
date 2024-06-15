import React from 'react';
import { Link } from 'react-router-dom';
const ItemSearch = () => {
  return (
    <div>
        <div>
            <h1>Item Search Page</h1>
        </div>
        <div><Link to="/home" className="button">Back to Home</Link></div>   
    </div>
  );
};

export default ItemSearch;
