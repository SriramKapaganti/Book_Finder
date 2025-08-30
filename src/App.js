import React from 'react';
import NavBar from './components/Header/NavBar';
import Home from './components/HomeRoute/HomeRoute';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <Home />
    </div>
  );
};

export default App;
