import React from 'react';
import "./aboutUs.css";
import Lightbulb from "../../assets/lightbulb.png";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>Our History</h1>
      <p>RS-academy is committed to providing top-quality online education and training to individuals from socially disadvantaged backgrounds. Our target audience includes ethnic minorities, refugees, and people with limited technological backgrounds. By using our web portal, these groups will have access to educational resources that will help them advance their education, thereby increasing their chances of securing better employment opportunities. Our goal is to help disadvantaged individuals integrate into society by providing them with the tools and resources they need to succeed. Choose us because we are dedicated to helping you achieve your educational and career goals, and we believe that everyone deserves a chance to thrive.</p>
      <img alt="Logo" src={Lightbulb}/>
      <h1>Our Mission</h1>
      <p>We are a committed to empowering the most vulnerable members of society. Our focus is on providing top-quality online education and training to those from socially disadvantaged backgrounds, including ethnic minorities, refugees, and those with limited access to technology. By offering these individuals the tools they need to succeed, we are helping to create a more educationally enriched path and opening up countless employment opportunities for the future. Our ultimate goal is to facilitate the integration of disadvantaged individuals into society and provide them with the support they need to progress and thrive in a world that often excludes them.</p>
      <h1>Our Vission</h1>
      <p>tbc</p>
    </div>
  );
}

export default AboutUs;
