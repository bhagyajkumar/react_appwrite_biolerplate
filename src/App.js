import React from 'react';
import { AuthProvider, useAuth } from './AuthContext';
import Login from './components/Login';
import Signup from './components/Signup';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </AuthProvider>
  );
};

const Home = () => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <h1>Current user: {currentUser ? currentUser.email : 'Not logged in'}</h1>
  );
};

export default App;
