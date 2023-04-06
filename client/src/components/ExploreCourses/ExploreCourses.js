//install debounce in your terminal, run the following line 'npm install use-debounce'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDebounce } from 'use-debounce'; // change from './useDebounce'

const CourseList = () => {
    const [backendData, setBackendData] = useState(null);
    const [backendErrorData, setBackendErrorData] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

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
        <div>
            <input type="text" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} />
            <button onClick={handleSearchClick}>Search</button>
            {backendData ? backendData : <p>{backendErrorData}</p>}
        </div>
    );
};

export default CourseList;






