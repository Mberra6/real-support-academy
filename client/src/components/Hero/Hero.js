import React, { useState } from 'react';
import "./hero.css";
import axios from 'axios';


function Hero(props) {
  const [backendData, setBackendData] = useState(null);
  const [backendErrorData, setBackendErrorData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearchBar, setShowSearchBar] = useState(true);
    const [showSearchBar2, setShowSearchBar2] = useState(false);
    const { setSearchResults } = props;


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
        .then((response) => {
            const courses = response.data.courses;
            setSearchResults(courses);

          console.log(courses);
          const courseList = courses.map(course => {
            return createCourse(course.course_title, course.course_description, course.course_length, course.course_difficulty);
          });
          if (courseList.length > 0) {
            setBackendData(courseList);
          } else {
            setBackendErrorData("No courses found!");
          }
        })
        .catch(error => {
          console.log(error);
          setBackendData(null);
        });
    }
  };

  const handleClosePopup = () => {
    setBackendErrorData(null);
    setSearchTerm(''); // Clear search term on popup close
  };

  return (
    <>
      <div className={props.cName}>
        {/* make image course dynamic so that hero page is different for each page */}
        <img alt="HeroImg" src={props.heroImg} />
        <div className='hero-text'>
          {/* make text dynamic too */}
          <h1>{props.title}</h1>
          <p>{props.subHeading}</p>
          {props.showSearchBar && (
            <>
          <input type="text" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} className={props.searchBtnClass} placeholder={props.searchBarText} />
          <button onClick={ handleSearchClick} className={props.searchBtnClass}>{props.searchBtnText}</button>


          {backendData ? backendData : <p>{backendErrorData && <div className="popup"><span>{backendErrorData}<button onClick={handleClosePopup} className="popup-close-btn">&#10006;</button></span></div>}</p>}
            </>
          )}
          {props.showSearchBar2 && (
            <>
              <input type="text" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} className={props.searchBtnClass} placeholder={props.searchBarText} />
              <button onClick={ handleSearchClick} className={props.searchBtnClass}>{props.searchBtnText}</button>
            </>
          )}

          <a href={props.url} className={props.btnClass}> {props.buttonText} </a>
        </div>
      </div>
    </>

  );
}

export default Hero;
