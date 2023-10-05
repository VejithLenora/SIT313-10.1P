import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './Login';
import Register from './Register';
import TopNavigation from './TopNavigation';
import Home from './screen/Home';

function App() {
  return (
    <Router>
        <TopNavigation/>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    </Router>    
    
  );
}

export default App;
