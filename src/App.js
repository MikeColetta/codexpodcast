import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/CustomNavbar';
import Homepage from "./pages/Homepage";
import About from "./pages/About"
import Contact from "./pages/Contact";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <CustomNavbar/>
      <Routes>
        <Route path= "/" element={<Homepage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
