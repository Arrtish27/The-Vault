import React from 'react';
import { Link } from 'react-router-dom';
const Characters = () => {
  return (
    <div>
        <div className="characters-container">
            <h1>Characters Page</h1>
        </div>
        <div><Link href="/" className="button">Back to Home</Link></div> 
    </div>
  );
};

export default Characters;
