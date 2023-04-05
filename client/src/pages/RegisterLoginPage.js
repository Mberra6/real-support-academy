import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { RegisterLogin } from '/Users/vivian/Desktop/real-support-academy/client/src/pages/RegisterLogin/RegisterLogin.jsx';

const RegisterLoginPage = (props) => {

  return (
    <>
      <Navbar/>
      <RegisterLogin/>
      <Footer/>    
    </>

  );
}

export default RegisterLoginPage;
