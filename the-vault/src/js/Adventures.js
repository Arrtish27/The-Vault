import React from 'react';
import { Link } from 'react-router-dom';
const Adventures = () => {
  return (
    <div>        
        <div>
            <h1>Adventures</h1>
        </div>
        <div><Link to="/" className="button">Back to Home</Link></div>   
      {/* Add your content here */}
    </div>
  );
};

export default Adventures;
