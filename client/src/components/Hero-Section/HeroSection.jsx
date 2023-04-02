import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assets/images/hero-img2.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container >
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
              Learning is what you  make of it. <br/>Make it yours at Real Support Academy.
              </h2>
              <p className="mb-5">
              We are a powerful force for good, committed to empowering the most vulnerable members of society. 
              Our focus is on providing top-quality online education and training to those from socially disadvantaged backgrounds,
              including ethnic minorities, refugees, and those with limited access to technology. By offering these individuals the 
              tools they need to succeed, we are helping to create a more educationally enriched path and opening up countless employment 
              opportunities for the future. Our ultimate goal is to facilitate the integration of disadvantaged individuals into society 
              and provide them with the support they need to progress and thrive in a world that often excludes them.
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
