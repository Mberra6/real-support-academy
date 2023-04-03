import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import { RegisterLogin } from './pages/RegisterLogin/RegisterLogin';

import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/reglog" element={<RegisterLogin/>}/>
      </Routes>
    </div>
  );
}

export default App;


