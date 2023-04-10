import React from 'react';
import "./myCoursesSub.css"

const myCoursesData = [{



  
}]


const MyCoursesSubSection = (props) => {
  return (
    <div className='mycourses-container'>
      <div className='enrolled-courses'>
        <h1>Courses Enrolled</h1>
        <h2>{props.courseName}</h2>
        <h3>{props.courseLessons} Total Lessons </h3>
        <h3>{props.courseDifficulty}</h3>
        <h3>{props.courseEnrolDate}</h3>
        <button>Resume Course</button>
      </div>
      <div className='suggested-courses'>

      </div>
    </div>
  );
}

export default MyCoursesSubSection;
