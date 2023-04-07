import React from "react";

// implemented constructor with parameters intialised in Courses.jsx
const CourseCard = (props) => {
  const { imgUrl, title, lesson, difficulty, rating } = props.item;

  return (
    <div className="single__course__item">
      <div className="course__img">
        <img src={imgUrl} alt="" className="w-100" />

      </div>

      <div className="course__details">
        <h6 className="course__title mb-4">{title}</h6>

{/* https://blade-ui-kit.com/ -> link for the componenets 'ri'*/}
      <p className="lesson">
        <span className="material-symbols-outlined book">menu_book
           </span>
            {lesson} Lessons
      </p>
      <span className="material-symbols-outlined Difficulty">monitoring
         </span> <p className="difficulty">
             <i></i> {difficulty}
           </p>


        <div className="space">
          <p className="enroll">
             <a href="#"> Enroll Now</a>
          </p>
 
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
