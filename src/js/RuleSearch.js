import React from 'react';
import { Link } from 'react-router-dom';
const RuleSearch = () => {
  return (
    <div>
        <div>
            <h1>Rule Search Page</h1>
        </div>
        <div><Link to="/home" className="button">Back to Home</Link></div>   
    </div>
  );
};

export default RuleSearch;
