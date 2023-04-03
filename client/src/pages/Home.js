import React, { Fragment } from "react";
import Navbar from '../components/Navbar/Navbar';
import HeroSection from "../components/Hero-Section/HeroSection";
import Courses from "../components/Courses-section/Courses";
import ChooseUs from "../components/Choose-us/ChooseUs";
import Testimonials from "../components/Testimonial/Testimonials";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <HeroSection />
      <Courses />
      <ChooseUs />
      <Testimonials />
      <Footer />
    </Fragment>
  );
};

export default Home;