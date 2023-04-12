import React, { useState, useRef } from "react";
// implemented constructor with parameters intialised in Courses.jsx


const CourseCard = (props) => {
  const { imgUrl, courseId, title, lesson, difficulty } = props;
  const enrollBtn = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const handleEnrollment = () => {
    togglePopup();
  };

  return (
    <div className="single__course__item">
      <div className="course__img" style={{display:"none"}}>
        {courseId}
      </div>
      <div className="course__img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="course__details">
        <h6 className="course__title mb-4">{title}</h6>

        <div className="info__container">
          <div className="info__item lesson">
            <span className="material-symbols-outlined book">menu_book</span>
            {lesson} Weeks
          </div>
          <div className="info__item difficulty">
            <span className="material-symbols-outlined Difficulty">monitoring</span> {difficulty}
          </div>
        </div>

        <div className="enroll__container">
          <p ref={enrollBtn} className="enroll" onClick={handleEnrollment}>
              <button className="enroll_now"> Enroll Now</button>
            </p>
        
      </div>
      </div>
    </div>
  );
};

export default CourseCard;