import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

const App = () => (
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
    </Routes>
  </BrowserRouter>
)

export default App;
