// src/js/Login.js
import React from 'react';
import '../css/Login.css';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase.config.js';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate('/home');
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };

  return (
    <div className="login-container">
      <h1>Login with Google</h1>
      <button onClick={handleGoogleLogin} className="login-button" id="loginButton">Login with Google</button>
    </div>
  );
};

export default Login;
