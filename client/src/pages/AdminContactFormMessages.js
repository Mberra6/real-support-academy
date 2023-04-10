import React from 'react';
import NavbarAdmin from '../components/Navbar-admin/NavbarAdmin';
import MyCoursesHeroImg from "../assets/MyCoursesHeroImg.jpg";
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import AdminMessages from '../components/AdminMessages/AdminMessages';

const AdminContactFormMessages = () => {
  return (
    <>
    <NavbarAdmin/>
    <Hero
      cName="hero-mid2"
      heroImg={MyCoursesHeroImg}
      title="Messages"
      // subHeading = "hide"
      // hide these buttons for hero of about section in hero.css (only needed in hero of home page)
      btnClass = "hide"
      searchBtnClass = "hide"
    />
    <AdminMessages/>
    <Footer/>
    </>
  );
}

export default AdminContactFormMessages;
