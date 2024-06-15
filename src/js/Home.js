// src/js/Home.js
import React from 'react';
import '../css/Home.css';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Home = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home-container">
      <div className="text-container">
        <h1>Welcome to the Vault, {user.displayName}!</h1>
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
