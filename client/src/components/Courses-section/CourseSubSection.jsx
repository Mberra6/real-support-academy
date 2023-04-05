import React from "react";
import { Container, Row, Col } from "reactstrap";
// images of the three courses
import courseImg1 from "../../assets/english-course.png";
import courseImg2 from "../../assets/cloud-storage-course.png";
import courseImg3 from "../../assets/wifi-course.png";
// import styling
import "./courses.css";
// import function CourseCard
import CourseCard from "./CourseCard";


// intialised variables from constructor CourseCard
const coursesData = [
  {
    id: "01",
    title: "English",
    lesson: 12,
    difficulty: "Medium",
    rating: 7.8,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Managing Cloud Storage",
    lesson: 12,
    difficulty: "Hard",
    rating: 6.7,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "Wifi Connections",
    lesson: 12,
    difficulty: "Easy",
    rating: 11.3,
    imgUrl: courseImg3,
  },
];


const CourseSubSection = () => {
  return (
    <section>
     {/*  CSS STYLING reference - container,row,col className*/}
      <Container>
        {/* Roq aligns courses into  */}
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Courses</h2>
                <p>
                  Explore the range of courses available, where you can gain essential digital skills. 
                  Courses vary in difficulty level; easy, medium and hard, and each course comes with a 
                  set of practise quizzes and a final exam to test your knowledge.
                </p>
                <div className="search">
                  <text>Difficulties:</text>
                  <select>
                    <option value="All">All</option>
                    <option value="Eazy">Eazy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>
                  <text>Time:</text>
                  <select>
                    <option value="All">All</option>
                    <option value="4weeks">Less than 4 weeks</option>
                    <option value="8weeks">Less than 8 weeks</option>
                    <option value="8weeksmore">more than 8 weeks</option>
                  </select>
                </div>
              </div>

              <div className="w-50 text-end">
                <button className="btn">View All</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CourseSubSection;
