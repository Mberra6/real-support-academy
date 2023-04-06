//install debounce in your terminal, run the following line 'npm install use-debounce'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDebounce } from 'use-debounce'; // change from './useDebounce'

const CourseList = () => {
    const [backendData, setBackendData] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    const createCourse = (title, description, length, difficulty) => {
        return (
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <p>Length: {length}</p>
                <p>Difficulty: {difficulty}</p>
            </div>
        );
    };

    useEffect(() => {
        if (debouncedSearchTerm) {
            axios.post('http://localhost:3333/searchcourses', {
                title: debouncedSearchTerm
            })
                .then(response => {
                    const courses = response.data.courses;
                    const courseList = courses.map(course => {
                        return createCourse(course.course_title, course.course_description, course.course_length, course.course_difficulty);
                    });
                    setBackendData(courseList);
                })
                .catch(error => {
                    console.log(error);
                    setBackendData(null);
                });
        }
    }, [debouncedSearchTerm]);

    const handleSearchClick = () => {
        setSearchTerm(searchTerm); // change from debouncedSearchTerm
        console.log("Search button clicked, searchTerm:", searchTerm); // change from debouncedSearchTerm
    };

    return (
        <div>
            <input type="text" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} />
            <button onClick={handleSearchClick}>Search</button>
            {backendData ? backendData : <p>No courses found</p>}
        </div>
    );
};

export default CourseList;






