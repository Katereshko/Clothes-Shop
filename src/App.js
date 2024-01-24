import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Shop from './Shop';
import About from './About';
import Contact from './Contact';

function App() {

  return <Router>
  <nav>
    <Link to="/" className="link">Shop</Link>
    <Link to="/about" className="link">About</Link>
    <Link to="/contact-us" className="link">Contact us</Link>
  </nav>
  <Routes>
    <Route path="/" element={<Shop/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact-us" element={<Contact/>} />
  </Routes>
</Router>

}

export default App;
