import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App'; // Import your main App component
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={ <App /> }>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
