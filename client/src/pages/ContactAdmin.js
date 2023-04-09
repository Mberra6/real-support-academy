import React from 'react';
import NavbarAdmin from '../components/Navbar-admin/NavbarAdmin';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import ContactUsForm from '../components/ContactForm/ContactUsForm';
import ContactHero from '../assets/contactHeroImg2.jpg';

const ContactAdmin = () => {
  return (
    <>
    <NavbarAdmin/>
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

export default ContactAdmin;
