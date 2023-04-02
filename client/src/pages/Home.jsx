import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";



import Courses from "../components/Courses-section/Courses";
import ChooseUs from "../components/Choose-us/ChooseUs";


import Testimonials from "../components/Testimonial/Testimonials";

import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <Courses />
      <ChooseUs />
      <Testimonials />
      <Footer />
    </Fragment>
  );
};

export default Home;
