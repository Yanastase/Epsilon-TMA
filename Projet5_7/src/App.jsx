import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/login";
import Register from "./components/register";
import Home from './components/Home';
import useAuth from './hooks/useAuth';

import { AuthProvider } from './contexts/authContext';

const App = () => {
  const {user} = useAuth()
  if (!user){
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
  );
  }
  else {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
  );
  }

};

export default App;
