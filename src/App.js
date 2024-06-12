import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Characters from './js/Characters';
import Partys from './js/Partys';
import ItemSearch from './js/ItemSearch';
import Adventures from './js/Adventures';
import RuleSearch from './js/RuleSearch';
import Home from './js/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/partys" element={<Partys />} />
      <Route path="/item-search" element={<ItemSearch />} />
      <Route path="/adventure" element={<Adventures />} />
      <Route path="/rule-search" element={<RuleSearch />} />
    </Routes>
  );
};

export default App;
