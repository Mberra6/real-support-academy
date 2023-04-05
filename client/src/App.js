import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import Account from './pages/Account';
import RegisterLogin from './pages/RegisterLoginPage';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/contact" element={<Contact Us/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/loginreg" element={<RegisterLogin/>}/>
      </Routes>
    </div>
  );
}

export default App;
