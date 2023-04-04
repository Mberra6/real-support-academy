const Course = require('../models/course');



// Function to get all courses available in the sytem
exports.getAllCourses = async (req, res, next) => {
    try {
        let [courses, _] = await Course.findAll();

        res.status(200).json({courses});
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// Function to get all courses matching search letters
exports.getCoursesBySearch = async (req, res, next) => {
    try {
        let {title} = req.body;
        let [courses, _] = await Course.findByTitle(title);

        res.status(200).json({courses});
    } catch (error) {
        console.log(error);
        next(error);
    }
};