const Course = require('../models/course');

// Function to check if course with such title already exists in the db
const doesExistCourse = async (title) => {
    try {
        let [course, _] = await Course.findByTitle(title);
        if (course.length > 0) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
};

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
        let [courses, _] = await Course.findByTitlePortion(title);

        res.status(200).json({courses});
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// Function to add new course to db
exports.addCourse = async (req, res, next) => {
    try {
        let { title, description, length, difficulty } = req.body;

        if (title.trim().length === 0 || description.trim().length === 0) {
            res.status(403).json({ message: "Fields cannot be left blank!" });
        } else if (await doesExistCourse(title.replace(/\s+/g, ' ').trim())) {
            res.status(403).json({ message: "There is already a Course with that title!" });
        } else if (description.length > 1000) {
            res.status(403).json({ message: "Description must have less than 1000 characters!" });
        } else if (isNaN(length.toString())) {
            res.status(403).json({ message: "Length must only be a number!" });
        } else if (difficulty.trim().toLowerCase() !== "easy" && difficulty.trim().toLowerCase() !== "medium" && difficulty.trim().toLowerCase() !== "hard") {
            res.status(403).json({ message: "Difficulty must be Hard, Medium, or Easy" });
        } else {
            const course = new Course(title.replace(/\s+/g, ' ').trim(), description.replace(/\s+/g, ' ').trim(), length, difficulty.trim());
            await course.save();
            res.status(201).json({ message: "Course successfully added." });
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
}