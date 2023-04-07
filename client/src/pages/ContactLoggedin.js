import React from 'react';
import Navbar2 from '../components/Navbar-loggedin/Navbar-loggedin';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import ContactUsForm from '../components/ContactForm/ContactUsForm';
import ContactHero from '../assets/contactHeroImg2.jpg';

const Contact = () => {
  return (
    <>
    <Navbar2/>
    <Hero
      cName="hero-mid1"
      heroImg={ContactHero}
      title="Need Help?"
      // subHeading = "hide"
      // hide these buttons for hero of about section in hero.css (only needed in hero of home page)
      btnClass = "hide"
      searchBtnClass = "hide"
    /> 
    <ContactUsForm/>
    <Footer/>
    </>

  );
}

export default Contact;
