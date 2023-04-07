import React, { useState } from 'react';
import "./hero.css";
import axios from 'axios';

function Hero(props) {
  const [backendData, setBackendData] = useState(null);
  const [backendErrorData, setBackendErrorData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const createCourse = (title, description, length, difficulty) => {
    return (
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Length: {length} Weeks</p>
        <p>Difficulty: {difficulty}</p>
      </div>
    );
  };

  const handleSearchClick = () => {
    setBackendData(null);
    setBackendErrorData(null);
    setSearchTerm(searchTerm); // change from debouncedSearchTerm
    console.log("Search button clicked, searchTerm:", searchTerm); // change from debouncedSearchTerm
    if (searchTerm) {
      axios.post('http://localhost:3333/searchcourses', {
        title: searchTerm
      })
        .then(response => {
          const courses = response.data.courses;
          console.log(courses);
          const courseList = courses.map(course => {
            return createCourse(course.course_title, course.course_description, course.course_length, course.course_difficulty);
          });
          if (courseList.length > 0) {
            setBackendData(courseList);
          } else {
            setBackendErrorData("No courses found");
          }
        })
        .catch(error => {
          console.log(error);
          setBackendData(null);
        });
    }
  };

  return (
    <>
      <div className={props.cName}>
        {/* make image course dyamnic so that hero page is different for each page */}
        <img alt="HeroImg" src={props.heroImg} />
        <div className='hero-text'>
          {/* make text dyamnic too */}
          <h1>{props.title}</h1>
          <p>{props.subHeading}</p>
          <input type="text" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} className={props.searchBtnClass} placeholder={props.searchBarText} />
          <button onClick={ handleSearchClick} className={props.searchBtnClass}>{props.searchBtnText}</button>
          {backendData ? backendData : <p>{backendErrorData}</p>}
          <a href={props.url} className={props.btnClass}> {props.buttonText} </a>
        </div>
      </div>
    </>

  );
}

export default Hero;
