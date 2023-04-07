import React from 'react';
import Navbar from '../components/Navbar-loggedin/Navbar-loggedin';
import Hero from '../components/Hero/Hero';
import HomeImg from "../assets/homeHeroImg.jpg";
import Footer from '../components/Footer/Footer';
import HomeSub from '../components/HomeSubSection/HomeSub';


const HomeLoggedin = () => {
  return (
    <>
    <Navbar/>
    <Hero
      cName="hero"
      // alternative backgorunds
      // heroImg="https://c4.wallpaperflare.com/wallpaper/582/336/1010/samsung-galaxy-7-edge-wallpaper-preview.jpg"
      // heroImg="https://c4.wallpaperflare.com/wallpaper/753/409/178/minimalism-digital-art-simple-wallpaper-preview.jpg"
      // heroImg="https://images.unsplash.com/photo-1610484826967-09c5720778c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      heroImg={HomeImg}
      title="Learning is what you make of it. Make it yours at Real Support Academy."
      searchBarText = "Search our 1000+ courses"
      searchBtnText = "Search"
      buttonText = "Explore all courses"
      url = "/courses"
      btnClass = "show"
    />
    <HomeSub/>
    <Footer/>
    </>

  );
}

export default HomeLoggedin;