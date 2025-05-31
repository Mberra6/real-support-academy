import React, { useState } from 'react';
import "./hero.css";
import axios from 'axios';


function Hero(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const { setSearchResults } = props;

  const handleSearchClick = () => {
    setSearchTerm(searchTerm);
    if (searchTerm) {
      axios.post(`https://${process.env.REACT_APP_SERVER_URL}/searchcourses`, {
        title: searchTerm
      })
        .then((response) => {
          const courses = response.data.courses;
          courses.length === 0 ? setSearchResults(["No courses Found"]) : setSearchResults(courses);
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      alert("Search cannot be empty");
    }
    setSearchTerm('');
  };

  return (
    <>
      <div className={props.cName}>
        <img alt="HeroImg" src={props.heroImg} />
        <div className='hero-text'>
          <h1>{props.title}</h1>
          <p>{props.subHeading}</p>
          {props.showSearchBar && (
            <div className='search'>
              <input type="text" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} className={props.searchBtnClass} placeholder={props.searchBarText} />
              <button onClick={ handleSearchClick} className={props.searchBtnClass}>{props.searchBtnText}</button>
            </div>
          )}
          <a href={props.url} className={props.btnClass}> {props.buttonText} </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
