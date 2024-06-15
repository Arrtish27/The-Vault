// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Characters from './js/Characters';
import Partys from './js/Partys';
import ItemSearch from './js/ItemSearch';
import Adventures from './js/Adventures';
import RuleSearch from './js/RuleSearch';
import Home from './js/Home';
import Login from './js/Login';
import { AuthProvider, useAuth } from './js/AuthContext';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { user } = useAuth();
  return user ? <Component {...rest} /> : <Navigate to="/" />;
};

const App = () => {
  return (
    <AuthProvider>
        <Routes>
          <Route path="*" element={<Login />} />
          <Route path="/home" element={<ProtectedRoute element={Home} />} />
          <Route path="/characters" element={<ProtectedRoute element={Characters} />} />
          <Route path="/partys" element={<ProtectedRoute element={Partys} />} />
          <Route path="/item-search" element={<ProtectedRoute element={ItemSearch} />} />
          <Route path="/adventure" element={<ProtectedRoute element={Adventures} />} />
          <Route path="/rule-search" element={<ProtectedRoute element={RuleSearch} />} />
        </Routes>
    </AuthProvider>
  );
};

export default App;
