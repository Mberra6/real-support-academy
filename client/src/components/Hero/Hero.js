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
  const [showNoCoursesPopup, setShowNoCoursesPopup] = useState(false);

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
    setSearchTerm(searchTerm);
    if (searchTerm) {
      axios.post('http://localhost:3333/searchcourses', {
        title: searchTerm
      })
        .then((response) => {
          const courses = response.data.courses;
          courses.length === 0 ? setSearchResults(["No courses Found"]) : setSearchResults(courses);
        })
        .catch(error => {
          console.log(error);
          setBackendData(null);
        });
    }
  };

  const handleClosePopup = () => {
    setBackendErrorData(null);
    setSearchTerm('');
    setShowNoCoursesPopup(false);
  };

  return (
    <>
      <div className={props.cName}>
        <img alt="HeroImg" src={props.heroImg} />
        <div className='hero-text'>
          <h1>{props.title}</h1>
          <p>{props.subHeading}</p>
          {props.showSearchBar && (
            <>
              <input type="text" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} className={props.searchBtnClass} placeholder={props.searchBarText} />
              <button onClick={ handleSearchClick} className={props.searchBtnClass}>{props.searchBtnText}</button>
              {backendData ? backendData : <p>{backendErrorData}</p>}
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
