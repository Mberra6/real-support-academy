import React from 'react';
import PrivateRoutes from './utils/PrivateRoutes';
import GeneralRoutes from './utils/GeneralRoutes';
import Home from './pages/Home';
import HomeLoggedin from './pages/HomeLoggedin';
import About from './pages/About';
import AboutLoggedin from './pages/AboutLoggedin';
import Courses from './pages/Courses';
import CoursesLoggedin from './pages/CoursesLoggedin';
import Contact from './pages/Contact';
import ContactLoggedin from './pages/ContactLoggedin';
import Account from './pages/Account';
import RegisterLogin from './pages/RegisterLoginPage';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className='App'>
      <Routes>
        <Route element={<PrivateRoutes/>}>
          <Route path="/user/home" element={<HomeLoggedin/>}/>
          <Route path="/user/about" element={<AboutLoggedin/>}/>
          <Route path="/user/courses" element={<CoursesLoggedin/>}/>
          <Route path="/user/contact" element={<ContactLoggedin Us/>}/>
          <Route path="/user/account" element={<Account/>}/>
        </Route>
        <Route element={<GeneralRoutes/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/contact" element={<Contact Us/>}/>
          <Route path="/loginreg" element={<RegisterLogin/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
