import React from 'react';
import Navbar2 from '../components/Navbar/Navbar2';
import Hero from '../components/Hero/Hero';
import ProfileHeroImg from '/Users/vivian/Desktop/real-support-academy/client/src/assets/profileHeroImg1.jpg';
import{Link} from'react-router-dom';
import Profile from '../components/UserProfile/Profile';
import Footer from '../components/Footer/Footer';

// import MetaData from ''


const Account = () => {
  return (
    <>
    <Navbar2/>
    <Hero
      cName="hero-mid1"
      heroImg={ProfileHeroImg}
      title="Profile"
      // subHeading = "hide"
      // hide these buttons for hero of about section in hero.css (only needed in hero of home page)
      btnClass = "hide"
      searchBtnClass = "hide"
    />
    <Profile
    username = "vivian230"
    profileImg = "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
    fullname="Vivian Efiannayi"
    email="efia@gmail.com"
    memberSince = "04-04-2020"
    />
    <Footer/>
    </>

  );
}

export default Account;
