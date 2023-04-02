import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import img from "../../assets/images/testimonial01.png";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div className="testimonial__img w-50">
                <img src={img} alt="" className="w-100" />
              </div>

              <div className="testimonial__content w-50">
                <h2 className="mb-4">Student Stories</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Stories written with personal experience by Students
                      </h6>
                      <p>
                      From the moment I was born, my life as a refugee has been a series of 
                      unpredictable events. Growing up in a small village amidst a raging civil war, 
                      I quickly learned that safety was a luxury.The sounds of gunfire and explosion were a constant background noise, 
                      and the sight of refugees fleeing their homes became an all too familiar scene...
                      </p>
                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Hussain Abdullahi</h6>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                      Stories written with personal experience by Students
                      </h6>
                      <p>
                      I had always felt like an outsider, even in my own hometown. 
                      As a first-generation immigrant in a predominantly white community, 
                      I struggled to reconcile my Indian heritage with the Western culture that surrounded me. 
                      Growing up, I felt torn between two worlds, never quite feeling like I belonged in either. 
                      But when I discovered the world of dance, everything changed...
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Aisha Patel</h6>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                      Stories written with personal experience by Students
                      </h6>
                      <p>
                      An abandoned mansion on the town's outskirts, frozen in time. 
                      Vines creeping up the walls were the only sign of life. 
                      Its allure lay in the secrets within, kept hidden for decades...
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Kobe Ejofore</h6>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
