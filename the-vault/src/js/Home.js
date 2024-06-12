import React from 'react';
import '../css/Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="container">
      <div className="text-container">
        <h1>Welcome to the Vault!</h1>
        <h2>This is a D&D custom app that's in development. For further use, please contact the developer.</h2>
      </div>
      <div className="padding-container"></div>
      <div className="button-container">
        <Link to="/characters" className="button_home">Characters</Link>
        <Link to="/partys" className="button_home">Partys</Link>
        <Link to="/item-search" className="button_home">Item Search</Link>
        <Link to="/adventure" className="button_home">Adventures</Link>
        <Link to="/rule-search" className="button_home">Rule Search</Link>
      </div>
    </div>
  );
};

export default Home;
