import React, { useState } from 'react';
import NavbarAdmin from '../components/Navbar-admin/NavbarAdmin';
import Hero from '../components/Hero/Hero';
import CourseHeroImg from "../assets/coursesHeroImg.jpg";
import Footer from '../components/Footer/Footer';
import CourseSubSection from '../components/CoursesSection/CourseSubSection';


const CoursesAdmin = () => {
  const [searchResults, setSearchResults] = useState([]);
  
  return (
    <>
    <NavbarAdmin/>
    <Hero
      setSearchResults={setSearchResults} 
      showSearchBar={true}
      cName="hero-mid2"
      // alternative backgorunds
      // heroImg="https://c4.wallpaperflare.com/wallpaper/582/336/1010/samsung-galaxy-7-edge-wallpaper-preview.jpg"
      // heroImg="https://c4.wallpaperflare.com/wallpaper/753/409/178/minimalism-digital-art-simple-wallpaper-preview.jpg"
      // heroImg="https://images.unsplash.com/photo-1610484826967-09c5720778c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      heroImg={CourseHeroImg}
      title="Explore our courses"
      searchBarText = "What do you want to learn?"
      searchBtnText = "Search"
      buttonText = "Explore all courses"
      btnClass="hide" 
    />
    <CourseSubSection
      searchResults={searchResults}
    />
    <Footer/> 
    </>

  );
}

export default CoursesAdmin;
