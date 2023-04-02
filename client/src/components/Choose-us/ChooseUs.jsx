import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../assets/images/why-choose-us.png";
import "./choose-us.css";


const ChooseUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Why Choose Us?</h2>
              <p>
              RS-academy is committed to providing top-quality online education and training to individuals from socially disadvantaged backgrounds.
               Our target audience includes ethnic minorities, refugees, and people with limited technological backgrounds. 
               By using our web portal, these groups will have access to educational resources that will help them advance their education, thereby increasing their chances of securing better employment opportunities. 
               Our goal is to help disadvantaged individuals integrate into society by providing them with the tools and resources they need to succeed. 
               Choose us because we are dedicated to helping you achieve your educational and career goals, and we believe that everyone deserves a chance to thrive.
              </p>
            </div>
          </Col>

          <Col lg="6.5" md="6">
            <div className="choose__img"> 
                <img src={chooseImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
